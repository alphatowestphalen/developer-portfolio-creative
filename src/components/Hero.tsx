import React, { useEffect, useRef } from 'react';
import { PlayCircle, Send, BadgeCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import me from '../assets/me-removebg-preview.png'

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('[data-count]');
            counters.forEach((counter) => {
              const target = parseInt(counter.getAttribute('data-count') || '0');
              let current = 0;
              const increment = target / 60;
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  counter.textContent = target.toString();
                  clearInterval(timer);
                } else {
                  counter.textContent = Math.floor(current).toString();
                }
              }, 20);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative grid gap-10 pt-16 md:grid-cols-2 md:gap-6 md:pt-24">
      <div className="flex flex-col justify-center">
        <p className="mb-4 text-sm font-medium text-emerald-300/90">{t.hero.availability}</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          {t.hero.greeting}{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            {t.hero.name}
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-neutral-300">{t.hero.description}</p>
        
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={() => scrollTo('portfolio')}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium hover:border-white/30 transition"
          >
            <PlayCircle className="h-4 w-4 text-emerald-300" />
            {t.hero.viewWork}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-400/90 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-emerald-300"
          >
            <Send className="h-4 w-4" />
            {t.hero.startProject}
          </button>
        </div>

        <div ref={statsRef} className="mt-10 grid grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 p-5 backdrop-blur">
            <p className="text-2xl font-semibold tracking-tight">
              <span data-count="10">0</span>
            </p>
            <p className="mt-1 text-xs text-neutral-400">{t.hero.yearsExp}</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5 backdrop-blur">
            <p className="text-2xl font-semibold tracking-tight">
              <span data-count="285">0</span>+
            </p>
            <p className="mt-1 text-xs text-neutral-400">{t.hero.projects}</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5 backdrop-blur">
            <p className="text-2xl font-semibold tracking-tight">
              <span data-count="190">0</span>+
            </p>
            <p className="mt-1 text-xs text-neutral-400">{t.hero.clients}</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 -z-10">
          <svg viewBox="0 0 400 400" className="h-full w-full opacity-60">
            <g fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M40 200 C120 80, 280 80, 360 200" stroke="rgb(52,211,153)" strokeWidth="48" opacity="0.25" />
              <path d="M40 240 C120 120, 280 120, 360 240" stroke="rgb(16,185,129)" strokeWidth="32" opacity="0.35" />
              <path d="M60 280 C140 160, 260 160, 340 280" stroke="rgb(45,212,191)" strokeWidth="24" opacity="0.35" />
            </g>
          </svg>
        </div>
        <div className="relative mx-auto aspect-square w-80 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-emerald-500/10 md:w-96">
          <img
            src={me}
            alt="Portrait"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/30 via-transparent" />
        </div>
        <div className="mt-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/30">
            <BadgeCheck className="h-5 w-5 text-emerald-300" />
          </div>
          <div>
            <p className="text-sm font-medium">{t.hero.certified}</p>
            <p className="text-xs text-neutral-400">{t.hero.certDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
