import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, eventType, date, message } = body;

    // Basic validation
    if (!name || !email || !eventType || !date) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
          .header { background-color: #050A14; padding: 30px; text-align: center; }
          .header h1 { color: #D4AF37; margin: 0; font-family: 'Georgia', serif; font-size: 24px; letter-spacing: 1px; }
          .content { padding: 30px; }
          .field { margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
          .label { font-size: 12px; text-transform: uppercase; color: #888; font-weight: bold; margin-bottom: 5px; display: block; }
          .value { font-size: 16px; color: #111; font-weight: 500; }
          .message-box { background-color: #f5f5f5; padding: 15px; border-radius: 4px; border-left: 4px solid #D4AF37; }
          .footer { background-color: #f0f0f0; padding: 20px; text-align: center; font-size: 12px; color: #888; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Mountain Mixology</h1>
          </div>
          <div class="content">
            <h2 style="margin-top: 0; color: #050A14;">New Event Inquiry</h2>
            <p>You have received a new booking inquiry from your website.</p>
            
            <div class="field">
              <span class="label">Name</span>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <span class="label">Email</span>
              <div class="value"><a href="mailto:${email}" style="color: #050A14; text-decoration: none;">${email}</a></div>
            </div>
            
            <div class="field">
              <span class="label">Event Type</span>
              <div class="value" style="text-transform: capitalize;">${eventType}</div>
            </div>
            
            <div class="field">
              <span class="label">Date</span>
              <div class="value">${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
            </div>
            
            <div class="field" style="border-bottom: none;">
              <span class="label">Message</span>
              <div class="value message-box">${message || 'No message provided.'}</div>
            </div>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Mountain Mixology. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Mountain Mixology <onboarding@resend.dev>', // Use default Resend sender for testing, or verify a domain
      to: process.env.EMAIL_TO as string,
      replyTo: email,
      subject: `New Inquiry: ${eventType} on ${date} - ${name}`,
      html: htmlContent,
    });

    if (data.error) {
      console.error('Resend error:', data.error);
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
