import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Productos = () => {
  const [filtroCategoria, setFiltroCategoria] = useState('todos')

  const productos = [
    {
      id: 1,
      nombre: "Laptop Gaming Pro",
      precio: "$1,299",
      categoria: "tecnologia",
      imagen: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=200&fit=crop",
      descripcion: "Potente laptop para gaming con gráficos excepcionales"
    },
    {
      id: 2,
      nombre: "Auriculares Bluetooth",
      precio: "$199",
      categoria: "tecnologia",
      imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
      descripcion: "Auriculares inalámbricos con cancelación de ruido"
    },
    {
      id: 3,
      nombre: "Camiseta Casual",
      precio: "$29",
      categoria: "ropa",
      imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop",
      descripcion: "Camiseta cómoda de algodón 100% orgánico"
    },
    {
      id: 4,
      nombre: "Zapatillas Deportivas",
      precio: "$89",
      categoria: "ropa",
      imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
      descripcion: "Zapatillas perfectas para entrenamientos intensos"
    },
    {
      id: 5,
      nombre: "Libro de Programación",
      precio: "$45",
      categoria: "libros",
      imagen: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop",
      descripcion: "Guía completa para aprender desarrollo web moderno"
    },
    {
      id: 6,
      nombre: "Novela Bestseller",
      precio: "$19",
      categoria: "libros",
      imagen: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
      descripcion: "La novela más vendida del año"
    }
  ]

  const categorias = [
    { valor: 'todos', nombre: 'Todos los productos' },
    { valor: 'tecnologia', nombre: 'Tecnología' },
    { valor: 'ropa', nombre: 'Ropa' },
    { valor: 'libros', nombre: 'Libros' }
  ]

  const productosFiltrados = filtroCategoria === 'todos' 
    ? productos 
    : productos.filter(producto => producto.categoria === filtroCategoria)

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Nuestros <span className="text-indigo-600">Productos</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Descubre nuestra amplia selección de productos de calidad
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((categoria) => (
              <button
                key={categoria.valor}
                onClick={() => setFiltroCategoria(categoria.valor)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filtroCategoria === categoria.valor
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-300'
                }`}
              >
                {categoria.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto) => (
            <div key={producto.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={producto.imagen} 
                alt={producto.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    producto.categoria === 'tecnologia' ? 'bg-blue-100 text-blue-800' :
                    producto.categoria === 'ropa' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {categorias.find(c => c.valor === producto.categoria)?.nombre}
                  </span>
                  <span className="text-2xl font-bold text-indigo-600">{producto.precio}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{producto.nombre}</h3>
                <p className="text-gray-600 text-sm mb-4">{producto.descripcion}</p>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>

        {productosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron productos en esta categoría.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="bg-indigo-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">¿No encontraste lo que buscabas?</h2>
            <p className="mb-6">Contáctanos y te ayudaremos a encontrar el producto perfecto para ti.</p>
            <Link 
              to="/contacto"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productos