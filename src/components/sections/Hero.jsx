function PipelineIntelligenceCard() {
  return (
    <div
      className="flex flex-col overflow-hidden bg-white h-full border-gray-100 border rounded-[2rem] pt-3 pr-3 pb-3 pl-3 relative shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_1px_0_white]"
      style={{ animation: 'animationIn 0.8s ease-out 0.6s both' }}
    >
      <div className="h-[22rem] rounded-[1.5rem] bg-gradient-to-br from-[#f3f4fd] to-[#fcfcff] relative overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.03)] border border-white/80 flex items-center justify-center pt-8 shrink-0">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <path d="M 27 83 C 27 60, 50 65, 50 39" stroke="#e0e7ff" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
            <path d="M 50 83 L 50 39" stroke="#e0e7ff" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
            <path d="M 73 83 C 73 60, 50 65, 50 39" stroke="#e0e7ff" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
            <path d="M 27 83 C 27 60, 50 65, 50 39" stroke="#818cf8" strokeWidth="4" fill="none" pathLength="100" strokeDasharray="20 100" strokeLinecap="round" className="opacity-50" style={{ animation: 'flowBeam 2.5s cubic-bezier(.4,0,.2,1) infinite' }} vectorEffect="non-scaling-stroke" />
            <path d="M 50 83 L 50 39" stroke="#818cf8" strokeWidth="4" fill="none" pathLength="100" strokeDasharray="20 100" strokeLinecap="round" className="opacity-50" style={{ animation: 'flowBeam 2.5s cubic-bezier(.4,0,.2,1) infinite 0.8s' }} vectorEffect="non-scaling-stroke" />
            <path d="M 73 83 C 73 60, 50 65, 50 39" stroke="#818cf8" strokeWidth="4" fill="none" pathLength="100" strokeDasharray="20 100" strokeLinecap="round" className="opacity-50" style={{ animation: 'flowBeam 2.5s cubic-bezier(.4,0,.2,1) infinite 1.6s' }} vectorEffect="non-scaling-stroke" />
            <path d="M 27 83 C 27 60, 50 65, 50 39" stroke="#4f46e5" strokeWidth="2" fill="none" pathLength="100" strokeDasharray="20 100" strokeLinecap="round" style={{ animation: 'flowBeam 2.5s cubic-bezier(.4,0,.2,1) infinite' }} vectorEffect="non-scaling-stroke" />
            <path d="M 50 83 L 50 39" stroke="#4f46e5" strokeWidth="2" fill="none" pathLength="100" strokeDasharray="20 100" strokeLinecap="round" style={{ animation: 'flowBeam 2.5s cubic-bezier(.4,0,.2,1) infinite 0.8s' }} vectorEffect="non-scaling-stroke" />
            <path d="M 73 83 C 73 60, 50 65, 50 39" stroke="#4f46e5" strokeWidth="2" fill="none" pathLength="100" strokeDasharray="20 100" strokeLinecap="round" style={{ animation: 'flowBeam 2.5s cubic-bezier(.4,0,.2,1) infinite 1.6s' }} vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        <div className="flex z-20 bg-gradient-to-b from-[#818cf8] to-[#4f46e5] w-24 h-24 border-indigo-400 border rounded-[1.5rem] absolute top-[25%] items-center justify-center" style={{ animation: 'breatheGlow 4s ease-in-out infinite', boxShadow: '0 20px 40px -10px rgba(79,70,229,.6),inset 0 2px 4px rgba(255,255,255,.6),inset 0 -4px 6px rgba(0,0,0,.2)' }}>
          <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" />
          </svg>
        </div>
        <div className="absolute bottom-[10%] left-[20%] z-20 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-white to-[#eef2ff] shadow-[0_15px_25px_-5px_rgba(79,70,229,.25),inset_0_2px_3px_white] flex items-center justify-center border border-[#e0e7ff]" style={{ animation: 'pulseNode 4s ease-in-out infinite 0s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
          </div>
          <span className="text-xs font-medium text-indigo-400 mt-2 tracking-tight">Email</span>
        </div>
        <div className="absolute bottom-[10%] left-[50%] -translate-x-1/2 z-20 flex flex-col items-center">
          <div className="flex overflow-hidden bg-gradient-to-b from-white to-[#eef2ff] w-12 h-12 border-[#e0e7ff] border rounded-full relative shadow-[0_15px_25px_-5px_rgba(79,70,229,.25),inset_0_2px_3px_white] items-center justify-center" style={{ animation: 'pulseNode 4s ease-in-out infinite 0.4s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
          </div>
          <span className="text-xs font-medium text-indigo-400 mt-2 tracking-tight">CRM</span>
        </div>
        <div className="absolute bottom-[10%] right-[20%] z-20 flex flex-col items-center">
          <div className="flex overflow-hidden bg-gradient-to-b from-white to-[#eef2ff] w-12 h-12 border-[#e0e7ff] border rounded-full relative shadow-[0_15px_25px_-5px_rgba(79,70,229,.25),inset_0_2px_3px_white] items-center justify-center" style={{ animation: 'pulseNode 4s ease-in-out infinite 0.8s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2"><rect width="3" height="8" x="13" y="2" rx="1.5" /><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" /><rect width="3" height="8" x="8" y="14" rx="1.5" /><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" /><rect width="8" height="3" x="14" y="13" rx="1.5" /><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" /><rect width="8" height="3" x="2" y="8" rx="1.5" /><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" /></svg>
          </div>
          <span className="text-xs font-medium text-indigo-400 mt-2 tracking-tight">Slack</span>
        </div>
      </div>
      <div className="pt-6 px-3 pb-4 flex-1">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900">AI Voice Agents</h3>
        <p className="text-base text-gray-500 mt-2 leading-relaxed">Deploy autonomous AI voice agents that handle inbound and outbound calls 24/7 with human-like tone, contextual understanding, and instant responses.</p>
      </div>
    </div>
  )
}

function RevenueForecastingCard() {
  return (
    <div
      className="flex flex-col overflow-hidden group bg-white h-full border-gray-100 border rounded-[2rem] pt-3 pr-3 pb-3 pl-3 relative shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_1px_0_white]"
      style={{ animation: 'animationIn 0.8s ease-out 0.7s both' }}
    >
      <div className="h-[22rem] rounded-[1.5rem] bg-gradient-to-br from-[#fffaf7] to-[#fffdfc] relative overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.02)] border border-white/80 flex flex-col items-center px-8 mb-4 shrink-0">
        <div className="flex flex-col bg-white w-full max-w-[240px] z-30 border-orange-50/50 border rounded-2xl mt-8 pt-4 pr-4 pb-4 pl-4 relative shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08),inset_0_2px_4px_white,inset_0_0_0_1px_rgba(251,146,60,0.1)]" style={{ animation: 'floatUpCard 5s ease-in-out infinite' }}>
          <div className="flex justify-between items-center w-full relative z-10">
            <span className="text-xs font-semibold text-gray-500 tracking-wide">Forecast Accuracy</span>
            <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-md border border-orange-100/50">98.2%</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full mt-5 relative z-10">
            <span className="text-[20px] font-bold text-orange-400 tracking-tight leading-none mb-1">Expected</span>
            <span className="text-[28px] font-extrabold text-orange-500 tracking-tight leading-none">$4.2M</span>
          </div>
        </div>
        <div className="flex flex-col bg-white w-full h-40 z-10 border-orange-50/50 border rounded-t-[1.5rem] pt-5 pr-5 pb-5 pl-5 relative shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08),inset_0_2px_4px_white,0_0_0_1px_rgba(251,146,60,0.1)_inset] mt-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Velocity Tracking</span>
            <div className="w-8 h-4 rounded-full bg-orange-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] relative border border-orange-200">
              <div className="absolute right-[2px] top-[1px] w-3 h-3 bg-orange-400 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_1px_1px_white]"></div>
            </div>
          </div>
          <div className="flex items-end gap-3 h-full pb-2">
            <div className="flex-1 bg-gradient-to-t from-orange-100 to-orange-50 rounded-md origin-bottom" style={{ animation: 'heightBar1 5s ease-in-out infinite' }}></div>
            <div className="flex-1 bg-gradient-to-t from-orange-200 to-orange-100 rounded-md origin-bottom" style={{ animation: 'heightBar2 5s ease-in-out infinite' }}></div>
            <div className="flex-1 bg-gradient-to-t from-orange-400 to-orange-300 rounded-md relative origin-bottom" style={{ animation: 'heightBar3 5s ease-in-out infinite' }}></div>
            <div className="flex-1 bg-gradient-to-t from-orange-200 to-orange-100 rounded-md origin-bottom" style={{ animation: 'heightBar4 5s ease-in-out infinite' }}></div>
            <div className="flex-1 bg-gradient-to-t from-orange-100 to-orange-50 rounded-md origin-bottom" style={{ animation: 'heightBar5 5s ease-in-out infinite' }}></div>
          </div>
        </div>
      </div>
      <div className="pt-2 px-3 pb-4 flex-1">
        <h3 className="text-2xl font-medium tracking-tight text-gray-900">Smart Analytics</h3>
        <p className="text-base text-gray-500 mt-2 leading-relaxed">Access insights into call performance, sentiment, and behavior. With AI-powered analytics, you can optimize sales, support, and marketing in real time.</p>
      </div>
    </div>
  )
}

function DealPrioritizationCard() {
  return (
    <div
      className="flex flex-col overflow-hidden group bg-white h-full border-gray-100 border rounded-[2rem] pt-3 pr-3 pb-3 pl-3 relative shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_1px_0_white]"
      style={{ animation: 'animationIn 0.8s ease-out 0.8s both' }}
    >
      <div className="h-[22rem] rounded-[1.5rem] bg-gradient-to-br from-[#f0f9ff] to-[#fcfcff] relative overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.02)] border border-white/80 flex flex-col items-center justify-center p-5 mb-4 shrink-0">
        <div className="absolute w-40 h-40 bg-sky-100/40 rounded-full blur-2xl pointer-events-none z-0"></div>
        <div className="w-full space-y-3 relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-[0_4px_10px_rgba(0,0,0,0.03),inset_0_1px_0_white] border border-sky-100/50 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-sky-50 text-sky-500 flex items-center justify-center shadow-[inset_0_1px_1px_white,0_1px_2px_rgba(0,0,0,0.05)] border border-sky-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" /></svg>
              </div>
              <span className="text-xs font-medium text-gray-700 tracking-tight">Intent Scoring</span>
            </div>
            <div className="w-9 h-5 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] relative border border-slate-200 bg-slate-100" style={{ animation: 'toggleBgAnim 6s ease-in-out infinite 0s' }}>
              <div className="absolute left-[2px] top-[1px] w-4 h-4 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_1px_1px_white]" style={{ animation: 'toggleCircleAnim 6s ease-in-out infinite 0s' }}></div>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-[0_4px_10px_rgba(0,0,0,0.03),inset_0_1px_0_white] border border-sky-100/50 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-sky-50 text-sky-500 flex items-center justify-center shadow-[inset_0_1px_1px_white,0_1px_2px_rgba(0,0,0,0.05)] border border-sky-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
              </div>
              <span className="text-xs font-medium text-gray-700 tracking-tight">Risk Detection</span>
            </div>
            <div className="w-9 h-5 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] relative border border-slate-200 bg-slate-100" style={{ animation: 'toggleBgAnim 6s ease-in-out infinite 0.5s' }}>
              <div className="absolute left-[2px] top-[1px] w-4 h-4 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_1px_1px_white]" style={{ animation: 'toggleCircleAnim 6s ease-in-out infinite 0.5s' }}></div>
            </div>
          </div>
          <div className="z-10 bg-white w-full border-emerald-100 border rounded-xl mb-4 pt-4 pr-4 pb-4 pl-4 relative shadow-[0_15px_25px_-5px_rgba(74,222,128,0.25),inset_0_2px_3px_white]">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Win Probability</span>
              <span className="text-[10px] font-medium text-emerald-500">84%</span>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] relative border border-gray-200/50">
              <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full" style={{ animation: 'fillProgress84 6s cubic-bezier(.4,0,.2,1) infinite 1s' }}></div>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.1),inset_0_2px_4px_white] border border-gray-200 flex items-center justify-center" style={{ animation: 'moveSlider84 6s cubic-bezier(.4,0,.2,1) infinite 1s' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
              </div>
            </div>
          </div>
          <div className="z-10 bg-white w-full border-emerald-100 border rounded-xl pt-4 pr-4 pb-4 pl-4 relative shadow-[0_15px_25px_-5px_rgba(74,222,128,0.25),inset_0_2px_3px_white]">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Deal Potential</span>
              <span className="text-[10px] font-medium text-emerald-500">$240k</span>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] relative border border-gray-200/50">
              <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full" style={{ animation: 'fillProgress65 6s cubic-bezier(.4,0,.2,1) infinite 1.5s' }}></div>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.1),inset_0_2px_4px_white] border border-gray-200 flex items-center justify-center" style={{ animation: 'moveSlider65 6s cubic-bezier(.4,0,.2,1) infinite 1.5s' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2 px-3 pb-4 flex-1">
        <h3 className="text-2xl font-medium tracking-tight text-gray-900">Lead Qualification</h3>
        <p className="text-base text-gray-500 mt-2 leading-relaxed">Use intelligent AI Voice Agents to automatically score and qualify leads based on conversation quality, behavior, and intent.</p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="sm:px-6 lg:px-8 flex flex-col text-center w-full max-w-7xl z-10 mr-auto ml-auto pt-20 pr-4 pb-32 pl-4 relative items-center">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-50/40 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Badge */}
      <div
        className="inline-flex bg-emerald-50 z-10 border-emerald-100/50 border rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 relative items-center"
        style={{ animation: 'animationIn 0.8s ease-out 0.2s both' }}
      >
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
        <span className="text-xs font-medium text-emerald-700">OnDial AI Voice Agent Platform is now live</span>
      </div>

      <h1
        className="sm:text-6xl lg:text-7xl leading-[1.1] text-5xl font-semibold text-[#1c1917] tracking-tight max-w-4xl z-10 relative"
        style={{ animation: 'animationIn 0.8s ease-out 0.3s both' }}
      >
        Automate Your Calls,<br className="hidden sm:block" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">with OnDial AI Voice Agents.</span>
      </h1>

      <p
        className="sm:text-xl leading-relaxed text-lg text-gray-500 max-w-2xl z-10 mt-6 relative"
        style={{ animation: 'animationIn 0.8s ease-out 0.4s both' }}
      >
        Create voice agents that have natural, flowing conversations and provide 24/7 customer support with human-like understanding.
      </p>

      <div
        className="flex flex-col sm:flex-row z-10 mt-10 relative gap-x-4 gap-y-4 items-center"
        style={{ animation: 'animationIn 0.8s ease-out 0.5s both' }}
      >
        {/* Glassmorphic CTA button */}
        <button className="group flex sm:w-auto sm:px-10 sm:py-4 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] w-full mr-auto ml-auto pt-3.5 pr-8 pb-3.5 pl-8 relative items-center justify-center">
          <div className="absolute inset-0 rounded-full shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] pointer-events-none z-0 transition-shadow duration-300 group-hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)]"></div>
          <div className="overflow-hidden bg-white/40 rounded-full absolute top-0 right-0 bottom-0 left-0">
            <div className="absolute top-1/2 right-[30%] w-24 h-24 bg-blue-400/60 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 ease-out group-hover:scale-125 group-hover:-translate-y-1/3"></div>
            <div className="absolute bottom-[-20%] right-[15%] w-20 h-20 bg-rose-400/60 rounded-full blur-xl translate-x-1/2 transition-transform duration-700 ease-out delay-75 group-hover:scale-125 group-hover:-translate-x-1/4"></div>
            <div className="-translate-y-1/2 transition-transform duration-700 ease-out delay-150 group-hover:scale-110 bg-violet-400/60 w-20 h-20 rounded-full absolute top-[10%] right-[5%] blur-xl translate-x-1/2"></div>
            <div className="-right-[5%] -translate-y-1/2 transition-transform duration-700 ease-out group-hover:scale-125 group-hover:-translate-x-1/3 bg-orange-300/60 w-24 h-24 rounded-full absolute top-1/2 blur-xl"></div>
          </div>
          <div className="absolute inset-0 rounded-full bg-white/30 backdrop-blur-md border border-white/80 shadow-[inset_6px_6px_16px_rgba(255,255,255,0.7),inset_-6px_-6px_16px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,1)] pointer-events-none z-10 transition-colors duration-300 group-hover:bg-white/20"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none z-10 flex items-center justify-center overflow-hidden" style={{ padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}>
            <div className="w-[300%] aspect-square shrink-0 animate-spin" style={{ animationDuration: '3s' }}>
              <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_40%,rgba(255,255,255,1)_100%)]"></div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/80 via-transparent to-transparent opacity-70 pointer-events-none z-10"></div>
          <span className="relative z-20 text-base sm:text-lg font-medium tracking-tight flex gap-1 items-center text-black">
            Start Free Trial
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-0.5 transition-transform duration-300 group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
          </span>
        </button>

        <button className="group flex hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:px-10 sm:py-4 text-slate-600 bg-transparent w-full border-white/40 border rounded-full px-8 py-3.5 relative shadow-sm backdrop-blur-md gap-x-2 gap-y-2 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-40 pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-100"></div>
          <span className="relative z-20 text-base sm:text-lg font-medium tracking-tight">Get a Demo</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-20 w-5 h-5 transition-transform duration-300 group-hover:scale-110"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
        </button>
      </div>

      {/* Feature Cards */}
      <div className="w-full pt-24 pb-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-6 sm:gap-8 z-10 relative">
          <PipelineIntelligenceCard />
          <RevenueForecastingCard />
          <DealPrioritizationCard />
        </div>
      </div>
    </section>
  )
}
