import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const labels = {
    en: { rights: "All rights reserved.", email: "Email", contact: "Contact" },
    fr: { rights: "Tous droits réservés.", email: "Email", contact: "Contact" }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="mx-auto mt-24 max-w-7xl border-t border-white/5 px-6 py-10 md:mt-32">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-neutral-400">
          © {currentYear} ALPHATO Westphalen. {labels[language].rights}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:alphatowestphalen.pro@gmail.com"
            className="group rounded-lg border border-white/10 px-3 py-1 text-sm text-neutral-300 transition hover:border-white/30 hover:text-white"
          >
            <Mail className="mr-2 inline h-4 w-4 text-neutral-400 group-hover:text-white" />
            {labels[language].email}
          </a>
          <button
            onClick={() => scrollTo('contact')}
            className="group rounded-lg border border-white/10 px-3 py-1 text-sm text-neutral-300 transition hover:border-white/30 hover:text-white"
          >
            <MessageCircle className="mr-2 inline h-4 w-4 text-neutral-400 group-hover:text-white" />
            {labels[language].contact}
          </button>
        </div>
      </div>
    </footer>
  );
};
