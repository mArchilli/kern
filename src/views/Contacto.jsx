import React, { useState } from 'react'
import PillButton from '../components/PillButton'

// Paleta de marca: Primario #D94B45, Secundario #9BA6A1

const Contacto = () => {
  const [copied, setCopied] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const address = 'Migueletes 1231 Piso 5 Depto A'
  const addressQuery = encodeURIComponent(address)

  // Link a Gmail con mensaje prellenado
  const emailTo = 'info@kern-it.global'
  const emailSubject = 'Consulta desde el sitio web'
  const emailBody = [
    'Hola Kern IT,',
    '',
    'Me gustaría ponerme en contacto con ustedes para realizar una consulta sobre sus soluciones.',
    '',
    '• Nombre:',
    '• Empresa:',
    '• Teléfono:',
    '• Comentario:',
    '',
    '¡Gracias!',
  ].join('\n')

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailTo)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
  const outlookLink = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(emailTo)}&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
  const yahooLink = `https://compose.mail.yahoo.com/?to=${encodeURIComponent(emailTo)}&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
  } catch {
      // Fallback simple si Clipboard API no está disponible
      const textarea = document.createElement('textarea')
      textarea.value = address
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  const handleCopyEmail = async () => {
    const email = 'info@kern-it.global'
    try {
      await navigator.clipboard.writeText(email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 1500)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = email
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 1500)
    }
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Hero + Formulario (estilo vidrio) */}
      <section className="relative overflow-hidden py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        {/* Deco suaves para dar fondo al vidrio */}
        <div className="pointer-events-none absolute -top-28 -left-28 w-[32rem] h-[32rem] rounded-full bg-[#D94B45]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#9BA6A1]/10 blur-3xl" />
        {/* Nuevos blobs azules, esquina inferior derecha, fuera del formulario */}
        <div className="pointer-events-none absolute -bottom-10 right-16 w-[26rem] h-[26rem] rounded-full bg-[#D94B45]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 w-[20rem] h-[20rem] rounded-full bg-[#D94B45]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-gray-900">Conectemos para potenciar tu laboratorio</h1>
            <p className="mt-4 text-lg text-gray-600">Contanos en qué estás y diseñamos juntos un plan para mejorar la experiencia del paciente.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Mapa de Google reemplazando las cards */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#D94B45]/20 via-white to-[#9BA6A1]/20 p-[1px]">
                <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E7EBEA] shadow-md">
                  {/* blobs decorativos internos */}
                  <div className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 rounded-full bg-[#D94B45]/10 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-20 -right-16 w-64 h-64 rounded-full bg-[#9BA6A1]/10 blur-3xl" />

                  <div className="relative p-4 pl-6 border-b border-[#E7EBEA]">
                    <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#D94B45] to-[#9BA6A1]" />
                    <h3 className="text-base font-semibold text-gray-900">Nuestra ubicación</h3>
                    <p className="text-sm text-gray-600">{address}</p>
                  </div>
                  <div className="w-full h-[380px] sm:h-[440px] lg:h-[520px]">
                    <iframe
                      title="Mapa ubicación Kern IT"
                      src={`https://www.google.com/maps?output=embed&hl=es&q=${addressQuery}&z=17&t=m`}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Bloques informativos debajo del mapa */}
              <div className="mt-6 space-y-4">
                <div className="relative rounded-xl border border-[#E7EBEA] p-5 shadow-sm bg-gradient-to-br from-[#9BA6A1]/5 to-white overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#9BA6A1] to-[#D94B45]" />
                  <h3 className="flex items-center gap-2 font-semibold text-gray-900">
                    <svg className="h-5 w-5 text-[#4B5552]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM7 9.5A1.5 1.5 0 118.5 11 1.5 1.5 0 017 9.5zm10 0A1.5 1.5 0 1118.5 11 1.5 1.5 0 0117 9.5zM12 19a6.5 6.5 0 01-5.6-3.2l1.7-1A4.5 4.5 0 0012 16.5a4.5 4.5 0 003.9-1.7l1.7 1A6.5 6.5 0 0112 19z"/></svg>
                    Redes sociales
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">Seguinos y enterate de novedades y casos de éxito.</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href="https://www.linkedin.com/company/kern-it-srl"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-[#E7EBEA] text-gray-800 hover:text-[#D94B45] hover:shadow-sm transition"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.9-2.2 3.9-2.2 4.2 0 5 2.8 5 6.4V24h-4v-7.2c0-1.7 0-3.8-2.3-3.8s-2.6 1.8-2.6 3.7V24h-4V8z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/kernitsoftware"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-[#E7EBEA] text-gray-800 hover:text-[#D94B45] hover:shadow-sm transition"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.51 5.51 0 0012 7.5zm0 2A3.5 3.5 0 1115.5 13 3.5 3.5 0 0112 9.5zM18 6.3a1 1 0 11-1 1 1 1 0 011-1z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="relative rounded-xl border border-[#E7EBEA] p-5 shadow-sm bg-gradient-to-br from-gray-50 to-white overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#D94B45] to-[#9BA6A1]" />
                  <h3 className="flex items-center gap-2 font-semibold text-gray-900">
                    <svg className="h-5 w-5 text-[#D94B45]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.9 5.1a1 1 0 00-1.8 0l-4.2 9.2a1 1 0 00.9 1.4h8.4a1 1 0 00.9-1.4l-4.2-9.2zM11 10h2v4h-2v-4zm0 5h2v2h-2v-2z"/></svg>
                    Datos útiles
                  </h3>
                  <ul className="mt-2 text-sm text-gray-700 space-y-1">
                    <li>• Horario de atención: Lunes a Viernes, 9 a 18 hs (GMT-3).</li>
                    <li>• Tiempo de respuesta habitual: dentro de las 24 hs hábiles.</li>
                    <li>• Si preferís, coordinamos una videollamada a tu conveniencia.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección secundaria breve */}
       {/* <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: 'Respuesta rápida', d: 'Nos comprometemos a responderte dentro de las 24 hs hábiles.' },
            { t: 'Acompañamiento experto', d: 'Especialistas en salud digital a tu disposición.' },
            { t: 'Plan de acción', d: 'Definimos próximos pasos claros y medibles.' },
          ].map((k) => (
            <div key={k.t} className="rounded-xl border border-[#E7EBEA] bg-white p-6">
              <div className="w-8 h-8 rounded-full bg-[#D94B45]/10 text-[#D94B45] flex items-center justify-center mb-3">•</div>
              <h3 className="font-semibold text-gray-900">{k.t}</h3>
              <p className="mt-1 text-sm text-gray-600">{k.d}</p>
            </div>
          ))}
        </div>
      </section>  */}

    </div>
  )
}

export default Contacto