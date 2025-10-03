import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();

    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Question manquante' },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'Clé API OpenAI absente côté serveur' },
        { status: 500 }
      );
    }

    // Appel minimal à l’API Chat Completions (compatible GPT-4o/4.1)
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.2,
        messages: [
          {
            role: 'system',
            content:
              "Tu es une IA juridique francophone spécialisée en gestion des déchets. Réponds de façon concise et cite les références lorsque possible."
          },
          { role: 'user', content: question }
        ]
      })
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { success: false, error: 'Erreur OpenAI', details: text },
        { status: 502 }
      );
    }

    const data = await response.json();
    const answer = data?.choices?.[0]?.message?.content ?? '';

    return NextResponse.json({ success: true, answer });
  } catch (error) {
    console.error('Erreur API /api/chat:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur interne serveur' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const enabled = Boolean(process.env.OPENAI_API_KEY);
  return NextResponse.json({ success: true, enabled });
}


