import { useEffect } from 'react'
import BackgroundLines from './components/ui/BackgroundLines.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import PlatformOverview from './components/sections/PlatformOverview.jsx'
import FeaturesOverview from './components/sections/FeaturesOverview.jsx'
import IndianLanguages from './components/sections/IndianLanguages.jsx'
import Pricing from './components/sections/Pricing.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import CtaFaq from './components/sections/CtaFaq.jsx'
import { useScrollAnimation } from './hooks/useScrollAnimation.js'

function useUpgradeCard() {
  useEffect(() => {
    const card = document.getElementById('upgrade-card')
    const btn = document.getElementById('close-upgrade')
    const upgradeBtn = document.getElementById('upgrade-btn')
    if (btn && card) {
      const handler = () => {
        card.style.opacity = '0'
        card.style.transform = 'scale(0.95)'
        setTimeout(() => (card.style.display = 'none'), 300)
      }
      btn.addEventListener('click', handler)
      return () => btn.removeEventListener('click', handler)
    }
    if (upgradeBtn) {
      const handler = () => {
        upgradeBtn.textContent = 'Processing...'
        setTimeout(() => (upgradeBtn.textContent = 'Upgrade now'), 2000)
      }
      upgradeBtn.addEventListener('click', handler)
      return () => upgradeBtn.removeEventListener('click', handler)
    }
  }, [])
}

function useLucideIcons() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, [])
}

export default function App() {
  useScrollAnimation()
  useUpgradeCard()
  useLucideIcons()

  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-emerald-500/20 selection:text-emerald-600 overflow-x-hidden text-slate-800 bg-transparent relative">
      {/* Background Video */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/gradient_bg_clean_Trim.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <BackgroundLines />
        <Navbar />
        <Hero />
        <PlatformOverview />
        <FeaturesOverview />
        <IndianLanguages />
        <Pricing />
        <Testimonials />
        <CtaFaq />
        <Footer />
      </div>
    </div>
  )
}
