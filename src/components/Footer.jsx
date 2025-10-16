import React from 'react'
import { Link } from 'react-router-dom'

// Paleta de marca
// Primario: #D94B45 | Secundario: #9BA6A1

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#9BA6A1] text-white mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Marca y propósito */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold tracking-tight text-white">Kern IT</span>
            </div>
            <p className="text-white/90 mb-4 max-w-xl">
              Enfocados junto a los laboratorios de análisis clínicos para mejorar la calidad de atención al paciente.
              Somos tu partner para la mejora continua.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/kern-it-srl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#D94B45] hover:border-[#D94B45]/40 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.9-2.2 3.9-2.2 4.2 0 5 2.8 5 6.4V24h-4v-7.2c0-1.7 0-3.8-2.3-3.8s-2.6 1.8-2.6 3.7V24h-4V8z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kernitsoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#D94B45] hover:border-[#D94B45]/40 transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.51 5.51 0 0012 7.5zm0 2A3.5 3.5 0 1115.5 13 3.5 3.5 0 0112 9.5zM18 6.3a1 1 0 11-1 1 1 1 0 011-1z" />
                </svg>
              </a>
              <a
                href="mailto:info@kern-it.global"
                className="inline-flex items-center gap-2 text-white/90 hover:text-[#D94B45] transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.4l-10 6.25L2 6.4V6zm0 2.9l9.35 5.83a1 1 0 001.1 0L22 8.9V18a2 2 0 01-2 2H4a2 2 0 01-2-2V8.9z" />
                </svg>
                info@kern-it.global
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/90 hover:text-[#D94B45] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-white/90 hover:text-[#D94B45] transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-white/90 hover:text-[#D94B45] transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-white/90 hover:text-[#D94B45] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Ubicación</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start">
                <svg className="h-9 w-9 mr-2 -mt-1.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" clipRule="evenodd" />
                </svg>
                Migueletes 1231 Piso 5 Depto A, Ciudad Autónoma de Buenos Aires – Argentina
              </li>
            </ul>
          </div>
        </div>

        {/* División inferior */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-white/80 text-sm">
              &copy; {currentYear} Kern IT. Todos los derechos reservados.
            </p>
            <div className="flex flex-col items-start md:items-end gap-2 w-full md:w-auto">
              
              <div className="text-[12px] text-white/80">
                Desarrollado por
                {' '}
                <a href="https://archillimatias.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#D94B45]">Archilli Matias</a>
                {' '}y{' '}
                <a href="https://comollileon.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#D94B45]">Comolli Leon</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer