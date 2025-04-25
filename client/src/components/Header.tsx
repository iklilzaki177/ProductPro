import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, ShoppingBag, X, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onNavClick: (id: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Close mobile menu when screen size changes to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Prevent body scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    onNavClick(id);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-white/90 shadow-sm' : 'bg-white/90'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="text-black font-medium flex items-center" 
              onClick={(e) => { e.preventDefault(); }}
            >
              <span className="text-lg md:text-xl font-semibold tracking-tight">
                Easy.<span className="text-blue-600">kripsi</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation - Linear style with minimal design */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-1 bg-gray-100 rounded-full p-1">
              <a 
                href="#features" 
                onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
                className="px-4 py-1.5 text-sm text-gray-800 hover:text-blue-600 rounded-full transition-colors"
              >
                Features
              </a>
              <a 
                href="#product" 
                onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                className="px-4 py-1.5 text-sm text-gray-800 hover:text-blue-600 rounded-full transition-colors"
              >
                Pricing
              </a>
              <a 
                href="#compare" 
                onClick={(e) => { e.preventDefault(); handleNavClick('compare'); }}
                className="px-4 py-1.5 text-sm text-gray-800 hover:text-blue-600 rounded-full transition-colors"
              >
                Compare
              </a>
            </div>
            
            <div className="flex space-x-3 items-center">
              <a 
                href="#features" 
                onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Support
              </a>
              
              <Button 
                onClick={() => handleNavClick('product')}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1.5 text-sm font-medium"
              >
                Get Easy.kripsi
              </Button>
            </div>
          </nav>
          
          {/* Mobile menu button - Made more touch-friendly */}
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className="mobile-tap-area p-2 -mr-2 text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation - Linear inspired slide-in panel */}
        <div 
          className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Backdrop with blur effect */}
          <div 
            className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm" 
            onClick={toggleMobileMenu}
            aria-hidden="true"
          ></div>
          
          {/* Mobile menu panel with enhanced animations */}
          <div 
            className={`absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-out ${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="h-full flex flex-col">
              {/* Menu header */}
              <div className="px-4 py-6 border-b border-gray-100 flex items-center justify-between">
                <span className="text-xl font-medium">Easy.kripsi</span>
                <button 
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={toggleMobileMenu}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Menu items with improved spacing and touch targets */}
              <div className="flex-1 overflow-y-auto py-2">
                <div className="flex flex-col">
                  <a 
                    href="#features" 
                    onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
                    className="mobile-nav-item flex items-center justify-between text-base text-gray-900 px-4 py-4 hover:bg-gray-50"
                  >
                    <span>Features</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </a>
                  
                  <a 
                    href="#product" 
                    onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                    className="mobile-nav-item flex items-center justify-between text-base text-gray-900 px-4 py-4 hover:bg-gray-50"
                  >
                    <span>Pricing</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </a>
                  
                  <a 
                    href="#compare" 
                    onClick={(e) => { e.preventDefault(); handleNavClick('compare'); }}
                    className="mobile-nav-item flex items-center justify-between text-base text-gray-900 px-4 py-4 hover:bg-gray-50"
                  >
                    <span>Compare Plans</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </a>
                  
                  <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider mt-2">
                    Plans
                  </div>
                  
                  <a 
                    href="#product" 
                    onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                    className="mobile-nav-item flex items-center justify-between text-base text-gray-900 px-4 py-4 hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                        <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                      </div>
                      <span>Basic</span>
                    </div>
                    <div className="text-sm text-gray-500">Rp 50.000</div>
                  </a>
                  
                  <a 
                    href="#product" 
                    onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                    className="mobile-nav-item flex items-center justify-between text-base text-gray-900 px-4 py-4 hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      </div>
                      <span className="font-medium">Advance</span>
                    </div>
                    <div className="text-sm text-gray-500">Rp 100.000</div>
                  </a>
                  
                  <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider mt-2">
                    Support
                  </div>
                  
                  <a 
                    href="#features" 
                    onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
                    className="mobile-nav-item flex items-center justify-between text-base text-gray-900 px-4 py-4 hover:bg-gray-50"
                  >
                    <span>Help Center</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </a>
                </div>
              </div>
              
              {/* Menu footer with call-to-action */}
              <div className="p-4 border-t border-gray-100">
                <button 
                  onClick={(e) => { handleNavClick('product'); }}
                  className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-medium transition-colors"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Get Easy.kripsi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
