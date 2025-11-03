import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-1">
      <Globe className="h-4 w-4 text-emerald-300 ml-2" />
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-xs font-medium rounded transition ${
          language === 'en'
            ? 'bg-emerald-400/20 text-emerald-200'
            : 'text-neutral-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 text-xs font-medium rounded transition ${
          language === 'fr'
            ? 'bg-emerald-400/20 text-emerald-200'
            : 'text-neutral-400 hover:text-white'
        }`}
      >
        FR
      </button>
    </div>
  );
};
