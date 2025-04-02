import { Button } from '@/components/ui/button';
import { ChevronRight, Check } from 'lucide-react';

interface HeroSectionProps {
  onBuyNowClick: () => void;
  onLearnMoreClick: () => void;
}

export default function HeroSection({ onBuyNowClick, onLearnMoreClick }: HeroSectionProps) {
  return (
    <section className="pt-6 pb-12 bg-black text-white">
      <div className="apple-hero">
        {/* Navigation Tabs - For product packages */}
        <div className="flex justify-center pt-5 pb-8">
          <nav className="flex space-x-5 sm:space-x-8 overflow-x-auto p-2 text-xs sm:text-sm">
            <a href="#" className="whitespace-nowrap font-medium border-b-2 border-white py-1 px-1">Basic</a>
            <a href="#" className="whitespace-nowrap text-gray-400 hover:text-white transition-colors py-1 px-1">Lite</a>
            <a href="#" className="whitespace-nowrap text-gray-400 hover:text-white transition-colors py-1 px-1">Ultimate</a>
          </nav>
        </div>
        
        <div className="max-w-[600px] mx-auto px-4">
          <h2 className="text-base text-blue-500 font-normal mb-2">Introducing</h2>
          <h1 className="apple-hero-title mb-2">Easy.<span className="text-blue-500">kripsi</span></h1>
          <h3 className="apple-hero-subtitle mb-4">Secure. Simple. Innovative.</h3>
          <p className="text-gray-400 text-center mb-5">
            Choose from three powerful packages designed for your security needs
          </p>
          <div className="flex justify-center space-x-6 mt-5">
            <button 
              onClick={onBuyNowClick}
              className="text-blue-500 hover:underline font-medium text-xl flex items-center"
            >
              Buy now <ChevronRight className="h-5 w-5 ml-0.5" />
            </button>
            <button 
              onClick={onLearnMoreClick}
              className="text-blue-500 hover:underline font-medium text-xl flex items-center"
            >
              Learn more <ChevronRight className="h-5 w-5 ml-0.5" />
            </button>
          </div>
        </div>
        
        {/* Product Package Cards */}
        <div className="mt-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Package */}
            <div className="bg-zinc-900 rounded-2xl p-6 text-center transition-transform hover:scale-105">
              <h3 className="text-2xl font-medium mb-3">Basic</h3>
              <p className="text-gray-400 mb-4">Essential security for everyday needs</p>
              <p className="text-xl font-semibold mb-6">$9.99<span className="text-sm font-normal text-gray-400">/mo</span></p>
              <ul className="text-left mb-6 space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Core encryption features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Secure messaging</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Password management</span>
                </li>
              </ul>
              <button 
                onClick={onBuyNowClick}
                className="w-full py-2.5 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
            
            {/* Lite Package */}
            <div className="bg-zinc-900 rounded-2xl p-6 text-center transition-transform hover:scale-105">
              <h3 className="text-2xl font-medium mb-3">Lite</h3>
              <p className="text-gray-400 mb-4">Advanced protection for professionals</p>
              <p className="text-xl font-semibold mb-6">$19.99<span className="text-sm font-normal text-gray-400">/mo</span></p>
              <ul className="text-left mb-6 space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">VPN protection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Multi-device support</span>
                </li>
              </ul>
              <button 
                onClick={onBuyNowClick}
                className="w-full py-2.5 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Choose Lite
              </button>
            </div>
            
            {/* Ultimate Package */}
            <div className="bg-gradient-to-b from-blue-900 to-zinc-900 rounded-2xl p-6 text-center transition-transform hover:scale-105 ring-2 ring-blue-500">
              <div className="bg-blue-600 text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">MOST POPULAR</div>
              <h3 className="text-2xl font-medium mb-3">Ultimate</h3>
              <p className="text-gray-300 mb-4">Complete security solution for enterprises</p>
              <p className="text-xl font-semibold mb-6">$39.99<span className="text-sm font-normal text-gray-300">/mo</span></p>
              <ul className="text-left mb-6 space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Everything in Lite</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Advanced threat protection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Enterprise admin controls</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">24/7 dedicated support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Custom security policies</span>
                </li>
              </ul>
              <button 
                onClick={onBuyNowClick}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full hover:from-blue-700 hover:to-blue-500 transition-colors"
              >
                Choose Ultimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
