import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  stars: number;
}

export default function ResponsiveTestimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Arif Nur Rohman",
      role: "Mahasiswa S1",
      quote: "Sangat membantu sekali, membuat skripsi jadi lebih cepat. Format penomoran dan caption bab otomatis menghemat banyak waktu saya!",
      stars: 5
    },
    {
      name: "Putri Wijayanti",
      role: "Mahasiswa S2",
      quote: "Fitur 'format painter' sangat berguna untuk menyamakan format di seluruh dokumen tesis saya. Worth it untuk membeli versi Advance!",
      stars: 5
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa S1",
      quote: "Sempat bingung dengan format skripsi, tapi dengan Easy.kripsi jadi mudah. Customer support juga responsif ketika saya ada pertanyaan.",
      stars: 4
    }
  ];

  return (
    <div className="mt-20 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-3 text-white">Apa Kata Pengguna Kami</h2>
        <p className="text-blue-200/80 max-w-2xl mx-auto">Dari 1600+ pengguna sejak 2022 yang telah berhasil menghemat waktu</p>
      </div>
      
      {/* Mobile Scrollable Testimonials */}
      <div className="md:hidden">
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-4 px-4 min-w-full">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="glass-effect rounded-xl p-6 min-w-[280px] max-w-[280px] border border-zinc-800/30 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent opacity-50 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex mb-4 text-yellow-400">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400" />
                    ))}
                    {[...Array(5 - testimonial.stars)].map((_, i) => (
                      <Star key={i + testimonial.stars} className="h-4 w-4 text-gray-400" />
                    ))}
                  </div>
                  <p className="text-white text-sm italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center mt-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="text-white text-sm font-medium">{testimonial.name}</p>
                      <p className="text-blue-200/80 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="flex justify-center space-x-2 mt-2">
          <div className="h-1.5 w-12 bg-blue-600 rounded-full"></div>
          <div className="h-1.5 w-4 bg-blue-600/30 rounded-full"></div>
          <div className="h-1.5 w-4 bg-blue-600/30 rounded-full"></div>
        </div>
      </div>
      
      {/* Desktop Testimonials */}
      <div className="hidden md:flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="glass-effect rounded-xl p-6 max-w-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-zinc-800/30 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent opacity-50 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex mb-4 text-yellow-400">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star key={i + testimonial.stars} className="h-5 w-5 text-gray-400" />
                ))}
              </div>
              <p className="text-white italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-blue-200/80 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}