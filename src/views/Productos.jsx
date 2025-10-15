import React, { useState } from 'react'
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
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#F7F9F8] to-white flex items-center justify-center text-sm text-gray-500">
          Imagen no disponible
        </div>
      )}
    </div>
  )
}

const Productos = () => {
  const productos = [
    {
      id: 'kern-lis-plus',
      nombre: 'KERN LIS+',
      resumen:
        'Abarca todos los procesos previos al inicio de los procesos analíticos en planta: Gestión de Pedidos, Gestión de Extracciones y Gestión de Muestras.',
      tags: ['Preanalítico', 'Gestión de pedidos', 'Extracciones', 'Muestras'],
      imagen: imgLis,
      pdf: pdfLis,
    },
    {
      id: 'kern-bi',
      nombre: 'KERN BI',
      resumen:
        'Módulo de Inteligencia de Negocios para laboratorios. Permite generar dashboards gerenciales con información relevante abreviada.',
      tags: ['Business Intelligence', 'Dashboards', 'KPIs'],
      imagen: imgBi,
      pdf: pdfBi,
    },
    {
      id: 'kern-ix',
      nombre: 'KERN IX',
      resumen:
        'Motor de interfaces para salud. Plataforma de interoperabilidad entre sistemas Kern y de terceros; puede operar en modo stand-alone.',
      tags: ['Interoperabilidad', 'Integraciones', 'HL7 / FHIR'],
      imagen: imgIx,
      pdf: pdfIx,
    },
    {
      id: 'kern-ap',
      nombre: 'KERN AP',
      resumen:
        'Gestión para Anatomía Patológica: logística de muestras, rotulado de cassettes y cristales, trazabilidad completa e informes de intervenciones.',
      tags: ['Anatomía Patológica', 'Trazabilidad', 'Informes'],
      imagen: imgAp,
      pdf: pdfAp,
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#D94B45]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#9BA6A1]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">Nuestros productos</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Brindamos soluciones para el proceso completo preanalítico, módulo de extracción, autogestión por parte de los pacientes y pre check-in para optimizar los tiempos de atención.
          </p>
        </div>
      </section>

      {/* Grid productos */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F9F8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {productos.map((p) => (
            <article
              key={p.id}
              className="group relative rounded-2xl bg-white border border-[#E7EBEA] shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <ImageWithFallback src={p.imagen} alt={p.nombre} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{p.nombre}</h3>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">{p.resumen}</p>
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
            </article>
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
            <a
              href="/assets/Productos/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#D94B45] bg-white border border-[#D94B45]/30 hover:border-[#D94B45] hover:bg-[#D94B45]/5 transition-colors"
            >
              Ver todos los PDFs
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Productos