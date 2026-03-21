import SectionDecor from '../ui/SectionDecor.jsx'

const faqs = [
  {
    q: 'How long does it take to implement?',
    a: 'Most teams are fully onboarded and seeing accurate predictions within 48 hours. Our sync engine connects to your CRM instantly without engineering support.',
    open: true,
  },
  {
    q: 'Do I need technical knowledge?',
    a: "Not at all. Revio is designed intuitively for sales professionals. If you know how to navigate your current CRM, you'll feel right at home with our platform.",
  },
  {
    q: 'What CRMs do you support?',
    a: 'We currently provide native, two-way sync integrations for Salesforce, HubSpot, and Pipedrive. Enterprise plans also include custom API access for bespoke setups.',
  },
  {
    q: 'Is my pipeline data secure?',
    a: 'Security is our top priority. We maintain SOC2 Type II compliance and use bank-level AES-256 encryption for all data both in transit and at rest.',
  },
]

export default function CtaFaq() {
  return (
    <section className="section-decor animate-on-scroll w-full max-w-7xl z-10 mt-8 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
      <SectionDecor />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
        <div className="flex flex-col">
          <span className="uppercase text-sm font-medium text-slate-500 tracking-widest mb-6 block">Ready to scale</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-[1.15] mb-6">Start predicting your revenue today.</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">Join thousands of ambitious sales teams hitting their revenue targets with absolute confidence. Setup takes less than 5 minutes.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-sm gap-2">
              Start Free Trial
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
            <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-slate-900 font-medium border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm gap-2">Talk to Sales</a>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#50C878]"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#50C878]"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
              <span>No credit card required</span>
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
