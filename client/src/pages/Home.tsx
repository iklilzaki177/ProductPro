import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProductShowcase from '@/components/ProductShowcase';
import Footer from '@/components/Footer';
import AnimatedFeatureSection from '@/components/AnimatedFeatureSection';

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
      product: document.getElementById('product')
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header onNavClick={handleScroll} />
      <main className="flex-grow">
        <HeroSection onLearnMoreClick={() => handleScroll('features')} onBuyNowClick={() => handleScroll('product')} />
        <ProductShowcase />
        <div id="features">
          <AnimatedFeatureSection />
        </div>
        <FeaturesSection />
      </main>
      <Footer onNavClick={handleScroll} />
    </div>
  );
}
