import { Button } from '@/components/ui/button';
import { ChevronRight, Check, FileText, Type, ListOrdered } from 'lucide-react';

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
          <h3 className="apple-hero-subtitle mb-4">Thesis formatting made simple.</h3>
          <p className="text-gray-400 text-center mb-5">
            Microsoft Word automation tool that helps you format your thesis perfectly
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
              <p className="text-gray-400 mb-4">Essential formatting tools for students</p>
              <p className="text-xl font-semibold mb-6">$9.99<span className="text-sm font-normal text-gray-400">/mo</span></p>
              <ul className="text-left mb-6 space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Automatic heading formatting</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Page number automation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Basic citation assistance</span>
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
              <p className="text-gray-400 mb-4">Advanced tools for graduate students</p>
              <p className="text-xl font-semibold mb-6">$19.99<span className="text-sm font-normal text-gray-400">/mo</span></p>
              <ul className="text-left mb-6 space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Table of contents generation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Figure & table caption tools</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Multiple citation styles</span>
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
              <p className="text-gray-300 mb-4">Complete thesis automation suite</p>
              <p className="text-xl font-semibold mb-6">$39.99<span className="text-sm font-normal text-gray-300">/mo</span></p>
              <ul className="text-left mb-6 space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Everything in Lite</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Reference management system</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Template library with university formats</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">AI-powered proofreading</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Priority thesis formatting support</span>
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
        
        {/* Sample illustration */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-semibold mb-6">How Easy.kripsi saves you time</h2>
          <div className="bg-zinc-800 rounded-2xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center justify-center md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <FileText className="w-48 h-48 text-blue-400 opacity-70" />
                <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 flex items-center justify-center">
                  <div className="w-full h-1/2 flex flex-col space-y-2">
                    <div className="h-2 bg-blue-500 rounded-full w-3/4"></div>
                    <div className="h-2 bg-blue-500 rounded-full w-full"></div>
                    <div className="h-2 bg-blue-500 rounded-full w-5/6"></div>
                    <div className="h-2 bg-blue-500 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-medium mb-4">One-click thesis formatting</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Type className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Automatic heading styles that match your university guidelines</span>
                </li>
                <li className="flex items-start">
                  <ListOrdered className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Smart page numbering with different formats for different sections</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Save hours of manual formatting with just a few clicks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
