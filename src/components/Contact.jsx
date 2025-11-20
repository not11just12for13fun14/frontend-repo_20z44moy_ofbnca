export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{fontFamily:"Avenir, Arial Rounded MT Bold, system-ui, sans-serif"}}>Contact</h2>
            <p className="mt-3 text-slate-600">Tell us about your goals and we'll craft a tailored automation plan.</p>
            <div className="mt-8 rounded-3xl border border-blue-100 p-6 bg-gradient-to-b from-white to-blue-50/20">
              <div className="h-3 w-24 rounded-full bg-blue-500/80" />
              <div className="mt-3 h-3 w-40 rounded-full bg-blue-100" />
              <div className="mt-3 h-3 w-32 rounded-full bg-blue-50" />
            </div>
          </div>

          <form className="rounded-[2rem] bg-white border border-blue-100 p-6 shadow-[0_20px_60px_-30px_rgba(2,6,23,0.25)]">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">First name</label>
                <input className="mt-1 w-full rounded-xl border border-blue-200 bg-white px-3 py-2 outline-none focus:ring-4 focus:ring-blue-100" placeholder="Alex"/>
              </div>
              <div>
                <label className="text-sm text-slate-600">Last name</label>
                <input className="mt-1 w-full rounded-xl border border-blue-200 bg-white px-3 py-2 outline-none focus:ring-4 focus:ring-blue-100" placeholder="Taylor"/>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-blue-200 bg-white px-3 py-2 outline-none focus:ring-4 focus:ring-blue-100" placeholder="you@company.com"/>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl border border-blue-200 bg-white px-3 py-2 outline-none focus:ring-4 focus:ring-blue-100" placeholder="What are you hoping to automate?"/>
              </div>
            </div>
            <button type="button" className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold shadow-sm shadow-blue-500/30 w-full">Request Proposal</button>
          </form>
        </div>
      </div>
    </section>
  );
}
