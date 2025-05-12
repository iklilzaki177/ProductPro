import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import Footer from '@/components/Footer';
import ResponsiveTestimonials from '@/components/ResponsiveTestimonials';

export default function ZakiPage() {
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

  // These are Zaki's payment links
  const paymentLinks = {
    basic: "https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic",
    advance: "https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header onNavClick={handleScroll} paymentLinks={paymentLinks} />
      <main className="flex-grow">
        <HeroSection 
          onLearnMoreClick={() => handleScroll('features')} 
          onBuyNowClick={() => handleScroll('product')} 
          paymentLinks={paymentLinks}
        />
        
        <div id="product">
          <ProductShowcase paymentLinks={paymentLinks} />
        </div>
        
        <div id="features">
          {/* Features are shown in ProductShowcase */}
        </div>
        
        <div id="compare">
          {/* Feature comparison moved to AnimatedFeatureSection */}
        </div>
        
        <div id="testimonials">
          <ResponsiveTestimonials />
        </div>
      </main>
      <Footer onNavClick={handleScroll} />
    </div>
  );
}