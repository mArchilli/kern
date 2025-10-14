import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoKern from '../assets/logo_Kern_chico.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Productos', path: '/productos' },
    { name: 'Contacto', path: '/contacto' }
  ]

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 bg-gray-200/80 backdrop-blur-md shadow-lg 
        ${isScrolled ? 'bg-gray-200/80 backdrop-blur-md shadow-lg' : 'bg-gray-200/80'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src={logoKern} 
                alt="Kern Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-[#D94B45]'
                    : 'text-[#9BA6A1] hover:text-[#D94B45]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Botón hamburguesa móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#9BA6A1] hover:text-[#D94B45] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#D94B45]"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu móvil */}
      {isOpen && (
        <div className="md:hidden">
          <div className={"px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg bg-white/90 backdrop-blur-md"}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-[#D94B45]'
                    : 'text-[#9BA6A1] hover:text-[#D94B45]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar