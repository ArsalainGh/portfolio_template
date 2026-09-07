import { Mail, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";
import { socials, type SocialLink } from "../data/portfolio";
import { cn } from "../utils/cn";

function SocialGlyph({ icon, className }: { icon: SocialLink["icon"]; className?: string }) {
  if (icon === "github") return <GithubIcon className={className} />;
  if (icon === "linkedin") return <LinkedinIcon className={className} />;
  if (icon === "twitter") return <XIcon className={className} />;
  if (icon === "mail") return <Mail className={className} strokeWidth={1.75} />;
  return <Globe className={className} strokeWidth={1.75} />;
}

export default function Socials({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2.5", className)}>
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target={s.icon === "mail" ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={s.label}
            title={s.label}
            className="cc-sm group/soc grid size-10 place-items-center border border-line bg-panel text-fog transition-all duration-200 hover:-translate-y-0.5 hover:border-eva hover:text-eva hover:shadow-[0_0_24px_-8px_rgba(255,92,0,0.7)]"
          >
            <SocialGlyph
              icon={s.icon}
              className="size-[15px] transition-transform duration-200 group-hover/soc:scale-110"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
