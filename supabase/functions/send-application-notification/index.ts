import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  cover_letter?: string;
  cv_url?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const applicationData: ApplicationData = await req.json();
    
    console.log("Received application:", applicationData);

    // Send notification email to HR
    const emailResponse = await resend.emails.send({
      from: "Mohmand Dam HR <onboarding@resend.dev>",
      to: ["atifcyber7@gmail.com"],
      subject: `New Job Application - ${applicationData.position}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #2563eb; text-align: center; margin-bottom: 30px;">
              🎯 New Job Application Received
            </h1>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #334155; margin-top: 0;">Applicant Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Name:</td><td style="padding: 8px 0;">${applicationData.name}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td><td style="padding: 8px 0;">${applicationData.email}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td><td style="padding: 8px 0;">${applicationData.phone}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Position:</td><td style="padding: 8px 0; font-weight: bold; color: #2563eb;">${applicationData.position}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Experience:</td><td style="padding: 8px 0;">${applicationData.experience}</td></tr>
              </table>
            </div>

            ${applicationData.cover_letter ? `
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2563eb;">
              <h3 style="color: #1e40af; margin-top: 0;">Cover Letter</h3>
              <p style="color: #334155; line-height: 1.6; margin: 0;">${applicationData.cover_letter}</p>
            </div>
            ` : ''}

            ${applicationData.cv_url ? `
            <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
              <h3 style="color: #059669; margin-top: 0;">📄 CV Attached</h3>
              <p style="color: #047857; margin: 10px 0;">The applicant's CV has been securely uploaded to the system.</p>
              <a href="${applicationData.cv_url}" style="background-color: #059669; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Download CV
              </a>
            </div>
            ` : ''}

            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; text-align: center;">
              <h3 style="color: #92400e; margin-top: 0;">Next Steps</h3>
              <p style="color: #78350f; margin: 0;">Review the application and respond to the candidate within 5 business days.</p>
            </div>

            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
            
            <div style="text-align: center; color: #64748b; font-size: 14px;">
              <p style="margin: 0;"><strong>Mohmand Dam Hydropower Project</strong></p>
              <p style="margin: 5px 0;">HR Management System</p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, message: "Application notification sent" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-application-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);