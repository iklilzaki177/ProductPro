import { PricingPlan } from '@/lib/types';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PricingSection() {
  const pricingPlans: PricingPlan[] = [
    {
      title: "Basic Package",
      price: 49,
      description: "Perfect for those getting started with our product.",
      features: [
        "Standard product features",
        "Basic support",
        "30-day warranty"
      ]
    },
    {
      title: "Premium Package",
      price: 89,
      description: "Our most popular option with advanced features.",
      features: [
        "All standard features",
        "Premium materials upgrade",
        "Priority support",
        "1-year extended warranty"
      ],
      isPopular: true
    },
    {
      title: "Ultimate Package",
      price: 149,
      description: "The complete experience with exclusive perks.",
      features: [
        "All premium features",
        "Luxury materials edition",
        "24/7 VIP support",
        "Lifetime warranty",
        "Free accessories included"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-heading">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect option that fits your needs and budget.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`${
                plan.isPopular 
                  ? 'border-2 border-primary rounded-lg p-8 shadow-lg relative' 
                  : 'border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-dark mb-4 font-heading">{plan.title}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-dark">${plan.price}</span>
                <span className="text-gray-500">/each</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-1 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.isPopular ? "default" : "outline"} 
                className={`w-full ${
                  plan.isPopular 
                    ? 'bg-primary hover:bg-blue-600 text-white' 
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Buy Now
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Not sure which option is right for you? <a href="#contact" className="text-primary hover:underline">Contact us</a> for a personalized recommendation.
          </p>
        </div>
      </div>
    </section>
  );
}
