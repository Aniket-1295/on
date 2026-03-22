import { useEffect, useRef, useState } from 'react'

const INDUSTRIES = [
  {
    title: "Automotive",
    desc: "Manage service reminders, warranty extensions, recalls, insurance updates, and financing options.",
    tag: "Automotive",
    wash: "#f97316",
    gradient: ["#1e2a3a","#374151"],
    img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=600&h=750&q=85",
    icon: `<svg viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`
  },
  {
    title: "Education",
    desc: "Automate enrollment confirmations, tuition reminders, academic progress updates, and alumni outreach.",
    tag: "Education",
    wash: "#fb923c",
    gradient: ["#f97316","#fb923c"],
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&h=750&q=85",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18V15l7 4 7-4v-3.82L23 9 12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>`
  },
  {
    title: "Travel & Tourism",
    desc: "Automate booking confirmations, flight updates, check-in reminders, weather alerts, and loyalty program updates.",
    tag: "Travel",
    wash: "#38bdf8",
    gradient: ["#3b82f6","#06b6d4"],
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&h=750&q=85",
    icon: `<svg viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`
  },
  {
    title: "Hospitality Services",
    desc: "Streamline reservation confirmations, concierge services, check-in procedures, feedback collection, and more.",
    tag: "Hospitality",
    wash: "#f472b6",
    gradient: ["#ec4899","#f43f5e"],
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&h=750&q=85",
    icon: `<svg viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>`
  },
  {
    title: "Healthcare & Medical",
    desc: "Automate appointment reminders, prescription refills, follow-ups, lab results, and chronic care management.",
    tag: "Health",
    wash: "#e879f9",
    gradient: ["#f43f5e","#e879f9"],
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&h=750&q=85",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
  },
  {
    title: "Finance & Banking",
    desc: "Enable fraud alerts, loan status updates, payment reminders, credit score alerts, and account notifications.",
    tag: "Finance",
    wash: "#a78bfa",
    gradient: ["#7c3aed","#6366f1"],
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&h=750&q=85",
    icon: `<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>`
  },
  {
    title: "Real Estate",
    desc: "Handle property inquiries, schedule viewings, send market updates, lease renewals, and closing process updates.",
    tag: "Property",
    wash: "#c4b5fd",
    gradient: ["#8b5cf6","#a78bfa"],
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&h=750&q=85",
    icon: `<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`
  },
  {
    title: "Retail & E-commerce",
    desc: "Recover abandoned carts, send order updates, collect feedback, manage returns, and promote seasonal offers.",
    tag: "Retail",
    wash: "#34d399",
    gradient: ["#059669","#10b981"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=750&q=85",
    icon: `<svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 5.9 17 7 17h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0023.45 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>`
  },
]

function modDist(a, b, n) {
  let d = ((b - a) % n + n) % n
  if (d > n / 2) d -= n
  return d
}

function getStyle(offset) {
  const abs = Math.abs(offset)
  const sign = Math.sign(offset) || 1

  const rotY = sign * Math.min(abs * 44, 82)
  const tx = offset * 268
  const tz = -(abs * abs) * 28 - (abs > 1 ? (abs - 1) * 18 : 0)
  const scale = Math.max(0.58, 1 - abs * 0.15)
  const opacity = Math.max(0, 1 - abs * 0.28)
  const zIndex = Math.round(100 - abs * 20)
  const visible = abs < 3.2

  return { rotY, tx, tz, scale, opacity, zIndex, visible }
}

export default function FeaturesOverview() {
  const trackRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [targetProgress, setTargetProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  
  const N = INDUSTRIES.length
  
  // Interaction state
  const dragStartX = useRef(null)
  const dragStartProg = useRef(null)

  useEffect(() => {
    let animationId
    const SPEED = 0.007

    function animate() {
      setProgress((prev) => {
        if (!isPaused) {
          let next = prev + SPEED
          if (next >= N) next -= N
          return next
        } else {
          const diff = modDist(prev, targetProgress, N)
          if (Math.abs(diff) > 0.01) {
            let next = prev + diff * 0.06
            if (next < 0) next += N
            if (next >= N) next -= N
            return next
          }
          let next = targetProgress
          if (next < 0) next += N
          if (next >= N) next -= N
          return next
        }
      })
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused, targetProgress, N])

  const handleMouseEnter = () => {
    setIsPaused(true)
    let tgt = Math.round(progress) % N
    if (tgt < 0) tgt += N
    setTargetProgress(tgt)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const handleCardClick = (index) => {
    setIsPaused(true)
    setTargetProgress(index)
  }

  const handleDotClick = (index) => {
    setIsPaused(true)
    setTargetProgress(index)
  }

  const handleTouchStart = (e) => {
    setIsPaused(true)
    dragStartX.current = e.touches[0].clientX
    dragStartProg.current = progress
  }

  const handleTouchMove = (e) => {
    if (dragStartX.current === null) return
    const dx = e.touches[0].clientX - dragStartX.current
    const CARD_W = 290
    const delta = -(dx / CARD_W) * 0.9
    let newProg = ((dragStartProg.current + delta) % N + N) % N
    setProgress(newProg)
  }

  const handleTouchEnd = () => {
    let tgt = Math.round(progress) % N
    if (tgt < 0) tgt += N
    setTargetProgress(tgt)
    setTimeout(() => { setIsPaused(false) }, 2000)
    dragStartX.current = null
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setIsPaused(true)
        setTargetProgress((prev) => (prev + 1) % N)
        setTimeout(() => { setIsPaused(false) }, 2500)
      } else if (e.key === 'ArrowLeft') {
        setIsPaused(true)
        setTargetProgress((prev) => ((prev - 1) + N) % N)
        setTimeout(() => { setIsPaused(false) }, 2500)
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [N])

  const activeIdx = ((Math.round(progress) % N) + N) % N

  return (
    <section className="w-full max-w-7xl z-10 mt-8 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5 border border-indigo-100">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 pulse-dot"></span>
          Trusted Across Industries
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Industries We <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Transform</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          OnDial's AI voice agents power seamless automation across 20+ industries — 24/7, in 100+ languages, responding in under 300ms.
        </p>
      </div>

      <div className="carousel-wrapper relative w-full mb-10">
        <div
          className="carousel-scene relative w-full overflow-visible"
          style={{ height: '420px', perspective: '1600px', perspectiveOrigin: '50% 45%' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            className="carousel-track absolute top-[30px] left-1/2 w-0 h-[360px]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {INDUSTRIES.map((ind, index) => {
              let offset = index - progress
              // Wrap to shortest path
              while (offset > N / 2) offset -= N
              while (offset < -N / 2) offset += N

              const { rotY, tx, tz, scale, opacity, zIndex, visible } = getStyle(offset)
              const isActive = Math.abs(offset) < 0.45

              if (!visible) {
                return (
                  <div
                    key={index}
                    className="card"
                    style={{ opacity: 0, pointerEvents: 'none' }}
                  />
                )
              }

              return (
                <div
                  key={index}
                  className={`card ${isActive ? 'active' : ''}`}
                  style={{
                    transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${rotY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                    pointerEvents: 'auto',
                    background: `linear-gradient(160deg, ${ind.gradient[0]}, ${ind.gradient[1]})`
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <img 
                    src={ind.img} 
                    alt={ind.title} 
                    className="card-img" 
                    loading="lazy" 
                    onError={(e) => e.target.style.display = 'none'} 
                  />
                  <div className="card-base-overlay"></div>
                  <div className="card-hover-overlay"></div>
                  <div 
                    className="card-color-wash" 
                    style={{ background: ind.wash }}
                  ></div>
                  
                  <div className="card-bottom">
                    <div 
                      className="new-icon-wrap" 
                      style={{ background: `linear-gradient(135deg, ${ind.gradient[0]}, ${ind.gradient[1]})` }}
                      dangerouslySetInnerHTML={{ __html: ind.icon }}
                    />
                    <div className="new-card-title">{ind.title}</div>
                  </div>
                  
                  <div className="card-reveal">
                    <div className="new-card-desc">{ind.desc}</div>
                    <span className="new-card-tag">{ind.tag}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mb-14 mt-9">
        {INDUSTRIES.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === activeIdx ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-10 flex-wrap mt-14">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[28px] font-extrabold text-slate-900 tracking-tight">20+</span>
          <span className="text-[13px] text-slate-500 font-medium">Industries Served</span>
        </div>
        <div className="w-px h-10 bg-slate-200"></div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[28px] font-extrabold text-slate-900 tracking-tight">100+</span>
          <span className="text-[13px] text-slate-500 font-medium">Languages Supported</span>
        </div>
        <div className="w-px h-10 bg-slate-200"></div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[28px] font-extrabold text-slate-900 tracking-tight">&lt;300ms</span>
          <span className="text-[13px] text-slate-500 font-medium">Response Time</span>
        </div>
        <div className="w-px h-10 bg-slate-200"></div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[28px] font-extrabold text-slate-900 tracking-tight">24/7</span>
          <span className="text-[13px] text-slate-500 font-medium">Always On</span>
        </div>
      </div>
    </section>
  )
}
