import nodemailer from "nodemailer";

// Force static generation for API routes when using output: export
export const dynamic = 'force-static';

export async function POST(req: Request) {
  try {
    console.log('Contact form submission received');

    const { name, email, phone, subject, message } = await req.json();

    console.log('Form data:', {
      name,
      email,
      phone,
      subject,
      message: message?.substring(0, 50) + '...',
    });

    // SMTP configuration - Use environment variables for production
    const SMTP_CONFIG = {
      HOST: 'mail.smatpay.africa',
      PORT: 465, // Use 465 for 'secure: true'
      USER: 'noreply@smatpay.africa',
      PASS: '?jPvp_cS3cObf0pG',
    };

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_CONFIG.HOST,
      // You must remove Number() when the port is already a number
      port: SMTP_CONFIG.PORT,
      secure: true,
      auth: {
        user: SMTP_CONFIG.USER,
        pass: SMTP_CONFIG.PASS,
      },
      // Add timeout and debug options
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
      debug: process.env.NODE_ENV === 'development',
      logger: process.env.NODE_ENV === 'development',
    });

    // Define email options
    const mailOptions = {
      from: `"Njere Contact Form" <${SMTP_CONFIG.USER}>`,
      to: 'billy@smatechgroup.com',
      subject: `Contact Form: ${subject || 'New Message'}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Subject: ${subject || 'N/A'}
        Message: ${message || 'N/A'}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${message || 'N/A'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: '✅ Your message was sent successfully!',
      }),
      { status: 200 },
    );
  } catch (error) {
    // You should use this section to check the exact error message in your live logs!
    console.error('❌ Error connecting to the server.', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: '❌ There was a problem sending your message.',
      }),
      { status: 500 },
    );
  }
}