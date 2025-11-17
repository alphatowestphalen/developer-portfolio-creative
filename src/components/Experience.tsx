import React from "react";
import { Briefcase, Layers, Dot } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  // Comme "experience" est un tableau, on prend le premier élément
  const exp = t.experience[0];

  return (
    <section id="experience" className="mt-24 md:mt-32">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
        {exp.title}
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        {/* ---- FIRST EXPERIENCE ---- */}
        <div className="rounded-3xl border border-white/10 p-6 opacity-0 translate-y-6 animate-fade-in">

          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
              <Briefcase className="h-5 w-5 text-emerald-300" />
            </div>

            <div>
              <p className="text-sm font-medium">{exp.title_project}</p>

              <p className="text-xs text-neutral-400">{exp.selfEmployed}</p>

              <strong className="text-[11px] text-neutral-400">{exp.period1}</strong>
            </div>
          </div>

          {/* Descriptions */}
          <ul className="mt-4 space-y-3">
            {exp.descriptions.map((item, index) => (
              <li key={index} className="flex gap-3">
                <Dot className="h-5 w-5 text-emerald-300 flex-shrink-0" />
                <p className="text-sm text-neutral-300">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* ---- SECOND EXPERIENCE ---- */}
        <div className="rounded-3xl border border-white/10 p-6 opacity-0 translate-y-6 animate-fade-in animation-delay-200">

          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
              <Layers className="h-5 w-5 text-emerald-300" />
            </div>

            <div>
              <p className="text-sm font-medium">{exp.productDesigner}</p>
              <p className="text-xs text-neutral-400">{exp.period2}</p>
            </div>
          </div>

          {/* Items */}
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <Dot className="h-5 w-5 text-emerald-300 flex-shrink-0" />
              <p className="text-sm text-neutral-300">{exp.desc3}</p>
            </li>

            <li className="flex gap-3">
              <Dot className="h-5 w-5 text-emerald-300 flex-shrink-0" />
              <p className="text-sm text-neutral-300">{exp.desc4}</p>
            </li>
          </ul>

        </div>

      </div>

    </section>
  );
};
