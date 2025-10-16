import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import MainLayout from './components/MainLayout.jsx'
import AOSInit from './components/AOSInit.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './views/Home.jsx'
import Nosotros from './views/Nosotros.jsx'
import Productos from './views/Productos.jsx'
import Contacto from './views/Contacto.jsx'
import NotFound from './views/NotFound.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AOSInit />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="productos" element={<Productos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
