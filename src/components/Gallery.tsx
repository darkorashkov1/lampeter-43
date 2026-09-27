import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { galleryCategories } from '../data/galleryData';
import type { GalleryCategory } from '../data/galleryData';

export const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const getCategoryTitle = (id: string, defaultTitle: string) => {
    switch (id) {
      case 'living_room': return t.gallery.item1;
      case 'kitchen': return t.gallery.item2;
      case 'bedroom': return t.gallery.item3;
      case 'bathroom': return t.gallery.item4;
      case 'storage': return 'Storage';
      case 'exterior': return 'Exterior & Nearby';
      default: return defaultTitle;
    }
  };

  const openModal = (category: GalleryCategory) => {
    setSelectedCategory(category);
    setActiveImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedCategory(null);
    document.body.style.overflow = 'auto'; // Restore background scrolling
  };

  const nextModalImage = () => {
    if (!selectedCategory) return;
    setActiveImageIndex((prev) => (prev === selectedCategory.images.length - 1 ? 0 : prev + 1));
  };

  const prevModalImage = () => {
    if (!selectedCategory) return;
    setActiveImageIndex((prev) => (prev === 0 ? selectedCategory.images.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-24 bg-cream text-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-rosegold uppercase tracking-widest text-sm font-semibold">{t.gallery.badge}</span>
          <h2 className="text-4xl md:text-5xl font-serif">{t.gallery.title}</h2>
          <p className="text-navy/70 font-light">{t.gallery.subtitle}</p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryCategories.map((category) => {
            const title = getCategoryTitle(category.id, category.titleKey);
            return (
              <div
                key={category.id}
                onClick={() => openModal(category)}
                className="relative group overflow-hidden rounded-lg shadow-xl h-80 cursor-pointer"
              >
                <img
                  src={category.displayUrl}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/30 to-transparent opacity-80 group-hover:opacity-95 transition duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-cream font-serif text-xl tracking-wide">{title}</h3>
                    <span className="flex items-center gap-1 text-xs text-rosegold bg-navy/60 px-3 py-1 rounded-full border border-rosegold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye size={14} /> View Photos ({category.images.length})
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Window */}
      {selectedCategory && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-navy/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-navy/95 border border-rosegold/30 rounded-2xl w-full max-w-5xl overflow-hidden shadow-2xl text-cream flex flex-col h-[85vh] md:h-[80vh]"
          >
            {/* Top Bar Header with Title, Counter & Transparent Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-rosegold/20 bg-navy/50">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-serif text-rosegold">
                  {getCategoryTitle(selectedCategory.id, selectedCategory.titleKey)}
                </h3>
                <span className="text-xs text-cream/60 bg-white/5 border border-rosegold/20 px-2.5 py-1 rounded-full">
                  {activeImageIndex + 1} / {selectedCategory.images.length}
                </span>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-full bg-transparent hover:bg-rosegold/20 text-cream/80 hover:text-rosegold transition border border-transparent hover:border-rosegold/30"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
            </div>

            {/* Immersive Modal Image Viewer Body */}
            <div className="relative flex-1 bg-black/40 flex items-center justify-center p-4 md:p-8 overflow-hidden">
              <img
                src={selectedCategory.images[activeImageIndex].url}
                alt={selectedCategory.titleKey}
                className="max-h-full max-w-full object-contain rounded transition-all duration-300 shadow-2xl"
              />

              {/* Carousel Arrows */}
              {selectedCategory.images.length > 1 && (
                <>
                  <button
                    onClick={prevModalImage}
                    className="absolute left-4 md:left-8 p-3 rounded-full bg-navy/80 border border-rosegold/30 text-rosegold hover:bg-rosegold hover:text-navy transition shadow-lg"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={nextModalImage}
                    className="absolute right-4 md:right-8 p-3 rounded-full bg-navy/80 border border-rosegold/30 text-rosegold hover:bg-rosegold hover:text-navy transition shadow-lg"
                    aria-label="Next image"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};