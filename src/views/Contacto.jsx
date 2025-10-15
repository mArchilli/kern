import React, { useState } from 'react'

// Paleta de marca: Primario #D94B45, Secundario #9BA6A1

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ submitting: false, sent: false })
  const [copied, setCopied] = useState(false)

  const address = 'Migueletes 1231 Piso 5 Depto A'
  const addressQuery = encodeURIComponent(address)

  const validate = () => {
    const e = {}
    if (!formData.nombre.trim()) e.nombre = 'Ingresa tu nombre.'
    if (!formData.email.trim()) e.email = 'Ingresa tu email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Email inválido.'
    if (!formData.asunto.trim()) e.asunto = 'Selecciona un asunto.'
    if (!formData.mensaje.trim()) e.mensaje = 'Escribe tu mensaje.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus({ submitting: true, sent: false })

    // Fallback sin backend: usar mailto para abrir el cliente de correo
    const to = 'info@kern-it.global'
    const subject = encodeURIComponent(`Consulta desde sitio - ${formData.asunto}`)
    const bodyLines = [
      `Nombre: ${formData.nombre}`,
      `Email: ${formData.email}`,
      `Teléfono: ${formData.telefono || '-'}\n`,
      'Mensaje:',
      formData.mensaje
    ]
    const body = encodeURIComponent(bodyLines.join('\n'))
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`

    // Abrir cliente de correo
    window.location.href = mailto

    // Simular finalización para feedback de UI
    setTimeout(() => {
      setStatus({ submitting: false, sent: true })
      setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' })
    }, 600)

    // Integración opcional (EmailJS, Formspree, API propia):
    // - EmailJS: instalar y configurar claves, luego enviar template con formData.
    // - API propia: implementar endpoint POST /contacto y hacer fetch con formData.
  }

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
                    <a href="mailto:info@kern-it.global" className="ml-auto text-sm text-gray-700 hover:text-[#D94B45]">
                      info@kern-it.global
                    </a>
                  </div>
                  <p className="text-xs text-gray-600">
                    Visitas con cita previa. Al llegar, anunciate en recepción y te indicarán el acceso al 5° piso.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulario con efecto vidrio */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5 p-8 sm:p-10">
                {/* Borde de luz */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/40" />
                <h2 className="text-2xl font-semibold text-gray-900">Envíanos un mensaje</h2>
                <p className="mt-1 text-sm text-gray-700">Te responderemos a la brevedad. Los campos marcados con * son obligatorios.</p>

                <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-800">Nombre completo *</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={`mt-1 w-full px-3 py-2 rounded-md border ${errors.nombre ? 'border-red-500' : 'border-white/60'} bg-white/70 backdrop-blur-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D94B45]`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.nombre && <p className="mt-1 text-xs text-red-600">{errors.nombre}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-800">Correo electrónico *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-1 w-full px-3 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-white/60'} bg-white/70 backdrop-blur-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D94B45]`}
                        placeholder="tu@email.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-800">Teléfono</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="mt-1 w-full px-3 py-2 rounded-md border border-white/60 bg-white/70 backdrop-blur-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D94B45]"
                        placeholder="+54 11 5555-5555"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-800">Asunto *</label>
                    <select
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      className={`mt-1 w-full px-3 py-2 rounded-md border ${errors.asunto ? 'border-red-500' : 'border-white/60'} bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D94B45]`}
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="Consulta de producto">Consulta de producto</option>
                      <option value="Soporte técnico">Soporte técnico</option>
                      <option value="Reclamo">Reclamo</option>
                      <option value="Sugerencia">Sugerencia</option>
                      <option value="Otro">Otro</option>
                    </select>
                    {errors.asunto && <p className="mt-1 text-xs text-red-600">{errors.asunto}</p>}
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-800">Mensaje *</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows="5"
                      value={formData.mensaje}
                      onChange={handleChange}
                      className={`mt-1 w-full px-3 py-2 rounded-md border ${errors.mensaje ? 'border-red-500' : 'border-white/60'} bg-white/70 backdrop-blur-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D94B45]`}
                      placeholder="Contanos brevemente en qué podemos ayudarte"
                    />
                    {errors.mensaje && <p className="mt-1 text-xs text-red-600">{errors.mensaje}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-colors ${status.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {status.submitting ? 'Enviando…' : 'Enviar mensaje'}
                  </button>

                  {status.sent && (
                    <div className="text-sm text-green-600">¡Gracias por tu mensaje! Abrimos tu cliente de correo para completar el envío.</div>
                  )}
                </form>

                {/* Nota de integración */}
                <p className="mt-6 text-xs text-gray-600">
                  ¿Querés enviar el correo de forma directa desde el sitio? Podemos integrar EmailJS o un endpoint propio.
                </p>
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