import React, { useEffect, useRef } from 'react';

const LANGS = [
  {name:"Hindi",      script:"हिन्दी",    city:"New Delhi",    sp:"600M speakers",  fb:"linear-gradient(135deg,#7f1d1d,#991b1b)", img:"https://images.unsplash.com/photo-1587474260584-136574297316?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Marathi",    script:"मराठी",     city:"Mumbai",       sp:"83M speakers",   fb:"linear-gradient(135deg,#1e3a5f,#1d4ed8)", img:"https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Bengali",    script:"বাংলা",     city:"Kolkata",      sp:"230M speakers",  fb:"linear-gradient(135deg,#4a1d96,#7c3aed)", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Tamil",      script:"தமிழ்",     city:"Chennai",      sp:"75M speakers",   fb:"linear-gradient(135deg,#064e3b,#059669)", img:"https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Telugu",     script:"తెలుగు",    city:"Hyderabad",    sp:"93M speakers",   fb:"linear-gradient(135deg,#78350f,#d97706)", img:"https://images.unsplash.com/photo-1585468274952-66591eb14165?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Gujarati",   script:"ગુજરાતી",   city:"Ahmedabad",    sp:"56M speakers",   fb:"linear-gradient(135deg,#1e1b4b,#4f46e5)", img:"https://images.unsplash.com/photo-1599030185163-cb1d5a7f17a7?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Kannada",    script:"ಕನ್ನಡ",     city:"Bangalore",    sp:"44M speakers",   fb:"linear-gradient(135deg,#0c4a6e,#0284c7)", img:"https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Punjabi",    script:"ਪੰਜਾਬੀ",    city:"Amritsar",     sp:"113M speakers",  fb:"linear-gradient(135deg,#7c2d12,#ea580c)", img:"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Malayalam",  script:"മലയാളം",    city:"Kochi",        sp:"38M speakers",   fb:"linear-gradient(135deg,#042f2e,#0d9488)", img:"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Rajasthani", script:"राजस्थानी", city:"Jaipur",       sp:"80M speakers",   fb:"linear-gradient(135deg,#831843,#db2777)", img:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Konkani",    script:"कोंकणी",    city:"Goa",          sp:"7.4M speakers",  fb:"linear-gradient(135deg,#14532d,#16a34a)", img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Sanskrit",   script:"संस्कृत",   city:"Varanasi",     sp:"Cultural root",  fb:"linear-gradient(135deg,#3b1f00,#a16207)", img:"https://images.unsplash.com/photo-1561361513-2d000a50f36d?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Urdu",       script:"اردو",      city:"Lucknow",      sp:"230M speakers",  fb:"linear-gradient(135deg,#3d0d60,#9333ea)", img:"https://images.unsplash.com/photo-1626014303759-3bcbc4f4bda3?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Assamese",   script:"অসমীয়া",   city:"Guwahati",     sp:"23M speakers",   fb:"linear-gradient(135deg,#0c2340,#1e40af)", img:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Odia",       script:"ଓଡ଼ିଆ",     city:"Bhubaneswar",  sp:"38M speakers",   fb:"linear-gradient(135deg,#1a3300,#4d7c0f)", img:"https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Maithili",   script:"मैथिली",    city:"Patna",        sp:"34M speakers",   fb:"linear-gradient(135deg,#1e0a3c,#6d28d9)", img:"https://images.unsplash.com/photo-1599492169916-30440b0e6d78?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Dogri",      script:"डोगरी",     city:"Jammu",        sp:"2.6M speakers",  fb:"linear-gradient(135deg,#0a1f3d,#1e3a8a)", img:"https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=660&h=440&q=80"},
  {name:"Sindhi",     script:"سنڌي",      city:"Surat",        sp:"25M speakers",   fb:"linear-gradient(135deg,#431407,#c2410c)", img:"https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=660&h=440&q=80"},
];

const ROWS = [
  {ids:[0,1,2,3,4,5,6,7],       dir:-1, baseSpeed:0.55},
  {ids:[8,9,10,11,12,13,0,1],   dir: 1, baseSpeed:0.42},
  {ids:[14,15,16,17,2,3,4,5],   dir:-1, baseSpeed:0.68},
];

const CARD_W  = 330;
const CARD_GAP= 16;
const UNIT    = CARD_W + CARD_GAP; // 346px per card slot

export default function IndianLanguages() {
  const rowRefs = useRef([]);
  const stateRef = useRef({
    lastScrollY: typeof window !== 'undefined' ? window.scrollY : 0,
    rawScrollVel: 0,
    smoothVel: 0,
    rowStates: ROWS.map(r => ({
      dir: r.dir,
      baseSpeed: r.baseSpeed,
      singleW: r.ids.length * UNIT,
      x: 0
    }))
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const now = window.scrollY;
      stateRef.current.rawScrollVel = now - stateRef.current.lastScrollY;
      stateRef.current.lastScrollY = now;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    let animationFrameId;
    const tick = () => {
      const state = stateRef.current;
      state.smoothVel += (state.rawScrollVel - state.smoothVel) * 0.12;
      state.rawScrollVel *= 0.82; // decay

      const boost = Math.min(Math.abs(state.smoothVel) * 0.38, 4.5);

      state.rowStates.forEach((r, i) => {
        const totalSpeed = r.baseSpeed + boost;
        r.x += totalSpeed;

        if (r.x >= r.singleW) r.x -= r.singleW;

        const tx = r.dir === -1 ? -r.x : (r.x - r.singleW);
        if (rowRefs.current[i]) {
          rowRefs.current[i].style.transform = `translateX(${tx}px)`;
        }
      });

      animationFrameId = requestAnimationFrame(tick);
    };
    
    tick();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative pt-24 pb-28 bg-transparent overflow-hidden font-sans">
      <style>{`
        .lang-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: rgba(0, 0, 0, 0.6);
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 6px 16px; border-radius: 100px;
          margin-bottom: 22px;
        }
        .lang-badge-pulse {
          width: 6px; height: 6px; border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5);
          animation: lang-pulse 2.2s cubic-bezier(.4,0,.6,1) infinite;
        }
        @keyframes lang-pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5); }
          70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .lang-card {
          position: relative;
          width: 330px; height: 220px;
          border-radius: 16px;
          overflow: hidden;
          flex-shrink: 0;
          cursor: pointer;
          transition: transform 0.55s cubic-bezier(.23,1,.32,1), box-shadow 0.55s cubic-bezier(.23,1,.32,1);
        }
        .lang-card:hover {
          transform: scale(1.05) translateY(-7px);
          box-shadow: 0 24px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05);
          z-index: 20;
        }
        .lang-card-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          filter: grayscale(1) brightness(0.95);
          transform: scale(1);
          transition: filter 0.7s cubic-bezier(.23,1,.32,1), transform 0.7s cubic-bezier(.23,1,.32,1);
          will-change: filter, transform;
        }
        .lang-card:hover .lang-card-img {
          filter: grayscale(0) brightness(1.0) contrast(1.05) saturate(1.2);
          transform: scale(1.09);
        }
        .lang-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(170deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.7) 100%);
          z-index: 2;
          transition: opacity 0.5s;
        }
        .lang-card:hover .lang-card-overlay {
          background: linear-gradient(170deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.6) 100%);
        }
        .lang-script-mark {
          position: absolute; top: 14px; right: 16px;
          z-index: 3;
          font-size: 26px;
          color: rgba(255,255,255,0.7);
          font-weight: 700;
          line-height: 1;
          transition: color 0.6s, transform 0.6s cubic-bezier(.23,1,.32,1);
          transform: translateY(0);
          pointer-events: none;
          text-shadow: 0 2px 12px rgba(0,0,0,0.3);
        }
        .lang-card:hover .lang-script-mark {
          color: rgba(255,255,255,0.95);
          transform: translateY(-2px);
        }
        .lang-sp-badge {
          position: absolute; top: 14px; left: 14px;
          z-index: 4;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.5);
          color: rgba(0,0,0,0.8);
          font-size: 10.5px; font-weight: 600;
          padding: 3px 9px; border-radius: 100px;
          letter-spacing: 0.03em;
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity 0.4s, transform 0.4s cubic-bezier(.23,1,.32,1);
        }
        .lang-card:hover .lang-sp-badge {
          opacity: 1; transform: translateY(0);
        }
        .lang-card-info {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 18px 18px 16px;
          z-index: 3;
          transform: translateY(3px);
          transition: transform 0.5s cubic-bezier(.23,1,.32,1);
        }
        .lang-card:hover .lang-card-info {
          transform: translateY(0);
        }
        .lang-card-line {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #8b5cf6, #3b82f6);
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: opacity 0.5s, transform 0.6s cubic-bezier(.23,1,.32,1);
          z-index: 5;
        }
        .lang-card:hover .lang-card-line {
          opacity: 1; transform: scaleX(1);
        }
      `}</style>
      
      {/* Central glow adapted for light theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06)_0%,rgba(14,165,233,0.04)_40%,transparent_70%)] pointer-events-none z-0"></div>

      <div className="text-center relative z-10 px-6 pb-16">
        <div className="lang-badge"><span className="lang-badge-pulse"></span>100+ Languages · Zero Barriers</div>
        <h2 className="text-[clamp(34px,5vw,62px)] font-extrabold tracking-tight leading-[1.08] text-slate-900 mb-4">
          Connect in Every<br />
          <span className="bg-gradient-to-r from-violet-500 via-sky-400 to-emerald-400 bg-clip-text text-transparent">Indian Language</span>
        </h2>
        <p className="text-base text-slate-500 max-w-[500px] mx-auto leading-relaxed font-light">
          OnDial's AI voice agents converse natively in every Indian tongue — from Kashmir to Kanyakumari, without a hint of lag or accent.
        </p>
      </div>

      <div className="relative z-0 flex flex-col gap-4">
        {ROWS.map((row, i) => (
          <div key={i} className="overflow-hidden py-2.5">
            <div 
              ref={el => rowRefs.current[i] = el}
              className="flex gap-4 w-max will-change-transform"
            >
              {[...Array(4)].map((_, rep) => (
                <React.Fragment key={rep}>
                  {row.ids.map(id => {
                    const l = LANGS[id];
                    return (
                      <div key={`${rep}-${id}`} className="lang-card">
                        <img className="lang-card-img" src={l.img} alt={l.name} loading="lazy" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = l.fb; }} />
                        <div className="lang-card-overlay"></div>
                        <div className="lang-script-mark">{l.script}</div>
                        <div className="lang-sp-badge">{l.sp}</div>
                        <div className="lang-card-info">
                          <span className="block text-[20px] font-bold text-white tracking-[-0.015em] mb-1 drop-shadow-md">{l.name}</span>
                          <span className="flex items-center gap-1.5 text-[11.5px] font-medium text-white/70 tracking-widest uppercase">
                            <span className="w-1 h-1 rounded-full bg-white/50 shrink-0"></span>
                            {l.city}
                          </span>
                        </div>
                        <div className="lang-card-line"></div>
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-9 mt-16 px-6 relative z-10 flex-wrap">
        <div className="text-center">
          <div className="text-[28px] font-extrabold tracking-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">22+</div>
          <div className="text-xs font-medium text-slate-500 mt-1 tracking-wide">Official Languages</div>
        </div>
        <div className="w-px h-10 bg-slate-200 self-center"></div>
        <div className="text-center">
          <div className="text-[28px] font-extrabold tracking-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">1.4B</div>
          <div className="text-xs font-medium text-slate-500 mt-1 tracking-wide">People Reached</div>
        </div>
        <div className="w-px h-10 bg-slate-200 self-center"></div>
        <div className="text-center">
          <div className="text-[28px] font-extrabold tracking-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">100%</div>
          <div className="text-xs font-medium text-slate-500 mt-1 tracking-wide">Native Fluency</div>
        </div>
        <div className="w-px h-10 bg-slate-200 self-center"></div>
        <div className="text-center">
          <div className="text-[28px] font-extrabold tracking-tight bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">Zero</div>
          <div className="text-xs font-medium text-slate-500 mt-1 tracking-wide">Language Barriers</div>
        </div>
      </div>
      
      <div className="text-center mt-6 text-[11.5px] text-slate-400 tracking-widest uppercase relative z-10">
        Hover any card to see it come alive
      </div>
    </section>
  );
}
