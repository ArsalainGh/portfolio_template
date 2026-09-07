import { useEffect, useState } from "react";
import { identity, navItems } from "../data/portfolio";

export default function Hud() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-line/70 bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-full max-w-[1100px] items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <span className="hazard cc-sm block size-5 opacity-90" aria-hidden />
            <span className="font-mono text-[11px] tracking-[0.3em] text-fog transition-colors group-hover:text-eva">
              {identity.shortCode} <span className="text-dim">//</span>{" "}
              <span className="hidden sm:inline">{identity.fullName}</span>
              <span className="sm:hidden">LOG</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="g-link group font-mono text-[10.5px] tracking-[0.28em] text-dim transition-colors"
              >
                <span className="text-eva/70">{n.index}</span>
                <span className="mx-1.5 text-line">/</span>
                <span className="text-fog group-hover:text-eva">{n.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em]">
            <span className="size-1.5 rounded-full bg-acid animate-pulse" aria-hidden />
            <span className="text-dim">SYS:</span>
            <span className="text-acid">ONLINE</span>
          </div>
        </div>
      </div>
      {/* scroll transmit progress */}
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-eva shadow-[0_0_12px_rgba(255,92,0,0.7)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </header>
  );
}
