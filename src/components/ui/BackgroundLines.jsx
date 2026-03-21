export default function BackgroundLines() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex justify-center overflow-hidden">
      <div className="w-full h-full max-w-[1360px] relative">
        <div className="absolute top-0 bottom-0 left-4 md:left-10 w-px bg-slate-200/70"></div>
        <div className="absolute top-0 bottom-0 right-4 md:right-10 w-px bg-slate-200/70"></div>
        <div className="-left-20 -right-20 h-px bg-slate-200/70 absolute top-[88px]"></div>
        <div className="md:left-10 -translate-x-1/2 -translate-y-1/2 flex w-6 h-6 absolute top-[88px] left-4 items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          <div className="w-3.5 h-3.5 border-slate-300 border rounded-full absolute"></div>
        </div>
        <div className="md:right-10 -translate-y-1/2 flex w-6 h-6 absolute top-[88px] right-4 translate-x-1/2 items-center justify-center">
          <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
          <div className="w-3.5 h-3.5 border-slate-300 border rounded-full absolute"></div>
        </div>
      </div>
    </div>
  )
}
