import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProductShowcase from '@/components/ProductShowcase';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

export default function Home() {
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  // Handle smooth scrolling
  const handleScroll = (id: string) => {
    const section = sectionsRef.current[id];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Initialize refs object with section IDs
    sectionsRef.current = {
      features: document.getElementById('features'),
      product: document.getElementById('product'),
      pricing: document.getElementById('pricing'),
      testimonials: document.getElementById('testimonials'),
      contact: document.getElementById('contact'),
      'buy-now': document.getElementById('buy-now')
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavClick={handleScroll} />
      <main className="flex-grow">
        <HeroSection onLearnMoreClick={() => handleScroll('features')} onBuyNowClick={() => handleScroll('buy-now')} />
        <FeaturesSection />
        <ProductShowcase />
        <PricingSection />
        <TestimonialsSection />
        <CTASection onViewPricingClick={() => handleScroll('pricing')} onContactClick={() => handleScroll('contact')} />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer onNavClick={handleScroll} />
    </div>
  );
}
