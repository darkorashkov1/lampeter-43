import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Location: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-24 bg-cream text-navy border-t border-rosegold/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-rosegold uppercase tracking-widest text-sm font-semibold">{t.location.badge}</span>
          <h2 className="text-4xl md:text-5xl font-serif">{t.location.title}</h2>
          <p className="text-navy/80 font-light leading-relaxed">
            {t.location.description}
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-rosegold/10 rounded text-rosegold"><MapPin size={22} /></div>
              <div>
                <h4 className="font-serif font-medium text-navy">{t.location.tubeTitle}</h4>
                <p className="text-sm text-navy/70">{t.location.tubeDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-rosegold/10 rounded text-rosegold"><Navigation size={22} /></div>
              <div>
                <h4 className="font-serif font-medium text-navy">{t.location.accessTitle}</h4>
                <p className="text-sm text-navy/70">{t.location.accessDesc}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy/5 border border-rosegold/30 rounded-lg p-8 flex flex-col items-center justify-center text-center h-87.5 relative overflow-hidden shadow-sm">
          <Compass size={48} className="text-rosegold mb-4 animate-pulse" />
          <h3 className="text-2xl font-serif mb-2 text-navy">{t.location.mapTitle}</h3>
          <p className="text-navy/70 text-sm max-w-sm mb-6">{t.location.mapDesc}</p>
          <a
            href="https://maps.app.goo.gl/wYTyiAeSmpzh6c369"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy text-cream px-6 py-3 rounded font-medium hover:bg-navy/90 transition text-sm flex items-center gap-2 shadow"
          >
            {t.location.mapBtn} <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};