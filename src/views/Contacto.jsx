import React, { useState } from 'react'

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
        <div className="pointer-events-none absolute -bottom-10 right-16 w-[26rem] h-[26rem] rounded-full bg-[#3B82F6]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 w-[20rem] h-[20rem] rounded-full bg-[#3B82F6]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-gray-900">Conectemos para potenciar tu laboratorio</h1>
            <p className="mt-4 text-lg text-gray-600">Contanos en qué estás y diseñamos juntos un plan para mejorar la experiencia del paciente.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Mapa de Google reemplazando las cards */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#E7EBEA] bg-white shadow-sm">
                <div className="p-4 border-b border-[#E7EBEA]">
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
                <div className="p-4 space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${addressQuery}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-[#E7EBEA] px-3 py-1.5 text-[#D94B45] hover:text-white hover:bg-[#D94B45] transition-colors"
                    >
                      Abrir en Google Maps
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-2 rounded-md border border-[#E7EBEA] px-3 py-1.5 text-gray-700 hover:bg-gray-50"
                    >
                      {copied ? 'Dirección copiada' : 'Copiar dirección'}
                    </button>
                  </div>
                  <p className="text-xs text-gray-600">
                    Visitas con cita previa. Al llegar, anunciate en recepción y te indicarán el acceso al 5° piso.
                  </p>
                </div>
              </div>
            </div>

            {/* Información de contacto (reemplaza al formulario) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative rounded-2xl bg-white border border-[#E7EBEA] shadow-sm p-8 sm:p-10">
                <h2 className="text-2xl font-semibold text-gray-900">Contacto directo</h2>
                <p className="mt-2 text-gray-700">Elegí la vía que te quede más cómoda. Te respondemos dentro de las 24 hs hábiles.</p>

                <div className="mt-6 space-y-5">
                  <div className="rounded-xl border border-[#E7EBEA] p-5">
                    <h3 className="font-semibold text-gray-900">Correo electrónico</h3>
                    <p className="mt-1 text-sm text-gray-600">Escribinos y te contactamos a la brevedad.</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={gmailLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold  bg-white text-red-400 border border-red-400 hover:bg-red-400 hover:text-white transition-colors"
                      >
                        Escribir por Gmail
                      </a>
                      <a
                        href={outlookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-blue-400 bg-white border border-blue-400 hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
                      >
                        Escribir por Outlook
                      </a>
                      <a
                        href={yahooLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-purple-400 bg-white border border-purple-400 hover:border-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
                      >
                        Escribir por Yahoo
                      </a>
                      
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-gray-700 bg-white border border-[#E7EBEA] hover:bg-gray-50"
                      >
                        {copiedEmail ? 'Correo copiado' : 'Copiar correo'}
                      </button>
                    </div>
                
                  </div>

                  <div className="rounded-xl border border-[#E7EBEA] p-5">
                    <h3 className="font-semibold text-gray-900">Redes sociales</h3>
                    <p className="mt-1 text-sm text-gray-600">Seguinos y enterate de novedades y casos de éxito.</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a
                        href="https://www.linkedin.com/company/kern-it-srl"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-[#E7EBEA] text-gray-800 hover:text-[#D94B45]"
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
                        className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-[#E7EBEA] text-gray-800 hover:text-[#D94B45]"
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.51 5.51 0 0012 7.5zm0 2A3.5 3.5 0 1115.5 13 3.5 3.5 0 0112 9.5zM18 6.3a1 1 0 11-1 1 1 1 0 011-1z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#E7EBEA] p-5">
                    <h3 className="font-semibold text-gray-900">Datos útiles</h3>
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
      </section> */}
    </div>
  )
}

export default Contacto