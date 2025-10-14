import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    })
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            <span className="text-indigo-600">Contacto</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Estamos aquí para ayudarte. ¡No dudes en ponerte en contacto con nosotros!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold">📍</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Dirección</h3>
                  <p className="text-gray-600">
                    Av. Principal 123, Piso 5<br />
                    Ciudad, País 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold">📞</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Teléfono</h3>
                  <p className="text-gray-600">
                    +1 (555) 123-4567<br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold">✉️</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">
                    info@kernit.com<br />
                    support@kernit.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold">🕒</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Horarios de Atención</h3>
                  <p className="text-gray-600">
                    Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                    Sábados: 10:00 AM - 4:00 PM<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Síguenos en Redes Sociales</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-indigo-600 hover:text-indigo-800">Facebook</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800">Twitter</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800">Instagram</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto *
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="consulta-producto">Consulta sobre producto</option>
                  <option value="soporte-tecnico">Soporte técnico</option>
                  <option value="reclamo">Reclamo</option>
                  <option value="sugerencia">Sugerencia</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors font-medium"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-indigo-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">¿Tienes alguna pregunta?</h2>
            <p className="mb-6">Nuestro equipo está listo para ayudarte. No dudes en contactarnos.</p>
            <Link 
              to="/productos"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto