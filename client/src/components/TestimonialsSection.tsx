import { Testimonial } from '@/lib/types';
import { Star, StarHalf } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      stars: 5,
      quote: "This product has completely transformed how I work. The quality is outstanding and the design is perfect for my needs. Would highly recommend!",
      avatar: "https://randomuser.me/api/portraits/women/43.jpg",
      name: "Sarah Johnson",
      position: "Marketing Director"
    },
    {
      stars: 5,
      quote: "I've tried many similar products, but this one stands head and shoulders above the rest. The attention to detail is impressive, and customer service is top-notch.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Michael Thompson",
      position: "Business Owner"
    },
    {
      stars: 4.5,
      quote: "Worth every penny! The product exceeded my expectations in terms of quality and functionality. I've already recommended it to several friends.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Jennifer Williams",
      position: "Freelance Designer"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="fill-amber-400 text-amber-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-amber-400 text-amber-400" />);
    }
    
    return stars;
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-heading">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {renderStars(testimonial.stars)}
              </div>
              <p className="text-gray-600 italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-medium text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
