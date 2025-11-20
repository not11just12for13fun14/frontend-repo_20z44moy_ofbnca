import { Bot, PhoneCall, MessageCircle, Calendar, BarChart3, MousePointerClick, PanelsTopLeft } from "lucide-react";

const steps = [
  { title: "Ad System", icon: MousePointerClick, desc: "Predictive targeting and spend optimization to drive qualified traffic." },
  { title: "AI Website & Funnel", icon: PanelsTopLeft, desc: "High-converting, bento-style landing systems tailored to your ICP." },
  { title: "AI Chatbot", icon: Bot, desc: "Conversational agent that captures, qualifies, and books leads 24/7." },
  { title: "AI Inbound Call Handler", icon: PhoneCall, desc: "Answers and routes calls with context-aware responses." },
  { title: "AI Calendar Sync", icon: Calendar, desc: "Real-time scheduling synced with your CRM and calendars." },
  { title: "AI Voice Follow-Up", icon: MessageCircle, desc: "Automated voice + SMS nudges that actually convert." },
  { title: "AI Sales Analysis", icon: BarChart3, desc: "Deal intelligence and pipeline visibility with actionable insights." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{fontFamily:"Avenir, Arial Rounded MT Bold, system-ui, sans-serif"}}>How It Works</h2>
          <p className="mt-3 text-slate-600">A lightweight, automated stack that compounds results. Clean architecture, measurable outcomes.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.title} className="group rounded-3xl bg-white border border-blue-100 p-6 shadow-[0_10px_30px_-15px_rgba(2,6,23,0.15)] hover:shadow-[0_20px_50px_-25px_rgba(2,6,23,0.25)] transition-shadow">
              <div className="w-11 h-11 rounded-2xl bg-blue-100/70 text-blue-700 grid place-items-center shadow-inner shadow-blue-200 group-hover:shadow-blue-300">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
