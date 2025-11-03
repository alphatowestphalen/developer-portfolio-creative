import React from 'react';
import { Briefcase, Layers, Dot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="mt-24 md:mt-32">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t.experience.title}</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 p-6 opacity-0 translate-y-6 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
              <Briefcase className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-sm font-medium">{t.experience.selfEmployed}</p>
              <p className="text-xs text-neutral-400">{t.experience.period1}</p>
            </div>
          </div>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <Dot className="h-5 w-5 text-emerald-300 flex-shrink-0" />
              <p className="text-sm text-neutral-300">{t.experience.desc1}</p>
            </li>
            <li className="flex gap-3">
              <Dot className="h-5 w-5 text-emerald-300 flex-shrink-0" />
              <p className="text-sm text-neutral-300">{t.experience.desc2}</p>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 p-6 opacity-0 translate-y-6 animate-fade-in animation-delay-200">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
              <Layers className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-sm font-medium">{t.experience.productDesigner}</p>
              <p className="text-xs text-neutral-400">{t.experience.period2}</p>
            </div>
          </div>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <Dot className="h-5 w-5 text-emerald-300 flex-shrink-0" />
              <p className="text-sm text-neutral-300">{t.experience.desc3}</p>
            </li>
            <li className="flex gap-3">
              <Dot className="h-5 w-5 text-emerald-300 flex-shrink-0" />
              <p className="text-sm text-neutral-300">{t.experience.desc4}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
