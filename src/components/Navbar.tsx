import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useLanguage, languages, type Language } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLang, setLanguage, t } = useLanguage();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md text-cream border-b ${
      isScrolled
        ? 'bg-navy/60 border-rosegold/10 shadow-lg/20 py-1'
        : 'bg-navy/90 border-rosegold/20 py-0'
    }`}>
      {/* Forcing ltr on the navbar container prevents flex items from reversing positions in RTL mode */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between" dir="ltr">
        <a href="#" className="text-2xl font-serif tracking-widest text-rosegold shrink-0">
          LAMPETER <span className="text-cream text-lg">43</span>
        </a>

        {/* Desktop Links & Language Switcher (Visible only on large screens lg+) */}
        <div className="hidden lg:flex items-center gap-6 text-sm uppercase tracking-wider font-light" dir={currentLang.code === 'AR' ? 'rtl' : 'ltr'}>
          <a href="#about" className="hover:text-rosegold transition">{t.nav.about}</a>
          <a href="#amenities" className="hover:text-rosegold transition">{t.nav.amenities}</a>
          <a href="#gallery" className="hover:text-rosegold transition">{t.nav.gallery}</a>
          <a href="#location" className="hover:text-rosegold transition">{t.nav.location}</a>
          <a href="#reviews" className="hover:text-rosegold transition">{t.nav.reviews}</a>

          {/* Language Dropdown */}
          <div className="relative" ref={dropdownRef} dir="ltr">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-2 border border-rosegold/30 hover:border-rosegold px-3 py-1.5 rounded-full bg-navy/40 transition text-xs font-medium"
            >
              <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center border border-rosegold/20 shrink-0">
                <img src={`https://flagcdn.com/w40/${currentLang.flag}.png`} alt={currentLang.code} className="w-full h-full object-cover" />
              </div>
              <span className="text-cream tracking-wider">{currentLang.code}</span>
              <ChevronDown size={14} className={`text-rosegold transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-navy border border-rosegold/30 rounded-lg shadow-xl py-2 z-50 backdrop-blur-lg">
                <div className="px-3 py-1 text-[10px] uppercase tracking-widest text-rosegold border-b border-rosegold/10 mb-1 font-semibold">
                  Select Language
                </div>
                {languages.map((lang: Language) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang);
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs flex items-center gap-3 hover:bg-rosegold/10 transition ${
                      currentLang.code === lang.code ? 'text-rosegold font-semibold bg-rosegold/5' : 'text-cream/80'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center border border-rosegold/20 shrink-0">
                      <img src={`https://flagcdn.com/w40/${lang.flag}.png`} alt={lang.code} className="w-full h-full object-cover" />
                    </div>
                    <span className="tracking-wide">{lang.label}</span>
                    <span className="ml-auto text-[10px] text-rosegold/70">{lang.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="flex items-center gap-2 border border-rosegold px-5 py-2.5 rounded hover:bg-rosegold hover:text-navy transition font-medium shrink-0">
            <Phone size={16} /> {t.nav.inquire}
          </a>
        </div>

        {/* Mobile & Tablet menu toggle & quick select (Visible up to tablet lg size) */}
        <div className="flex items-center gap-4 lg:hidden" dir="ltr">
          <button
            onClick={() => {
              const currentIndex = languages.findIndex((l: Language) => l.code === currentLang.code);
              const nextIndex = (currentIndex + 1) % languages.length;
              setLanguage(languages[nextIndex]);
            }}
            className="flex items-center gap-1.5 border border-rosegold/30 px-2.5 py-1 rounded-full bg-navy/40 text-xs"
          >
            <div className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center">
              <img src={`https://flagcdn.com/w40/${currentLang.flag}.png`} alt={currentLang.code} className="w-full h-full object-cover" />
            </div>
            <span className="text-cream">{currentLang.code}</span>
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="text-cream hover:text-rosegold focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-navy/95 backdrop-blur-lg border-b border-rosegold/20 px-6 py-6 space-y-4 text-center" dir={currentLang.code === 'AR' ? 'rtl' : 'ltr'}>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-base hover:text-rosegold">{t.nav.about}</a>
          <a href="#amenities" onClick={() => setIsOpen(false)} className="block text-base hover:text-rosegold">{t.nav.amenities}</a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="block text-base hover:text-rosegold">{t.nav.gallery}</a>
          <a href="#location" onClick={() => setIsOpen(false)} className="block text-base hover:text-rosegold">{t.nav.location}</a>
          <a href="#reviews" onClick={() => setIsOpen(false)} className="block text-base hover:text-rosegold">{t.nav.reviews}</a>

          <div className="pt-2 pb-2 border-t border-rosegold/20" dir="ltr">
            <p className="text-xs uppercase tracking-widest text-rosegold mb-3">Languages</p>
            <div className="grid grid-cols-4 gap-2">
              {languages.map((lang: Language) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang)}
                  className={`flex flex-col items-center justify-center p-2 rounded border transition ${
                    currentLang.code === lang.code ? 'border-rosegold bg-rosegold/10 text-rosegold' : 'border-rosegold/20 text-cream/70'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full overflow-hidden mb-1 flex items-center justify-center border border-rosegold/20">
                    <img src={`https://flagcdn.com/w40/${lang.flag}.png`} alt={lang.code} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] font-medium">{lang.code}</span>
                </button>
              ))}
            </div>
          </div>

          <a href="#contact" onClick={() => setIsOpen(false)} className="inline-flex items-center gap-2 border border-rosegold px-6 py-3 rounded text-rosegold hover:bg-rosegold hover:text-navy transition font-medium w-full justify-center">
            <Phone size={16} /> {t.nav.inquire}
          </a>
        </div>
      )}
    </nav>
  );
};