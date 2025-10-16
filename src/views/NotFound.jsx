import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Paleta de marca: Primario #D94B45, Secundario #9BA6A1

const NotFound = () => {
  useEffect(() => {
    document.title = 'Página no encontrada | Kern IT'
  }, [])

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        {/* Fondo decorativo */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-[30rem] h-[30rem] rounded-full bg-[#D94B45]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#9BA6A1]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Columna texto */}
          <div className="lg:col-span-6">
            <p className="inline-flex items-center justify-center rounded-full border border-[#E7EBEA] bg-[#F7F9F8] px-3 py-1 text-xs font-medium text-[#4B5552]">
              Página no encontrada
            </p>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Ups, llegaste a una ruta inexistente
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Puede que el enlace esté desactualizado o que la página haya sido movida. Probá con estas opciones:
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-colors"
              >
                Ir al inicio
              </Link>
              <Link
                to="/productos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#D94B45] bg-white border border-[#D94B45]/30 hover:border-[#D94B45] hover:bg-[#D94B45]/5 transition-colors"
              >
                Explorar productos
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#4B5552] bg-white border border-[#E7EBEA] hover:bg-gray-50 transition-colors"
              >
                Contactar soporte
              </Link>
            </div>
          </div>

          {/* Columna ilustración */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-xl rounded-2xl bg-gradient-to-br from-[#D94B45]/20 via-white to-[#9BA6A1]/20 p-[1px]">
              <div className="relative rounded-2xl bg-white border border-[#E7EBEA] shadow-md overflow-hidden p-10 sm:p-12">
                {/* Acento lateral */}
                <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#D94B45] to-[#9BA6A1]" />

                {/* 404 grande con gradiente */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute -top-20 -right-10 w-56 h-56 rounded-full bg-[#D94B45]/10 blur-3xl" />
                  <div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-[#9BA6A1]/10 blur-3xl" />
                  <span className="select-none text-[7rem] sm:text-[9rem] font-extrabold leading-none bg-gradient-to-br from-[#D94B45] to-[#9BA6A1] bg-clip-text text-transparent drop-shadow-sm">
                    404
                  </span>
                </div>

                {/* Subcopy */}
                <p className="mt-6 text-center text-gray-600">
                  Tranquilo, te ayudamos a retomar el recorrido correcto.
                </p>

                {/* Acciones secundarias */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/nosotros"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-[#4B5552] bg-white border border-[#E7EBEA] hover:bg-gray-50 transition-colors"
                  >
                    Conocer Kern IT
                  </Link>
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white bg-[#D94B45] hover:bg-[#c7413c] transition-colors"
                  >
                    Escribirnos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound
