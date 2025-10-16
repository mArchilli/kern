import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSInit({ duration = 700, once = true, offset = 80 }) {
  useEffect(() => {
    AOS.init({
      duration,
      once,
      offset,
      easing: 'ease-out-cubic',
    })
    // Refrescar en caso de cambios dinámicos
    const id = setInterval(() => AOS.refresh(), 1000)
    return () => clearInterval(id)
  }, [duration, once, offset])
  return null
}
