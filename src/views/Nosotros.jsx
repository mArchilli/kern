import React from 'react'
import { Link } from 'react-router-dom'
import PillButton from '../components/PillButton'
import claudioImg from '../assets/Nosotros/kern-claudio.jpg'
import diegoImg from '../assets/Nosotros/kern-diego.jpg'
import rodolfoImg from '../assets/Nosotros/kern-rodolfo.jpg'

// Colores de marca
// Primario: #D94B45 | Secundario: #9BA6A1

const Nosotros = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero moderno */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        {/* Gradient decorativo */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D94B45]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenido principal */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/10 text-[#D94B45] text-sm font-semibold mb-6">
                Sobre nosotros
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                ¿Por qué <span className="text-[#D94B45]">Kern IT</span>?
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Somos partners. Kern-IT es el socio estratégico por excelencia de los laboratorios de análisis clínicos y centros de diagnóstico. Desde hace más de 20 años, brindamos soluciones tecnológicas diseñadas para la mejora de la experiencia de los pacientes.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <PillButton to="/contacto" variant="primary">Contactarnos</PillButton>
                <PillButton to="/productos" variant="secondary">Ver productos</PillButton>
              </div>
            </div>

            {/* Panel destacado con stats */}
            <div className="relative">
              <div className="rounded-3xl bg-white border-2 border-[#D94B45]/20 p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Presencia internacional</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Contamos con operaciones y representantes locales en distintos mercados de Latinoamérica y Estados Unidos.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#D94B45]/10 to-transparent">
                    <div className="text-4xl font-bold text-[#D94B45] mb-2">15</div>
                    <div className="text-sm font-medium text-gray-600">países</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#D94B45]/10 to-transparent">
                    <div className="text-4xl font-bold text-[#D94B45] mb-2">+20</div>
                    <div className="text-sm font-medium text-gray-600">años de experiencia</div>
                  </div>
                </div>

                {/* Features adicionales */}
                <div className="space-y-3 pt-6 border-t border-gray-100">
                  {[
                    'Líderes en transformación digital',
                    'Innovación continua',
                    'Soporte dedicado 24/7'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#D94B45]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#D94B45]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo de expertos con diseño moderno */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F7F9F8]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/10 text-[#D94B45] text-sm font-semibold mb-6">
              Nuestro equipo
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Expertos en salud digital
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Líderes con más de 20 años en tecnología para la salud, aportando su experiencia para mejorar la calidad de atención al paciente.
            </p>
          </div>

          {/* Cards del equipo con efecto neumorphic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              img: claudioImg,
              name: 'Claudio Martín Weisz',
            }, {
              img: rodolfoImg,
              name: 'Rodolfo Renner',
            }, {
              img: diegoImg,
              name: 'Diego Kaminker',
            }].map((p, idx) => (
              <div 
                key={p.name} 
                className="group rounded-[28px] bg-white p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 mb-6">
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  {/* Overlay gradient en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#D94B45]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#D94B45] transition-colors">
                  {p.name}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {['Liderazgo', 'Interoperabilidad', 'Innovación'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 group-hover:bg-[#D94B45]/10 group-hover:text-[#D94B45] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura de necesidades - Diseño moderno */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        {/* Gradient decorativo izquierda */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-gray-900/15 via-gray-800/10 to-transparent rounded-full blur-3xl -translate-x-1/2" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contenido principal */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/10 text-[#D94B45] text-sm font-semibold mb-6">
                Nuestras capacidades
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Cubrimos las necesidades de tu laboratorio
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Nuestras soluciones cubren las necesidades de un laboratorio moderno en todos los circuitos:
              </p>
              
              {/* Tags de circuitos */}
              <div className="flex flex-wrap gap-3 mb-8">
                {['Administrativos', 'Preanalíticos', 'Analíticos', 'Post-analíticos', 'Gerenciamiento'].map((t) => (
                  <span 
                    key={t} 
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-br from-[#D94B45]/10 to-transparent text-gray-700 border border-[#D94B45]/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos líderes en interoperabilidad y ofrecemos productos sólidos, flexibles y escalables, que funcionan en todas las plataformas.
              </p>
            </div>

            {/* Sidebar con valores */}
            <div className="rounded-3xl bg-white border-2 border-[#D94B45]/20 p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Lo que nos guía</h3>
              
              <div className="space-y-4">
                {[
                  'El paciente en primer plano y la confidencialidad, transparencia y seguridad.',
                  'Educación continua, trabajo en equipo y talento colectivo.',
                  'Ética en los negocios, respeto personal y excelencia profesional.',
                  'Innovación para mejorar la rentabilidad y resultados de nuestros clientes.'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-[#D94B45]/5 transition-colors duration-200">
                    <div className="w-6 h-6 rounded-full bg-[#D94B45]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#D94B45]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature grid técnica - Cards neumórficas */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
                title: 'Interoperabilidad', 
                desc: 'Estándares HL7 / FHIR y conectividad con EMR/HIS/PACS.' 
              },
              { 
                icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
                title: 'LIS en la nube', 
                desc: 'Primera solución en la nube para laboratorios clínicos.' 
              },
              { 
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                title: 'Seguridad y cumplimiento', 
                desc: 'Buenas prácticas y resguardo de datos del paciente.' 
              },
              { 
                icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                title: 'Reporting y analítica', 
                desc: 'Indicadores, tableros y toma de decisiones con datos.' 
              },
              { 
                icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
                title: 'Escalabilidad', 
                desc: 'Arquitectura preparada para crecer con tu operación.' 
              },
              { 
                icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
                title: 'Integraciones', 
                desc: 'Ecosistema amplio de integraciones con terceros.' 
              },
            ].map((f, idx) => (
              <div 
                key={f.title} 
                className="group rounded-[28px] bg-white p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D94B45] to-[#c7413c] text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                  </svg>
                </div>
                
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#D94B45] transition-colors">
                  {f.title}
                </h4>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visión y Misión - Diseño moderno con cards grandes */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F7F9F8] to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header centrado */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/10 text-[#D94B45] text-sm font-semibold mb-6">
              Nuestra filosofía
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Visión y misión
            </h2>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Visión */}
            <div className="rounded-3xl bg-white border-2 border-[#D94B45]/20 p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D94B45] to-[#c7413c] text-white flex items-center justify-center">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Visión</h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Ser líderes en la transformación digital de laboratorios y centros de diagnóstico, constituyéndonos en su principal socio de negocios, ofreciendo soluciones innovadoras con la mejor propuesta de valor.
              </p>
              
              <div className="space-y-3 pt-6 border-t border-gray-100">
                {[
                  'Liderar la transformación digital del sector',
                  'Ser proveedor estratégico en LATAM',
                  'Innovación constante con foco en valor'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D94B45]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#D94B45]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Misión */}
            <div className="rounded-3xl bg-white border-2 border-[#D94B45]/20 p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D94B45] to-[#c7413c] text-white flex items-center justify-center">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Misión</h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Potenciar el impacto del laboratorio clínico con tecnologías de última generación, conectando a los principales actores del sector sanitario y cubriendo los circuitos administrativos, preanalíticos, analíticos, post-analíticos y de gerenciamiento.
              </p>
              
              <div className="space-y-3 pt-6 border-t border-gray-100">
                {[
                  'Conectar todo el ecosistema de salud',
                  'Interoperabilidad estándar (HL7 / FHIR)',
                  'LIS cloud-first, seguro y escalable'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D94B45]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#D94B45]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Política de Calidad - Diseño destacado */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        {/* Gradient decorativo */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D94B45]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/10 text-[#D94B45] text-sm font-semibold mb-6">
              Nuestro compromiso
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Política de calidad
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Nos exigimos creatividad e innovación con liderazgo en diseño, desarrollo e implementación de sistemas de gestión en salud, con un nivel de calidad de excelencia.
            </p>
          </div>

          {/* Card principal */}
          <div className="rounded-3xl bg-white border-2 border-[#D94B45]/20 p-10 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Cumplir las expectativas de calidad de nuestros clientes',
                'Ofrecer productos y servicios conforme a especificaciones y requisitos',
                'Promover la gestión de la calidad en todos los niveles y procesos',
                'Asegurar la difusión y comprensión del sistema de gestión de calidad',
                'Impulsar un management comprometido con la calidad',
                'Priorizar la mejora continua para aumentar eficiencia y eficacia',
                'Establecer confianza, colaboración y compromiso con nuestros clientes',
                'Asegurar el futuro y el desarrollo de la empresa a través de la calidad',
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-[#D94B45]/5 transition-all duration-200 hover:scale-105"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D94B45] to-[#c7413c] text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {i + 1}
                  </div>
                  <span className="text-gray-700 leading-relaxed pt-1">{item}</span>
                </div>
              ))}
            </div>

            {/* Footer con badge de certificación */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-[#D94B45]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600 font-medium">Certificados en estándares internacionales de calidad</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final - Diseño oscuro moderno */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Efectos decorativos */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D94B45]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D94B45]/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/20 text-[#D94B45] text-sm font-semibold mb-6">
            Hablemos
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Conversemos sobre tu laboratorio
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
            Somos tu partner para impulsar la experiencia del paciente y la eficiencia operativa.
          </p>
          
          {/* Beneficios rápidos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              { icon: 'M13 10V3L4 14h7v7l9-11h-7z', text: 'Implementación ágil' },
              { icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z', text: 'Soporte 24/7' },
              { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: 'Seguridad garantizada' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#D94B45]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <span className="text-sm text-gray-300 font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Botones */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <PillButton to="/contacto" variant="primary">Contactarnos</PillButton>
            <PillButton to="/productos" variant="ghostDark">Ver productos</PillButton>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nosotros