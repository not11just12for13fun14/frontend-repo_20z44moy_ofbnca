import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "How It Works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-blue-100/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_10px_25px_-10px_rgba(37,99,235,0.6)] grid place-items-center">
            <span className="text-white font-bold">AI</span>
          </div>
          <div className="font-semibold tracking-tight text-slate-900">Nova Labs</div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-full bg-blue-600 text-white px-5 py-2 text-sm font-semibold shadow-sm shadow-blue-500/30 hover:bg-blue-700 transition-colors">
            Get Started
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl border border-blue-100 text-slate-700 hover:bg-blue-50">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-blue-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-slate-700 hover:bg-blue-50">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-blue-600 text-white px-5 py-2 text-sm font-semibold text-center">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
