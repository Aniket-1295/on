import { useState } from 'react'
import SectionDecor from '../ui/SectionDecor.jsx'

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')

  const prices = {
    standard: billing === 'monthly' ? '$10' : '$8',
    pro: billing === 'monthly' ? '$30' : '$24',
    standardText: billing === 'monthly' ? 'Billed monthly' : 'Billed $96 annually',
    proText: billing === 'monthly' ? 'Billed monthly' : 'Billed $288 annually',
  }

  return (
    <section className="section-decor animate-on-scroll w-full max-w-7xl z-10 mt-8 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
      <SectionDecor />
      <div className="flex border-slate-200/80 border-b mb-8 pb-8 items-center justify-between animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
        <span className="text-sm font-medium tracking-widest text-slate-500 uppercase">Pricing Plans</span>
        <a href="#" className="text-[#50C878] text-base font-normal flex items-center gap-1.5 hover:text-[#3BA662] transition-colors">View detailed features
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="3" cy="7" r="1.5" fill="currentColor" /><circle cx="7" cy="3" r="1.5" fill="currentColor" /><circle cx="7" cy="11" r="1.5" fill="currentColor" /><circle cx="11" cy="7" r="1.5" fill="currentColor" /></svg>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mb-16 gap-x-8 gap-y-8 items-start animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.2s both' }}>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-[1.15]">Simple, transparent<br className="hidden lg:block" /> pricing that scales.</h2>
        <p className="text-xl text-slate-600 leading-relaxed md:pt-2 max-w-lg">No hidden fees, no surprise charges. Choose the plan that best fits your needs. Unlock the full power of AI Voice Agents and automate your customer communications today.</p>
      </div>

      <div className="flex flex-col items-center animate-on-scroll w-full z-10 pt-10 pb-12 relative" style={{ animation: 'animationIn 0.8s ease-out 0.3s both' }}>
        {/* Toggle */}
        <div className="flex mb-14 justify-center">
          <div className="bg-slate-200/50 p-1 rounded-full inline-flex items-center border border-slate-200/60 shadow-inner relative">
            <div
              className="absolute left-1 top-1 bottom-1 w-[96px] bg-white rounded-full shadow-[0_2px_8px_rgb(0,0,0,0.04)] border border-slate-100 transition-transform duration-300 z-0"
              style={{ transform: billing === 'annually' ? 'translateX(100%)' : 'translateX(0)' }}
            ></div>
            <button
              onClick={() => setBilling('monthly')}
              className={`transition-colors text-sm font-medium w-[96px] z-10 rounded-full pt-2 pb-2 relative ${billing === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}
            >Monthly</button>
            <button
              onClick={() => setBilling('annually')}
              className={`z-10 hover:text-slate-900 transition-colors text-sm font-medium w-[96px] rounded-full pt-2 pb-2 relative ${billing === 'annually' ? 'text-slate-900' : 'text-slate-500'}`}
            >Annually</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl items-start mx-auto">
          {/* Left: Feature explanations */}
          <div className="flex flex-col lg:pr-8 pt-2 pr-8 pb-2 space-y-12 animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.4s both' }}>
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.93 4h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 11a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 18z" /></svg>,
                title: 'AI Voice Call Automation',
                desc: 'Deploy autonomous AI voice agents to handle inbound and outbound calls 24/7 with human-like tone and instant sub-300ms responses.',
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-900"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>,
                title: 'Multilingual Support',
                desc: 'Serve global audiences with intelligent AI Voice Agents capable of switching between 100+ languages for seamless customer experiences.',
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-900"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" /></svg>,
                title: 'Real-Time Call Analytics',
                desc: 'Access insights into call performance, sentiment, and behavior with AI-powered analytics to optimize support and marketing in real time.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200/80 shadow-sm flex items-center justify-center mb-5">{icon}</div>
                <h3 className="text-[17px] font-semibold tracking-tight text-gray-900 mb-2">{title}</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Standard Plan */}
          <div className="flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-900 group bg-white border-gray-200/80 border rounded-[24px] ring-gray-900/5 ring-1 pt-8 pr-8 pb-8 pl-8 relative shadow-sm animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.5s both' }}>
            <div className="flex justify-between items-center mb-6 h-[26px]">
              <h3 className="text-[17px] font-semibold text-gray-900 group-hover:text-white tracking-tight transition-colors duration-300">Standard</h3>
              <span className="text-[11px] font-semibold text-gray-700 bg-gray-100/80 group-hover:bg-gray-800 border border-gray-200/60 group-hover:border-gray-700 px-2.5 py-1 rounded-full uppercase tracking-widest transition-colors duration-300">Popular</span>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-[40px] font-semibold tracking-tighter text-gray-900 group-hover:text-white leading-none transition-all duration-300">{prices.standard}</span>
              <span className="text-[14px] font-medium text-gray-500 group-hover:text-gray-400 transition-colors duration-300">/mo</span>
            </div>
            <div className="text-[13px] text-gray-400 group-hover:text-gray-500 mb-6 transition-all duration-300 h-5">{prices.standardText}</div>
            <p className="text-[14px] text-gray-500 group-hover:text-gray-400 mb-8 leading-relaxed transition-colors duration-300">Essential AI voice calling capabilities for startups and growing businesses ready to automate customer communications.</p>
            <div className="flex flex-col gap-3 mb-10">
              <button className="w-full py-2.5 rounded-xl bg-gray-900 group-hover:bg-white text-white group-hover:text-gray-900 font-medium text-[14px] transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1)] ring-1 ring-inset ring-gray-900/10 group-hover:ring-white/10">Get started</button>
              <button className="w-full py-2.5 rounded-xl bg-white group-hover:bg-gray-800 text-gray-900 group-hover:text-white font-medium text-[14px] border border-gray-200 group-hover:border-gray-700 transition-all duration-300 shadow-sm">Contact sales</button>
            </div>
            <div className="pt-8 border-t border-gray-100 group-hover:border-gray-800 transition-colors duration-300">
              <h4 className="text-[11px] font-semibold text-gray-900 group-hover:text-gray-300 uppercase tracking-widest mb-6 transition-colors duration-300">Included Features</h4>
              <ul className="space-y-4">
                {['Up to 1,000 AI calls/month', '5 concurrent AI agents', 'Basic call analytics', 'Email & chat support'].map(f => (
                  <li key={f} className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-900 group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300"><polyline points="20 6 9 17 4 12" /></svg><span className="text-[14px] text-gray-600 group-hover:text-gray-300 font-medium transition-colors duration-300">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-900 group bg-white border-gray-200/80 border rounded-[24px] ring-gray-900/5 ring-1 pt-8 pr-8 pb-8 pl-8 relative shadow-sm animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.6s both' }}>
            <div className="flex justify-between items-center mb-6 h-[26px]">
              <h3 className="text-[17px] font-semibold text-gray-900 group-hover:text-white tracking-tight transition-colors duration-300">Professional</h3>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-[40px] font-semibold tracking-tighter text-gray-900 group-hover:text-white leading-none transition-all duration-300">{prices.pro}</span>
              <span className="text-[14px] font-medium text-gray-500 group-hover:text-gray-400 transition-colors duration-300">/mo</span>
            </div>
            <div className="text-[13px] text-gray-400 group-hover:text-gray-500 mb-6 transition-all duration-300 h-5">{prices.proText}</div>
            <p className="text-[14px] text-gray-500 group-hover:text-gray-400 mb-8 leading-relaxed transition-colors duration-300">High-performance AI voice agent environments for enterprises and mission-critical customer communication systems.</p>
            <div className="flex flex-col gap-3 mb-10">
              <button className="w-full py-2.5 rounded-xl bg-gray-900 group-hover:bg-white text-white group-hover:text-gray-900 font-medium text-[14px] transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1)] ring-1 ring-inset ring-gray-900/10 group-hover:ring-white/10">Get started</button>
              <button className="w-full py-2.5 rounded-xl bg-white group-hover:bg-gray-800 text-gray-900 group-hover:text-white font-medium text-[14px] border border-gray-200 group-hover:border-gray-700 transition-all duration-300 shadow-sm">Contact sales</button>
            </div>
            <div className="pt-8 border-t border-gray-100 group-hover:border-gray-800 transition-colors duration-300">
              <h4 className="text-[11px] font-semibold text-gray-900 group-hover:text-gray-300 uppercase tracking-widest mb-6 transition-colors duration-300">Included Features</h4>
              <ul className="space-y-4">
                {['Up to 10,000 AI calls/month', '30 concurrent AI agents', 'Advanced multilingual support', '100+ language coverage'].map(f => (
                  <li key={f} className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-900 group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300"><polyline points="20 6 9 17 4 12" /></svg><span className="text-[14px] text-gray-600 group-hover:text-gray-300 font-medium transition-colors duration-300">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
