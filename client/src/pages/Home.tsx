import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import Footer from '@/components/Footer';
import ResponsiveFeatureTable from '@/components/ResponsiveFeatureTable';
import ResponsiveTestimonials from '@/components/ResponsiveTestimonials';

export default function Home() {
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  // Handle smooth scrolling
  const handleScroll = (id: string) => {
    const section = sectionsRef.current[id];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 40,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Initialize refs object with section IDs
    sectionsRef.current = {
      features: document.getElementById('features'),
      product: document.getElementById('product'),
      compare: document.getElementById('compare'),
      testimonials: document.getElementById('testimonials')
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header onNavClick={handleScroll} />
      <main className="flex-grow">
        <HeroSection onLearnMoreClick={() => handleScroll('features')} onBuyNowClick={() => handleScroll('product')} />
        
        {/* Product section is now handled in the HeroSection */}
        <div id="product"></div>
        
        <div id="compare">
          <ResponsiveFeatureTable />
        </div>
        
        <div id="features">
          <ProductShowcase />
        </div>
        
        <div id="testimonials">
          <ResponsiveTestimonials />
        </div>
      </main>
      <Footer onNavClick={handleScroll} />
    </div>
  );
}
