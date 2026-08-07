import { NextResponse } from "next/server";
import { Resend } from "resend";

function createResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing API key. Pass it to the constructor `new Resend(\"re_123\")`");
  }
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const resend = createResendClient();
    const body = await request.json();
    const { name, email, projectType, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const fromEmail =
      process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev";
    const toEmail = process.env.CONTACT_EMAIL_TO || "mastermind.co.uk@gmail.com";

    // 1. Send notification email to the business
    const { error: businessError } = await resend.emails.send({
      from: `Master Mind <${fromEmail}>`,
      to: [toEmail],
      subject: `New Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; padding: 40px 20px;">
          <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden;">
            <tr>
              <td style="background: linear-gradient(135deg, #6366f1, #10b981); padding: 32px 24px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">📬 New Contact Inquiry</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px 24px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-bottom: 16px;">
                      <h2 style="font-size: 18px; color: #1a1a2e; margin: 0 0 4px 0;">${name}</h2>
                      <a href="mailto:${email}" style="color: #6366f1; text-decoration: none; font-size: 14px;">${email}</a>
                    </td>
                  </tr>
                  ${projectType ? `
                  <tr>
                    <td style="padding: 12px 0; border-top: 1px solid #eee;">
                      <span style="color: #888; font-size: 13px;">Project Type</span>
                      <p style="color: #1a1a2e; margin: 2px 0 0 0; font-size: 15px; font-weight: 500;">${projectType}</p>
                    </td>
                  </tr>` : ""}
                  ${budget ? `
                  <tr>
                    <td style="padding: 12px 0; border-top: 1px solid #eee;">
                      <span style="color: #888; font-size: 13px;">Budget Range</span>
                      <p style="color: #1a1a2e; margin: 2px 0 0 0; font-size: 15px; font-weight: 500;">${budget}</p>
                    </td>
                  </tr>` : ""}
                  <tr>
                    <td style="padding: 12px 0; border-top: 1px solid #eee;">
                      <span style="color: #888; font-size: 13px;">Message</span>
                      <p style="color: #1a1a2e; margin: 2px 0 0 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background: #f9f9fb; padding: 16px 24px; text-align: center; border-top: 1px solid #eee;">
                <p style="color: #888; font-size: 12px; margin: 0;">Sent via mastermind.co.uk contact form</p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (businessError) {
      console.error("Business email error:", businessError);
      return NextResponse.json(
        { error: "Failed to send notification." },
        { status: 500 }
      );
    }

    // 2. Send confirmation email to the submitter
    const { error: confirmError } = await resend.emails.send({
      from: `Master Mind <${fromEmail}>`,
      to: [email],
      subject: "We received your message — Master Mind",
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; padding: 40px 20px;">
          <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden;">
            <tr>
              <td style="background: linear-gradient(135deg, #6366f1, #10b981); padding: 32px 24px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">✅ Message Received!</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px 24px;">
                <p style="color: #1a1a2e; font-size: 16px; line-height: 1.6; margin: 0 0 8px 0;">Hi <strong>${name}</strong>,</p>
                <p style="color: #555; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
                  Thanks for reaching out to <strong>Master Mind</strong>! We've received your message and we'll get back to you within <strong>24 hours</strong>.
                </p>

                <div style="background: #f9f9fb; border-radius: 8px; padding: 20px; margin: 20px 0;">
                  <h3 style="color: #1a1a2e; font-size: 14px; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">Summary of your inquiry</h3>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding: 6px 0; color: #888; font-size: 13px; width: 100px;">Name</td>
                      <td style="padding: 6px 0; color: #1a1a2e; font-size: 14px;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 0; color: #888; font-size: 13px;">Email</td>
                      <td style="padding: 6px 0; color: #1a1a2e; font-size: 14px;">${email}</td>
                    </tr>
                    ${projectType ? `
                    <tr>
                      <td style="padding: 6px 0; color: #888; font-size: 13px;">Project</td>
                      <td style="padding: 6px 0; color: #1a1a2e; font-size: 14px;">${projectType}</td>
                    </tr>` : ""}
                    ${budget ? `
                    <tr>
                      <td style="padding: 6px 0; color: #888; font-size: 13px;">Budget</td>
                      <td style="padding: 6px 0; color: #1a1a2e; font-size: 14px;">${budget}</td>
                    </tr>` : ""}
                  </table>
                </div>

                <p style="color: #555; font-size: 15px; line-height: 1.6; margin: 0 0 8px 0;">
                  In the meantime, feel free to chat with us on <a href="https://wa.me/2348130845852" style="color: #6366f1;">WhatsApp</a> if you have any urgent questions.
                </p>
              </td>
            </tr>
            <tr>
              <td style="background: #f9f9fb; padding: 24px; text-align: center; border-top: 1px solid #eee;">
                <p style="color: #888; font-size: 13px; margin: 0;">Master Mind — Video Editing &amp; Graphic Design.</p>
                <p style="color: #aaa; font-size: 11px; margin: 4px 0 0 0;">
                  <a href="mailto:mastermind.co.uk@gmail.com" style="color: #6366f1; text-decoration: none;">mastermind.co.uk@gmail.com</a>
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (confirmError) {
      console.error("Confirmation email error:", confirmError);
      // Business email was sent, so still return success but log the error
      return NextResponse.json({
        success: true,
        warning: "Confirmation email could not be sent.",
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
