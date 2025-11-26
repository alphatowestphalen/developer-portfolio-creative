import React from "react";
import {
  CircleDot,
  Server,
  Monitor,
  Database,
  GitBranch,
  Workflow,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { skillsData } from "../data/skillsData";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  "circle-dot": CircleDot,
  server: Server,
  monitor: Monitor,
  database: Database,
  "git-branch": GitBranch,
  workflow: Workflow,
};

export const Skills: React.FC = () => {
  const { language } = useLanguage();
  const data = skillsData[language];

  return (
    <section id="languages" className="relative mt-24 md:mt-32">
      <div className="opacity-0 translate-y-6 animate-fade-in">
        <h2 className="text-3xl font-grifter md:text-5xl font-semibold tracking-wider leading-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
          {data.title}
        </h2>
        <h4 className="mt-2 text-base md:text-lg text-neutral-300">
          {data.subtitle}
        </h4>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {data.categories.map((category, idx) => {
          const Icon = iconMap[category.icon];
          return (
            <div
              key={idx}
              className="
    group
    border border-white/10 
    bg-white/5 
    p-6 
    backdrop-blur 
    opacity-0 
    translate-y-6 
    animate-fade-in
    transition-all duration-300 ease-out
    hover:scale-[1.03]    
    hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]

  "
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-lg font-semibold font-grifter tracking-widest">
                {category.title}
              </h3>

              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-emerald-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
