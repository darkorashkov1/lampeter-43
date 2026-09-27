import React from 'react';
import { Camera as IgIcon, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Instagram: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-cream text-navy border-t border-rosegold/20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-navy text-cream rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-rosegold/30 flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="absolute -right-10 -bottom-10 text-cream/5 pointer-events-none">
            <IgIcon size={240} strokeWidth={1} />
          </div>

          {/* Left Content */}
          <div className="space-y-4 text-center md:text-left z-10 max-w-lg">
            <div className="inline-flex items-center gap-2 bg-rosegold/20 text-rosegold border border-rosegold/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <IgIcon size={14} /> {t.instagram.badge}
            </div>

            <h2 className="text-3xl md:text-4xl font-serif">
              {t.instagram.title}
            </h2>

            <p className="text-cream/80 font-light text-sm leading-relaxed">
              {t.instagram.subtitle}
            </p>
          </div>

          {/* Right Stats & CTA Action */}
          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full md:w-auto justify-center">

            {/* Follower Count Badge
            <div className="bg-cream/10 backdrop-blur-md border border-rosegold/30 px-5 py-3 rounded-2xl text-center min-w-[120px]">
              <div className="text-xl font-serif text-rosegold font-bold">5+</div>
              <div className="text-[11px] uppercase tracking-widest text-cream/70 font-medium">{t.instagram.followers}</div>
            </div> */}

            {/* Action Button */}
            <a
              href="https://www.instagram.com/43lampetersquare/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-linear-to-r from-rosegold to-amber-600 text-navy font-semibold px-7 py-4 rounded-2xl shadow-lg hover:opacity-95 transition-all transform hover:-translate-y-0.5 text-sm uppercase tracking-wider"
            >
              <span>{t.instagram.viewProfile}</span>
              <ExternalLink size={16} />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};