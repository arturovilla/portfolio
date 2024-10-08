import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

function Contact() {
	//loading state
	const [loading, setloading] = useState(false);

	// router
	const router = useRouter();
	// Formik logic
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		// validation form logic
		validationSchema: Yup.object({
			name: Yup.string()
				.max(20, "Name must be 20 characters or less")
				.required("A Name is required"),
			email: Yup.string()
				.email("Invalid email address")
				.max(30, "Email must be 30 characters or less")
				.required("An email is required"),
			subject: Yup.string()
				.max(50, "Subject must be 50 characters or less")
				.required("Subject is required"),
			message: Yup.string()
				.max(500, "message must be 500 characters or less")
				.required("Message is required"),
		}),
		// submit form
		onSubmit: async (values) => {
			setloading(true);
			console.log(values);

			// email post logic
			const response = await fetch("/api/email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});
			if (response.ok) {
				console.log("email was sent");
				setloading(false);
				// pushto other page
				router.push({ pathname: "/messagesent", query: values });
				// reset form
				formik.values.name = "";
				formik.values.subject = "";
				formik.values.email = "";
				formik.values.message = "";
			} else if (!response.ok) {
				console.log("ERR: problem with server");
				setloading(false);
			}
		},
	});

	return (
		<div className="text-gruvred mt-48 mb-96  text-center mx-auto max-w-xl px-6">
			<span className="text-6xl font-bold">Contact Me</span>
			<form
				className="text-left text-gray-800 pt-6"
				onSubmit={formik.handleSubmit}
			>
				{/* name */}
				<div className=" flex flex-col text-gruvred">
					<label
						htmlFor="name"
						className={` font-semibold ${
							formik.touched.name && formik.errors.name
								? "text-[#ffa449]"
								: ""
						} `}
					>
						{formik.touched.name && formik.errors.name
							? formik.errors.name
							: "Name"}
					</label>
					<input
						className={`${
							formik.touched.name && formik.errors.name
								? "border-[#ffa449] ring-[#ffa449] focus:border-[#ffa449] focus:ring-[#ffa449]"
								: ""
						} mt-3 mb-5 text-white bg-[#0C0D1C] rounded-md border border-gruvred focus:border-[#DF2FE3] focus:ring-[#DF2FE3]`}
						type="text"
						id="name"
						autoComplete="off"
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				{/* email */}
				<div className="flex flex-col text-gruvred">
					<label
						htmlFor="email"
						className={`font-semibold ${
							formik.touched.email && formik.errors.email
								? "text-[#ffa449]"
								: ""
						}`}
					>
						{formik.touched.email && formik.errors.email
							? formik.errors.email
							: "Email"}
					</label>
					<input
						className={`${
							formik.touched.email && formik.errors.email
								? "border-[#ffa449] ring-[#ffa449] focus:border-[#ffa449] focus:ring-[#ffa449]"
								: ""
						} mt-3 mb-5 text-white bg-[#0C0D1C] rounded-md border border-gruvred focus:border-[#DF2FE3] focus:ring-[#DF2FE3]`}
						type="email"
						id="email"
						autoComplete="off"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				{/* subjectline */}
				<div className="flex flex-col text-gruvred">
					<label
						htmlFor="subject"
						className={`font-semibold ${
							formik.touched.subject && formik.errors.subject
								? "text-[#ffa449]"
								: ""
						}`}
					>
						{formik.touched.subject && formik.errors.subject
							? formik.errors.subject
							: "Subject"}
					</label>
					<input
						className={`${
							formik.touched.subject && formik.errors.subject
								? "border-[#ffa449] ring-[#ffa449] focus:border-[#ffa449] focus:ring-[#ffa449]"
								: ""
						} mt-3 mb-5 text-white bg-[#0C0D1C] rounded-md border border-gruvred focus:border-[#DF2FE3] focus:ring-[#DF2FE3]`}
						type="text"
						id="subject"
						autoComplete="off"
						value={formik.values.subject}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				{/* message */}
				<div className="flex flex-col text-gruvred">
					<label
						htmlFor="message"
						className={`font-semibold ${
							formik.touched.message && formik.errors.message
								? "text-[#ffa449]"
								: ""
						}`}
					>
						{formik.touched.message && formik.errors.message
							? formik.errors.message
							: "Message"}
					</label>
					<textarea
						className={`${
							formik.touched.message && formik.errors.message
								? "border-[#ffa449] ring-[#ffa449] focus:border-[#ffa449] focus:ring-[#ffa449]"
								: ""
						} mt-3 mb-5 text-white bg-[#0C0D1C] rounded-md border border-gruvred focus:border-[#DF2FE3] focus:ring-[#DF2FE3]`}
						rows={4}
						placeholder="Begin typing..."
						name="message"
						value={formik.values.message}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				<div className="text-gruvred flex justify-center">
					<button
						className="disabled:bg-gruvline disabled:text-black disabled:border-gruvline py-1 px-5 text-gruvred rounded-md border border-gruvred hover:bg-gruvred hover:text-black transition duration-150 ease-in-out"
						type="submit"
						disabled={loading}
					>
						Send message
					</button>
				</div>
			</form>
		</div>
	);
}

export default Contact;
