import React from 'react'
import { Link } from 'react-router-dom'

/*
PillButton: botón reutilizable estilo "pill" coherente con Home
Props:
- variant: 'primary' | 'secondary' | 'ghostDark' (por ahora)
- to: string (usa <Link>)
- href: string (usa <a>)
- onClick: function (usa <button>)
- className: extra classes
- children: contenido del botón
*/

const base = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2'

const variants = {
  primary: 'px-8 py-4 text-white bg-[#D94B45] hover:bg-[#c7413c] focus:ring-[#D94B45] focus:ring-offset-white',
  secondary: 'px-8 py-4 text-gray-700 bg-white border-2 border-gray-200 hover:border-[#D94B45] hover:text-[#D94B45] focus:ring-[#D94B45] focus:ring-offset-white',
  ghostDark: 'px-8 py-4 text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#D94B45] hover:bg-white/20 focus:ring-[#D94B45] focus:ring-offset-transparent'
}

export default function PillButton({ variant = 'primary', to, href, onClick, className = '', children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}
