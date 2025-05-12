import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import Footer from '@/components/Footer';
import ResponsiveTestimonials from '@/components/ResponsiveTestimonials';
import AnimatedFeatureSection from '@/components/AnimatedFeatureSection';
import ResponsiveFeatureTable from '@/components/ResponsiveFeatureTable';
import PricingSection from '@/components/PricingSection';

export default function DeniusPage() {
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

  // These are Denius's payment links
  const paymentLinks = {
    basic: "https://bangdeniuss.myr.id/pl/toolsskripsi-windows-basic",
    advance: "https://bangdeniuss.myr.id/pl/toolsskripsi-windows-advance"
  };

  // Advance option is now available for Denius's page
  const disableAdvance = false;

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header onNavClick={handleScroll} paymentLinks={paymentLinks} />
      <main className="flex-grow">
        <HeroSection 
          onLearnMoreClick={() => handleScroll('features')} 
          onBuyNowClick={() => handleScroll('product')} 
          paymentLinks={paymentLinks}
          disableAdvance={disableAdvance}
        />
        
        <div id="product">
          <ProductShowcase 
            paymentLinks={paymentLinks} 
            disableAdvance={disableAdvance}
          />
        </div>
        
        <div id="features">
          {/* Features are shown in ProductShowcase */}
        </div>
        
        <div id="compare">
          <AnimatedFeatureSection 
            paymentLinks={paymentLinks}
            disableAdvance={disableAdvance}
          />
          <ResponsiveFeatureTable 
            paymentLinks={paymentLinks}
            disableAdvance={disableAdvance}
          />
          <PricingSection 
            paymentLinks={paymentLinks}
            disableAdvance={disableAdvance}
          />
        </div>
        
        <div id="testimonials">
          <ResponsiveTestimonials />
        </div>
      </main>
      <Footer onNavClick={handleScroll} />
    </div>
  );
}