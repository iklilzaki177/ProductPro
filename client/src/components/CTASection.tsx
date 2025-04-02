import { Button } from '@/components/ui/button';

interface CTASectionProps {
  onViewPricingClick: () => void;
  onContactClick: () => void;
}

export default function CTASection({ onViewPricingClick, onContactClick }: CTASectionProps) {
  return (
    <section id="buy-now" className="py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">Ready to Transform Your Experience?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Join thousands of satisfied customers who have already made the smart choice.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={onViewPricingClick}
              variant="secondary" 
              className="bg-white text-primary hover:bg-blue-50 px-8 py-3 h-auto text-lg"
            >
              View Pricing
            </Button>
            <Button
              onClick={onContactClick}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 h-auto text-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
