import { ProductDetail } from '@/lib/types';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProductShowcase() {
  const productDetails: ProductDetail[] = [
    {
      title: "Premium Quality Materials",
      description: "Crafted with the finest materials available, our product is built to last. We don't compromise on quality and neither should you.",
      benefits: [
        "Durable construction ensures longevity",
        "Premium finish that stands out from competitors",
        "Ethically sourced materials you can feel good about"
      ]
    },
    {
      title: "Innovative Technology",
      description: "Our product incorporates cutting-edge technology that puts it ahead of any competitor in the market today.",
      benefits: [
        "Smart functionality adapts to your needs",
        "Energy-efficient design saves resources",
        "Patented technology you won't find elsewhere"
      ]
    }
  ];

  return (
    <section id="product" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-heading">Our Amazing Product</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our product can transform your everyday experience with its innovative features.
          </p>
        </div>
        
        {/* First Product Detail */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-dark mb-4 font-heading">{productDetails[0].title}</h3>
            <p className="text-gray-600 mb-6">{productDetails[0].description}</p>
            
            <ul className="space-y-3 mb-8">
              {productDetails[0].benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button className="bg-primary hover:bg-blue-600 text-white">
              Learn More
            </Button>
          </div>
          
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1555089548-54c600a6d7cb?auto=format&fit=crop&w=600&h=400" 
              alt="Product Detail" 
              className="rounded-lg shadow-xl w-full" 
            />
          </div>
        </div>
        
        {/* Second Product Detail */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&h=400" 
              alt="Product Innovation" 
              className="rounded-lg shadow-xl w-full" 
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-dark mb-4 font-heading">{productDetails[1].title}</h3>
            <p className="text-gray-600 mb-6">{productDetails[1].description}</p>
            
            <ul className="space-y-3 mb-8">
              {productDetails[1].benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button className="bg-primary hover:bg-blue-600 text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
