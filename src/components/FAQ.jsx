import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What results can we expect?", a: "Most clients see qualified pipeline within 2–4 weeks and ROI-positive outcomes within 60–90 days, depending on sales cycles." },
  { q: "Do you integrate with our stack?", a: "Yes. We integrate with popular CRMs, ad platforms, and comms tools. Custom integrations are available on Growth and Enterprise." },
  { q: "Is it compliant and brand-safe?", a: "We use approved models and governance to ensure brand safety, consent, and data privacy." },
  { q: "What does onboarding look like?", a: "A 2-week sprint covering discovery, setup, copy/design, and launch with weekly checkpoints." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center" style={{fontFamily:"Avenir, Arial Rounded MT Bold, system-ui, sans-serif"}}>FAQ</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <div key={f.q} className="rounded-2xl bg-white border border-blue-100 overflow-hidden">
                <button onClick={() => setOpen(active ? -1 : i)} className="w-full text-left px-5 py-4 flex items-center justify-between">
                  <span className="font-medium text-slate-900">{f.q}</span>
                  <span className="text-blue-700">{active ? <Minus size={18}/> : <Plus size={18}/>}</span>
                </button>
                {active && (
                  <div className="px-5 pb-5 text-slate-600">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
