import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
    } = await req.json();

    // SMTP configuration - Use environment variables for production
    const SMTP_CONFIG = {
      HOST: process.env.SMTP_HOST || 'mail.smatpay.africa',
      PORT: parseInt(process.env.SMTP_PORT || '465'),
      USER: process.env.SMTP_USER || 'noreply@smatpay.africa',
      PASS: process.env.SMTP_PASS || '?jPvp_cS3cObf0pG',
    };

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_CONFIG.HOST,
      port: SMTP_CONFIG.PORT,
      secure: SMTP_CONFIG.PORT === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_CONFIG.USER,
        pass: SMTP_CONFIG.PASS,
      },
      // Add timeout and debug options
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
      debug: process.env.NODE_ENV === 'development',
    });

    // Define email options
    const mailOptions = {
      from: `"Njere Contact Form" <${SMTP_CONFIG.USER}>`,
      to: "billy@smatechgroup.com",
      subject: `Contact Form: ${subject || 'New Message'}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Subject: ${subject || "N/A"}
        Message: ${message || "N/A"}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message || "N/A"}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "✅ Your message was sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    // Log detailed error for debugging
    console.error("❌ Email sending error:", error);

    // Return more specific error message
    let errorMessage = "❌ There was a problem sending your message.";
    if (error instanceof Error) {
      if (error.message.includes('ECONNREFUSED')) {
        errorMessage = "❌ Email server connection failed. Please try again later.";
      } else if (error.message.includes('Authentication failed')) {
        errorMessage = "❌ Email authentication failed. Please contact support.";
      } else if (error.message.includes('timeout')) {
        errorMessage = "❌ Email server timeout. Please try again later.";
      }
    }

    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500 }
    );
  }
}