export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$1,500/mo",
      features: ["Ad System Setup", "AI Website & Funnel", "Basic Chatbot", "Email Support"],
      cta: "Start",
      highlight: false,
    },
    {
      name: "Growth",
      price: "$3,500/mo",
      features: ["Everything in Starter", "AI Inbound Call Handler", "AI Calendar Sync", "Priority Support"],
      cta: "Scale",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Full AI Voice Follow‑Up", "Sales Analysis Suite", "Custom Integrations", "Dedicated Team"],
      cta: "Talk to Sales",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{fontFamily:"Avenir, Arial Rounded MT Bold, system-ui, sans-serif"}}>Pricing</h2>
          <p className="mt-3 text-slate-600">Clear tiers designed for fast ROI. All plans include implementation and ongoing optimization.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-3xl bg-white border p-6 shadow-[0_10px_30px_-15px_rgba(2,6,23,0.15)] ${p.highlight ? 'border-blue-300 shadow-blue-200/50' : 'border-blue-100'}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                {p.highlight && <span className="text-xs rounded-full bg-blue-600 text-white px-2 py-1">Most Popular</span>}
              </div>
              <div className="mt-4 text-3xl font-extrabold text-slate-900">{p.price}</div>
              <ul className="mt-6 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-400" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-2 text-sm font-semibold border ${p.highlight ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700' : 'border-blue-200 text-blue-700 hover:bg-blue-50'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
