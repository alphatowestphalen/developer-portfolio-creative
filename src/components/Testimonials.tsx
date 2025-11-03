import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { testimonialsData } from '../data/testimonialsData';

export const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const data = testimonialsData[language];

  return (
    <section id="testimonials" className="mt-24 md:mt-32">
      <div className="opacity-0 translate-y-6 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{data.title}</h2>
        <p className="mt-2 text-base md:text-lg text-neutral-300">{data.subtitle}</p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {data.testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur opacity-0 translate-y-6 animate-fade-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">{testimonial.name}</p>
                <p className="text-xs text-neutral-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-300">
              <Quote className="mr-2 inline h-4 w-4 text-emerald-300" />
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
