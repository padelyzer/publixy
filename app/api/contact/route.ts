import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, industry, message } = body

    // Aquí puedes integrar con tu servicio de email preferido:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Resend
    // - O guardar en base de datos

    // Por ahora, solo logueamos y retornamos success
    console.log('Nuevo contacto recibido:', {
      name,
      email,
      phone,
      company,
      industry,
      message,
      timestamp: new Date().toISOString()
    })

    // En producción, aquí enviarías el email real
    // Ejemplo con fetch a un webhook o servicio:
    /*
    await fetch('https://tu-servicio-email.com/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.EMAIL_API_KEY}`
      },
      body: JSON.stringify({
        to: 'ventas@publixy.mx',
        from: email,
        subject: `Nuevo contacto de ${name} - ${company}`,
        text: message,
        html: `
          <h2>Nuevo contacto desde el sitio web</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Empresa:</strong> ${company}</p>
          <p><strong>Industria:</strong> ${industry}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `
      })
    })
    */

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado exitosamente. Nos pondremos en contacto pronto.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error al procesar formulario:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error al enviar el mensaje. Por favor intenta de nuevo.' 
      },
      { status: 500 }
    )
  }
}