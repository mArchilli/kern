import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Mejorar La Experiencia Del Paciente Es Nuestro Principal 
                <span className="text-yellow-300"> Objetivo</span>
              </h1>
              <p className="text-xl mb-8 text-red-100 leading-relaxed">
                Kern-it es el nexo para mejorar la calidad de atención y enriquecer la 
                experiencia del paciente. A través de tecnología innovadora, 
                acompañamos a nuestros clientes para posicionar al paciente en primer plano.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contacto"
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Contactarme
                </Link>
                <Link
                  to="/nosotros"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors text-center"
                >
                  Conocer más
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">+23M</div>
                    <div className="text-sm text-red-100">millones de pacientes anuales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">+840</div>
                    <div className="text-sm text-red-100">puntos de extracción</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">+350M</div>
                    <div className="text-sm text-red-100">estudios procesados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">+900</div>
                    <div className="text-sm text-red-100">instalaciones en 15 países</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Nuestro Servicio */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">Nuestro Servicio</h3>
              <p className="mb-6 text-blue-100">
                Nos adaptamos con profesionalismo a las necesidades de nuestros 
                clientes y a la velocidad del mercado.
              </p>
              <Link 
                to="/nosotros"
                className="inline-flex items-center text-white font-semibold hover:text-blue-200"
              >
                Saber más
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Prestaciones */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Prestaciones</h3>
              <p className="mb-6 text-gray-600">
                La tecnología debe contemplar todas las necesidades del paciente 
                para brindarle una mejor experiencia.
              </p>
              <Link 
                to="/productos"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700"
              >
                Saber más
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Productos */}
            <div className="bg-red-500 text-white rounded-2xl p-8 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">Productos</h3>
              <p className="mb-6 text-red-100">
                Optimizar y mejorar la relación con el paciente es clave. 
                Conocé nuestros productos para alcanzar este objetivo de negocios.
              </p>
              <Link 
                to="/productos"
                className="inline-flex items-center text-white font-semibold hover:text-red-200"
              >
                Ver todos
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Una Solución Focalizada En Mejorar La Calidad De Atención Al Paciente
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Nuestra experiencia de más de 20 años en el sector de la salud 
              contribuyen para que nuestro servicio y soluciones se adapten 
              fácilmente a las necesidades de nuestros clientes y a la velocidad 
              que requiere el mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Laboratorio De Calidad</h3>
              <p className="text-gray-600">
                La experiencia del paciente y la capacidad de procesar el volumen de operaciones son claves.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Experiencia En El Rubro</h3>
              <p className="text-gray-600">
                Desde hace más de 20 años, acompañamos a nuestros clientes para mejorar la experiencia del paciente.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Resultados Precisos</h3>
              <p className="text-gray-600">
                Anualmente, procesamos más de 350 millones de estudios con la máxima precisión.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Personal Calificado</h3>
              <p className="text-gray-600">
                Nuestros profesionales se destacan por su profesionalismo, flexibilidad y adaptación constante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Realizá Una Consulta</h2>
          <p className="text-xl mb-8 text-gray-300">
            Somos tu partner. Entrá en contacto con nuestros especialistas.
          </p>
          <Link
            to="/contacto"
            className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Contactarme
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-red-500 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Somos Tu Partner Para La Mejora Continua En La Atención De Los Pacientes En El Laboratorio.
          </h2>
          <Link
            to="/contacto"
            className="bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contactar
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home