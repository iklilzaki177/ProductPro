import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onBuyNowClick: () => void;
  onLearnMoreClick: () => void;
}

export default function HeroSection({ onBuyNowClick, onLearnMoreClick }: HeroSectionProps) {
  return (
    <section className="pt-6 pb-12">
      <div className="apple-hero">
        <div className="max-w-[600px] mx-auto px-4">
          <h2 className="text-base text-primary font-normal mb-2">New</h2>
          <h1 className="apple-hero-title mb-2">iPhone 15 Pro</h1>
          <h3 className="apple-hero-subtitle mb-4">Titanium. So strong. So light. So Pro.</h3>
          <div className="flex justify-center space-x-6 mt-5">
            <button 
              onClick={onBuyNowClick}
              className="text-blue-600 hover:underline font-medium text-xl flex items-center"
            >
              Buy <ChevronRight className="h-5 w-5 ml-0.5" />
            </button>
            <button 
              onClick={onLearnMoreClick}
              className="text-blue-600 hover:underline font-medium text-xl flex items-center"
            >
              Learn more <ChevronRight className="h-5 w-5 ml-0.5" />
            </button>
          </div>
        </div>
        
        <div className="mt-8 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1631281956016-3cdc1b2fe5fb?auto=format&fit=crop&w=1500&q=80" 
            alt="iPhone 15 Pro" 
            className="w-full max-w-[1200px] mx-auto object-cover"
          />
        </div>
      </div>

      <div className="apple-hero mt-12">
        <div className="max-w-[600px] mx-auto px-4">
          <h1 className="apple-hero-title mb-2">iPad Pro</h1>
          <h3 className="apple-hero-subtitle mb-4">Supercharged by the Apple M2 chip.</h3>
          <div className="flex justify-center space-x-6 mt-5">
            <button 
              onClick={onBuyNowClick}
              className="text-blue-600 hover:underline font-medium text-xl flex items-center"
            >
              Buy <ChevronRight className="h-5 w-5 ml-0.5" />
            </button>
            <button 
              onClick={onLearnMoreClick}
              className="text-blue-600 hover:underline font-medium text-xl flex items-center"
            >
              Learn more <ChevronRight className="h-5 w-5 ml-0.5" />
            </button>
          </div>
        </div>
        
        <div className="mt-8 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1500&q=80" 
            alt="iPad Pro" 
            className="w-full max-w-[1200px] mx-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
