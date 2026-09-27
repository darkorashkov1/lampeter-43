import React from 'react';
import { Home, Compass, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-cream text-navy border-t border-rosegold/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Side: Visual Showcase / Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-64 rounded-lg overflow-hidden border border-rosegold/30 shadow-md">
              <img
                src="/images/living_room/living_room_5.avif"
                alt="Lampeter 43 Living Space"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="h-40 rounded-lg overflow-hidden border border-rosegold/30 shadow-md">
              <img
                src="/images/bedroom/bedroom_4.avif"
                alt="Bedroom Suite"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="h-40 rounded-lg overflow-hidden border border-rosegold/30 shadow-md">
              <img
                src="/images/kitchen/kitchen_1.avif"
                alt="Fully Equipped Kitchen"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden border border-rosegold/30 shadow-md">
              <img
                src="/images/exterior/exterior_view_balcony.avif"
                alt="Balcony View"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Narrative & Key Features */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-rosegold uppercase tracking-widest text-sm font-semibold flex items-center gap-2">
              <Sparkles size={16} /> {t.about.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              {t.about.title}
            </h2>
          </div>

          <p className="text-navy/80 font-light leading-relaxed">
            {t.about.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-rosegold/20">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-rosegold/10 text-rosegold rounded mt-1"><Home size={20} /></div>
              <div>
                <h4 className="font-serif font-medium text-navy">{t.about.layoutTitle}</h4>
                <p className="text-xs text-navy/70 mt-1">{t.about.layoutDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-rosegold/10 text-rosegold rounded mt-1"><Compass size={20} /></div>
              <div>
                <h4 className="font-serif font-medium text-navy">{t.about.transitTitle}</h4>
                <p className="text-xs text-navy/70 mt-1">{t.about.transitDesc}</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <div className="bg-navy/5 border border-rosegold/30 rounded-lg p-4 flex items-center justify-between text-sm">
              <span className="text-navy font-medium flex items-center gap-2">
                <ShieldCheck size={18} className="text-rosegold" /> {t.about.specialOffer}
              </span>
              <span className="text-navy/70 text-xs">{t.about.discountText}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};