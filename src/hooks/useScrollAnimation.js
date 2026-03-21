import { useEffect } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = '.animate-on-scroll{animation-play-state:paused!important;}.animate-on-scroll.animate{animation-play-state:running!important;}'
    document.head.appendChild(style)
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animate'); io.unobserve(e.target) } })
    }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' })
    document.querySelectorAll('.animate-on-scroll').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}
