import { Feature } from '@/lib/types';
import { Zap, Shield, RefreshCw } from 'lucide-react';

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: 'bolt',
      title: 'Lightning Fast',
      description: 'Our product delivers results in seconds, not minutes or hours.'
    },
    {
      icon: 'shield',
      title: 'Highly Secure',
      description: 'Advanced security features keep your data protected at all times.'
    },
    {
      icon: 'refresh',
      title: 'Easy to Use',
      description: 'Intuitive interface makes it simple to get started right away.'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'bolt':
        return <Zap className="text-primary text-xl" />;
      case 'shield':
        return <Shield className="text-primary text-xl" />;
      case 'refresh':
        return <RefreshCw className="text-primary text-xl" />;
      default:
        return <Zap className="text-primary text-xl" />;
    }
  };

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-heading">Why Choose Our Product?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Designed with your needs in mind, our product offers these amazing features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-light p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {renderIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-bold text-dark mb-2 font-heading">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
