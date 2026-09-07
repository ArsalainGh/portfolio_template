import type { ReactNode } from "react";
import { cn } from "../utils/cn";

/**
 * Angular "cut corner" frame consistent with NGE terminal UI.
 * Outer layer renders the 1px accent-ish border (via bg + padding);
 * inner layer carries the panel surface. Same clip on both.
 */
export default function CardFrame({
  children,
  className,
  innerClassName,
  hover = true,
  glow = false,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  hover?: boolean;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "cc group/card bg-line p-px transition-all duration-300 ease-out",
        hover && "hover:bg-eva hover:shadow-[0_0_36px_-12px_rgba(255,92,0,0.55)] hover:-translate-y-1",
        glow && "shadow-[0_0_44px_-16px_rgba(255,92,0,0.35)]",
        className,
      )}
    >
      <div className={cn("cc h-full w-full bg-panel", innerClassName)}>{children}</div>
    </div>
  );
}
