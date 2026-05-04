import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Alle Felder sind erforderlich.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'KSL Boxing Kontaktformular <noreply@ksl-boxing.com>',
      to: ['info@ksl-boxing.com'],
      cc: ['kontakt@cesarsicherheit.de'],
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Nachricht über das Kontaktformular</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 500 });
  }
}
