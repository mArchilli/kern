import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar fijo en la parte superior */}
      <Navbar />
      
      {/* Contenido principal que se expande */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer siempre en la parte inferior */}
      <Footer />
    </div>
  )
}

export default MainLayout