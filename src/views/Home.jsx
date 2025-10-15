import React from 'react'
import { Link } from 'react-router-dom'

// Colores de marca usados (desde el logo):
// Primario (rojo): #D94B45
// Secundario (gris verdoso): #9BA6A1

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-white to-[#F5F7F6]">
        {/* Deco */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#D94B45]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Mejorar la experiencia del paciente es nuestro principal objetivo.
            </h1>
            <p className="mt-4 text-xl text-gray-700">
              Somos tu partner para lograrlo. Kern-it es el nexo para mejorar la calidad de atención y enriquecer la experiencia del paciente. A través de tecnología innovadora, acompañamos a nuestros clientes para posicionar al paciente en primer plano.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-colors"
                aria-label="Contactarme con Kern-it"
              >
                Contactarme
              </Link>
              <Link
                to="/nosotros"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border border-[#9BA6A1] text-[#4B5552] hover:text-[#D94B45] hover:border-[#D94B45] transition-colors"
                aria-label="Conocer más sobre nosotros"
              >
                Conocer más
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Métricas */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D94B45]">+23M</div>
                <div className="text-sm text-gray-600">pacientes anuales en LATAM</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D94B45]">+840</div>
                <div className="text-sm text-gray-600">puntos de extracción</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D94B45]">+350M</div>
                <div className="text-sm text-gray-600">estudios procesados anualmente</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D94B45]">15</div>
                <div className="text-sm text-gray-600">países con instalaciones</div>
              </div>
            </div>
          </div>

          {/* Panel destacado */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#E7EBEA] bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900">Una solución focalizada</h3>
              <p className="mt-3 text-gray-600">
                Una solución focalizada en mejorar la calidad de atención al paciente. Nuestra experiencia de más de 20 años en el sector de la salud contribuye para que nuestro servicio y soluciones se adapten fácilmente a las necesidades de nuestros clientes y a la velocidad que requiere el mercado.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full text-sm bg-[#F2F5F4] text-[#4B5552]">Experiencia</span>
                <span className="px-3 py-1 rounded-full text-sm bg-[#F2F5F4] text-[#4B5552]">Calidad</span>
                <span className="px-3 py-1 rounded-full text-sm bg-[#F2F5F4] text-[#4B5552]">Innovación</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones de valor */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F9F8] h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Prestaciones */}
            <div className="rounded-2xl bg-white border border-[#E7EBEA] p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#D94B45]/10 text-[#D94B45] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 5a2 2 0 012-2h3a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm9 0a2 2 0 012-2h3a2 2 0 012 2v6a2 2 0 01-2 2h-3a2 2 0 01-2-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Prestaciones</h3>
              <p className="mt-3 text-gray-600">
                La tecnología debe contemplar todas las necesidades del paciente para brindarle una mejor experiencia.
              </p>
              <Link to="/productos" className="mt-6 inline-flex items-center font-semibold text-[#D94B45] hover:underline">
                Ver prestaciones
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Productos */}
            <div className="rounded-2xl bg-white border border-[#E7EBEA] p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#D94B45]/10 text-[#D94B45] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 2a1 1 0 01.894.553l6 12A1 1 0 0116 16H4a1 1 0 01-.894-1.447l6-12A1 1 0 0110 2zM10 4.618L5.382 14h9.236L10 4.618z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Productos</h3>
              <p className="mt-3 text-gray-600">
                Optimizar y mejorar la relación con el paciente es clave. Conocé nuestros productos para alcanzar este objetivo de negocios.
              </p>
              <Link to="/productos" className="mt-6 inline-flex items-center font-semibold text-[#D94B45] hover:underline">
                Ver productos
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Nuestro servicio */}
            <div className="rounded-2xl bg-white border border-[#E7EBEA] p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#D94B45]/10 text-[#D94B45] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v8a2 2 0 002 2h2.586A2 2 0 018 16.414L10.414 14H16a2 2 0 002-2V5a2 2 0 00-2-2H4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Nuestro servicio</h3>
              <p className="mt-3 text-gray-600">
                Nos adaptamos con profesionalismo a las necesidades de nuestros clientes y a la velocidad del mercado.
              </p>
              <Link to="/nosotros" className="mt-6 inline-flex items-center font-semibold text-[#D94B45] hover:underline">
                Conocer más
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-white h-screen flex items-center">
        {/* Deco izquierda */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#D94B45]/10 blur-3xl" />
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Qué nos hace diferentes</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Acompañamos a nuestros clientes desde hace más de 20 años y somos sus aliados estratégicos para brindar la mejor experiencia del paciente y alcanzar los máximos niveles de satisfacción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-xl border border-[#E7EBEA] p-6">
              <div className="w-12 h-12 rounded-full bg-[#D94B45]/10 text-[#D94B45] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Laboratorio de calidad</h3>
              <p className="mt-2 text-gray-600">La experiencia del paciente y la capacidad de procesar el volumen de operaciones son claves.</p>
            </div>

            <div className="rounded-xl border border-[#E7EBEA] p-6">
              <div className="w-12 h-12 rounded-full bg-[#D94B45]/10 text-[#D94B45] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Experiencia en el rubro</h3>
              <p className="mt-2 text-gray-600">Desde hace más de 20 años, acompañamos a nuestros clientes para mejorar la experiencia del paciente.</p>
            </div>

            <div className="rounded-xl border border-[#E7EBEA] p-6">
              <div className="w-12 h-12 rounded-full bg-[#D94B45]/10 text-[#D94B45] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Resultados precisos</h3>
              <p className="mt-2 text-gray-600">Anualmente, procesamos más de 350 millones de estudios.</p>
            </div>

            <div className="rounded-xl border border-[#E7EBEA] p-6">
              <div className="w-12 h-12 rounded-full bg-[#D94B45]/10 text-[#D94B45] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Personal calificado</h3>
              <p className="mt-2 text-gray-600">Profesionales que se destacan por su profesionalismo, flexibilidad y adaptación a una industria en evolución.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a] text-white h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Texto + beneficios */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-bold">Realizá una consulta</h2>
              <p className="mt-4 text-lg text-slate-300">
                Somos tu partner. Entrá en contacto con nuestros especialistas para posicionar al paciente en
                primer plano y elevar la calidad de atención en tu organización.
              </p>

              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Respuesta en menos de 24 horas',
                  'Acompañamiento por especialistas',
                  'Implementación sin fricción',
                  'Sin compromiso inicial',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mt-1 mr-3 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#D94B45]">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-colors"
                >
                  Contactarme
                </Link>
                <Link
                  to="/nosotros"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border border-white/20 text-white hover:text-[#D94B45] hover:border-[#D94B45] transition-colors"
                >
                  Conocer más
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Tarjeta lateral */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-8 border border-white/10 shadow-lg text-[#0f172a]">
                <h3 className="text-xl font-semibold text-gray-900">Poné al paciente primero</h3>
                <p className="mt-3 text-gray-600">
                  Compartinos tus desafíos actuales y te ayudamos a diseñar una experiencia centrada en el paciente.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#D94B45] mr-3" />
                    <span className="text-sm text-gray-700">Diagnóstico sin costo y sin compromiso</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#D94B45] mr-3" />
                    <span className="text-sm text-gray-700">Plan de acción en 3 pasos</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#D94B45] mr-3" />
                    <span className="text-sm text-gray-700">Acompañamiento de especialistas</span>
                  </div>
                </div>

                <Link
                  to="/contacto"
                  className="mt-8 inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-colors"
                >
                  Iniciar consulta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre - Somos tu partner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F9F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Somos tu partner</h3>
              <p className="mt-4 text-lg text-gray-700">
                Acompañamos a nuestros clientes desde hace más de 20 años y somos sus aliados estratégicos para brindar la mejor experiencia del paciente y alcanzar los máximos niveles de satisfacción.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-xl bg-white border border-[#E7EBEA] p-6">
                  <div className="w-10 h-10 rounded-full bg-[#D94B45]/10 text-[#D94B45] flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v8a2 2 0 002 2h2.586A2 2 0 018 16.414L10.414 14H16a2 2 0 002-2V5a2 2 0 00-2-2H4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Implementación ágil</h4>
                  <p className="mt-1 text-gray-600">Procesos claros y acompañamiento para una adopción sin fricción.</p>
                </div>

                <div className="rounded-xl bg-white border border-[#E7EBEA] p-6">
                  <div className="w-10 h-10 rounded-full bg-[#D94B45]/10 text-[#D94B45] flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Soporte dedicado</h4>
                  <p className="mt-1 text-gray-600">Equipo experto, flexible y atento a tu operación diaria.</p>
                </div>

                <div className="rounded-xl bg-white border border-[#E7EBEA] p-6">
                  <div className="w-10 h-10 rounded-full bg-[#D94B45]/10 text-[#D94B45] flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Mejora continua</h4>
                  <p className="mt-1 text-gray-600">Iteramos con datos reales para optimizar la experiencia del paciente.</p>
                </div>

                <div className="rounded-xl bg-white border border-[#E7EBEA] p-6">
                  <div className="w-10 h-10 rounded-full bg-[#D94B45]/10 text-[#D94B45] flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Seguridad y cumplimiento</h4>
                  <p className="mt-1 text-gray-600">Buenas prácticas y estándares del sector salud.</p>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/productos"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-colors"
                >
                  Ver productos
                </Link>
                <Link
                  to="/nosotros"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border border-[#9BA6A1] text-[#4B5552] hover:text-[#D94B45] hover:border-[#D94B45] transition-colors"
                >
                  Conocer más
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#E7EBEA] bg-white p-8 shadow-sm h-full flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#D94B45]">+23M</div>
                    <div className="text-sm text-gray-600">pacientes anuales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#D94B45]">+840</div>
                    <div className="text-sm text-gray-600">puntos de extracción</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#D94B45]">+350M</div>
                    <div className="text-sm text-gray-600">estudios procesados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#D94B45]">15</div>
                    <div className="text-sm text-gray-600">países</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home