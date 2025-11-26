import React from 'react';
import { Smartphone, MonitorSmartphone, Globe, AppWindow } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { servicesData } from '../data/servicesData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  'smartphone': Smartphone,
  'monitor-smartphone': MonitorSmartphone,
  'globe': Globe,
  'app-window': AppWindow
};

export const Services: React.FC = () => {
  const { language } = useLanguage();
  const data = servicesData[language];

  return (
    <section id="services" className="relative mt-24 md:mt-32">
      <div className="opacity-0 translate-y-6 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-grifter  leading-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">{data.title}</h2>
        <p className="mt-3 text-neutral-300">{data.description}</p>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-4">
        {data.services.map((service, idx) => {
          const Icon = iconMap[service.icon];
          return (
            <div
              key={idx}
              className="border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 opacity-0 translate-y-6 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-emerald-400/10 ring-1 ring-emerald-400/30">
                  <Icon className="h-5 w-5 text-emerald-300" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-300">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
