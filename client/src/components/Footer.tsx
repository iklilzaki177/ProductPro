import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavClick(id);
  };
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  
  const isExpanded = (section: string) => expandedSection === section;

  return (
    <footer className="bg-gray-100 pt-8 text-sm">
      <div className="main-container px-4 md:px-6">
        {/* Mobile Accordion Footer */}
        <div className="md:hidden">
          {/* Products Section */}
          <div className="border-b border-gray-300">
            <button 
              onClick={() => toggleSection('products')} 
              className="w-full py-4 flex justify-between items-center text-left"
            >
              <h3 className="font-medium text-gray-900">Products</h3>
              {isExpanded('products') ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </button>
            
            {isExpanded('products') && (
              <ul className="space-y-3 pb-4">
                <li>
                  <a 
                    href="#" 
                    onClick={handleNavClick('product')}
                    className="text-gray-500 hover:text-gray-800 transition-colors block py-1.5 mobile-tap-area"
                  >
                    Basic
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={handleNavClick('product')}
                    className="text-gray-500 hover:text-gray-800 transition-colors block py-1.5 mobile-tap-area"
                  >
                    Advance
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    className="text-gray-500 hover:text-gray-800 transition-colors block py-1.5 mobile-tap-area"
                  >
                    University Templates
                  </a>
                </li>
              </ul>
            )}
          </div>
          
          {/* Support Section */}
          <div className="border-b border-gray-300">
            <button 
              onClick={() => toggleSection('support')} 
              className="w-full py-4 flex justify-between items-center text-left"
            >
              <h3 className="font-medium text-gray-900">Support</h3>
              {isExpanded('support') ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </button>
            
            {isExpanded('support') && (
              <ul className="space-y-3 pb-4">
                <li>
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-gray-800 transition-colors block py-1.5 mobile-tap-area"
                  >
                    Installation Guide
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-gray-800 transition-colors block py-1.5 mobile-tap-area"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    className="text-gray-500 hover:text-gray-800 transition-colors block py-1.5 mobile-tap-area"
                  >
                    Keyboard Shortcuts
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    className="text-gray-500 hover:text-gray-800 transition-colors block py-1.5 mobile-tap-area"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            )}
          </div>
          
          {/* Company Section */}
          <div className="border-b border-gray-300">
            <button 
              onClick={() => toggleSection('company')} 
              className="w-full py-4 flex justify-between items-center text-left"
            >
              <h3 className="font-medium text-gray-900">Company</h3>
              {isExpanded('company') ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </button>
            
            {isExpanded('company') && (
              <ul className="space-y-3 pb-4">
                <li>
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-gray-800 transition-colors block py-1.5 mobile-tap-area"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    className="text-gray-500 hover:text-gray-800 transition-colors block py-1.5 mobile-tap-area"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        
        {/* Desktop Footer */}
        <div className="hidden md:grid md:grid-cols-3 py-6 border-b border-gray-300">
          <div className="mb-8 md:mb-0">
            <h3 className="font-medium text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="#" 
                  onClick={handleNavClick('product')}
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  Basic
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={handleNavClick('product')}
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  Advance
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  University Templates
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="font-medium text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  Installation Guide
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  Keyboard Shortcuts
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="py-5 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row md:justify-between border-t border-gray-300 pt-5">
            <p className="text-center md:text-left">
              Copyright © {new Date().getFullYear()} Easy.kripsi. All rights reserved. 
              <br className="md:hidden" />
              <span className="md:ml-1">Developed by @Iklilzaki and @Bangdeniuss</span>
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:underline mobile-tap-area">Privacy Policy</a>
              <a href="#" className="hover:underline mobile-tap-area">Terms of Use</a>
              <a href="#" className="hover:underline mobile-tap-area">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
