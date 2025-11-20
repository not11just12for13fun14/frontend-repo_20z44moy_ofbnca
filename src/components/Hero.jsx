import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-blue-50 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-medium text-blue-700 shadow-sm">
              Futuristic • Clean • Automated
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]" style={{fontFamily:"Avenir, Arial Rounded MT Bold, system-ui, sans-serif"}}>
              End‑to‑End AI Automation for Growth
            </h1>
            <p className="mt-5 text-slate-600 text-lg">
              We design and deploy AI systems that attract, qualify, and convert customers while you sleep. White‑glove delivery with measurable ROI.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold shadow-sm shadow-blue-500/30 transition-colors">
                Get a Proposal
                <ArrowRight size={18} />
              </a>
              <a href="#how" className="inline-flex items-center rounded-full border border-blue-200 text-blue-700 hover:bg-blue-50 px-6 py-3 text-sm font-semibold">
                See How It Works
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white border border-blue-100 p-5 shadow-[0_10px_40px_-20px_rgba(2,6,23,0.1)]">
                <div className="h-28 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100" />
                <div className="mt-4 h-3 w-5/6 rounded-full bg-blue-100" />
                <div className="mt-2 h-3 w-3/5 rounded-full bg-blue-50" />
              </div>
              <div className="rounded-3xl bg-white border border-blue-100 p-5 shadow-[0_10px_40px_-20px_rgba(2,6,23,0.1)] translate-y-6">
                <div className="h-28 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100" />
                <div className="mt-4 h-3 w-5/6 rounded-full bg-blue-100" />
                <div className="mt-2 h-3 w-3/5 rounded-full bg-blue-50" />
              </div>
              <div className="rounded-3xl bg-white border border-blue-100 p-5 shadow-[0_10px_40px_-20px_rgba(2,6,23,0.1)] -translate-y-6">
                <div className="h-28 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100" />
                <div className="mt-4 h-3 w-5/6 rounded-full bg-blue-100" />
                <div className="mt-2 h-3 w-3/5 rounded-full bg-blue-50" />
              </div>
              <div className="rounded-3xl bg-white border border-blue-100 p-5 shadow-[0_10px_40px_-20px_rgba(2,6,23,0.1)]">
                <div className="h-28 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100" />
                <div className="mt-4 h-3 w-5/6 rounded-full bg-blue-100" />
                <div className="mt-2 h-3 w-3/5 rounded-full bg-blue-50" />
              </div>
            </div>
            <div className="absolute -inset-6 rounded-[2rem] pointer-events-none border border-blue-200/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
