import { ChevronRight } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section id="product" className="py-8">
      <div className="apple-container">
        {/* Grid layout for product displays */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First product card */}
          <div className="bg-gray-100 rounded-3xl p-10 text-center overflow-hidden relative">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">MacBook Air</h2>
              <p className="text-xl text-gray-500 font-light">Impressively thin. Impossibly powerful.</p>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Learn more <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Buy <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
              </div>
            </div>
            <div className="h-60 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=400" 
                alt="MacBook Air" 
                className="max-h-full object-contain"
              />
            </div>
          </div>
          
          {/* Second product card */}
          <div className="bg-gray-900 text-white rounded-3xl p-10 text-center overflow-hidden relative">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">AirPods Pro</h2>
              <p className="text-xl text-gray-400 font-light">Adaptive Audio. Now playing.</p>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Learn more <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Buy <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
              </div>
            </div>
            <div className="h-60 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1600294037681-c80b4cb5871c?auto=format&fit=crop&w=600&h=400" 
                alt="AirPods Pro" 
                className="max-h-full object-contain" 
              />
            </div>
          </div>
          
          {/* Third product card */}
          <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl p-10 text-center overflow-hidden relative">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">iPad</h2>
              <p className="text-xl text-gray-600 font-light">Lovable. Drawable. Magical.</p>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Learn more <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Buy <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
              </div>
            </div>
            <div className="h-60 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=600&h=400" 
                alt="iPad" 
                className="max-h-full object-contain" 
              />
            </div>
          </div>
          
          {/* Fourth product card */}
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-10 text-center overflow-hidden relative">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">Apple Watch</h2>
              <p className="text-xl text-gray-600 font-light">Smarter. Brighter. Mightier.</p>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Learn more <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Buy <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
              </div>
            </div>
            <div className="h-60 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&h=400" 
                alt="Apple Watch" 
                className="max-h-full object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
