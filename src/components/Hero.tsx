import React from 'react';
import { Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center text-navy bg-cream overflow-hidden">
      {/* Background Image with Light Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-65 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url('/images/hero-background.jfif')` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-cream via-cream/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6 mt-12">
        <span className="text-navy uppercase tracking-widest text-sm font-semibold border border-rosegold/40 px-4 py-1.5 rounded-full inline-block bg-navy/5 backdrop-blur-sm">
          {t.hero.badge}
        </span>
        <h1 className="text-5xl md:text-7xl font-serif tracking-wide leading-tight text-navy">
          {t.hero.titlePart1} <span className="text-rosegold font-light">{t.hero.titleHighlight}</span>
        </h1>
        <p className="text-navy/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* Primary Button */}
          <a
            href="#gallery"
            className="group relative w-full sm:w-auto bg-navy text-cream px-8 py-4 rounded font-medium flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-navy/20 active:translate-y-0"
          >
            <span>{t.hero.explore}</span>
            {/* Subtle light reflection on hover */}
            <div className="absolute inset-0 rounded bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </a>

          {/* Secondary Button */}
          <a
            href="#about"
            className="group w-full sm:w-auto border border-navy/40 text-navy px-8 py-4 rounded font-medium flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 hover:border-rosegold hover:bg-rosegold/5 hover:text-rosegold shadow-sm active:translate-y-0"
          >
            <Compass size={18} className="transition-transform duration-300 group-hover:rotate-45 text-rosegold" />
            <span>{t.hero.vision}</span>
          </a>
        </div>
      </div>
    </section>
  );
};