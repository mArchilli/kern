import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import MainLayout from './components/MainLayout.jsx'
import Home from './views/Home.jsx'
import Nosotros from './views/Nosotros.jsx'
import Productos from './views/Productos.jsx'
import Contacto from './views/Contacto.jsx'
import NotFound from './views/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  // Al cambiar de ruta, scrollear suave al tope
  useEffect(() => {
    // Cancelar cualquier hash/scroll anterior forzado por el navegador
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="productos" element={<Productos />} />
          <Route path="contacto" element={<Contacto />} />
          {/* Ruta 404 dentro del layout para mantener navbar/footer */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
