export default function FeaturesOverview() {
  return (
    <section className="w-full max-w-7xl z-10 mt-8 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
      {/* Bottom features grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 lg:px-4 pr-2 pl-2 gap-x-10 gap-y-10 animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.9s both' }}>
        <div>
          <div className="flex items-center gap-3 mb-3"><iconify-icon icon="solar:phone-calling-linear" class="text-2xl text-slate-800"></iconify-icon><h4 className="text-lg font-normal text-slate-900">Inbound & Outbound Calls</h4></div>
          <p className="text-base text-slate-500 leading-relaxed max-w-sm">OnDial's AI handles both inbound and outbound phone calls 24/7, responding in under 300ms.</p>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-3"><iconify-icon icon="solar:translation-linear" class="text-2xl text-slate-800"></iconify-icon><h4 className="text-lg font-normal text-slate-900">100+ Languages</h4></div>
          <p className="text-base text-slate-500 leading-relaxed max-w-sm">Serve global customers with multilingual AI Voice Agents supporting 100+ languages globally.</p>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-3"><iconify-icon icon="solar:buildings-2-linear" class="text-2xl text-slate-800"></iconify-icon><h4 className="text-lg font-normal text-slate-900">20+ Industries Served</h4></div>
          <p className="text-base text-slate-500 leading-relaxed max-w-sm">From healthcare to agriculture, OnDial powers voice automation across 20+ industries.</p>
        </div>
      </div>
    </section>
  )
}
