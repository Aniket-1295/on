import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote: "OnDial's AI Voice Agents have completely transformed how we handle patient appointment reminders. We reduced no-shows by 45% and our patients love the natural, conversational follow-ups in their local language.",
    name: "Dr. Priya Nair",
    title: "Medical Director, HealthFirst Clinics",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
  },
  {
    quote: "We deployed OnDial for our loan follow-up calls and the results were immediate. The AI responds in under 300ms, handles Hindi and English seamlessly, and our customer satisfaction scores went up by 30% in the first month.",
    name: "Arjun Mehta",
    title: "Head of Digital, FinBridge Capital",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
  },
  {
    quote: "As a real estate firm handling thousands of property inquiries, OnDial has been a game-changer. Our AI agents qualify leads, schedule viewings, and send market updates 24/7. We haven't missed a single inquiry since onboarding.",
    name: "Sneha Kapoor",
    title: "VP of Sales, Prestige Homes",
    img: "https://i.pravatar.cc/150?img=32",
    isTop: true,
  },
]

function TestimonialCard({ t, idx, cardRef, isTop }) {
  return (
    <div
      ref={cardRef}
      className={`testimonial-card absolute w-full max-w-[520px] bg-white rounded-[24px] border border-gray-100 p-8 md:p-10 will-change-transform${isTop ? ' cursor-grab touch-none select-none' : ''}`}
      style={{ transformStyle: isTop ? 'preserve-3d' : undefined, transformOrigin: isTop ? 'top center' : 'bottom center' }}
    >
      <div className="h-12 pointer-events-none"></div>
      <div className="mb-12 relative pointer-events-none">
        <div className="text-[52px] text-gray-900 font-serif font-bold leading-none select-none mb-6">"</div>
        <p className="text-[15px] md:text-[16px] text-gray-500 leading-[1.8] font-normal relative z-10">{t.quote}</p>
      </div>
      <div className="flex items-center justify-between pt-6 border-t border-gray-100/80 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-gray-200 to-gray-50 shadow-sm">
            <img src={t.img} alt={t.name} className="w-full h-full rounded-full object-cover grayscale-[0.2]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold text-gray-900 leading-tight">{t.name}</span>
            <span className="text-[12px] text-gray-400 mt-1 font-mono tracking-tight uppercase">{t.title}</span>
          </div>
        </div>
      </div>
      {isTop && (
        <div className="drag-hint absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-300 uppercase tracking-widest flex flex-col items-center gap-1 opacity-60 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="m6 9 6 6 6-6" /></svg>
          Drag to tear
        </div>
      )}
      {!isTop && (
        <div className="drag-hint absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-300 uppercase tracking-widest flex flex-col items-center gap-1 opacity-0 pointer-events-none"></div>
      )}
    </div>
  )
}

export default function Testimonials() {
  const containerRef = useRef(null)
  const clipRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    let cards = Array.from(container.querySelectorAll('.testimonial-card'))
    const clip = clipRef.current
    let isDragging = false, startY = 0, startX = 0, currentY = 0, currentX = 0
    const threshold = 140
    const POSITIONS = [
      { zIndex: 10, transform: 'translate3d(-12px,8px,0) rotate(-4deg)', shadow: '0 10px 20px rgba(0,0,0,0.03)', origin: 'bottom center' },
      { zIndex: 20, transform: 'translate3d(12px,16px,0) rotate(3deg)', shadow: '0 15px 30px rgba(0,0,0,0.04)', origin: 'bottom center' },
      { zIndex: 30, transform: 'translate3d(0,0,0) rotate(0deg)', shadow: '0 40px 80px -15px rgba(0,0,0,0.12),0 10px 20px -5px rgba(0,0,0,0.04),inset 0 0 0 1px rgba(255,255,255,1)', origin: 'top center' },
    ]
    function applyPositions(animate = true) {
      cards.forEach((card, i) => {
        const pos = POSITIONS[i]
        card.style.zIndex = pos.zIndex
        card.style.transformOrigin = pos.origin
        card.style.transition = animate ? 'transform 0.6s cubic-bezier(0.2,0.8,0.2,1.1),box-shadow 0.6s ease,opacity 0.4s ease' : 'none'
        card.style.transform = pos.transform
        card.style.boxShadow = pos.shadow
        const hint = card.querySelector('.drag-hint')
        if (hint) hint.style.opacity = i === 2 ? '0.6' : '0'
        if (i === 2) card.classList.add('cursor-grab', 'touch-none', 'select-none')
        else card.classList.remove('cursor-grab', 'touch-none', 'select-none')
      })
    }
    const startDrag = (e) => {
      const topCard = cards[2]
      if (!e.target.closest('.testimonial-card') || e.target.closest('.testimonial-card') !== topCard) return
      isDragging = true
      startY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY
      startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
      topCard.style.transition = 'none'
      if (clip) clip.style.transition = 'none'
    }
    const drag = (e) => {
      if (!isDragging) return
      currentY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY
      currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
      let deltaY = currentY - startY
      let deltaX = currentX - startX
      if (deltaY < 0) deltaY = deltaY * 0.15
      const pull = deltaY > 0 ? Math.pow(deltaY, 0.85) * 2.2 : deltaY
      const rotateX = Math.min(Math.max(pull * 0.08, 0), 25)
      const rotateZ = deltaX * 0.03
      cards[2].style.transform = `translate3d(0,${pull}px,0) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`
      if (clip && deltaY > 0) clip.style.transform = `translate(-50%,${Math.min(pull * 0.08, 6)}px) rotateX(${Math.min(rotateX * 0.4, 8)}deg)`
    }
    const endDrag = (e) => {
      if (!isDragging) return
      isDragging = false
      const deltaY = currentY - startY
      const pull = deltaY > 0 ? Math.pow(deltaY, 0.85) * 2.2 : 0
      if (pull > threshold) {
        const topCard = cards[2]
        topCard.style.transition = 'transform 0.5s cubic-bezier(0.5,0,1,1),opacity 0.4s linear 0.1s'
        const tearSpin = (currentX - startX) > 0 ? 15 : -15
        topCard.style.transform = `translate3d(0,${window.innerHeight}px,0) rotateZ(${tearSpin}deg) rotateX(45deg)`
        topCard.style.opacity = '0'
        if (clip) { clip.style.transition = 'transform 0.4s cubic-bezier(0.3,2.5,0.4,1)'; clip.style.transform = 'translate(-50%,0) rotateX(0)' }
        setTimeout(() => {
          const torn = cards.pop(); cards.unshift(torn)
          torn.style.transition = 'none'; torn.style.opacity = '0'
          applyPositions(true)
          setTimeout(() => { torn.style.transition = 'opacity 0.5s ease'; torn.style.opacity = '1' }, 50)
        }, 400)
      } else {
        applyPositions(true)
        if (clip) { clip.style.transition = 'transform 0.5s cubic-bezier(0.3,1.5,0.4,1)'; clip.style.transform = 'translate(-50%,0) rotateX(0)' }
      }
    }
    container.addEventListener('mousedown', startDrag)
    window.addEventListener('mousemove', drag)
    window.addEventListener('mouseup', endDrag)
    container.addEventListener('touchstart', startDrag, { passive: true })
    window.addEventListener('touchmove', (e) => { if (isDragging) { e.preventDefault(); drag(e) } }, { passive: false })
    window.addEventListener('touchend', endDrag)
    window.addEventListener('touchcancel', endDrag)
    applyPositions(false)
    return () => {
      container.removeEventListener('mousedown', startDrag)
      window.removeEventListener('mousemove', drag)
      window.removeEventListener('mouseup', endDrag)
    }
  }, [])

  return (
    <section className="animate-on-scroll z-10 w-full max-w-7xl mt-8 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
      <div className="flex border-slate-200/80 border-b mb-8 pb-8 items-center justify-between animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
        <span className="uppercase text-sm font-medium text-slate-500 tracking-widest">TESTIMONIALS</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mb-16 gap-x-8 gap-y-8 items-start animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.2s both' }}>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-[1.15]">Everything You Need to <br className="hidden lg:block" /> Know About OnDial.</h2>
        <p className="text-xl text-slate-600 leading-relaxed md:pt-2 max-w-lg">Get answers to the most common questions about how OnDial can transform your business and never let you lose a customer again.</p>
      </div>

      {/* Draggable testimonial stack */}
      <div
        ref={containerRef}
        className="flex sm:h-[420px] w-full h-[460px] max-w-xl mt-44 mr-auto ml-auto relative justify-center animate-on-scroll"
        style={{ perspective: '1200px' }}
        id="testimonial-container"
      >
        {/* Paper clip */}
        <div
          ref={clipRef}
          className="-top-20 transform -translate-x-1/2 flex flex-col z-[40] pointer-events-none w-full max-w-[520px] absolute left-1/2 items-center"
          style={{ transformOrigin: 'bottom center', willChange: 'transform' }}
          id="paper-clip"
        >
          <div className="relative w-[70px] h-[22px] bg-gradient-to-b from-white to-[#eef0f3] rounded-t-lg shadow-[0_5px_15px_rgba(0,0,0,0.08),inset_0_1px_0_white,inset_0_-1px_2px_rgba(0,0,0,0.05)] border border-gray-200/80 z-30 flex items-end justify-center pb-1">
            <div className="w-[40px] h-[3px] bg-gradient-to-b from-[#d1d5db] to-[#a1a1aa] rounded-full"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute bottom-0 w-[56px] h-[12px] bg-[#cbd5e1] rounded-full shadow-[inset_0_3px_6px_rgba(0,0,0,0.25)] z-10 translate-y-1/2"></div>
            <div className="relative w-[46px] h-[90px] -mt-1 bg-gradient-to-b from-white/40 via-white/70 to-white/20 backdrop-blur-md shadow-[0_15px_25px_-5px_rgba(0,0,0,0.1)] border-x border-b border-white/40 z-20" style={{ borderRadius: '2px 2px 8px 8px' }}></div>
          </div>
        </div>

        {/* Cards bottom to top (z-order: card[0]=bottom, card[2]=top) */}
        {testimonials.map((t, idx) => (
          <div
            key={t.name}
            className={`testimonial-card absolute w-full max-w-[520px] bg-white rounded-[24px] border border-gray-100 p-8 md:p-10 will-change-transform`}
            style={{ transformOrigin: idx === 2 ? 'top center' : 'bottom center', transformStyle: idx === 2 ? 'preserve-3d' : undefined }}
          >
            <div className="h-12 pointer-events-none"></div>
            <div className="mb-12 relative pointer-events-none">
              <div className="text-[52px] text-gray-900 font-serif font-bold leading-none select-none mb-6">"</div>
              <p className="text-[15px] md:text-[16px] text-gray-500 leading-[1.8] font-normal relative z-10">{t.quote}</p>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-gray-100/80 pointer-events-none">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-gray-200 to-gray-50 shadow-sm">
                  <img src={t.img} alt={t.name} className="w-full h-full rounded-full object-cover grayscale-[0.2]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-gray-900 leading-tight">{t.name}</span>
                  <span className="text-[12px] text-gray-400 mt-1 font-mono tracking-tight uppercase">{t.title}</span>
                </div>
              </div>
            </div>
            <div className={`drag-hint absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-300 uppercase tracking-widest flex flex-col items-center gap-1 pointer-events-none ${idx === 2 ? 'opacity-60' : 'opacity-0'}`}>
              {idx === 2 && (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="m6 9 6 6 6-6" /></svg>
                  Drag to tear
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
