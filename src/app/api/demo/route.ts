import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, role, message } = body;

    // Validation des données
    if (!name || !email || !company || !role || !message) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Données manquantes',
          message: 'Tous les champs obligatoires doivent être remplis'
        },
        { status: 400 }
      );
    }

    // Validation email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email invalide',
          message: 'Veuillez fournir une adresse email valide'
        },
        { status: 400 }
      );
    }

    // Simulation de traitement
    await new Promise(resolve => setTimeout(resolve, 800));

    // Génération d'un ID de demande
    const requestId = `DEMO-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Mock response
    const demoRequest = {
      id: requestId,
      name,
      email,
      company,
      phone: phone || null,
      role,
      message,
      status: 'pending',
      createdAt: new Date().toISOString(),
      estimatedResponseTime: '24 heures',
      nextSteps: [
        'Confirmation de réception par email',
        'Planification de la démo personnalisée',
        'Envoi du lien de démonstration',
        'Session de 30 minutes adaptée à vos besoins'
      ]
    };

    // Simulation d'envoi d'email de confirmation
    const confirmationEmail = {
      to: email,
      subject: 'Confirmation de votre demande de démo - IA Juridique Déchets',
      template: 'demo-request-confirmation',
      data: {
        name,
        company,
        requestId,
        estimatedResponseTime: '24 heures'
      }
    };

    return NextResponse.json({
      success: true,
      message: 'Demande de démo envoyée avec succès',
      request: demoRequest,
      confirmation: {
        emailSent: true,
        email: confirmationEmail
      },
      support: {
        email: 'contact@ia-juridique-dechets.com',
        phone: '+33 1 23 45 67 89',
        hours: 'Lundi - Vendredi, 9h - 18h'
      }
    });

  } catch (error) {
    console.error('Erreur API demo POST:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erreur lors de l\'envoi de la demande',
        message: 'Une erreur est survenue lors de l\'envoi de votre demande. Veuillez réessayer ou nous contacter directement.'
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const requestId = searchParams.get('id');

    if (!requestId) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'ID de demande manquant',
          message: 'L\'ID de la demande de démo est requis'
        },
        { status: 400 }
      );
    }

    // Simulation de récupération du statut
    await new Promise(resolve => setTimeout(resolve, 300));

    // Mock status response
    const statusResponse = {
      id: requestId,
      status: 'confirmed', // pending, confirmed, scheduled, completed
      statusMessage: 'Votre demande a été confirmée',
      lastUpdate: new Date().toISOString(),
      timeline: [
        {
          date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2h ago
          status: 'received',
          message: 'Demande reçue et en cours de traitement'
        },
        {
          date: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1h ago
          status: 'confirmed',
          message: 'Demande confirmée, planification en cours'
        }
      ],
      nextAction: {
        type: 'scheduling',
        message: 'Nous vous contacterons dans les 24h pour planifier votre démo',
        estimatedTime: '24 heures'
      }
    };

    return NextResponse.json({
      success: true,
      status: statusResponse
    });

  } catch (error) {
    console.error('Erreur API demo GET:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erreur lors de la récupération du statut'
      },
      { status: 500 }
    );
  }
}
