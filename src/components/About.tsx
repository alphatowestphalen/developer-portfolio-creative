import React from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { aboutData } from '../data/aboutData';
import me from '../assets/me-removebg-preview.png'

export const About: React.FC = () => {
  const { language } = useLanguage();
  const data = aboutData[language];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative mt-24 md:mt-32">
      <div className="grid items-start gap-10 md:grid-cols-2 s">
        <div className="border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="relative mx-auto aspect-square w-72 overflow-hidden border border-white/10 md:w-80">
            <img
              src={me}
              alt="ALPHATO — About"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-grifter md:text-5xl font-semibold tracking-wider leading-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">{data.title}</h2>
          <h4 className="mt-2 text-sm md:text-sm text-neutral-300">{data.subtitle}</h4>
          {data.description.map((para, idx) => (
            <p key={idx} className="mt-4 text-sm text-neutral-300">
              {para}
            </p>
          ))}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {data.values.map((value, idx) => (
              <div key={idx} className="border border-white/10 bg-white/5 p-4">
                <h5 className="text-sm font-medium">{value}</h5>
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollTo('contact')}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-4 py-2 text-sm font-medium transition hover:bg-neutral-100"
          >
            <Send className="h-4 w-4" />
            {data.cta}
          </button>
        </div>
      </div>
    </section>
  );
};
