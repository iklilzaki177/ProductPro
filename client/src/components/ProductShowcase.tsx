import { ChevronRight, ShieldCheck, Key, Lock, LineChart } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section id="product" className="py-16 bg-white">
      <div className="apple-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-3">Choose your Easy.kripsi plan</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Compare our packages and find the perfect security solution for your needs.
          </p>
        </div>
        
        {/* Grid layout for product displays */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic package */}
          <div className="bg-gray-100 rounded-3xl p-10 text-center overflow-hidden relative transition-all duration-300 hover:shadow-xl">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">Basic</h2>
              <p className="text-xl text-gray-500 font-light">Essential security for individuals.</p>
              <p className="text-3xl font-semibold mt-4">$9.99<span className="text-lg font-normal text-gray-500">/mo</span></p>
              <div className="mt-6 flex justify-center space-x-6">
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Learn more <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Buy <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 text-left mt-8">
              <div className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Basic encryption protection</span>
              </div>
              <div className="flex items-start">
                <Key className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Password manager</span>
              </div>
              <div className="flex items-start">
                <Lock className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Single device security</span>
              </div>
            </div>
            <div className="mt-10">
              <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Choose Basic
              </button>
            </div>
          </div>
          
          {/* Lite package */}
          <div className="bg-gray-100 rounded-3xl p-10 text-center overflow-hidden relative transition-all duration-300 hover:shadow-xl">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">Lite</h2>
              <p className="text-xl text-gray-500 font-light">Advanced protection for professionals.</p>
              <p className="text-3xl font-semibold mt-4">$19.99<span className="text-lg font-normal text-gray-500">/mo</span></p>
              <div className="mt-6 flex justify-center space-x-6">
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Learn more <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Buy <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 text-left mt-8">
              <div className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Everything in Basic</span>
              </div>
              <div className="flex items-start">
                <Key className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">VPN protection</span>
              </div>
              <div className="flex items-start">
                <Lock className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Multi-device support (up to 3)</span>
              </div>
              <div className="flex items-start">
                <LineChart className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Basic security analytics</span>
              </div>
            </div>
            <div className="mt-10">
              <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Choose Lite
              </button>
            </div>
          </div>
          
          {/* Ultimate package */}
          <div className="bg-gradient-to-b from-blue-900 to-blue-950 text-white rounded-3xl p-10 text-center overflow-hidden relative transition-all duration-300 hover:shadow-xl ring-2 ring-blue-500">
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full">
              MOST POPULAR
            </div>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">Ultimate</h2>
              <p className="text-xl text-gray-300 font-light">Complete security for enterprises.</p>
              <p className="text-3xl font-semibold mt-4">$39.99<span className="text-lg font-normal text-gray-300">/mo</span></p>
              <div className="mt-6 flex justify-center space-x-6">
                <a href="#" className="text-blue-400 hover:underline font-medium flex items-center">
                  Learn more <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
                <a href="#" className="text-blue-400 hover:underline font-medium flex items-center">
                  Buy <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 text-left mt-8">
              <div className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Everything in Lite</span>
              </div>
              <div className="flex items-start">
                <Key className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Advanced threat protection</span>
              </div>
              <div className="flex items-start">
                <Lock className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Unlimited device support</span>
              </div>
              <div className="flex items-start">
                <LineChart className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Enterprise administration</span>
              </div>
              <div className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">24/7 dedicated support</span>
              </div>
            </div>
            <div className="mt-10">
              <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full hover:from-blue-700 hover:to-blue-500 transition-colors">
                Choose Ultimate
              </button>
            </div>
          </div>
        </div>
        
        {/* Additional marketing message */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4 max-w-xl mx-auto">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <a href="#" className="text-blue-500 hover:underline font-medium inline-flex items-center">
            Compare all Easy.kripsi features <ChevronRight className="h-5 w-5 ml-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
