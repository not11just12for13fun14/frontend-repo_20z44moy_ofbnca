export default function Footer() {
  return (
    <footer className="py-10 border-t border-blue-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 grid place-items-center text-white text-xs font-bold">AI</div>
          <span className="text-slate-600 text-sm">© {new Date().getFullYear()} Nova Labs. All rights reserved.</span>
        </div>
        <div className="text-slate-500 text-sm">Clean, rounded, ultra‑modern AI automation.</div>
      </div>
    </footer>
  );
}
