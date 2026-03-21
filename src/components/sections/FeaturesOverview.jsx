export default function FeaturesOverview() {
  return (
    <section className="w-full max-w-7xl z-10 mt-8 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
      <div className="flex justify-between items-center mb-8 pb-8 border-b border-slate-200/80 animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
        <span className="text-sm font-medium tracking-widest text-slate-500 uppercase">Features overview</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mb-16 gap-x-8 gap-y-8 items-start animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.2s both' }}>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-[1.15]">You set the revenue<br className="hidden lg:block" /> targets. Revio predicts the rest.</h2>
        <p className="text-xl text-slate-600 leading-relaxed md:pt-2 max-w-lg">Revio's AI monitors your sales pipeline and forecasts revenue for you, 24/7. Perfect for leaders and reps alike. No coding, no guesswork.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">

        {/* Feature Card 1: Pipeline Velocity */}
        <div className="flex flex-col overflow-hidden bg-white h-[480px] border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.4s both' }}>
          <div className="flex justify-between text-sm font-medium tracking-widest text-slate-400 uppercase relative z-20">
            <span>Pipeline Velocity</span><span>#1</span>
          </div>
          <div className="flex-1 flex flex-col z-10 w-full max-w-[260px] mt-6 mr-auto ml-auto relative justify-center">
            <div className="relative w-full aspect-[2/1] overflow-visible">
              <div className="absolute inset-0 bg-[#50C878]/10 blur-3xl rounded-full translate-y-1/2" style={{ animation: 'soft-pulse 5s ease-in-out infinite' }}></div>
              <svg viewBox="0 0 200 100" className="z-10 overflow-visible relative drop-shadow-md w-[260px] h-[130px]" strokeWidth="2">
                <path d="M 10 95 A 90 90 0 0 1 190 95" fill="none" stroke="#f1f5f9" strokeWidth="12" strokeDasharray="3 5" />
                <path d="M 10 95 A 90 90 0 0 1 127.8 9.4" fill="none" stroke="#50C878" strokeWidth="12" strokeDasharray="3 5" style={{ animation: 'soft-pulse-opacity 4s ease-in-out infinite' }} />
                <circle cx="100" cy="95" r="18" fill="white" stroke="#e2e8f0" strokeWidth="6" />
                <path d="M 96 95 L 104 95 L 126 14 L 122 13 Z" fill="#334155" style={{ animation: 'needle-sweep 8s ease-in-out infinite', transformOrigin: '100px 95px' }} />
              </svg>
            </div>
            <div className="flex items-center gap-6 mt-10">
              <div className="flex-1 h-2 bg-slate-100 rounded-full relative">
                <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-slate-200 rounded-full"></div>
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-8 bg-white border-2 border-slate-200 rounded-md flex flex-col justify-center items-center gap-[3px] shadow-sm cursor-pointer">
                  <div className="w-[3px] h-[3px] bg-[#50C878] rounded-full" style={{ animation: 'soft-pulse-opacity 2s ease-in-out infinite 0s' }}></div>
                  <div className="w-[3px] h-[3px] bg-[#50C878] rounded-full" style={{ animation: 'soft-pulse-opacity 2s ease-in-out infinite 0.3s' }}></div>
                  <div className="w-[3px] h-[3px] bg-[#50C878] rounded-full" style={{ animation: 'soft-pulse-opacity 2s ease-in-out infinite 0.6s' }}></div>
                </div>
              </div>
              <div className="flex flex-col gap-3 min-w-[90px]">
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="w-4 h-4 rounded-full border-[3px] border-slate-200 flex items-center justify-center bg-white"><div className="w-1.5 h-1.5 bg-[#50C878] rounded-full" style={{ animation: 'soft-pulse 3s ease-in-out infinite' }}></div></div>
                  <span className="text-sm font-medium tracking-widest text-slate-900">ENTERPRISE</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="w-4 h-4 rounded-full border-[3px] border-slate-200 flex items-center justify-center bg-white"></div>
                  <span className="text-sm font-medium tracking-widest text-slate-400">MID-MARKET</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-auto text-center relative z-20 pt-8">
            <h3 className="text-lg font-normal text-slate-900 text-left mb-2">Spot trends instantly.</h3>
            <p className="leading-relaxed text-base text-slate-500 text-left px-2">Get instant alerts on key pipeline movements or when deals are at risk.</p>
          </div>
        </div>

        {/* Feature Card 2: AI Forecast Engine */}
        <div className="flex flex-col overflow-hidden bg-white h-[480px] border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.5s both' }}>
          <div className="flex justify-between text-sm font-medium tracking-widest text-slate-400 uppercase relative z-20"><span>AI Forecast Engine</span><span>#2</span></div>
          <div className="flex-1 flex items-center justify-center relative w-full mt-2">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col gap-[14px] opacity-40 z-0">
              <div className="h-[2px] w-full bg-slate-200 relative overflow-hidden"><div className="absolute inset-y-0 left-0 w-1/2 bg-[#50C878]/50" style={{ animation: 'signal-flow 3s linear infinite 0s' }}></div></div>
              <div className="h-[2px] w-full bg-slate-200 relative overflow-hidden"><div className="absolute inset-y-0 left-0 w-1/2 bg-[#50C878]/50" style={{ animation: 'signal-flow 3s linear infinite 0.8s' }}></div></div>
              <div className="h-[2px] w-full bg-slate-200 relative overflow-hidden"><div className="absolute inset-y-0 left-0 w-1/2 bg-[#50C878]/50" style={{ animation: 'signal-flow 3s linear infinite 1.6s' }}></div></div>
              <div className="h-[2px] w-full bg-slate-200 relative overflow-hidden"><div className="absolute inset-y-0 left-0 w-1/2 bg-[#50C878]/50" style={{ animation: 'signal-flow 3s linear infinite 2.4s' }}></div></div>
            </div>
            <div className="relative z-10 w-[140px] h-[140px] bg-gradient-to-br from-white to-slate-50 rounded-[1.5rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,1)] border border-slate-200 flex flex-col justify-between p-2.5">
              <div className="flex justify-between w-full px-0.5"><div className="w-2 h-2 rounded-full bg-slate-200 shadow-inner"></div><div className="w-2 h-2 rounded-full bg-slate-200 shadow-inner"></div></div>
              <div className="w-16 h-16 rounded-2xl bg-[#f8fafc] border border-slate-200 mx-auto flex items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#50C878]/10 blur-xl" style={{ animation: 'soft-pulse 4s ease-in-out infinite' }}></div>
                <div className="grid grid-cols-3 gap-[3px] relative z-10">
                  <div className="w-2 h-2 bg-slate-300 rounded-[2px]" style={{ animation: 'soft-pulse-opacity 3s ease-in-out infinite 0.1s' }}></div>
                  <div className="w-2 h-2 bg-[#50C878] rounded-[2px] shadow-[0_0_8px_rgba(80,200,120,0.8)]" style={{ animation: 'soft-pulse-opacity 3s ease-in-out infinite 0.5s' }}></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-[2px]" style={{ animation: 'soft-pulse-opacity 3s ease-in-out infinite 0.9s' }}></div>
                  <div className="w-2 h-2 bg-[#50C878] rounded-[2px] shadow-[0_0_8px_rgba(80,200,120,0.8)]" style={{ animation: 'soft-pulse-opacity 3s ease-in-out infinite 1.3s' }}></div>
                  <div className="w-2 h-2 bg-[#3BA662] rounded-[2px] shadow-[0_0_10px_rgba(80,200,120,1)]" style={{ animation: 'soft-pulse 3s ease-in-out infinite' }}></div>
                  <div className="w-2 h-2 bg-[#50C878] rounded-[2px] shadow-[0_0_8px_rgba(80,200,120,0.8)]" style={{ animation: 'soft-pulse-opacity 3s ease-in-out infinite 1.7s' }}></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-[2px]" style={{ animation: 'soft-pulse-opacity 3s ease-in-out infinite 2.1s' }}></div>
                  <div className="w-2 h-2 bg-[#50C878] rounded-[2px] shadow-[0_0_8px_rgba(80,200,120,0.8)]" style={{ animation: 'soft-pulse-opacity 3s ease-in-out infinite 2.5s' }}></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-[2px]" style={{ animation: 'soft-pulse-opacity 3s ease-in-out infinite 2.9s' }}></div>
                </div>
              </div>
              <div className="flex justify-between w-full px-0.5"><div className="w-2 h-2 rounded-full bg-slate-200 shadow-inner"></div><div className="w-2 h-2 rounded-full bg-slate-200 shadow-inner"></div></div>
            </div>
          </div>
          <div className="mt-auto text-center relative z-20 pt-8">
            <h3 className="text-lg font-normal text-slate-900 text-left mb-2">AI-Powered precision</h3>
            <p className="leading-relaxed text-base text-slate-500 text-left pr-2 pl-2">Smart and accurate AI-driven engine makes data-backed predictions for optimal sales results.</p>
          </div>
        </div>

        {/* Feature Card 3: Custom Dashboards */}
        <div className="flex flex-col overflow-hidden bg-white h-[480px] border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.5s both' }}>
          <div className="flex justify-between text-sm font-medium tracking-widest text-slate-400 uppercase relative z-20"><span>Custom Dashboards</span><span>#3</span></div>
          <div className="flex-1 flex items-center justify-center relative w-full pt-4">
            <div className="overflow-hidden flex flex-col z-0 bg-gradient-to-br from-[#f2fdf7] to-[#fbfffb] w-full h-full border-slate-100 border rounded-2xl pt-4 pr-4 pb-4 pl-4 relative justify-center">
              <div className="flex flex-col space-y-2 z-10 w-full mb-3 mt-1 px-1">
                {[
                  { label: 'Pipeline_Stage', dotAnim: 'seq-dot-1', checkAnim: 'seq-check-1', sweepAnim: 'seq-sweep-1' },
                  { label: 'Revenue_Track', dotAnim: 'seq-dot-2', checkAnim: 'seq-check-2', sweepAnim: 'seq-sweep-2' },
                  { label: 'Territory_Map', dotAnim: 'seq-dot-3', checkAnim: 'seq-check-3', sweepAnim: 'seq-sweep-3' },
                ].map(({ label, dotAnim, checkAnim, sweepAnim }) => (
                  <div key={label} className="w-full bg-white/90 backdrop-blur-sm rounded-xl p-2.5 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.04)] border border-emerald-50 flex justify-between items-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/40 to-transparent" style={{ animation: `${sweepAnim} 8s cubic-bezier(.4,0,.2,1) infinite` }}></div>
                    <div className="flex items-center space-x-2 relative z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400" style={{ animation: `${dotAnim} 8s cubic-bezier(.4,0,.2,1) infinite` }}></div>
                      <span className="text-[10px] font-semibold text-gray-700 tracking-wide uppercase">{label}</span>
                    </div>
                    <div className="w-5 h-5 rounded-[4px] bg-gradient-to-b from-emerald-300 to-emerald-500 shadow-sm flex items-center justify-center border border-emerald-400 relative z-10" style={{ animation: `${checkAnim} 8s cubic-bezier(.34,1.56,.64,1) infinite` }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full mt-auto bg-gradient-to-b from-[#34d399] to-[#10b981] rounded-xl p-3 shadow-md relative overflow-hidden flex justify-between items-center z-10 border border-emerald-400" style={{ animation: 'seq-card-glow 8s ease-in-out infinite' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" style={{ animation: 'seq-card-sweep 8s cubic-bezier(.4,0,.2,1) infinite' }}></div>
                <div className="flex flex-col relative z-10">
                  <span className="text-[10px] font-medium text-emerald-50 uppercase tracking-wider mb-0.5">Custom Layout</span>
                  <span className="text-xl font-semibold text-white tracking-tight leading-none drop-shadow-sm">Personalized</span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/20 shadow-inner backdrop-blur-md flex items-center justify-center border border-white/20 relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 21v-7" /><path d="M4 10V3" /><path d="M12 21v-9" /><path d="M12 8V3" /><path d="M20 21v-5" /><path d="M20 12V3" /><path d="M1 14h6" /><path d="M9 8h6" /><path d="M17 16h6" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-auto text-center relative z-20 pt-8">
            <h3 className="text-lg font-normal text-slate-900 text-left mb-2">Tailor your experience</h3>
            <p className="leading-relaxed text-base text-slate-500 text-left px-2">Customize your dashboards to fit your unique sales process, creating just for you.</p>
          </div>
        </div>

        {/* Feature Card 4: Lead Attribution */}
        <div className="flex flex-col overflow-hidden bg-white h-[480px] border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.6s both' }}>
          <div className="flex justify-between text-sm font-medium tracking-widest text-slate-400 uppercase relative z-20"><span>Lead Attribution</span><span>#4</span></div>
          <div className="flex-1 flex items-center justify-center relative w-full pt-4">
            <div className="overflow-hidden flex flex-col z-0 bg-gradient-to-br from-[#f0f9ff] to-[#fcfcff] w-full h-full border-slate-100 border rounded-2xl relative justify-center items-center">
              <div className="relative w-[180px] h-[180px] z-10 scale-90 sm:scale-100 mt-2" style={{ animation: 'gentle-float 6s ease-in-out infinite' }}>
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <defs><linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" /><stop offset="100%" stopColor="#818CF8" stopOpacity="0.85" /></linearGradient></defs>
                  <polygon points="50,5 93,36 76,86 24,86 7,36" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
                  <polygon points="50,23 80,45 68,75 32,75 20,45" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
                  <polygon points="50,40 65,51 59,65 41,65 35,51" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
                  <line x1="50" y1="50" x2="50" y2="5" stroke="#E2E8F0" strokeWidth="1.5" /><line x1="50" y1="50" x2="93" y2="36" stroke="#E2E8F0" strokeWidth="1.5" /><line x1="50" y1="50" x2="76" y2="86" stroke="#E2E8F0" strokeWidth="1.5" /><line x1="50" y1="50" x2="24" y2="86" stroke="#E2E8F0" strokeWidth="1.5" /><line x1="50" y1="50" x2="7" y2="36" stroke="#E2E8F0" strokeWidth="1.5" />
                  <polygon points="50,20 80,45 55,75 30,86 20,45" fill="url(#radarGrad)" stroke="none" className="drop-shadow-md radar-fill-anim" />
                  <path d="M 50,20 L 80,45 L 55,75 L 30,86 L 20,45 Z" fill="none" stroke="#0EA5E9" strokeWidth="1.5" strokeLinejoin="round" className="drop-shadow-md radar-stroke-anim" />
                  <circle cx="50" cy="20" r="2.5" fill="white" stroke="#0EA5E9" strokeWidth="1.5" className="radar-pt-1" style={{ transformOrigin: '50px 20px' }} />
                  <circle cx="80" cy="45" r="2.5" fill="white" stroke="#0EA5E9" strokeWidth="1.5" className="radar-pt-2" style={{ transformOrigin: '80px 45px' }} />
                  <circle cx="55" cy="75" r="2.5" fill="white" stroke="#0EA5E9" strokeWidth="1.5" className="radar-pt-3" style={{ transformOrigin: '55px 75px' }} />
                  <circle cx="30" cy="86" r="2.5" fill="white" stroke="#0EA5E9" strokeWidth="1.5" className="radar-pt-4" style={{ transformOrigin: '30px 86px' }} />
                  <circle cx="20" cy="45" r="2.5" fill="white" stroke="#0EA5E9" strokeWidth="1.5" className="radar-pt-5" style={{ transformOrigin: '20px 45px' }} />
                </svg>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-center flex flex-col items-center"><span className="text-[9px] text-gray-400 font-medium uppercase tracking-wide">Organic</span><span className="text-[11px] font-semibold text-gray-900 leading-none mt-1">589</span></div>
                <div className="absolute top-6 -right-6 text-left font-medium uppercase tracking-wide text-gray-400 text-[9px] flex flex-col items-start">Direct<span className="text-[11px] font-semibold text-gray-900 leading-none mt-1">402</span></div>
                <div className="absolute bottom-6 -right-5 text-left flex flex-col items-start"><span className="text-[9px] text-gray-400 font-medium uppercase tracking-wide">Referral</span><span className="text-[11px] font-semibold text-gray-900 leading-none mt-1">205</span></div>
                <div className="absolute -bottom-4 right-8 text-right flex flex-col items-start"><span className="text-[9px] text-gray-400 font-medium uppercase tracking-wide">Paid</span><span className="text-[11px] font-semibold text-gray-900 leading-none mt-1">82</span></div>
                <div className="absolute -bottom-2 -left-4 text-left flex flex-col items-start"><span className="text-[9px] text-gray-400 font-medium uppercase tracking-wide">Social</span><span className="text-[11px] font-semibold text-gray-900 leading-none mt-1">317</span></div>
                <div className="absolute top-10 -left-8 text-left flex flex-col items-start"><span className="text-[9px] text-gray-400 font-medium uppercase tracking-wide">Events</span><span className="text-[11px] font-semibold text-gray-900 leading-none mt-1">356</span></div>
              </div>
            </div>
          </div>
          <div className="mt-auto text-center relative z-20 pt-8">
            <h3 className="text-lg font-normal text-slate-900 text-left mb-2">Channel ROI</h3>
            <p className="leading-relaxed text-base text-slate-500 text-left px-2">Attribution modeling mapped to identify the most effective lead acquisition channels.</p>
          </div>
        </div>

        {/* Feature Card 5: Account Scoring */}
        <div className="flex flex-col overflow-hidden bg-white h-[480px] border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.7s both' }}>
          <div className="flex justify-between text-sm font-medium tracking-widest text-slate-400 uppercase relative z-20"><span>Account Scoring</span><span>#5</span></div>
          <div className="flex-1 flex items-center justify-center relative w-full pt-4">
            <div className="overflow-hidden flex flex-col z-0 bg-gradient-to-br from-[#fffaf7] to-[#fffdfc] w-full h-full border-slate-100 border rounded-2xl p-4 relative justify-center items-center">
              <div className="w-full flex justify-between items-start mb-6 relative z-20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-50/50 border border-orange-100/50 flex items-center justify-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <h3 className="text-[13px] font-semibold text-gray-900 leading-tight">Archetypes</h3>
                </div>
              </div>
              <div className="flex-1 flex w-full items-center justify-between relative z-10 px-0 sm:px-2 gap-2">
                <div className="relative w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] flex-shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 drop-shadow-sm relative z-10">
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#F1F5F9" strokeWidth="25" className="donut-seg-1" style={{ strokeDasharray: '0 220' }} />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#FF7B7B" strokeWidth="25" strokeDashoffset="-25" className="donut-seg-2" style={{ strokeDasharray: '0 220' }} />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#4ECDC4" strokeWidth="25" strokeDashoffset="-60" className="donut-seg-3" style={{ strokeDasharray: '0 220' }} />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#FFD166" strokeWidth="25" strokeDashoffset="-90" className="donut-seg-4" style={{ strokeDasharray: '0 220' }} />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#A7F3D0" strokeWidth="25" strokeDashoffset="-170" className="donut-seg-5" style={{ strokeDasharray: '0 220' }} />
                  </svg>
                  <div className="absolute top-0 right-0 translate-x-1 sm:translate-x-2 -translate-y-2 z-20 donut-text-container opacity-0">
                    <div className="bg-white border border-gray-100 text-gray-700 px-2 py-0.5 rounded-md text-[9px] font-semibold shadow-sm" style={{ animation: 'gentle-float 4s ease-in-out infinite' }}>12,842</div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 relative z-10">
                  {[
                    { color: 'bg-[#4ECDC4]', label: 'Enterprise', delay: '0s' },
                    { color: 'bg-[#FF7B7B]', label: 'Mid-Market', delay: '0.5s' },
                    { color: 'bg-[#A7F3D0]', label: 'Strategic', delay: '1s' },
                    { color: 'bg-[#F1F5F9] border border-gray-200', label: 'Transactional', delay: '1.5s' },
                    { color: 'bg-[#FFD166]', label: 'Global', delay: '2s' },
                  ].map(({ color, label, delay }) => (
                    <div key={label} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${color} shadow-sm`} style={{ animation: `soft-pulse-opacity 2.5s ease-in-out infinite ${delay}` }}></div>
                      <span className="text-[11px] font-medium text-gray-600">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-auto text-center relative z-20 pt-8">
            <h3 className="text-lg font-normal text-slate-900 text-left mb-2">Predictive Scoring</h3>
            <p className="leading-relaxed text-base text-slate-500 text-left px-2">Prioritize accounts with the highest propensity to close based on engagement and behavioral depth.</p>
          </div>
        </div>

        {/* Feature Card 6: Sales Compliance */}
        <div className="flex flex-col overflow-hidden bg-white h-[480px] border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.8s both' }}>
          <div className="flex justify-between text-sm font-medium tracking-widest text-slate-400 uppercase relative z-20"><span>Sales Compliance</span><span>#6</span></div>
          <div className="flex-1 flex items-center justify-center relative w-full pt-4">
            <div className="overflow-hidden flex flex-col z-0 bg-slate-50 w-full h-full border-slate-100 border rounded-2xl p-4 relative justify-center items-center shadow-inner">
              <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.4)] border border-gray-950 relative z-10 flex flex-col h-full overflow-hidden">
                <div className="flex gap-1.5 mb-5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-600" style={{ animation: 'soft-pulse-opacity 4s ease-in-out infinite 0s' }}></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-600" style={{ animation: 'soft-pulse-opacity 4s ease-in-out infinite 2s' }}></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)] animate-pulse"></div>
                </div>
                <div className="flex-1 overflow-hidden relative">
                  <div className="flex flex-col gap-3.5 opacity-90 font-mono text-[11px] text-gray-400" style={{ animation: 'log-scroll 12s ease-in-out infinite' }}>
                    <div>&gt; [10:24:01] <span className="text-blue-400">AUTH_SUCCESS</span><br /><span className="pl-4 text-gray-500">node_0x44</span></div>
                    <div>&gt; [10:24:02] <span className="text-purple-400">VALIDATE_PAYLOAD</span><br /><span className="pl-4 text-gray-500">true</span></div>
                    <div>&gt; [10:24:05] <span className="text-emerald-400">EXECUTE_TX</span><br /><span className="pl-4 text-gray-500">ok</span></div>
                    <div>&gt; [10:24:06] <span className="text-gray-500" style={{ animation: 'soft-pulse-opacity 2s ease-in-out infinite' }}>AWAITING_SIG...</span><span className="animate-pulse ml-1">_</span></div>
                    <div>&gt; [10:24:08] <span className="text-sky-400">SYNC_COMPLETE</span><br /><span className="pl-4 text-gray-500">hash_0x8f2</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-auto text-center relative z-20 pt-8">
            <h3 className="text-lg font-normal text-slate-900 text-left mb-2">Activity Tracking</h3>
            <p className="leading-relaxed text-base text-slate-500 text-left px-2">Secure, immutable record of rep activities, system states, and pipeline changes.</p>
          </div>
        </div>

      </div>

      {/* Bottom features grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 lg:px-4 pr-2 pl-2 gap-x-10 gap-y-10 animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.9s both' }}>
        <div>
          <div className="flex items-center gap-3 mb-3"><iconify-icon icon="solar:chart-linear" class="text-2xl text-slate-800"></iconify-icon><h4 className="text-lg font-normal text-slate-900">Predictive Analytics</h4></div>
          <p className="text-base text-slate-500 leading-relaxed max-w-sm">Revio's AI monitors your CRM data and forecasts sales, 24/7.</p>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-3"><iconify-icon icon="solar:bell-linear" class="text-2xl text-slate-800"></iconify-icon><h4 className="text-lg font-normal text-slate-900">Real-Time Insights</h4></div>
          <p className="text-base text-slate-500 leading-relaxed max-w-sm">Stay informed with real-time analytics and performance tracking.</p>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-3"><iconify-icon icon="solar:magic-stick-3-linear" class="text-2xl text-slate-800"></iconify-icon><h4 className="text-lg font-normal text-slate-900">Customizable Forecasts</h4></div>
          <p className="text-base text-slate-500 leading-relaxed max-w-sm">You control the parameters and growth targets—Revio does the rest.</p>
        </div>
      </div>
    </section>
  )
}
