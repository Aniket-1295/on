export default function Footer() {
  return (
    <footer className="animate-on-scroll mt-auto pt-20 pb-10 relative" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
      <div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-16">
          <div className="col-span-2 flex flex-col items-start pr-4 md:pr-10">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="text-xl font-medium tracking-tight text-slate-900">OnDial</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-xs">
              Empowering businesses with AI voice agents and innovative IT solutions for smarter, faster, and more connected growth.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-slate-900 transition-colors">
                <iconify-icon icon="solar:twitter-linear" class="text-xl"></iconify-icon>
              </a>
              <a href="#" className="hover:text-slate-900 transition-colors">
                <iconify-icon icon="solar:github-linear" class="text-xl"></iconify-icon>
              </a>
              <a href="#" className="hover:text-slate-900 transition-colors">
                <iconify-icon icon="solar:figma-linear" class="text-xl"></iconify-icon>
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-xs font-semibold text-slate-900 mb-5 uppercase tracking-widest">Quick Links</h5>
            <ul className="flex flex-col gap-3.5 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-semibold text-slate-900 mb-5 uppercase tracking-widest">Resources</h5>
            <ul className="flex flex-col gap-3.5 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Return Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-semibold text-slate-900 mb-5 uppercase tracking-widest">Industries</h5>
            <ul className="flex flex-col gap-3.5 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Finance & Banking</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Real Estate</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Education</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 border-slate-200/60 border-t pt-8 items-center justify-between">
          <p className="text-sm text-slate-500 font-normal">© 2026 OnDial AI. All Rights Reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-500 font-normal">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Return Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
