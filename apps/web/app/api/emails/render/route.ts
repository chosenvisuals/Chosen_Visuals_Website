import { NextResponse } from 'next/server';
import { render } from '@react-email/render';
import { WelcomeEmail } from '../../../../emails/WelcomeEmail';

export async function GET() {
  try {
    const html = await render(WelcomeEmail({ confirmationUrl: '{{ .ConfirmationURL }}' }));

    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Error rendering email:', error);
    return NextResponse.json({ error: 'Failed to render email' }, { status: 500 });
  }
}
