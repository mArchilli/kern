import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Colores de marca
// Primario: #D94B45 | Secundario: #9BA6A1

// Assets (imágenes y PDFs) importados desde src/assets/Productos
import imgLis from '../assets/Productos/kern-logolis.jpg'
import pdfLis from '../assets/Productos/ES-BROCHURE-LIS-plus.pdf'
import imgBi from '../assets/Productos/kern-logobi.jpg'
import pdfBi from '../assets/Productos/ES-BROCHURE-BI.pdf'
import imgIx from '../assets/Productos/kern-logoix.jpg'
import pdfIx from '../assets/Productos/ES-BROCHURE-IX.pdf'
import imgAp from '../assets/Productos/kern-logoap.jpg'
import pdfAp from '../assets/Productos/ES-BROCHURE-AP.pdf'

const ImageWithFallback = ({ src, alt }) => {
  const [error, setError] = useState(false)
  return (
    <div className="relative w-full h-48 bg-white overflow-hidden rounded-t-2xl">
      {!error ? (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-[1.05]"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#F7F9F8] to-white flex items-center justify-center text-sm text-gray-500">
          Imagen no disponible
        </div>
      )}
    </div>
  )
}

const ProductCard = ({ p, index }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`group relative rounded-2xl bg-gradient-to-br from-[#D94B45]/15 to-[#9BA6A1]/15 p-[1px] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } transition-all duration-700 ease-out`}
    >
      <div className="relative rounded-2xl bg-white border border-[#E7EBEA] shadow-sm overflow-hidden md:group-hover:shadow-xl md:group-hover:-translate-y-1.5 transition-all duration-300">
        {p.badge && (
          <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#D94B45]/10 text-[#D94B45] border border-[#D94B45]/20">{p.badge}</span>
        )}
        <ImageWithFallback src={p.imagen} alt={p.nombre} />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">{p.nombre}</h3>
          <p className="mt-2 text-gray-700 text-sm leading-relaxed">{p.resumen}</p>

          {p.features?.length > 0 && (
            <ul className="mt-4 space-y-2">
              {p.features.slice(0, 4).map((f) => (
                <li key={f} className="flex items-start text-sm text-gray-700">
                  <span className="mt-1 mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#D94B45]/10 text-[#D94B45]">
                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.293 9.293L8 11l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}

          {p.tags?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#F2F5F4] text-gray-700 border border-[#E7EBEA]"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {p.ideal?.length > 0 && (
            <div className="mt-4 text-xs text-gray-600">
              <span className="font-semibold text-gray-800">Ideal para: </span>
              {p.ideal.join(' · ')}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={p.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-colors"
            >
              Descargar PDF
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-[#D94B45] bg-white border border-[#D94B45]/30 hover:border-[#D94B45] hover:bg-[#D94B45]/5 transition-colors"
            >
              Consultar
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

const Productos = () => {
  const productos = [
    {
      id: 'kern-lis-plus',
      nombre: 'KERN LIS+',
      resumen:
        'Plataforma LIS cloud-first que optimiza el flujo preanalítico y la trazabilidad completa de muestras.',
      tags: ['Preanalítico', 'Gestión de pedidos', 'Extracciones', 'Muestras'],
      imagen: imgLis,
      pdf: pdfLis,
      badge: 'Más elegido',
      features: [
        'Check-in digital y autogestión del paciente',
        'Trazabilidad end-to-end de muestras',
        'Gestión de turnos y extracciones',
        'Dashboards operativos y auditoría',
      ],
      ideal: ['Laboratorios multi-sede', 'Operaciones con alto volumen'],
    },
    {
      id: 'kern-bi',
      nombre: 'KERN BI',
      resumen:
        'Inteligencia de negocios para decisiones ágiles: KPIs, tendencias y tableros gerenciales en tiempo real.',
      tags: ['Business Intelligence', 'Dashboards', 'KPIs'],
      imagen: imgBi,
      pdf: pdfBi,
      badge: 'Novedad',
      features: [
        'KPIs operativos y financieros',
        'Conectores a múltiples fuentes',
        'Alertas y objetivos (OKRs)',
        'Exportación y compartición segura',
      ],
      ideal: ['Dirección y gerencia', 'Analistas de datos'],
    },
    {
      id: 'kern-ix',
      nombre: 'KERN IX',
      resumen:
        'Motor de interfaces e interoperabilidad sanitaria. HL7/FHIR para integrar equipos, HIS/EMR y terceros.',
      tags: ['Interoperabilidad', 'Integraciones', 'HL7 / FHIR'],
      imagen: imgIx,
      pdf: pdfIx,
      features: [
        'Conectividad HL7 / FHIR',
        'Orquestación de flujos y mapping',
        'Monitoreo y reintentos automáticos',
        'Modo stand-alone o integrado',
      ],
      ideal: ['Integraciones complejas', 'IT hospitalaria'],
    },
    {
      id: 'kern-ap',
      nombre: 'KERN AP',
      resumen:
        'Suite para Anatomía Patológica: logística de muestras, rotulado, trazabilidad y reportes especializados.',
      tags: ['Anatomía Patológica', 'Trazabilidad', 'Informes'],
      imagen: imgAp,
      pdf: pdfAp,
      features: [
        'Rotulado de cassettes y cristales',
        'Flujos configurables por protocolo',
        'Trazabilidad y control de calidad',
        'Informes con plantillas avanzadas',
      ],
      ideal: ['Servicios de AP', 'Centros de diagnóstico'],
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero enriquecido */}
      <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        {/* Deco */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#D94B45]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#9BA6A1]/10 blur-3xl" />
        <div className="pointer-events-none absolute -top-40 right-1/3 w-[24rem] h-[24rem] rounded-full bg-[#D94B45]/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2">
            {['Cloud-first', 'Interoperable (HL7/FHIR)', 'Escalable y seguro'].map((chip) => (
              <span key={chip} className="px-3 py-1 rounded-full text-xs font-medium bg-[#F2F5F4] text-[#4B5552] border border-[#E7EBEA]">
                {chip}
              </span>
            ))}
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Impulsá tu laboratorio con nuestra suite
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Soluciones diseñadas para optimizar procesos, elevar la calidad de atención y tomar mejores decisiones con datos reales.
          </p>

          {/* Métricas de confianza */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { n: '+23M', d: 'pacientes anuales' },
              { n: '+840', d: 'puntos de extracción' },
              { n: '+350M', d: 'estudios procesados' },
              { n: '15', d: 'países' },
            ].map((m) => (
              <div
                key={m.d}
                tabIndex={0}
                className="rounded-xl border border-[#E7EBEA] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#D94B45]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94B45]/40"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#D94B45]">{m.n}</div>
                <div className="text-sm text-gray-600">{m.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid productos con animaciones y estilo diferencial */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F9F8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {productos.map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto rounded-2xl border border-[#E7EBEA] p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">¿Querés conocer más en detalle?</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Descargá las fichas técnicas o escribinos y armamos una demo enfocada en tus procesos.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-colors"
            >
              Pedir una demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Productos