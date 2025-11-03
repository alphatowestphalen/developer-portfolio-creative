import React, { useState } from 'react';
import { ArrowUpRight, Rows } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export const Portfolio: React.FC = () => {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const initialCount = 8;
  const displayedProjects = showAll ? portfolioData : portfolioData.slice(0, initialCount);

  const labels = {
    en: { title: "My Portfolio", exploreMore: "Explore More" },
    fr: { title: "Mon Portfolio", exploreMore: "Explorer Plus" }
  };

  return (
    <section id="portfolio" className="mt-24 md:mt-32">
      <div className="flex items-end justify-between">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{labels[language].title}</h2>
        {!showAll && portfolioData.length > initialCount && (
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-100 transition hover:border-white/20 hover:bg-white/10"
          >
            <Rows className="h-4 w-4" />
            {labels[language].exploreMore}
          </button>
        )}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {displayedProjects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/10 overflow-hidden bg-white/5 hover:border-white/20 transition opacity-0 translate-y-6 animate-fade-in"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="relative aspect-[16/10]">
              <img
                src={project.image}
                alt={project.title[language]}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="rounded-full bg-emerald-400/20 px-2 py-1 text-[10px] font-medium text-emerald-200 ring-1 ring-emerald-400/30">
                  {project.tech}
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-tight">{project.title[language]}</h3>
                <ArrowUpRight className="h-4 w-4 text-neutral-400 group-hover:text-white transition" />
              </div>
              <p className="mt-2 text-sm text-neutral-300">{project.description[language]}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
