import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PillButton from '../components/PillButton'
import claudioImg from '../assets/Nosotros/kern-claudio.jpg'
import diegoImg from '../assets/Nosotros/kern-diego.jpg'
import rodolfoImg from '../assets/Nosotros/kern-rodolfo.jpg'

// Colores de marca
// Primario: #D94B45 | Secundario: #9BA6A1

// Carrusel del equipo
const TeamCarousel = () => {
  const slides = [
    {
      img: claudioImg,
      name: 'Claudio Martín Weisz',
      tags: ['Estrategia', 'Crecimiento', 'Relación con clientes']
    },
    {
      img: rodolfoImg,
      name: 'Rodolfo Renner',
      tags: ['Arquitectura', 'Seguridad', 'DevOps']
    },
    {
      img: diegoImg,
      name: 'Diego Kaminker',
      tags: ['Producto', 'Interoperabilidad', 'Calidad']
    },
  ]
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3000)
    return () => clearInterval(id)
  }, [paused, slides.length])

  // Swipe básico
  const [startX, setStartX] = useState(null)
  const [deltaX, setDeltaX] = useState(0)

  const onTouchStart = (e) => {
    setStartX(e.touches[0].clientX)
  }
  const onTouchMove = (e) => {
    if (startX == null) return
    const dx = e.touches[0].clientX - startX
    setDeltaX(dx)
  }
  const onTouchEnd = () => {
    if (Math.abs(deltaX) > 50) {
      setIndex((i) => (deltaX < 0 ? (i + 1) % slides.length : (i - 1 + slides.length) % slides.length))
    }
    setStartX(null)
    setDeltaX(0)
  }

  return (
    <div
      className="relative overflow-hidden max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(calc(-${index * 100}% + ${deltaX}px))` }}
        >
          {slides.map((p) => (
            <div key={p.name} className="w-full flex-shrink-0 px-1 sm:px-2">
              <div className="group rounded-[28px] bg-white p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 mb-6 max-h-[360px] md:max-h-[420px]">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#D94B45]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#D94B45] transition-colors">{p.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 group-hover:bg-[#D94B45]/10 group-hover:text-[#D94B45] transition-colors">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} aria-label={`Ir al slide ${i + 1}`} className={`h-2.5 rounded-full transition-all ${index === i ? 'w-6 bg-[#D94B45]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`} />
        ))}
      </div>
    </div>
  )
}

// Carrusel vertical de features (muestra 2 ítems a la vez)
const VerticalFeatureLoop = ({ items }) => {
  // Pares de 2 ítems. Si es impar, se completa en forma circular.
  const pairs = useMemo(() => {
    const out = []
    const n = items.length
    for (let i = 0; i < n; i += 2) {
      const a = items[i]
      const b = items[(i + 1) % n]
      out.push([a, b])
    }
    return out
  }, [items])

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || pairs.length <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % pairs.length), 3000)
    return () => clearInterval(id)
  }, [paused, pairs.length])

  // Altura fija por fila para un desplazamiento suave (2 filas visibles)
  const ROW_H = 96 // px (h-24)
  const GAP = 12   // px (gap-3)
  const VIEWPORT_H = ROW_H * 2 + GAP // 204px

  return (
    <div
      className="relative mx-auto max-w-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden" style={{ height: VIEWPORT_H }}>
        <div
          className="transition-transform duration-700 ease-out"
          style={{ transform: `translateY(-${index * (ROW_H * 2 + GAP)}px)` }}
        >
          {pairs.map((pair, pIdx) => (
            <div key={pIdx} className="flex flex-col gap-3" style={{ height: VIEWPORT_H }}>
              {pair.map((f, i) => (
                <div
                  key={`${f.title}-${i}`}
                  className="h-24 rounded-2xl border border-[#E7EBEA] bg-white p-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04),inset_0_0_0_1px_rgba(0,0,0,0.02)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D94B45] to-[#c7413c] text-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base font-bold text-gray-900 mb-1">{f.title}</h4>
                      <p className="text-sm text-gray-600 leading-snug overflow-hidden">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dots de navegación */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {pairs.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir al bloque ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${index === i ? 'w-6 bg-[#D94B45]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  )
}

// Carrusel horizontal (desktop): muestra 3 features a la vez y avanza al siguiente grupo de 3
const HorizontalFeatureLoop3 = ({ items }) => {
  const slides = useMemo(() => {
    const n = items.length
    if (n === 0) return []
    const groups = Math.ceil(n / 3)
    const out = []
    for (let g = 0; g < groups; g++) {
      const base = g * 3
      out.push([
        items[(base + 0) % n],
        items[(base + 1) % n],
        items[(base + 2) % n],
      ])
    }
    return out
  }, [items])

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || slides.length <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3000)
    return () => clearInterval(id)
  }, [paused, slides.length])

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((group, gi) => (
            <div key={gi} className="w-full flex-shrink-0">
              <div className="grid grid-cols-3 gap-6">
                {group.map((f, idx) => (
                  <div 
                    key={`${f.title}-${idx}`}
                    className="group rounded-[28px] bg-white p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D94B45] to-[#c7413c] text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#D94B45] transition-colors">{f.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots de navegación */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir al grupo ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${index === i ? 'w-6 bg-[#D94B45]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  )
}

const Nosotros = () => {
  // Datos desktop para las 3 cards
  const teamDesktop = [
    {
      img: claudioImg,
      name: 'Claudio Martín Weisz',
      tags: ['Estrategia', 'Crecimiento', 'Relación con clientes']
    },
    {
      img: rodolfoImg,
      name: 'Rodolfo Renner',
      tags: ['Arquitectura', 'Seguridad', 'DevOps']
    },
    {
      img: diegoImg,
      name: 'Diego Kaminker',
      tags: ['Producto', 'Interoperabilidad', 'Calidad']
    },
  ]

  // Lista de features reutilizable (grid desktop y loop mobile)
  const featureItems = [
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
  ]

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* Hero moderno */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        {/* Gradient decorativo */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D94B45]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenido principal */}
            <div>
              <h1 className="text-4xl text-center sm:text-left sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                ¿Por qué <span className="text-[#D94B45]">Kern IT</span>?
              </h1>
              
              <span className="block w-fit mx-auto sm:mx-0 sm:inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/10 text-[#D94B45] text-sm font-semibold mb-6">
                Sobre nosotros
              </span>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 text-center">
                Somos partners. Kern-IT es el socio estratégico por excelencia de los laboratorios de análisis clínicos y centros de diagnóstico. Desde hace más de 20 años, brindamos soluciones tecnológicas diseñadas para la mejora de la experiencia de los pacientes.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <PillButton to="/contacto" variant="primary">Contactarnos</PillButton>
                <PillButton to="/productos" variant="secondary">Ver productos</PillButton>
              </div>
            </div>

            {/* Panel destacado con stats */}
            <div className="relative">
              {/* Borde con gradiente */}
              <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[#D94B45]/40 via-[#D94B45]/10 to-transparent shadow-xl">
                {/* Contenido */}
                <div className="relative rounded-[22px] bg-white/90 backdrop-blur border border-[#E7EBEA] p-8 overflow-hidden">
                  {/* Decoraciones */}
                  <div className="pointer-events-none absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#D94B45]/10 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-[#9BA6A1]/10 blur-3xl" />

                  {/* Marca de agua SVG (globo) */}
                  <svg aria-hidden="true" className="pointer-events-none absolute -top-8 -right-8 w-44 h-44 opacity-10 text-[#D94B45]" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.5" />
                    <ellipse cx="32" cy="32" rx="20" ry="30" stroke="currentColor" strokeWidth="1.5" />
                    <ellipse cx="32" cy="32" rx="30" ry="12" stroke="currentColor" strokeWidth="1.5" />
                  </svg>

                  {/* Header con icono */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-[#D94B45]/10 text-[#D94B45] flex items-center justify-center">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 018 8c0 .69-.09 1.36-.25 2H14a2 2 0 00-2 2v5.75A8 8 0 014 12a8 8 0 018-8z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Presencia internacional</h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Contamos con operaciones y representantes locales en distintos mercados de Latinoamérica y Estados Unidos.
                  </p>

                  {/* Stats con iconos */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#D94B45]/5 to-white border border-[#F1E1E0]">
                      <div className="h-10 w-10 rounded-xl bg-white text-[#D94B45] border border-[#F3D3D1] flex items-center justify-center flex-shrink-0">
                        <svg className="h-5 w-5 text-[#D94B45]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm4.5 8a.5.5 0 010 1h-9a.5.5 0 010-1h9zM7 13.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z"/></svg>
                      </div>
                      <div>
                        <div className="text-3xl font-extrabold text-gray-900 leading-none">15</div>
                        <div className="text-sm font-medium text-gray-600">países</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#9BA6A1]/10 to-white border border-[#E7EBEA]">
                      <div className="h-10 w-10 rounded-xl bg-white text-[#D94B45] border border-[#E7EBEA] flex items-center justify-center flex-shrink-0">
                        <svg className="h-5 w-5 text-[#D94B45]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 8a1 1 0 011 1v3.2l2.4 1.4a1 1 0 11-1 1.8l-3-1.8A1 1 0 0111 12V9a1 1 0 011-1zm0-6a10 10 0 100 20 10 10 0 000-20z"/></svg>
                      </div>
                      <div>
                        <div className="text-3xl font-extrabold text-gray-900 leading-none">+20</div>
                        <div className="text-sm font-medium text-gray-600">años de experiencia</div>
                      </div>
                    </div>
                  </div>

                  {/* Chips de cobertura */}
                  <div className="flex flex-wrap justify-center gap-3 mb-6">
                    {['LatAm', 'EE.UU.', 'Caribe'].map((r) => (
                      <span
                        key={r}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#D94B45]/30 bg-white text-sm md:text-base text-gray-800 font-medium shadow-sm hover:shadow transition"
                      >
                        <span className="h-2 w-2 rounded-full bg-[#D94B45]" />
                        {r}
                      </span>
                    ))}
                  </div>

                  {/* Features adicionales */}
                  <div className="pt-5 border-t border-gray-100">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        'Transformación digital',
                        'Innovación continua',
                        'Soporte 24/7'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D94B45]/10">
                            <svg className="h-3.5 w-3.5 text-[#D94B45]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                          </span>
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo de expertos con diseño moderno */}
  <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F7F9F8]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Expertos en salud digital
            </h2>

            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/10 text-[#D94B45] text-sm font-semibold mb-5">
              Nuestro equipo
            </span>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Líderes con más de 20 años en tecnología para la salud, aportando su experiencia para mejorar la calidad de atención al paciente.
            </p>
          </div>

          {/* Carrusel del equipo */}
          {/* Mobile: carrusel */}
          <div className="relative touch-pan-x overscroll-x-contain md:hidden">
            <TeamCarousel />
          </div>

          {/* Desktop: 3 cards estáticas */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {teamDesktop.map((p) => (
              <div key={p.name} className="relative rounded-[28px] p-[1px] bg-gradient-to-br from-[#D94B45]/20 via-white to-[#9BA6A1]/20 group transition">
                <div className="rounded-[26px] bg-white/90 backdrop-blur border border-[#E7EBEA] p-6 h-full shadow-[0_10px_25px_rgba(0,0,0,0.05)] relative overflow-hidden">
                  {/* decoraciones sutiles */}
                  <div className="pointer-events-none absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[#D94B45]/10 blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#9BA6A1]/10 blur-2xl" />

                  {/* Imagen */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 mb-6">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#D94B45]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Nombre + ícono tech */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-xl bg-[#D94B45]/10 text-[#D94B45] flex items-center justify-center">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8zm6 1a1 1 0 100 2h4a1 1 0 100-2h-4z"/></svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#D94B45] transition-colors">{p.name}</h3>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-[#E7EBEA]">
                        {tag}
                      </span>
                    ))}
                  </div>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                Cubrimos las necesidades de tu laboratorio
              </h2>

              <span className="inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/10 text-[#D94B45] text-sm font-semibold mb-6">
                Nuestras capacidades
              </span>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Nuestras soluciones cubren las necesidades de un laboratorio moderno en todos los circuitos:
              </p>
              
              {/* Chips de circuitos con mayor protagonismo controlado */}
              <div className="flex flex-wrap gap-x-4 gap-y-4 mb-8">
                {['Administrativos', 'Preanalíticos', 'Analíticos', 'Post-analíticos', 'Gerenciamiento'].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D94B45]/30 bg-white text-sm md:text-base text-gray-800 font-medium shadow-sm hover:shadow-md hover:border-[#D94B45]/40 transition whitespace-nowrap"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#D94B45]" />
                    {t}
                  </span>
                ))}
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos líderes en interoperabilidad y ofrecemos productos sólidos, flexibles y escalables, que funcionan en todas las plataformas.
              </p>
            </div>

            {/* Sidebar con valores (nuevo estilo) */}
            <div className="relative rounded-3xl bg-white border border-[#E7EBEA] p-8 shadow-[0_10px_25px_rgba(0,0,0,0.06)] overflow-hidden">
              {/* Barra vertical con gradiente sobrio */}
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#9BA6A1] to-[#D94B45]" />

              {/* Patrón SVG de líneas con trazo en gradiente */}
              <svg aria-hidden="true" className="pointer-events-none absolute -top-6 -right-10 w-56 h-56 opacity-20" viewBox="0 0 200 200" fill="none">
                <defs>
                  <linearGradient id="guideStroke" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#9BA6A1" />
                    <stop offset="100%" stopColor="#D94B45" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="70" stroke="url(#guideStroke)" strokeWidth="2" fill="none" />
                <circle cx="100" cy="100" r="40" stroke="url(#guideStroke)" strokeWidth="1.5" fill="none" />
                <path d="M10 120C40 80 80 140 110 100C140 60 170 90 190 70" stroke="url(#guideStroke)" strokeWidth="1.5" fill="none" />
              </svg>

              {/* Header con ícono y fondo degradado suave */}
              <div className="flex items-center gap-3 mb-6 relative">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#D94B45]/20 to-[#9BA6A1]/20 text-[#D94B45] flex items-center justify-center border border-[#E7EBEA]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.5 7.5L22 10l-6 4.5 2 7L12 17l-6 4.5 2-7L2 10l7.5-.5L12 2z"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Lo que nos guía</h3>
              </div>

              <div className="space-y-4 relative">
                {[
                  'El paciente en primer plano y la confidencialidad, transparencia y seguridad.',
                  'Educación continua, trabajo en equipo y talento colectivo.',
                  'Ética en los negocios, respeto personal y excelencia profesional.',
                  'Innovación para mejorar la rentabilidad y resultados de nuestros clientes.'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#F0F2F2] shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-white to-[#F8FAF9] text-[#D94B45] border border-[#E7EBEA] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features: loop vertical en mobile, grilla estática en desktop */}
          <div className="mt-16">
            {/* Mobile: loop vertical 2 en 2 */}
            <div className="md:hidden touch-pan-y overscroll-y-contain">
              <VerticalFeatureLoop items={featureItems} />
            </div>

            {/* Desktop: carrusel horizontal 3 en 3 */}
            <div className="hidden md:block">
              <HorizontalFeatureLoop3 items={featureItems} />
            </div>
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