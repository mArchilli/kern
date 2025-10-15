import React from 'react'
import { Link } from 'react-router-dom'

// Colores de marca usados (desde el logo):
// Primario (rojo): #D94B45
// Secundario (gris verdoso): #9BA6A1

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero - Mobile First */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#fcfcfc] to-[#F5F7F6]">
        {/* Decoraciones sutiles */}
        <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#D94B45]/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 sm:w-[28rem] sm:h-[28rem] rounded-full bg-[#9BA6A1]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Contenido principal */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#D94B45]/10 border border-[#D94B45]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#D94B45] mr-2 animate-pulse" />
                <span className="text-sm font-medium text-[#D94B45]">+20 años de experiencia en salud</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900">
                Mejorar la <span className="text-[#D94B45]">experiencia del paciente</span> es nuestro objetivo
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
                Somos tu partner para lograrlo. Kern-it conecta tecnología innovadora y atención de calidad para posicionar al paciente en primer plano.
              </p>

              {/* Botones con diseño compacto e integrado */}
              <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-gray-100 shadow-inner">
                <Link
                  to="/contacto"
                  className="px-6 py-3 rounded-full font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
                  aria-label="Contactar con Kern-it"
                >
                  Contactarme
                </Link>
                <Link
                  to="/nosotros"
                  className="px-6 py-3 rounded-full font-semibold text-gray-700 hover:text-[#D94B45] hover:bg-white transition-all duration-200 whitespace-nowrap"
                  aria-label="Conocer más sobre Kern-it"
                >
                  Conocer más
                </Link>
              </div>
            </div>

            {/* Stats Cards - Mobile Optimized */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { value: '+23M', label: 'pacientes anuales en LATAM', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
                { value: '+840', label: 'puntos de extracción', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
                { value: '+350M', label: 'estudios procesados anualmente', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
                { value: '15', label: 'países con instalaciones', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#D94B45]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-br from-[#D94B45]/10 to-[#D94B45]/5 blur-xl group-hover:scale-110 transition-transform" />
                  <svg className="w-8 h-8 text-[#D94B45] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                  </svg>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Indicador de scroll flotante - posicionado al final del viewport */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Propuesta de Valor - Mobile First */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header de sección */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/10 text-[#D94B45] text-sm font-semibold mb-4">
              Soluciones integrales
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tecnología centrada en el <span className="text-[#D94B45]">paciente</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transformamos la experiencia de atención médica con soluciones diseñadas para cada etapa del proceso
            </p>
          </div>

          {/* Cards - Optimizadas mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Prestaciones',
                description: 'La tecnología debe contemplar todas las necesidades del paciente para brindarle una mejor experiencia.',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                link: '/productos',
                cta: 'Ver prestaciones',
                gradient: 'from-[#D94B45]/5 to-[#D94B45]/10'
              },
              {
                title: 'Productos',
                description: 'Optimizar y mejorar la relación con el paciente es clave. Conocé nuestros productos para alcanzar este objetivo de negocios.',
                icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
                link: '/productos',
                cta: 'Ver productos',
                gradient: 'from-[#9BA6A1]/5 to-[#9BA6A1]/10'
              },
              {
                title: 'Nuestro servicio',
                description: 'Nos adaptamos con profesionalismo a las necesidades de nuestros clientes y a la velocidad del mercado.',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                link: '/nosotros',
                cta: 'Conocer más',
                gradient: 'from-[#D94B45]/5 to-[#9BA6A1]/10'
              }
            ].map((card, i) => (
              <div 
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-[#D94B45]/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Gradient background sutil */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative p-8">
                  {/* Icono */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D94B45] to-[#c7413c] text-white flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#D94B45] transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <Link 
                    to={card.link} 
                    className="inline-flex items-center font-semibold text-[#D94B45] hover:gap-3 gap-2 transition-all group/link"
                  >
                    {card.cta}
                    <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Decoración esquina */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D94B45]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciadores - Mobile First */}
      <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F7F9F8] to-white">
        {/* Decoraciones */}
        <div className="pointer-events-none absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#D94B45]/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#9BA6A1]/10 blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/10 text-[#D94B45] text-sm font-semibold mb-4">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Qué nos hace <span className="text-[#D94B45]">diferentes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Acompañamos a nuestros clientes desde hace más de 20 años y somos sus aliados estratégicos para brindar la mejor experiencia del paciente y alcanzar los máximos niveles de satisfacción
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
                title: 'Laboratorio de calidad',
                description: 'La experiencia del paciente y la capacidad de procesar el volumen de operaciones son claves'
              },
              {
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Experiencia en el rubro',
                description: 'Desde hace más de 20 años, acompañamos a nuestros clientes para mejorar la experiencia del paciente'
              },
              {
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Resultados precisos',
                description: 'Anualmente, procesamos más de 350 millones de estudios con los más altos estándares'
              },
              {
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                title: 'Personal calificado',
                description: 'Profesionales que se destacan por su flexibilidad y adaptación a una industria en evolución'
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="group relative rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 p-6 sm:p-8 hover:bg-white hover:border-[#D94B45]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icono con efecto de pulso */}
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#D94B45] to-[#c7413c] text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <div className="absolute inset-0 rounded-xl bg-[#D94B45] opacity-0 group-hover:opacity-20 group-hover:animate-ping" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#D94B45] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Decoración esquina */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#D94B45]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-3xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Principal - Mobile First con diseño moderno */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}} />
        </div>
        
        {/* Gradientes decorativos */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#D94B45]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#9BA6A1]/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Contenido principal */}
            <div className="text-center lg:text-left text-white">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/20 border border-[#D94B45]/30 text-[#D94B45] text-sm font-semibold mb-6">
                Consulta gratuita
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Llevá la experiencia del paciente al <span className="text-[#D94B45]">siguiente nivel</span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Entrá en contacto con nuestros especialistas para posicionar al paciente en primer plano y elevar la calidad de atención en tu organización
              </p>

              {/* Lista de beneficios con diseño mejorado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Respuesta en menos de 24 horas' },
                  { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', text: 'Acompañamiento por especialistas' },
                  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', text: 'Implementación sin fricción' },
                  { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Sin compromiso inicial' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#D94B45]/20 border border-[#D94B45]/30 flex items-center justify-center group-hover:bg-[#D94B45] group-hover:scale-110 transition-all duration-300">
                      <svg className="w-5 h-5 text-[#D94B45] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-gray-200 leading-snug pt-2">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs con diseño pill */}
              <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-white/10 backdrop-blur-sm shadow-inner">
                <Link
                  to="/contacto"
                  className="px-6 py-3 rounded-full font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
                  aria-label="Iniciar consulta"
                >
                  Iniciar consulta
                </Link>
                <Link
                  to="/nosotros"
                  className="px-6 py-3 rounded-full font-semibold text-white hover:text-[#D94B45] hover:bg-white/20 transition-all duration-200 whitespace-nowrap"
                  aria-label="Conocer más"
                >
                  Conocer más
                </Link>
              </div>
            </div>

            {/* Card flotante con glassmorphism */}
            <div className="relative">
              <div className="rounded-3xl bg-white/95 backdrop-blur-xl p-8 sm:p-10 shadow-2xl border border-white/20">
                {/* Icono destacado */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D94B45] to-[#c7413c] text-white flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Poné al paciente primero
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Compartinos tus desafíos actuales y te ayudamos a diseñar una experiencia centrada en el paciente
                </p>

                {/* Lista de beneficios */}
                <div className="space-y-4 mb-8">
                  {[
                    'Diagnóstico sin costo y sin compromiso',
                    'Plan de acción en 3 pasos',
                    'Acompañamiento de especialistas'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D94B45]/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#D94B45]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contacto"
                  className="group block w-full px-6 py-4 rounded-xl font-semibold text-center text-white bg-gradient-to-r from-[#D94B45] to-[#c7413c] hover:shadow-lg hover:shadow-[#D94B45]/30 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center">
                    Empezar ahora
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Decoración */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-[#D94B45]/20 to-[#9BA6A1]/20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section - Mobile First con diseño renovado */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F7F9F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenido */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/10 text-[#D94B45] text-sm font-semibold mb-6">
                Tu aliado estratégico
              </span>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Somos tu <span className="text-[#D94B45]">partner</span> en salud
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Acompañamos a nuestros clientes desde hace más de 20 años y somos sus aliados estratégicos para brindar la mejor experiencia del paciente y alcanzar los máximos niveles de satisfacción
              </p>

              {/* Mini-cards con beneficios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  {
                    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                    title: 'Implementación ágil',
                    desc: 'Procesos claros y acompañamiento para una adopción sin fricción'
                  },
                  {
                    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
                    title: 'Soporte dedicado',
                    desc: 'Equipo experto, flexible y atento a tu operación diaria'
                  },
                  {
                    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                    title: 'Mejora continua',
                    desc: 'Iteramos con datos reales para optimizar la experiencia del paciente'
                  },
                  {
                    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                    title: 'Seguridad y cumplimiento',
                    desc: 'Buenas prácticas y estándares del sector salud'
                  }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="group relative rounded-xl bg-white border border-gray-200 p-5 hover:border-[#D94B45]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#D94B45] to-[#c7413c] text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 mb-1 group-hover:text-[#D94B45] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs con diseño pill */}
              <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-gray-100 shadow-inner">
                <Link
                  to="/productos"
                  className="px-6 py-3 rounded-full font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
                  aria-label="Ver productos"
                >
                  Ver productos
                </Link>
                <Link
                  to="/nosotros"
                  className="px-6 py-3 rounded-full font-semibold text-gray-700 hover:text-[#D94B45] hover:bg-white transition-all duration-200 whitespace-nowrap"
                  aria-label="Conocer más"
                >
                  Conocer más
                </Link>
              </div>
            </div>

            {/* Stats visuales con diseño moderno */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { value: '+23M', label: 'pacientes anuales', color: 'from-[#D94B45] to-[#c7413c]' },
                  { value: '+840', label: 'puntos de extracción', color: 'from-[#9BA6A1] to-[#8a9590]' },
                  { value: '+350M', label: 'estudios procesados', color: 'from-[#D94B45] to-[#9BA6A1]' },
                  { value: '15', label: 'países', color: 'from-[#9BA6A1] to-[#D94B45]' }
                ].map((stat, i) => (
                  <div 
                    key={i}
                    className="group relative rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 text-center hover:border-[#D94B45]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Gradiente de fondo en hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="relative">
                      <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>

                    {/* Decoración esquina */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#D94B45]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>

              {/* Decoración de fondo */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 rounded-full bg-gradient-to-br from-[#D94B45]/10 to-[#9BA6A1]/10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home