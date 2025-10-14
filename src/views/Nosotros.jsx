import React from 'react'
import { Link } from 'react-router-dom'

const Nosotros = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Sobre <span className="text-indigo-600">Nosotros</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Conoce la historia y los valores que nos definen
          </p>
        </div>

        <div className="mt-16">
          <div className="bg-indigo-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
            <p className="text-gray-700 leading-relaxed">
              Kernit nació en 2020 con la visión de transformar la experiencia de compra online. 
              Comenzamos como un pequeño equipo apasionado por la tecnología y el servicio al cliente, 
              y hemos crecido hasta convertirnos en una plataforma confiable que conecta a miles de 
              personas con los productos que necesitan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nuestra Misión</h3>
              <p className="text-gray-700">
                Facilitar el acceso a productos de calidad a través de una plataforma intuitiva, 
                segura y eficiente, brindando una experiencia excepcional tanto a clientes como 
                a vendedores.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nuestra Visión</h3>
              <p className="text-gray-700">
                Ser la plataforma de comercio electrónico líder en la región, reconocida por 
                nuestra innovación, confiabilidad y compromiso con la satisfacción del cliente.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Confianza</h4>
                <p className="text-gray-600 text-sm">
                  Construimos relaciones duraderas basadas en la transparencia y la honestidad.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">I</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Innovación</h4>
                <p className="text-gray-600 text-sm">
                  Buscamos constantemente nuevas formas de mejorar la experiencia del usuario.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Excelencia</h4>
                <p className="text-gray-600 text-sm">
                  Nos comprometemos a ofrecer la más alta calidad en todos nuestros servicios.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">¿Listo para conocer nuestros productos?</h3>
            <Link 
              to="/productos"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nosotros