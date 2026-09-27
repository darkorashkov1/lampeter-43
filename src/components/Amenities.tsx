import React from 'react';
import { Wifi, Wind, UtensilsCrossed, Tv, Car, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Amenities: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: <Wifi size={28} className="text-rosegold" />,
      title: t.amenities.wifi.title,
      desc: t.amenities.wifi.desc
    },
    {
      icon: <Wind size={28} className="text-rosegold" />,
      title: t.amenities.ac.title,
      desc: t.amenities.ac.desc
    },
    {
      icon: <UtensilsCrossed size={28} className="text-rosegold" />,
      title: t.amenities.kitchen.title,
      desc: t.amenities.kitchen.desc
    },
    {
      icon: <Tv size={28} className="text-rosegold" />,
      title: t.amenities.tv.title,
      desc: t.amenities.tv.desc
    },
    {
      icon: <Car size={28} className="text-rosegold" />,
      title: t.amenities.parking.title,
      desc: t.amenities.parking.desc
    },
    {
      icon: <Home size={28} className="text-rosegold" />,
      title: t.amenities.balcony.title,
      desc: t.amenities.balcony.desc
    }
  ];

  return (
    <section id="amenities" className="py-24 bg-cream text-navy border-t border-rosegold/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-rosegold uppercase tracking-widest text-sm font-semibold">{t.amenities.badge}</span>
          <h2 className="text-4xl md:text-5xl font-serif">{t.amenities.title}</h2>
          <p className="text-navy/70 font-light">{t.amenities.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-navy/5 border border-rosegold/30 p-8 rounded-lg hover:border-rosegold transition space-y-4 shadow-sm">
              <div className="p-3 bg-rosegold/10 w-fit rounded-md">{item.icon}</div>
              <h3 className="text-xl font-serif font-medium text-navy">{item.title}</h3>
              <p className="text-navy/70 font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};