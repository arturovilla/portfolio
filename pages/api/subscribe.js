import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_PORTFOLIO_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body || {};

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await resend.contacts.create({
      email,
      audienceId: process.env.PORTFOLIO_AUDIENCE_ID,
    });

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ error: "Something went wrong" });
  }
}
