import { useState } from "react";
import { Braces } from "lucide-react";

/* Real tech names (e.g. "React", "Python") resolve to monochrome brand
   icons. Placeholders like [TECH_1] render a generic terminal glyph. */
const SLUGS: Record<string, string> = {
  react: "react",
  nextjs: "nextdotjs",
  "next.js": "nextdotjs",
  astro: "astro",
  vite: "vite",
  vue: "vuedotjs",
  svelte: "svelte",
  angular: "angular",
  javascript: "javascript",
  typescript: "typescript",
  python: "python",
  rust: "rust",
  go: "go",
  golang: "go",
  "c++": "cplusplus",
  c: "c",
  "c#": "csharp",
  java: "java",
  kotlin: "kotlin",
  swift: "swift",
  node: "nodedotjs",
  nodejs: "nodedotjs",
  "node.js": "nodedotjs",
  deno: "deno",
  bun: "bun",
  docker: "docker",
  kubernetes: "kubernetes",
  linux: "linux",
  git: "git",
  tailwind: "tailwindcss",
  tailwindcss: "tailwindcss",
  postgresql: "postgresql",
  mysql: "mysql",
  mongodb: "mongodb",
  redis: "redis",
  graphql: "graphql",
  tensorflow: "tensorflow",
  pytorch: "pytorch",
  opencv: "opencv",
  flutter: "flutter",
  firebase: "firebase",
  supabase: "supabase",
  vercel: "vercel",
  aws: "amazonwebservices",
  arduino: "arduino",
  raspberrypi: "raspberrypi",
  unity: "unity",
  unreal: "unrealengine",
};

export default function TechChip({ label, index }: { label: string; index: number }) {
  const key = label.trim().toLowerCase().replace(/\s+/g, "");
  const slug = SLUGS[key];
  const [broken, setBroken] = useState(false);

  return (
    <li
      className="cc-sm flex items-center gap-2 border border-line bg-ink px-2.5 py-1.5 font-mono text-[10px] tracking-[0.14em] text-fog transition-colors duration-200 hover:border-eva/70 hover:text-eva-bright"
      title={label}
    >
      {slug && !broken ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}/8f8f85`}
          alt=""
          width={12}
          height={12}
          loading="lazy"
          className="size-3 shrink-0"
          onError={() => setBroken(true)}
        />
      ) : (
        <Braces className="size-3 shrink-0 text-dim" strokeWidth={2} />
      )}
      <span className="uppercase">{label}</span>
      <span className="text-[8px] text-dim/70">{String(index + 1).padStart(2, "0")}</span>
    </li>
  );
}
