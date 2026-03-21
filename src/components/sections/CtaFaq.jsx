import SectionDecor from '../ui/SectionDecor.jsx'

const faqs = [
  {
    q: 'What are AI Voice Agents?',
    a: 'AI Voice Agents are intelligent software agents that use speech recognition and AI to handle calls, answer queries, and automate conversations in real time.',
    open: true,
  },
  {
    q: 'How fast can AI Voice Agents respond?',
    a: 'With ultra-low latency technology, responses can be delivered in under 300 milliseconds, ensuring conversations feel as natural as speaking to a human.',
  },
  {
    q: 'Can AI Voice Agents handle multilingual conversations?',
    a: 'Yes, advanced AI Voice Agents like OnDial support 100+ languages, enabling global communication without needing separate teams for each market.',
  },
  {
    q: 'How secure are AI Voice Agents?',
    a: 'Enterprise-grade encryption, GDPR and CCPA compliance, and secure API protocols ensure customer data remains safe during every interaction.',
  },
]

export default function CtaFaq() {
  return (
    <section className="section-decor animate-on-scroll w-full max-w-7xl z-10 mt-8 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
      <SectionDecor />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
        <div className="flex flex-col">
          <span className="uppercase text-sm font-medium text-slate-500 tracking-widest mb-6 block">Ready to scale</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-[1.15] mb-6">Ready to Scale Your Communication Globally?</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">Experience how AI Voice Agents can boost productivity, cut costs, and improve customer satisfaction. Get started in minutes.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-sm gap-2">
              Get Started Today
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
            <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-slate-900 font-medium border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm gap-2">Schedule Demo</a>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#50C878]"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
              <span>24/7 AI Coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#50C878]"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
              <span>100+ Languages Supported</span>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="flex flex-col divide-y divide-slate-200/80 border-y border-slate-200/80">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-6" open={faq.open || undefined}>
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 text-lg [&::-webkit-details-marker]:hidden marker:content-none">
                {faq.q}
                <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 ml-4 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                </span>
              </summary>
              <p className="text-slate-600 mt-4 leading-relaxed pr-8">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
