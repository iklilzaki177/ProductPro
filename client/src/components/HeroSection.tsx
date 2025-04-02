import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface HeroSectionProps {
  onBuyNowClick: () => void;
  onLearnMoreClick: () => void;
}

export default function HeroSection({ onBuyNowClick, onLearnMoreClick }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4 font-heading">
              Revolutionary Product That <span className="text-primary">Changes Everything</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Our innovative product solves your everyday problems with cutting-edge technology and thoughtful design.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={onBuyNowClick}
                className="bg-primary hover:bg-blue-600 text-white px-8 py-3 h-auto text-lg"
              >
                Buy Now
              </Button>
              <Button 
                onClick={onLearnMoreClick}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 h-auto text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&h=600" 
              alt="Product" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-dark">Trusted by 5,000+</p>
                  <p className="text-sm text-gray-500">Happy customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
