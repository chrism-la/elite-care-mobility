import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();

        const { name, phone, email, service, location, message } = body;

        if (!name || !phone || !email || !service) {
            return Response.json({ error: 'Please fill out all required fields.' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Elite Care Mobility <onboarding@resend.dev>',
            to: [process.env.CONTACT_TO_EMAIL],
            subject: `New Transportation Request from ${name}`,
            replyTo: email,
            text: `
New transportation request:

Name: ${name}
Phone: ${phone}
Email: ${email}
Transportation Need: ${service}
Pickup Area: ${location || 'Not provided'}

Message:
${message || 'No additional message provided.'}`,
        });

        if (error) {
            console.error('RESEND ERROR:', error);
            return Response.json({ error: 'Email failed to send. Please try again.' }, { status: 500 });
        }
        console.log('RESEND SUCCESS:', data);
        return Response.json({
            success: true,
            data,
        });
    } catch (error) {
        console.error('CONTACT API ERROR:', error);
        return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
    }
}
