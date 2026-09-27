import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, ChevronDown, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { guideItems, guideCategories } from '../data/guideData';

const PROPERTY_ADDRESS = "Barons Court, London, UK";

export const LocalGuide: React.FC = () => {
  const { t: translations } = useLanguage();
  const t = translations as typeof translations & {
    guide?: {
      badge?: string;
      title?: string;
      subtitle?: string;
      categories?: Record<string, string>;
      items?: Record<string, { title: string; description: string }>;
      distances?: Record<string, string>;
    };
  };
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    setVisibleCount(4);
  }, [activeCategory]);

  const filteredItems = activeCategory === 'all'
    ? guideItems
    : guideItems.filter(item => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <section id="guide" className="py-24 bg-cream text-navy border-t border-rosegold/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="text-rosegold uppercase tracking-widest text-sm font-semibold">
            {t.guide?.badge || "Explore London"}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif">
            {t.guide?.title || "Places Nearby & Attractions"}
          </h2>
          <p className="text-navy/70 font-light">
            {t.guide?.subtitle || "Discover the best sights, parks, and local spots just minutes away."}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {guideCategories.map((cat) => {
            const labelText = t.guide?.categories?.[cat.id as keyof typeof t.guide.categories] || cat.labelKey;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-navy text-cream shadow-md'
                    : 'bg-navy/5 text-navy/80 hover:bg-rosegold/20 hover:text-navy border border-rosegold/20'
                }`}
              >
                {labelText}
              </button>
            );
          })}
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {displayedItems.map((item) => {
            const itemData = t.guide?.items?.[item.translationKey as keyof typeof t.guide.items] || {
              title: item.translationKey,
              description: ""
            };
            const distanceText = t.guide?.distances?.[item.distanceKey as keyof typeof t.guide.distances] || item.distanceKey;

            // Construct Google Maps Directions URL
            const destinationQuery = item.address || `${itemData.title}, London`;
            const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(PROPERTY_ADDRESS)}&destination=${encodeURIComponent(destinationQuery)}`;

            return (
              <div
                key={item.id}
                className="bg-navy/5 border border-rosegold/20 rounded-2xl overflow-hidden shadow-lg group flex flex-col md:flex-row transition-all duration-300 hover:shadow-xl hover:border-rosegold/50"
              >
                <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={itemData.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-sm text-rosegold border border-rosegold/30 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                    <Navigation size={12} />
                    {distanceText}
                  </div>
                </div>

                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif text-navy group-hover:text-rosegold transition-colors">
                      {itemData.title}
                    </h3>
                    <p className="text-navy/70 text-sm font-light leading-relaxed">
                      {itemData.description}
                    </p>
                  </div>

                  {/* Interactive Google Maps Link Button */}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-4 border-t border-rosegold/25 flex items-center justify-between text-xs text-rosegold font-medium uppercase tracking-wider hover:text-navy transition-colors group/link cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>Get Directions</span>
                    </div>
                    <ExternalLink size={14} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="inline-flex items-center gap-2 bg-navy text-cream px-8 py-3.5 rounded-full font-medium shadow-md hover:bg-rosegold hover:text-navy transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Load More Attractions</span>
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};