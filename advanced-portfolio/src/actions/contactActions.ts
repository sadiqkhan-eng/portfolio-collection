"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "saiqkhan7777@gmail.com"; // Your email address

export async function sendEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const { name, email, subject, message } = formData;

    const emailHtml = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Replace with your verified sender email from Resend
      to: TO_EMAIL,
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      html: emailHtml,
    });

    // Check for error in Resend response
    if (data.error) {
      console.error("Resend email sending error:", data.error);
      return { success: false, message: "Failed to send email. Please try again later." };
    }

    console.log("Email sent successfully:", data);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
