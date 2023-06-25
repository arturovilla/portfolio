import nodemailer from "nodemailer";

const emailto = "tembevilla@gmail.com";

export default async function handler(req, res) {
	const { name, email, subject, message } = req.body;
	const data = {
		name,
		email,
		subject,
		message,
	};

	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASS,
		},
	});

	try {
		const mail = await transporter.sendMail({
			from: process.env.EMAIL,
			to: emailto,
			replyTo: data.email,
			subject: data.subject,
			html: `
                <h1>Name: ${data.name}</h1>
                <h2>Email: ${data.email}</h2>
                <p>Message: ${data.message}</p>
            `,
		});
		return res.status(200).json({ messagee: "email was sent" });
	} catch (error) {
		console.log("error in try catch");
		res.status(500).jspon({ message: "error in sending email" });
	}
}
