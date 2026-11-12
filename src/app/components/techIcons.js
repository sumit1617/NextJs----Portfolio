import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDotnet,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiAmazonaws,
  SiDocker,
  SiRailway,
  SiVercel,
  SiGit,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiRazorpay,
  SiFirebase,
} from "react-icons/si";

// Brand icon + a colour that stays readable on a dark background.
export const techIcons = {
  "Node.js": { Icon: SiNodedotjs, color: "#6cc24a" },
  Express: { Icon: SiExpress, color: "#e5e7eb" },
  MongoDB: { Icon: SiMongodb, color: "#4db33d" },
  ".NET": { Icon: SiDotnet, color: "#a78bfa" },
  "C#": { Icon: SiCsharp, color: "#c084fc" },
  SQL: { Icon: SiMicrosoftsqlserver, color: "#f87171" },
  AWS: { Icon: SiAmazonaws, color: "#ff9900" },
  Docker: { Icon: SiDocker, color: "#2496ed" },
  Railway: { Icon: SiRailway, color: "#e5e7eb" },
  Vercel: { Icon: SiVercel, color: "#e5e7eb" },
  Git: { Icon: SiGit, color: "#f05032" },
  JavaScript: { Icon: SiJavascript, color: "#f7df1e" },
  Python: { Icon: SiPython, color: "#5a9fd4" },
  "C++": { Icon: SiCplusplus, color: "#659ad2" },
  Razorpay: { Icon: SiRazorpay, color: "#3395ff" },
  Firebase: { Icon: SiFirebase, color: "#ffca28" },
};

export function TechChip({ name, size = "sm" }) {
  const t = techIcons[name];
  const pad = size === "lg" ? "px-3.5 py-2 text-sm" : "px-2.5 py-1 text-xs";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg border border-line bg-night/60 font-mono text-slate-300 ${pad}`}
    >
      {t && <t.Icon style={{ color: t.color }} aria-hidden />}
      {name}
    </span>
  );
}
