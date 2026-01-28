import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin, ContactMessage } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Store in Supabase
    const contactMessage: ContactMessage = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    };

    const { error: dbError } = await supabaseAdmin
      .from('contact_messages')
      .insert([contactMessage]);

    if (dbError) {
      console.error('Supabase error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save message' },
        { status: 500 }
      );
    }

    // Trigger n8n webhook for email notification (if configured)
    const n8nWebhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;
    if (n8nWebhookUrl) {
      try {
        await fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: contactMessage.name,
            email: contactMessage.email,
            message: contactMessage.message,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (webhookError) {
        // Log but don't fail the request if webhook fails
        console.error('n8n webhook error:', webhookError);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
