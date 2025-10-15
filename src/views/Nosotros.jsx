import React from 'react'
import { Link } from 'react-router-dom'
import claudioImg from '../assets/Nosotros/kern-claudio.jpg'
import diegoImg from '../assets/Nosotros/kern-diego.jpg'
import rodolfoImg from '../assets/Nosotros/kern-rodolfo.jpg'

// Colores de marca
// Primario: #D94B45 | Secundario: #9BA6A1

const Nosotros = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-white to-[#F5F7F6] lg:min-h-screen lg:flex lg:items-center">
        <div className="pointer-events-none absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#D94B45]/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              ¿Por qué Kern IT?
            </h1>
            <p className="mt-4 text-xl text-gray-700">
              Somos partners. Kern-IT es el socio estratégico por excelencia de los laboratorios de análisis clínicos y centros de diagnóstico. Desde hace más de 20 años, brindamos soluciones tecnológicas diseñadas para la mejora de la experiencia de los pacientes.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contacto" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-colors">
                Contactarme
              </Link>
              <Link to="/productos" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border border-[#9BA6A1] text-[#4B5552] hover:text-[#D94B45] hover:border-[#D94B45] transition-colors">
                Ver productos
              </Link>
            </div>
          </div>

          {/* Panel destacado */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#E7EBEA] bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900">Presencia internacional</h3>
              <p className="mt-3 text-gray-600">Contamos con operaciones y representantes locales en distintos mercados de Latinoamérica y Estados Unidos.</p>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#D94B45]">15</div>
                  <div className="text-sm text-gray-600">países</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#D94B45]">+20</div>
                  <div className="text-sm text-gray-600">años de experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo de expertos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F9F8] lg:min-h-screen lg:flex lg:items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Nuestro equipo de expertos</h2>
            <p className="mt-3 text-lg text-gray-600">Líderes con más de 20 años en tecnología para la salud, aportando su experiencia para mejorar la calidad de atención al paciente.</p>
          </div>

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
            }].map((p) => (
              <div key={p.name} className="group rounded-2xl bg-white border border-[#E7EBEA] p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F2F5F4]">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-600">Liderazgo en salud digital • Interoperabilidad • Innovación</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura de necesidades */}
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-white lg:min-h-screen lg:flex lg:items-center">
        <div className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#D94B45]/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-gray-900">Cubrimos las necesidades de tu laboratorio</h2>
            <p className="mt-4 text-gray-700">Nuestras soluciones cubren las necesidades de un laboratorio moderno en todos los circuitos:</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Administrativos', 'Preanalíticos', 'Analíticos', 'Post-analíticos', 'Gerenciamiento'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-sm bg-[#F2F5F4] text-[#4B5552]">{t}</span>
              ))}
            </div>
            <p className="mt-6 text-gray-700">Somos líderes en interoperabilidad y ofrecemos productos sólidos, flexibles y escalables, que funcionan en todas las plataformas.</p>

            {/* Feature grid técnica */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Interoperabilidad', desc: 'Estándares HL7 / FHIR y conectividad con EMR/HIS/PACS.' },
                { title: 'LIS en la nube', desc: 'Primera solución en la nube para laboratorios clínicos.' },
                { title: 'Seguridad y cumplimiento', desc: 'Buenas prácticas y resguardo de datos del paciente.' },
                { title: 'Reporting y analítica', desc: 'Indicadores, tableros y toma de decisiones con datos.' },
                { title: 'Escalabilidad', desc: 'Arquitectura preparada para crecer con tu operación.' },
                { title: 'Integraciones', desc: 'Ecosistema amplio de integraciones con terceros.' },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-[#E7EBEA] bg-white p-5">
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#D94B45] mr-3" />
                    <h4 className="font-semibold text-gray-900">{f.title}</h4>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#E7EBEA] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Lo que nos guía</h3>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex"><span className="w-2 h-2 rounded-full bg-[#D94B45] mt-2 mr-3"></span>El paciente en primer plano y la confidencialidad, transparencia y seguridad.</li>
                <li className="flex"><span className="w-2 h-2 rounded-full bg-[#D94B45] mt-2 mr-3"></span>Educación continua, trabajo en equipo y talento colectivo.</li>
                <li className="flex"><span className="w-2 h-2 rounded-full bg-[#D94B45] mt-2 mr-3"></span>Ética en los negocios, respeto personal y excelencia profesional.</li>
                <li className="flex"><span className="w-2 h-2 rounded-full bg-[#D94B45] mt-2 mr-3"></span>Innovación para mejorar la rentabilidad y resultados de nuestros clientes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visión y Misión */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F9F8] lg:min-h-screen lg:flex lg:items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white border border-[#E7EBEA] p-8">
            <h3 className="text-2xl font-semibold text-gray-900">Visión</h3>
            <p className="mt-3 text-gray-700">Ser líderes en la transformación digital de laboratorios y centros de diagnóstico, constituyéndonos en su principal socio de negocios, ofreciendo soluciones innovadoras con la mejor propuesta de valor.</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#D94B45] mr-3 mt-2" />Liderar la transformación digital del sector.</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#D94B45] mr-3 mt-2" />Ser proveedor estratégico en LATAM.</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#D94B45] mr-3 mt-2" />Innovación constante con foco en valor.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-[#E7EBEA] p-8">
            <h3 className="text-2xl font-semibold text-gray-900">Misión</h3>
            <p className="mt-3 text-gray-700">Potenciar el impacto del laboratorio clínico con tecnologías de última generación, conectando a los principales actores del sector sanitario y cubriendo los circuitos administrativos, preanalíticos, analíticos, post-analíticos y de gerenciamiento.</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#D94B45] mr-3 mt-2" />Conectar todo el ecosistema de salud.</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#D94B45] mr-3 mt-2" />Interoperabilidad estándar (HL7 / FHIR).</li>
              <li className="flex"><span className="w-2 h-2 rounded-full bg-[#D94B45] mr-3 mt-2" />LIS cloud-first, seguro y escalable.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Política de Calidad */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white lg:min-h-screen lg:flex lg:items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="rounded-2xl bg-white border border-[#E7EBEA] p-8">
            <h3 className="text-2xl font-semibold text-gray-900">Política de Calidad</h3>
            <p className="mt-3 text-gray-700">Nos exigimos creatividad e innovación con liderazgo en diseño, desarrollo e implementación de sistemas de gestión en salud, con un nivel de calidad de excelencia.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              {[
                'Cumplir las expectativas de calidad de nuestros clientes.',
                'Ofrecer productos y servicios conforme a especificaciones y requisitos.',
                'Promover la gestión de la calidad en todos los niveles y procesos.',
                'Asegurar la difusión y comprensión del sistema de gestión de calidad.',
                'Impulsar un management comprometido con la calidad.',
                'Priorizar la mejora continua para aumentar eficiencia y eficacia.',
                'Establecer confianza, colaboración y compromiso con nuestros clientes.',
                'Asegurar el futuro y el desarrollo de la empresa a través de la calidad.',
              ].map((item) => (
                <div key={item} className="flex">
                  <span className="w-2 h-2 rounded-full bg-[#D94B45] mt-2 mr-3" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0f172a] text-white lg:min-h-screen lg:flex lg:items-center">
        <div className="max-w-5xl mx-auto text-center w-full">
          <h2 className="text-3xl sm:text-4xl font-bold">Conversemos sobre tu laboratorio</h2>
          <p className="mt-4 text-lg text-slate-300">Somos tu partner para impulsar la experiencia del paciente y la eficiencia operativa.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-colors">
              Contactarme
            </Link>
            <Link to="/productos" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border border-white/20 text-white hover:text-[#D94B45] hover:border-[#D94B45] transition-colors">
              Ver productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nosotros