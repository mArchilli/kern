import React from 'react'
import { Link } from 'react-router-dom'
import PillButton from '../components/PillButton'
import kernHomeImg from '../assets/kern-home.jpg'

// Colores de marca usados (desde el logo):
// Primario (rojo): #D94B45
// Secundario (gris verdoso): #9BA6A1

const Home = () => {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* Hero - Mobile First */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-start py-8 px-4 sm:py-10 sm:px-6 lg:px-8 lg:pt-16 bg-gradient-to-br from-white via-white to-[#F5F7F6]">
        {/* Gradiente decorativo rojo en esquina superior izquierda */}
        <div className="pointer-events-none absolute top-0 left-0 w-[35rem] h-[35rem] rounded-full bg-[#D94B45]/15 blur-3xl -translate-x-1/3 -translate-y-1/3" />

        <div className="relative max-w-7xl mx-auto w-full">
          {/* Grid principal: texto e imagen lado a lado en desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-start mb-16">
            {/* Contenido principal */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-gray-900 mb-6">
                Mejorar la experiencia del paciente es nuestro objetivo
              </h1>

              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#D94B45]/10 border border-[#D94B45]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#D94B45] mr-2 animate-pulse" />
                <span className="text-sm font-medium text-[#D94B45]">+20 años de experiencia en salud</span>
              </div>
              
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
                Kern-it es el nexo para mejorar la calidad de atención y enriquecer la experiencia del paciente. A través de tecnología innovadora, acompañamos a nuestros clientes para posicionar al paciente en primer plano.
              </p>

              {/* Botones separados con forma redondeada */}
              <div className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                <PillButton to="/contacto" variant="primary" aria-label="Contactar con Kern-it">Contactarme</PillButton>
                <PillButton to="/nosotros" variant="secondary" aria-label="Conocer más sobre Kern-it">Conocer más</PillButton>
              </div>
            </div>

            {/* Columna derecha: Imagen y Stats */}
            <div className="relative space-y-8">
              {/* Imagen */}
              <div className="hidden md:block relative overflow-hidden rounded-3xl shadow-2xl lg:max-h-[550px]">
                <img 
                  src={kernHomeImg} 
                  alt="Profesionales de salud usando tecnología Kern-it" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats Marquee - Carrusel Infinito en Card */}
            <div className="relative rounded-3xl bg-white border-2 border-[#D94B45]/30 shadow-lg overflow-hidden py-4 px-6 sm:py-5 sm:px-8">
              {/* Estilo de animación en línea para el marquee */}
              <style>{`
                @keyframes scroll-left {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll {
                  animation: scroll-left 25s linear infinite;
                }
                .animate-scroll:hover {
                  animation-play-state: paused;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                
                /* Feature cards animations */
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                
                .feature-card {
                  animation: fadeInUp 0.6s ease-out forwards;
                  opacity: 0;
                }
                
                .card-container:hover {
                  box-shadow: 0 20px 25px -5px rgba(217, 75, 69, 0.15), 
                              0 10px 10px -5px rgba(217, 75, 69, 0.08),
                              inset 0 0 0 1px rgba(217, 75, 69, 0.1) !important;
                }
                
                .card-number {
                  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                
                .card-container:hover .card-number {
                  transform: scale(1.1) rotate(-5deg);
                  color: rgba(217, 75, 69, 0.1) !important;
                }
              `}</style>
              
              {/* Contenedor de marquee duplicado para efecto infinito */}
              <div className="flex animate-scroll min-w-max">
                {/* Primera iteración de stats */}
                {[
                  { value: '+23M', label: 'Pacientes anuales en LATAM', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
                  { value: '+840', label: 'Puntos de extracción', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
                  { value: '+350M', label: 'Estudios procesados anualmente', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
                  { value: '15', label: 'Países con instalaciones', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
                ].map((stat, i) => (
                  <div 
                    key={`first-${i}`}
                    className="flex-shrink-0 mr-8 pr-8 border-r-2 border-[#D94B45]/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-16 h-16 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#D94B45]/10 to-[#D94B45]/5 flex items-center justify-center">
                        <svg className="w-8 h-8 sm:w-7 sm:h-7 text-[#D94B45]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                        </svg>
                      </div>
                      <div>
                        <div className="text-3xl sm:text-2xl font-bold text-gray-900 leading-tight">{stat.value}</div>
                        <div className="text-sm sm:text-xs text-gray-600 whitespace-nowrap mt-1">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Segunda iteración (duplicado para efecto infinito) */}
                {[
                  { value: '+23M', label: 'Pacientes anuales en LATAM', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
                  { value: '+840', label: 'Puntos de extracción', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
                  { value: '+350M', label: 'Estudios procesados anualmente', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
                  { value: '15', label: 'Países con instalaciones', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
                ].map((stat, i) => (
                  <div 
                    key={`second-${i}`}
                    className="flex-shrink-0 mr-8 pr-8 border-r-2 border-[#D94B45]/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-16 h-16 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#D94B45]/10 to-[#D94B45]/5 flex items-center justify-center">
                        <svg className="w-8 h-8 sm:w-7 sm:h-7 text-[#D94B45]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                        </svg>
                      </div>
                      <div>
                        <div className="text-3xl sm:text-2xl font-bold text-gray-900 leading-tight">{stat.value}</div>
                        <div className="text-sm sm:text-xs text-gray-600 whitespace-nowrap mt-1">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Gradientes de fade en los extremos */}
              <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            </div>
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
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Gradiente central */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-[#D94B45]/15 blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Header de sección */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tecnología centrada en el paciente
            </h2>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/10 text-[#D94B45] text-sm font-semibold mb-4">
              Soluciones integrales
            </span>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transformamos la experiencia de atención médica con soluciones diseñadas para cada etapa del proceso
            </p>
          </div>

          {/* Cards - Carrusel táctil en mobile, grid en desktop */}
          <div className="relative">
            {/* Versión Mobile: Carrusel infinito con efecto stack */}
            <div className="md:hidden">
              <style>{`
                @keyframes slideIn {
                  from {
                    transform: translateX(100%) scale(0.9);
                    opacity: 0;
                  }
                  to {
                    transform: translateX(0) scale(1);
                    opacity: 1;
                  }
                }
                @keyframes slideOut {
                  from {
                    transform: translateX(0) scale(1);
                    opacity: 1;
                  }
                  to {
                    transform: translateX(-100%) scale(0.9);
                    opacity: 0;
                  }
                }
                .card-enter {
                  animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .card-exit {
                  animation: slideOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
              `}</style>
              
              <div className="relative h-[420px] flex items-center justify-center px-4 overflow-hidden">
                {/* Cards superpuestas con efecto stack */}
                {(() => {
                  const cards = [
                    {
                      title: 'Prestaciones',
                      description: 'La tecnología debe contemplar todas las necesidades del paciente para brindarle una mejor experiencia.',
                      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                      link: '/productos',
                      cta: 'Ver prestaciones',
                      gradient: 'from-[#D94B45]/10 to-[#D94B45]/5',
                      color: '#D94B45'
                    },
                    {
                      title: 'Productos',
                      description: 'Optimizar y mejorar la relación con el paciente es clave. Conocé nuestros productos para alcanzar este objetivo de negocios.',
                      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
                      link: '/productos',
                      cta: 'Ver productos',
                      gradient: 'from-[#D94B45]/10 to-[#D94B45]/5',
                      color: '#D94B45'
                    },
                    {
                      title: 'Nuestro servicio',
                      description: 'Nos adaptamos con profesionalismo a las necesidades de nuestros clientes y a la velocidad del mercado.',
                      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                      link: '/nosotros',
                      cta: 'Conocer más',
                      gradient: 'from-[#D94B45]/8 to-[#9BA6A1]/8',
                      color: '#D94B45'
                    }
                  ];
                  
                  const [currentIndex, setCurrentIndex] = React.useState(0);
                  const [touchStart, setTouchStart] = React.useState(0);
                  const [touchEnd, setTouchEnd] = React.useState(0);
                  const [isPaused, setIsPaused] = React.useState(false);
                  
                  const nextCard = () => {
                    setCurrentIndex((prev) => (prev + 1) % cards.length);
                  };
                  
                  const prevCard = () => {
                    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
                  };
                  
                  const handleTouchStart = (e) => {
                    setIsPaused(true);
                    setTouchStart(e.targetTouches[0].clientX);
                  };
                  
                  const handleTouchMove = (e) => {
                    setTouchEnd(e.targetTouches[0].clientX);
                  };
                  
                  const handleTouchEnd = () => {
                    if (touchStart - touchEnd > 75) {
                      nextCard();
                    }
                    if (touchStart - touchEnd < -75) {
                      prevCard();
                    }
                    setTimeout(() => setIsPaused(false), 3000);
                  };
                  
                  // Auto-play cada 3 segundos
                  React.useEffect(() => {
                    if (!isPaused) {
                      const interval = setInterval(() => {
                        nextCard();
                      }, 3000);
                      return () => clearInterval(interval);
                    }
                  }, [currentIndex, isPaused]);
                  
                  return (
                    <>
                      {/* Stack de cards */}
                      <div 
                        className="relative w-full max-w-sm mx-auto h-full touch-pan-x overscroll-x-contain overflow-hidden rounded-[28px] isolate bg-white"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                      >
                        {cards.map((card, i) => {
                          const isCurrent = i === currentIndex;
                          const isNext = i === (currentIndex + 1) % cards.length;
                          const isPrev = i === (currentIndex - 1 + cards.length) % cards.length;
                          
                          let zIndex = 0;
                          let transform = 'translateX(100%) scale(0.85)';
                          let opacity = 0;
                          
                          if (isCurrent) {
                            zIndex = 30;
                            // Leve scale para permitir que se asomen las tarjetas laterales sin halo oscuro
                            transform = 'translateX(0) scale(0.98) rotate(0deg)';
                            opacity = 1;
                          } else if (isNext) {
                            zIndex = 20;
                            transform = 'translateX(12%) scale(0.92) rotate(0deg)';
                            opacity = 0.6;
                          } else if (isPrev) {
                            zIndex = 10;
                            transform = 'translateX(-12%) scale(0.92) rotate(0deg)';
                            opacity = 0.6;
                          }
                          
                          return (
                            <div
                              key={i}
                              className="absolute inset-0 transition-all duration-500 ease-out"
                              style={{
                                zIndex,
                                transform,
                                opacity,
                                willChange: 'transform',
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden',
                                transformStyle: 'preserve-3d',
                              }}
                            >
                              <div className={`relative h-full overflow-hidden rounded-3xl bg-white transition-shadow duration-300 ${isCurrent ? 'shadow-2xl border-2 border-gray-100' : 'border-2 border-transparent shadow-none'}`}>
                                {/* Borde superior de color */}
                                <div className="h-1.5 w-full rounded-t-3xl" style={{ background: card.color }} />
                                
                                {/* Gradient background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} pointer-events-none rounded-3xl z-0`} />
                                
                                <div className="relative z-10 p-8 h-full flex flex-col">
                                  {/* Icono */}
                                  <div 
                                    className="w-16 h-16 rounded-2xl text-white flex items-center justify-center mb-6 shadow-xl transform hover:scale-110 transition-transform"
                                    style={{ background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}dd 100%)` }}
                                  >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                                    </svg>
                                  </div>

                                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {card.title}
                                  </h3>
                                  
                                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                                    {card.description}
                                  </p>

                                  <Link 
                                    to={card.link} 
                                    className="inline-flex items-center justify-center font-semibold text-white rounded-full py-3 px-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                                    style={{ background: card.color }}
                                  >
                                    {card.cta}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Indicadores y controles */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                        {/* Indicadores de posición */}
                        <div className="flex gap-2">
                          {cards.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCurrentIndex(i)}
                              className={`h-2 rounded-full transition-all ${
                                i === currentIndex 
                                  ? 'w-8 bg-[#D94B45]' 
                                  : 'w-2 bg-gray-300'
                              }`}
                              aria-label={`Ir a card ${i + 1}`}
                            />
                          ))}
                        </div>
                        
                        {/* Botones de navegación */}
                        <div className="flex gap-3">
                          <button
                            onClick={prevCard}
                            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#D94B45] hover:bg-[#D94B45] hover:text-white transition-all transform hover:scale-110"
                            aria-label="Anterior"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={nextCard}
                            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#D94B45] hover:bg-[#D94B45] hover:text-white transition-all transform hover:scale-110"
                            aria-label="Siguiente"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>

            {/* Versión Desktop: Grid normal */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
        </div>
      </section>

      {/* Diferenciadores - Mobile First */}
      <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F7F9F8] to-white">
        {/* Gradiente en esquina superior izquierda con azul marino */}
        <div className="pointer-events-none absolute top-0 left-0 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-gray-900/15 via-gray-800/10 to-transparent blur-3xl -translate-x-1/3 -translate-y-1/3" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Qué nos hace diferentes
            </h2>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/10 text-[#D94B45] text-sm font-semibold mb-4">
              Por qué elegirnos
            </span>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Acompañamos a nuestros clientes desde hace más de 20 años y somos sus aliados estratégicos para brindar la mejor experiencia del paciente y alcanzar los máximos niveles de satisfacción
            </p>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
                title: 'Laboratorio de calidad',
                description: 'La experiencia del paciente y la capacidad de procesar el volumen de operaciones son claves',
                number: '01'
              },
              {
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Experiencia en el rubro',
                description: 'Desde hace más de 20 años, acompañamos a nuestros clientes para mejorar la experiencia del paciente',
                number: '02'
              },
              {
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Resultados precisos',
                description: 'Anualmente, procesamos más de 350 millones de estudios con los más altos estándares',
                number: '03'
              },
              {
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                title: 'Personal calificado',
                description: 'Profesionales que se destacan por su flexibilidad y adaptación a una industria en evolución',
                number: '04'
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="feature-card group relative"
                style={{
                  animationDelay: `${i * 100}ms`
                }}
              >
                {/* Neumorphic card con Material Design */}
                <div className="card-container relative h-full rounded-[28px] bg-white p-8 transition-all duration-500 ease-out hover:-translate-y-3"
                  style={{
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03), inset 0 0 0 1px rgba(0, 0, 0, 0.03)'
                  }}
                >
                  {/* Barra superior de acento */}
                  <div className="accent-bar absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#D94B45] via-[#D94B45]/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Contenido */}
                  <div className="card-content relative z-10 flex flex-col h-full">
                    {/* Icono con efecto neumórfico */}
                    <div className="icon-wrapper relative mb-6 inline-flex">
                      <div className="icon-circle w-20 h-20 rounded-full bg-gradient-to-br from-[#D94B45]/10 to-[#D94B45]/5 flex items-center justify-center backdrop-blur-sm transition-all duration-500 group-hover:scale-105"
                        style={{
                          boxShadow: 'inset 0 2px 8px rgba(217, 75, 69, 0.1), 0 4px 12px rgba(217, 75, 69, 0.08)'
                        }}
                      >
                        <div className="icon-inner w-14 h-14 rounded-full bg-gradient-to-br from-[#D94B45] to-[#c7413c] flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:shadow-[#D94B45]/30 transition-all duration-500">
                          <svg className="w-7 h-7 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                          </svg>
                        </div>
                      </div>
                      {/* Glow effect */}
                      <div className="icon-glow absolute inset-0 rounded-full bg-[#D94B45]/20 scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl" />
                    </div>

                    {/* Título */}
                    <h3 className="card-title text-xl font-bold text-gray-900 mb-3 leading-snug tracking-tight group-hover:text-[#D94B45] transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Descripción */}
                    <p className="card-description text-[15px] text-gray-600 leading-relaxed flex-grow">
                      {item.description}
                    </p>

                    {/* Barra de progreso decorativa */}
                    <div className="progress-bar mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="progress-fill h-full bg-gradient-to-r from-[#D94B45] to-[#D94B45]/60 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                    </div>
                  </div>

                  {/* Hover shadow overlay */}
                  <div className="card-overlay absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: '0 20px 25px -5px rgba(217, 75, 69, 0.15), 0 10px 10px -5px rgba(217, 75, 69, 0.08)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Horizontal scroll con snap - Loop infinito */}
          <div className="md:hidden relative">
            <div className="relative -mx-4 px-4">
              <div ref={(el) => {
                if (el && !el.dataset.initialized) {
                  el.dataset.initialized = 'true';
                  const scrollContainer = el;
                  const updateIndicators = () => {
                    const scrollLeft = scrollContainer.scrollLeft;
                    const cardWidth = scrollContainer.offsetWidth * 0.85 + 16; // 85vw + gap
                    const currentIndex = Math.round(scrollLeft / cardWidth) % 4;
                    const indicators = document.querySelectorAll('.carousel-indicator');
                    indicators.forEach((indicator, i) => {
                      if (i === currentIndex) {
                        indicator.classList.add('active-indicator');
                      } else {
                        indicator.classList.remove('active-indicator');
                      }
                    });
                  };
                  scrollContainer.addEventListener('scroll', updateIndicators);
                }
              }} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-6">
              {(() => {
                const cards = [
                  {
                    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
                    title: 'Laboratorio de calidad',
                    description: 'La experiencia del paciente y la capacidad de procesar el volumen de operaciones son claves',
                    number: '01'
                  },
                  {
                    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                    title: 'Experiencia en el rubro',
                    description: 'Desde hace más de 20 años, acompañamos a nuestros clientes para mejorar la experiencia del paciente',
                    number: '02'
                  },
                  {
                    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                    title: 'Resultados precisos',
                    description: 'Anualmente, procesamos más de 350 millones de estudios con los más altos estándares',
                    number: '03'
                  },
                  {
                    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                    title: 'Personal calificado',
                    description: 'Profesionales que se destacan por su flexibilidad y adaptación a una industria en evolución',
                    number: '04'
                  }
                ];
                
                // Duplicar las cards para crear loop infinito
                return [...cards, ...cards, ...cards].map((item, i) => (
                <div 
                  key={i}
                  className="flex-shrink-0 w-[85vw] snap-center"
                >
                  <div className="mobile-card relative h-full rounded-[28px] bg-white p-8"
                    style={{
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03), inset 0 0 0 1px rgba(0, 0, 0, 0.03)'
                    }}
                  >
                    {/* Número semi-translúcido */}
                    <div className="absolute top-6 right-6 text-7xl font-black leading-none select-none"
                      style={{
                        color: 'rgba(217, 75, 69, 0.06)',
                        WebkitTextStroke: '1px rgba(217, 75, 69, 0.08)'
                      }}
                    >
                      {item.number}
                    </div>

                    {/* Barra superior de acento */}
                    <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#D94B45] via-[#D94B45]/50 to-transparent rounded-full" />
                    
                    {/* Contenido */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icono */}
                      <div className="relative mb-6 inline-flex">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D94B45]/10 to-[#D94B45]/5 flex items-center justify-center backdrop-blur-sm"
                          style={{
                            boxShadow: 'inset 0 2px 8px rgba(217, 75, 69, 0.1), 0 4px 12px rgba(217, 75, 69, 0.08)'
                          }}
                        >
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D94B45] to-[#c7413c] flex items-center justify-center text-white shadow-lg">
                            <svg className="w-7 h-7 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Título */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug tracking-tight">
                        {item.title}
                      </h3>
                      
                      {/* Descripción */}
                      <p className="text-[15px] text-gray-600 leading-relaxed flex-grow">
                        {item.description}
                      </p>

                      {/* Barra de progreso */}
                      <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#D94B45] to-[#D94B45]/60 rounded-full" style={{ width: '60%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              ));
              })()}
              </div>
              
              {/* Flechas de navegación laterales */}
              <button
                onClick={(e) => {
                  const container = e.target.closest('.relative').querySelector('.overflow-x-auto');
                  const cardWidth = container.offsetWidth * 0.85 + 16;
                  container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-[#D94B45]"
                aria-label="Anterior"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={(e) => {
                  const container = e.target.closest('.relative').querySelector('.overflow-x-auto');
                  const cardWidth = container.offsetWidth * 0.85 + 16;
                  container.scrollBy({ left: cardWidth, behavior: 'smooth' });
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-[#D94B45]"
                aria-label="Siguiente"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Indicadores de posición */}
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    const container = e.target.closest('.md\\:hidden').querySelector('.overflow-x-auto');
                    const cardWidth = container.offsetWidth * 0.85 + 16;
                    container.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
                  }}
                  className={`carousel-indicator h-2 rounded-full transition-all ${
                    i === 0 ? 'w-8 bg-[#D94B45] active-indicator' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Ir a card ${i + 1}`}
                />
              ))}
            </div>
            
            <style>{`
              .carousel-indicator {
                transition: all 0.3s ease;
              }
              .carousel-indicator.active-indicator {
                width: 2rem;
                background-color: #D94B45;
              }
              .carousel-indicator:not(.active-indicator) {
                width: 0.5rem;
                background-color: #D1D5DB;
              }
            `}</style>
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

              {/* CTAs separados */}
              <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                <Link
                  to="/contacto"
                  className="px-8 py-4 rounded-full font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                  aria-label="Iniciar consulta"
                >
                  Iniciar consulta
                </Link>
                <Link
                  to="/nosotros"
                  className="px-8 py-4 rounded-full font-semibold text-white border-2 border-[#D94B45] hover:bg-[#D94B45] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
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
                    'Análisis personalizado de necesidades',
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
                  className="block w-full px-6 py-4 rounded-full font-semibold text-center text-white bg-gradient-to-r from-[#D94B45] to-[#c7413c] hover:shadow-lg hover:shadow-[#D94B45]/30 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Empezar ahora
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
          {/* Encabezado centrado */}
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Somos tu partner en salud
            </h3>
            
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D94B45]/10 text-[#D94B45] text-sm font-semibold mb-6">
              Tu aliado estratégico
            </span>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Acompañamos a nuestros clientes desde hace más de 20 años y somos sus aliados estratégicos para brindar la mejor experiencia del paciente y alcanzar los máximos niveles de satisfacción
            </p>
          </div>

          {/* Contenedor de servicios */}
          <div>

              {/* Servicios interactivos */}
              {(() => {
                const services = [
                  {
                    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                    title: 'Implementación ágil',
                    shortDesc: 'Procesos claros y acompañamiento',
                    fullDesc: 'Procesos claros y acompañamiento para una adopción sin fricción',
                    features: [
                      'Onboarding estructurado en 3 fases',
                      'Capacitación personalizada del equipo',
                      'Soporte técnico durante la implementación'
                    ]
                  },
                  {
                    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
                    title: 'Soporte dedicado',
                    shortDesc: 'Equipo experto y flexible',
                    fullDesc: 'Equipo experto, flexible y atento a tu operación diaria',
                    features: [
                      'Mesa de ayuda 24/7 disponible',
                      'Actualizaciones y mejoras continuas',
                      'Monitoreo proactivo del sistema'
                    ]
                  },
                  {
                    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                    title: 'Mejora continua',
                    shortDesc: 'Optimización con datos reales',
                    fullDesc: 'Iteramos con datos reales para optimizar la experiencia del paciente',
                    features: [
                      'Análisis de métricas y KPIs clave',
                      'Reportes de satisfacción del paciente',
                      'Recomendaciones basadas en datos'
                    ]
                  },
                  {
                    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                    title: 'Seguridad y cumplimiento',
                    shortDesc: 'Estándares del sector',
                    fullDesc: 'Buenas prácticas y estándares del sector salud',
                    features: [
                      'Cumplimiento normativo actualizado',
                      'Protección de datos del paciente',
                      'Auditorías y certificaciones vigentes'
                    ]
                  }
                ];
                
                const [selectedService, setSelectedService] = React.useState(0);
                
                return (
                  <div className="mb-10">
                    {/* Mobile: Selector arriba, card abajo */}
                    <div className="md:hidden space-y-6">
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((service, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedService(i)}
                            className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                              selectedService === i
                                ? 'border-[#D94B45] bg-[#D94B45]/5 shadow-lg'
                                : 'border-gray-200 bg-white hover:border-[#D94B45]/30 hover:shadow-md'
                            }`}
                          >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                              selectedService === i
                                ? 'bg-gradient-to-br from-[#D94B45] to-[#c7413c] text-white scale-110'
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                              </svg>
                            </div>
                            <h4 className={`font-bold text-sm mb-1 ${
                              selectedService === i ? 'text-[#D94B45]' : 'text-gray-900'
                            }`}>
                              {service.title}
                            </h4>
                            <p className="text-xs text-gray-600 line-clamp-2">
                              {service.shortDesc}
                            </p>
                          </button>
                        ))}
                      </div>
                      
                      {/* Card expandida móvil */}
                      <div className="rounded-3xl bg-white border-2 border-[#D94B45]/20 p-8 shadow-xl">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D94B45] to-[#c7413c] text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={services[selectedService].icon} />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {services[selectedService].title}
                            </h3>
                            <p className="text-gray-600 text-lg">
                              {services[selectedService].fullDesc}
                            </p>
                          </div>
                        </div>
                        
                        {/* Features */}
                        <div className="space-y-3">
                          {services[selectedService].features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-[#D94B45]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-[#D94B45]" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-gray-700 leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Desktop: Card izquierda, selector derecha */}
                    <div className="hidden md:grid md:grid-cols-[1fr,400px] gap-8 items-start">
                      {/* Card expandida desktop */}
                      <div className="rounded-3xl bg-white border-2 border-[#D94B45]/20 p-10 shadow-xl min-h-[480px] flex flex-col">
                        <div className="flex items-start gap-5 mb-8">
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D94B45] to-[#c7413c] text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={services[selectedService].icon} />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-3xl font-bold text-gray-900 mb-3">
                              {services[selectedService].title}
                            </h3>
                            <p className="text-gray-600 text-xl leading-relaxed">
                              {services[selectedService].fullDesc}
                            </p>
                          </div>
                        </div>
                        
                        {/* Features */}
                        <div className="space-y-4 flex-1">
                          {services[selectedService].features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#D94B45]/5 transition-colors duration-200">
                              <div className="w-6 h-6 rounded-full bg-[#D94B45]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-4 h-4 text-[#D94B45]" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-gray-700 leading-relaxed text-lg">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Footer decorativo */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Incluido en todos los planes</span>
                          </div>
                        </div>
                      </div>

                      {/* Selector vertical derecha */}
                      <div className="flex flex-col gap-4">
                        {services.map((service, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedService(i)}
                            className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                              selectedService === i
                                ? 'border-[#D94B45] bg-[#D94B45]/5 shadow-lg scale-105'
                                : 'border-gray-200 bg-white hover:border-[#D94B45]/30 hover:shadow-md hover:scale-102'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                                selectedService === i
                                  ? 'bg-gradient-to-br from-[#D94B45] to-[#c7413c] text-white'
                                  : 'bg-gray-100 text-gray-600'
                              }`}>
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className={`font-bold text-lg mb-1 ${
                                  selectedService === i ? 'text-[#D94B45]' : 'text-gray-900'
                                }`}>
                                  {service.title}
                                </h4>
                                <p className={`text-sm ${
                                  selectedService === i ? 'text-gray-600' : 'text-gray-500'
                                }`}>
                                  {service.shortDesc}
                                </p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
          </div>

          {/* CTAs separados y centrados */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            <Link
              to="/productos"
              className="px-8 py-4 rounded-full font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
              aria-label="Ver productos"
            >
              Ver productos
            </Link>
            <Link
              to="/nosotros"
              className="px-8 py-4 rounded-full font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-[#D94B45] hover:text-[#D94B45] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
              aria-label="Conocer más"
            >
              Conocer más
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home