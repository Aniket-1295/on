export default function Navbar() {
  return (
    <nav
      className="flex w-full max-w-7xl z-50 mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 relative items-center justify-between"
      style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}
    >
      <div className="flex items-center gap-2.5 cursor-pointer">
        <span className="text-xl font-medium tracking-tight text-slate-900">Revio</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-base font-normal text-slate-600">
        <a href="#" className="hover:text-slate-900 transition-colors">Products</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Solutions</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Customers</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Contact Us</a>
      </div>
      <button className="hidden md:flex items-center gap-1.5 bg-[#1C2024] text-white px-5 py-2.5 rounded-xl text-base font-normal hover:bg-slate-800 transition-colors shadow-sm">
        Request Demo
        <iconify-icon icon="solar:alt-arrow-right-linear" class="text-lg text-slate-300"></iconify-icon>
      </button>
      <button className="md:hidden text-slate-600">
        <iconify-icon icon="solar:hamburger-menu-linear" class="text-2xl"></iconify-icon>
      </button>
    </nav>
  )
}
