import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { en } from '../locales/en';
import { fr } from '../locales/fr';
import { de } from '../locales/de';
import { es } from '../locales/es';
import { pt } from '../locales/pt';
import { ar } from '../locales/ar';
import { ru } from '../locales/ru';
import { zh } from '../locales/zh';

export interface Language {
  code: string;
  label: string;
  flag: string;
}

export const languages: Language[] = [
  { code: 'EN', label: 'English', flag: 'gb' },
  { code: 'FR', label: 'Français', flag: 'fr' },
  { code: 'ES', label: 'Español', flag: 'es' },
  { code: 'PT', label: 'Português', flag: 'pt' },
  { code: 'AR', label: 'العربية', flag: 'sa' },
  { code: 'RU', label: 'Русский', flag: 'ru' },
  { code: 'ZH', label: '中文', flag: 'cn' },
  { code: 'DE', label: 'Deutsch', flag: 'de' },
];

const dictionaries: Record<string, typeof en> = {
  EN: en,
  FR: fr,
  DE: de,
  ES: es,
  PT: pt,
  AR: ar,
  RU: ru,
  ZH: zh,
};

interface LanguageContextType {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<Language>(languages[0]);

  const setLanguage = (lang: Language) => {
    setCurrentLang(lang);
    if (lang.code === 'AR') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  const t = dictionaries[currentLang.code] || en;

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};