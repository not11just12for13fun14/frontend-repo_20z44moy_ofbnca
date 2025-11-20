export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{fontFamily:"Avenir, Arial Rounded MT Bold, system-ui, sans-serif"}}>About Us</h2>
            <p className="mt-4 text-slate-600">We're a boutique AI agency focused on clean execution and measurable revenue impact. Our team blends product design, data science, and growth to deliver automation that feels effortless and on-brand.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white border border-blue-100 p-6 shadow-[0_10px_30px_-15px_rgba(2,6,23,0.15)]">
                <div className="h-1 w-10 rounded-full bg-blue-500 mb-4" />
                <h3 className="font-semibold text-slate-900">Founder Mission</h3>
                <p className="text-sm text-slate-600 mt-2">To bring world‑class AI to growing brands with clarity, speed, and integrity.</p>
              </div>
              <div className="rounded-3xl bg-white border border-blue-100 p-6 shadow-[0_10px_30px_-15px_rgba(2,6,23,0.15)]">
                <div className="h-1 w-10 rounded-full bg-blue-500 mb-4" />
                <h3 className="font-semibold text-slate-900">Credibility</h3>
                <p className="text-sm text-slate-600 mt-2">Track record across SaaS, eCommerce, and services — delivering compounding ROI.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(2,6,23,0.3)]">
            <div className="grid grid-cols-2 gap-4">
              {["Strategy","Automation","Design","Analytics"].map((t) => (
                <div key={t} className="rounded-2xl border border-blue-100 p-5 bg-gradient-to-b from-white to-blue-50/20">
                  <div className="text-sm text-blue-700 font-semibold">{t}</div>
                  <div className="mt-2 h-3 w-3/4 rounded-full bg-blue-100" />
                  <div className="mt-2 h-3 w-1/2 rounded-full bg-blue-50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
