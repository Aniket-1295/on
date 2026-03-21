import SectionDecor from '../ui/SectionDecor.jsx'

function DashboardSidebar() {
  return (
    <aside className="lg:w-[260px] shrink-0 flex-col hidden lg:flex overflow-y-auto custom-scrollbar bg-[#FBFBFC] w-full border-gray-200/60 border-r pt-8 pr-4 pb-6 pl-4">
      <div className="shrink-0 mb-10 pr-4 pl-4"><span className="text-xl font-semibold text-gray-900 tracking-tight">REVIO</span></div>
      <nav className="flex flex-col gap-1.5 flex-1 shrink-0">
        <a href="#" className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm relative transition-all bg-[#F4F5F7] text-gray-900 font-medium">
          <div className="nav-indicator absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gray-900 rounded-r-md transition-all duration-300"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>
          Dashboard
        </a>
        <a href="#" className="nav-item flex items-center gap-3 hover:bg-gray-50 hover:text-gray-900 transition-all text-sm rounded-xl pt-3 pr-4 pb-3 pl-4 relative text-gray-500 font-normal">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M8 7v7" /><path d="M12 7v4" /><path d="M16 7v9" /></svg>
          Pipeline
        </a>
        <a href="#" className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all relative mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
          Forecasts
        </a>
        <a href="#" className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
          Deal Intelligence
        </a>
        <a href="#" className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
          Team Analytics
        </a>
        <a href="#" className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="14" y="3" rx="1" /><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" /></svg>
          Integrations
        </a>
      </nav>
      <div className="mt-4 mb-4 shrink-0">
        <div className="w-full h-px bg-gray-200/60 mb-4"></div>
        <a href="#" className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
          Learning center
        </a>
        <a href="#" className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 10v4" /><path d="M5 10v4" /><path d="M12 2a10 10 0 0 0-10 10v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H4" /><path d="M20 12h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a10 10 0 0 0-10-10z" /></svg>
          Support
        </a>
      </div>
      <div id="upgrade-card" className="bg-white border border-gray-200/60 rounded-[20px] p-4 shadow-sm relative shrink-0 transition-all duration-300 origin-bottom">
        <button id="close-upgrade" className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <h4 className="text-sm font-medium text-gray-900 mb-1">Upgrade to Pro!</h4>
        <p className="text-[11px] text-gray-500 mb-3 leading-relaxed">Full pipeline insights with predictive AI models.</p>
        <button id="upgrade-btn" className="w-full bg-gray-900 text-white rounded-xl py-2 text-xs font-medium hover:bg-gray-800 transition-all">Upgrade now</button>
      </div>
    </aside>
  )
}

function DashboardHeader() {
  return (
    <header className="shrink-0 flex z-10 bg-[#FBFBFC] h-[80px] border-gray-200/50 border-b pr-8 pl-8 items-center justify-between">
      <div className="relative w-full max-w-sm hidden sm:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
        <input type="text" placeholder="Quick search" className="w-full bg-white border border-gray-200/60 rounded-xl pl-11 pr-4 py-2.5 text-sm font-normal focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder-gray-400 shadow-sm" />
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <button className="w-10 h-10 rounded-full bg-white border border-gray-200/60 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
        </button>
        <div className="hidden sm:flex items-center gap-3 bg-white border border-gray-200/60 rounded-full pr-5 pl-1.5 py-1.5 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
          <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-8 h-8 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="text-[13px] font-medium text-gray-900 leading-tight">Michael Johnson</span>
            <span className="text-[11px] text-gray-500 leading-tight">Sales Director</span>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200/60 rounded-xl px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M12 8v8" /><path d="M8 12h8" /></svg>
          New Report
        </button>
      </div>
    </header>
  )
}

function ConversionIntelligenceWidget() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden group bg-white h-full border-gray-100 border rounded-[2rem] p-3 relative shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_1px_0_white] min-h-[260px]">
      <div className="flex-1 min-h-[160px] rounded-[1.5rem] bg-gradient-to-br from-[#f3f4fd] to-[#fcfcff] relative overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.02)] border border-white/80 flex flex-col p-5 mb-3 shrink-0">
        <div className="flex justify-between items-start z-20 relative">
          <div>
            <h3 className="text-[15px] font-medium text-gray-900">Conversion Intelligence</h3>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#FF7B7B]"></div><span className="text-[11px] text-gray-500 font-normal">Pipeline Value</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#FFD166]"></div><span className="text-[11px] text-gray-500 font-normal">Active Deals</span></div>
            </div>
            <div className="flex items-center gap-5 mt-1">
              <span className="text-sm font-semibold text-gray-900">$842,105</span>
              <span className="text-sm font-semibold text-gray-900">4,210</span>
            </div>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-100 bg-white/50 backdrop-blur-sm text-[11px] font-medium text-gray-700 hover:bg-white transition-colors shadow-sm">Monthly <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg></button>
        </div>
        <div className="absolute inset-0 pt-[100px] pb-4 px-5 flex items-end">
          <div className="absolute bottom-6 left-5 z-10 max-w-[130px]">
            <div className="text-3xl font-semibold text-gray-900 tracking-tight leading-none drop-shadow-sm">+28.4%</div>
            <p className="text-[11px] text-gray-500 mt-1.5 leading-snug font-normal">Proprietary velocity tracking.</p>
          </div>
          <div className="w-full h-full relative ml-[140px] flex items-end justify-between px-2 pb-5">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M 0,65 L 16,65 L 25,45 L 33,45 L 50,60 L 66,60 L 75,40 L 83,40 L 100,50" fill="none" stroke="#FF7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm" style={{ strokeDasharray: 200, animation: 'chartDrawLine 6s ease-in-out infinite' }} />
              <path d="M 0,75 L 16,75 L 25,55 L 33,55 L 50,50 L 66,70 L 75,55 L 83,55 L 100,65" fill="none" stroke="#FFD166" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm" style={{ strokeDasharray: 200, animation: 'chartDrawLine 6s ease-in-out infinite' }} />
            </svg>
            <div className="relative h-full w-0 flex flex-col items-center justify-end"><div className="w-1.5 h-1.5 rounded-full bg-indigo-200 absolute bottom-[25%]" style={{ animation: 'popPoint1 6s cubic-bezier(.34,1.56,.64,1) infinite' }}></div></div>
            <div className="relative h-full w-0 flex flex-col items-center justify-end"><div className="w-1.5 h-1.5 rounded-full bg-indigo-200 absolute bottom-[45%]" style={{ animation: 'popPoint2 6s cubic-bezier(.34,1.56,.64,1) infinite' }}></div></div>
            <div className="relative h-full w-0 flex flex-col items-center justify-end">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF7B7B] border-2 border-white absolute bottom-[55%] z-20 shadow-sm" style={{ animation: 'popPoint3 6s cubic-bezier(.34,1.56,.64,1) infinite' }}></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFD166] border-2 border-white absolute bottom-[45%] z-20 shadow-sm" style={{ animation: 'popPoint3 6s cubic-bezier(.34,1.56,.64,1) infinite' }}></div>
            </div>
            <div className="relative h-full w-0 flex flex-col items-center justify-end">
              <div className="absolute -bottom-7 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white text-[10px] font-medium shadow-[0_4px_10px_rgba(79,70,229,0.3)] z-10" style={{ animation: 'popPoint4 6s cubic-bezier(.34,1.56,.64,1) infinite' }}>W4</div>
            </div>
            <div className="relative h-full w-0 flex flex-col items-center justify-end">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF7B7B] border-2 border-white absolute bottom-[40%] z-20 shadow-sm" style={{ animation: 'popPoint5 6s cubic-bezier(.34,1.56,.64,1) infinite' }}></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFD166] border-2 border-white absolute bottom-[30%] z-20 shadow-sm" style={{ animation: 'popPoint5 6s cubic-bezier(.34,1.56,.64,1) infinite' }}></div>
            </div>
            <div className="relative h-full w-0 flex flex-col items-center justify-end"><div className="w-1.5 h-1.5 rounded-full bg-indigo-200 absolute bottom-[50%]" style={{ animation: 'popPoint6 6s cubic-bezier(.34,1.56,.64,1) infinite' }}></div></div>
            <div className="relative h-full w-0 flex flex-col items-center justify-end"></div>
          </div>
        </div>
      </div>
      <div className="pt-1 px-3 pb-2 shrink-0">
        <h3 className="text-xl font-medium tracking-tight text-gray-900">Advanced Velocity</h3>
        <p className="text-[13px] text-gray-500 mt-1 leading-relaxed truncate">Continuous analysis of pipeline throughput to predict month-end results with 98% accuracy.</p>
      </div>
    </div>
  )
}

function RevenueProjectionWidget() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden group min-h-[260px] bg-white h-full border-gray-100 border rounded-[2rem] pt-3 pr-3 pb-3 pl-3 relative shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_1px_0_white]">
      <div className="flex-1 min-h-[160px] rounded-[1.5rem] bg-gradient-to-br from-[#f2fdf7] to-[#fbfffb] relative overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.02)] border border-white/80 flex flex-col p-5 mb-3 shrink-0">
        <div className="flex justify-between items-start mb-2 relative z-20">
          <h3 className="text-[15px] font-medium text-gray-900">Revenue Projection</h3>
        </div>
        <div className="mb-3 relative z-20">
          <p className="text-[11px] text-gray-500 font-medium">Projected Q4 Exit</p>
          <div className="text-[24px] font-semibold text-gray-900 tracking-tight mt-0.5">$142,850</div>
        </div>
        <div className="flex-1 w-full flex items-end justify-between px-1 relative min-h-[100px] z-10">
          {[
            { h: 'h-6', label: 'JUL', cls: 'r-bar-0', labelCls: 'text-gray-400 font-medium' },
            { h: 'h-[45px]', label: 'AUG', cls: 'r-bar-1', labelCls: 'text-gray-400 font-medium' },
            { h: 'h-[35px]', label: 'SEP', cls: 'r-bar-2', labelCls: 'text-gray-400 font-medium' },
            { h: 'h-[75px]', label: 'OCT', cls: 'r-bar-oct', isOct: true },
            { h: 'h-8', label: 'NOV', cls: 'r-bar-4', labelCls: 'text-gray-400 font-medium' },
            { h: 'h-[40px]', label: 'DEC', cls: 'r-bar-5', labelCls: 'text-gray-400 font-medium' },
            { h: 'h-[25px]', label: 'JAN', cls: 'r-bar-6', labelCls: 'text-gray-400 font-medium' },
            { h: 'h-[35px]', label: 'FEB', cls: 'r-bar-7', labelCls: 'text-gray-400 font-medium' },
            { h: 'h-[55px]', label: 'MAR', cls: 'r-bar-8', labelCls: 'text-gray-400 font-medium' },
            { h: 'h-[30px]', label: 'APR', cls: 'r-bar-9', labelCls: 'text-gray-400 font-medium' },
          ].map(({ h, label, cls, isOct, labelCls }) =>
            isOct ? (
              <div key={label} className="flex flex-col items-center gap-2 w-[28px] relative z-20">
                <div className="absolute -top-7 bg-white border border-gray-100 text-gray-800 px-2 py-0.5 rounded-md text-[9px] font-semibold shadow-md whitespace-nowrap r-tip">$39.2k</div>
                <div className={`w-full ${h} rounded-full overflow-hidden border-2 border-white bg-gradient-to-t from-emerald-300 to-emerald-400 shadow-[0_6px_15px_-3px_rgba(16,185,129,0.4)] relative r-bar-anim ${cls}`}></div>
                <span className="text-[10px] font-semibold text-gray-900">{label}</span>
              </div>
            ) : (
              <div key={label} className="flex flex-col items-center gap-2 w-6 z-10">
                <div className={`w-full ${h} bg-white border border-gray-100 shadow-sm rounded-full r-bar-anim ${cls}`}></div>
                <span className={`text-[10px] ${labelCls}`}>{label}</span>
              </div>
            )
          )}
        </div>
      </div>
      <div className="pt-1 px-3 pb-2 shrink-0">
        <h3 className="text-xl font-medium tracking-tight text-gray-900">Growth Forecasting</h3>
        <p className="text-[13px] text-gray-500 mt-1 leading-relaxed truncate">Integrated prediction engine modeling future growth trajectories based on current momentum.</p>
      </div>
    </div>
  )
}

function SalesTargetsWidget() {
  return (
    <div className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm shrink-0">
      <div className="flex justify-between items-center mb-5">
        <div><h3 className="text-[15px] font-medium text-gray-900">Sales Targets</h3><p className="text-[11px] text-gray-400 font-medium">Quick actions</p></div>
        <button className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-gray-700 bg-white rounded-xl border border-gray-200/80 hover:bg-gray-50 transition-colors shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
          Update Target
        </button>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 flex flex-col border-[#F0F2F1] border-r pr-4 justify-between">
          <div className="flex flex-col space-y-1">
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-medium tracking-tight text-slate-900">8,458</span>
              <span className="flex items-center text-[10px] font-medium text-[#50C878]">+1.124</span>
            </div>
            <p className="text-[11px] font-normal text-slate-400 leading-tight">Your sales increased this month by around 58%</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="text-lg font-bold tracking-tighter">$142.8k<span className="text-[10px] text-[#50C878]">+14%</span></span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center shrink-0">
          <div className="relative w-24 h-24 rounded-full bg-[#F9FBFA] flex items-center justify-center shadow-[inset_0_-10px_25px_rgba(80,200,120,0.05),0_25px_50px_rgba(0,0,0,0.04)] border border-white">
            <div className="absolute inset-2 rounded-full" style={{ background: 'conic-gradient(#50C878 0% 72%,#F0F2F1 72% 100%)', mask: 'radial-gradient(transparent 58%,black 60%)', WebkitMask: 'radial-gradient(transparent 58%,black 60%)' }}></div>
            <div className="w-14 h-14 rounded-full bg-white shadow-[0_15px_35px_rgba(0,0,0,0.07),inset_0_2px_2px_white] border border-[#F0F2F1] flex flex-col items-center justify-center">
              <span className="text-[8px] font-bold text-[#A0A0A0] uppercase tracking-widest mb-0.5">Quota</span>
              <span className="text-sm font-black text-[#1A1A1A]">72%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RecentActivityWidget() {
  const activities = [
    { name: 'Acme Corp Expansion', sub: 'Closed Won • Today', amount: '+$125,000', tag: 'High Intent', tagColor: 'text-[#50C878]' },
    { name: 'Global Tech Renewal', sub: 'At Risk • 2d ago', amount: '$45,000', tag: 'Action Needed', tagColor: 'text-orange-400' },
    { name: 'Nexa Industries', sub: 'Proposal Sent • 3d ago', amount: '$85,000', tag: 'On Track', tagColor: 'text-blue-400' },
    { name: 'Zenith Solutions', sub: 'Closed Lost • 4d ago', amount: '-$32,000', tag: 'Lost to competitor', tagColor: 'text-rose-400' },
    { name: 'Apex Innovations', sub: 'Demo Scheduled • 5d ago', amount: '$18,000', tag: 'Moving fast', tagColor: 'text-purple-400' },
    { name: 'Orbit Systems', sub: 'Discovery Call • 6d ago', amount: '$54,000', tag: 'Early stage', tagColor: 'text-gray-400' },
  ]
  return (
    <div className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm flex-1 flex flex-col min-h-0 overflow-hidden">
      <div className="flex justify-between items-center mb-4 sticky top-0 bg-white/95 backdrop-blur-sm z-10 pb-1 shrink-0">
        <h3 className="text-[15px] font-medium text-gray-900">Recent Activity</h3>
        <button className="flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-gray-600 bg-[#F4F5F7] rounded-md border border-gray-200/50">7d <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg></button>
      </div>
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto custom-scrollbar pr-1">
        {activities.map((a) => (
          <div key={a.name} className="flex justify-between items-center">
            <div><div className="text-xs font-medium text-gray-900">{a.name}</div><div className="text-[10px] text-gray-400 mt-0.5 font-medium">{a.sub}</div></div>
            <div className="text-right"><div className="text-xs font-medium text-gray-900">{a.amount}</div><div className={`text-[10px] mt-0.5 font-medium ${a.tagColor}`}>{a.tag}</div></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PlatformOverview() {
  return (
    <section className="section-decor z-10 w-full max-w-7xl mt-8 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
      <SectionDecor />
      <div className="flex border-slate-200/80 border-b mb-8 pb-8 items-center justify-between animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
        <span className="text-sm font-medium tracking-widest text-slate-500 uppercase">Platform Overview</span>
        <a href="#" className="text-[#50C878] text-base font-normal flex items-center gap-1.5 hover:text-[#3BA662] transition-colors">Read more
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="7" r="1.5" fill="currentColor" /><circle cx="7" cy="3" r="1.5" fill="currentColor" /><circle cx="7" cy="11" r="1.5" fill="currentColor" /><circle cx="11" cy="7" r="1.5" fill="currentColor" /></svg>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mb-16 gap-x-8 gap-y-8 items-start animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.2s both' }}>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-[1.15]">You set the revenue<br className="hidden lg:block" /> targets. Revio predicts the rest.</h2>
        <p className="text-xl text-slate-600 leading-relaxed md:pt-2 max-w-lg">Revio's AI monitors your sales pipeline and forecasts revenue for you, 24/7. Perfect for leaders and reps alike. No coding, no guesswork.</p>
      </div>

      {/* Dashboard Mockup */}
      <div className="overflow-hidden flex flex-col lg:flex-row text-gray-900 font-sans bg-[#F4F5F7] w-full h-[820px] max-h-screen border-gray-200/50 border rounded-[32px] mr-auto ml-auto shadow-2xl animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.3s both' }}>
        <DashboardSidebar />
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-[#F4F5F7]">
          <DashboardHeader />
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 max-w-[1400px] mx-auto h-full">
              <div className="xl:col-span-8 flex flex-col gap-6 h-full">
                <ConversionIntelligenceWidget />
                <RevenueProjectionWidget />
              </div>
              <div className="xl:col-span-4 flex flex-col gap-6 h-full">
                <SalesTargetsWidget />
                <RecentActivityWidget />
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
