import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Instagram } from './components/InstagramFeed';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';
import { LocalGuide } from './components/LocalGuide';

export function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-navy text-cream font-sans selection:bg-rosegold selection:text-navy relative">
        <Navbar />
        <Hero />
        <About />
        <Amenities />
        <Gallery />
        <LocalGuide />
        <Location />
        <Instagram />
        <Reviews />
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}

export default App;