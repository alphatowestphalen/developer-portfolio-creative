import React, { useState } from 'react';
import { Code2, Send, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navigation: React.FC = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-neutral-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/30">
            <Code2 className="h-5 w-5 text-emerald-400" />
          </div>
          <span className="text-lg font-semibold tracking-tight">ALPHATO</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {['home', 'about', 'languages', 'services', 'portfolio', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium text-neutral-300 hover:text-white transition"
            >
              {t.nav[item as keyof typeof t.nav]}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-4 py-2 text-sm font-medium transition hover:bg-neutral-100"
          >
            <Send className="h-4 w-4" />
            {t.nav.contact}
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden rounded-lg border border-white/10 p-2"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-neutral-950/95 backdrop-blur">
          <div className="px-6 py-4 space-y-3">
            {['home', 'about', 'languages', 'services', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-sm font-medium text-neutral-300 hover:text-white transition py-2"
              >
                {t.nav[item as keyof typeof t.nav]}
              </button>
            ))}
            <div className="pt-3">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
