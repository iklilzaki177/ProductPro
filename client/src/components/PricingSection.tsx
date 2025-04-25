import { PricingPlan } from '@/lib/types';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PricingSection() {
  const pricingPlans: PricingPlan[] = [
    {
      title: "Basic",
      price: 50000,
      description: "Essential formatting tools for students.",
      features: [
        "Automatic heading formatting",
        "Page number automation",
        "Basic citation assistance",
        "Table of contents generation"
      ]
    },
    {
      title: "Advance",
      price: 100000,
      description: "Complete thesis automation suite.",
      features: [
        "Everything in Basic",
        "Reference management system",
        "Template library with university formats",
        "AI-powered proofreading",
        "Priority thesis formatting support"
      ],
      isPopular: true
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  RECOMMENDED
                </div>
              )}
              
              <h3 className="text-xl font-bold text-dark mb-4 font-heading">{plan.title}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-dark">Rp {plan.price.toLocaleString('id-ID')}</span>
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
              
              <a 
                href={`https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-${plan.title.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block w-full py-3 px-4 rounded-lg text-center ${
                  plan.isPopular 
                    ? 'bg-primary hover:bg-blue-600 text-white' 
                    : 'border border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Get {plan.title}
              </a>
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
