import { Feature } from '@/lib/types';
import { ChevronRight } from 'lucide-react';

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: 'chip',
      title: 'A17 Pro chip',
      description: 'Incredibly powerful. The new A17 Pro is the most powerful chip ever in iPhone with a faster Neural Engine.'
    },
    {
      icon: 'camera',
      title: 'Pro camera system',
      description: 'The ultra-wide camera captures more detail, and the portrait mode delivers depth with stunning bokeh.'
    },
    {
      icon: 'display',
      title: 'Dynamic Island',
      description: 'A magical new way to interact with iPhone. The Dynamic Island transforms into different shapes to show activities.'
    }
  ];

  return (
    <section id="features" className="bg-black text-white py-24">
      <div className="apple-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-5">A dramatically more powerful camera system.</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Supercharged by the A17 Pro chip.
          </p>
          <div className="mt-5">
            <a href="#" className="text-blue-500 hover:underline font-medium text-xl flex items-center justify-center">
              Watch the film <ChevronRight className="h-5 w-5 ml-0.5" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="h-44 flex items-center justify-center mb-8">
                <img 
                  src={`https://images.unsplash.com/photo-1588780594210-fbc56a5777d1?auto=format&fit=crop&w=300&h=300&q=80`} 
                  alt={feature.title}
                  className="max-h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a href="#" className="text-blue-500 hover:underline font-medium text-xl inline-flex items-center">
            See all iPhone 15 Pro features <ChevronRight className="h-5 w-5 ml-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
