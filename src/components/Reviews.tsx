import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { reviewsData } from '../data/reviewsData';

export const Reviews: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const rawReview = reviewsData[currentIndex];

const translatedReview = (t.reviews as typeof t.reviews & {
    list?: Array<{ quote?: string; tag?: string }>;
  }).list?.[currentIndex] || {};
  const current = {
    quote: translatedReview.quote || rawReview.quote,
    author: rawReview.author,
    tag: translatedReview.tag || rawReview.tag
  };

  return (
    <section id="reviews" className="py-24 bg-cream text-navy border-t border-rosegold/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="space-y-4">
            <span className="text-rosegold uppercase tracking-widest text-sm font-semibold">{t.reviews.badge}</span>
            <h2 className="text-4xl md:text-5xl font-serif">{t.reviews.title}</h2>
            <div className="flex items-center gap-2 text-rosegold pt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="text-navy/70 text-sm font-light">{t.reviews.ratingText}</span>
            </div>
          </div>

          {/* Navigation Controls & Counter */}
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <span className="text-xs text-navy/60 tracking-wider">
              {currentIndex + 1} of {reviewsData.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                aria-label="Previous review"
                className="p-3 rounded-full border border-rosegold/30 text-rosegold hover:bg-rosegold hover:text-cream transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextReview}
                aria-label="Next review"
                className="p-3 rounded-full border border-rosegold/30 text-rosegold hover:bg-rosegold hover:text-cream transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Review Card */}
        <div className="bg-navy/5 border border-rosegold/30 rounded-2xl p-8 md:p-12 shadow-md max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-rosegold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="text-xs tracking-wider uppercase bg-rosegold/10 text-rosegold px-3 py-1 rounded-full font-medium">
              {current.tag}
            </span>
          </div>

          <Quote size={40} className="text-rosegold/30" />

          <p className="text-xl md:text-2xl font-serif font-light leading-relaxed text-navy/90 min-h-30" dir="auto">
            "{current.quote}"
          </p>

          <div className="pt-4 border-t border-rosegold/20 flex items-center justify-between">
            <p className="font-medium tracking-wide text-rosegold">— {current.author}</p>
            <span className="text-xs text-navy/50">{t.reviews.verified}</span>
          </div>
        </div>
      </div>
    </section>
  );
};