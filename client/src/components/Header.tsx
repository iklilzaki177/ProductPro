import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, ShoppingBag } from 'lucide-react';

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'}`}>
      <div className="apple-container">
        <div className="flex justify-between items-center h-12 md:h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-black font-medium text-lg" onClick={(e) => { e.preventDefault(); }}>
              <span className="text-lg font-semibold tracking-tight">Easy.<span className="text-blue-600">kripsi</span></span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-xs text-gray-800 justify-center flex-grow">
            <a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              Features
            </a>
            <a 
              href="#product" 
              onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              Products
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              Basic
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              Lite
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              Ultimate
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              Support
            </a>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-black hover:text-primary focus:outline-none">
              <Search className="h-4 w-4" />
            </button>
            <button 
              className="text-black hover:text-primary focus:outline-none"
              onClick={() => handleNavClick('buy-now')}
            >
              <ShoppingBag className="h-4 w-4" />
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                type="button" 
                onClick={toggleMobileMenu}
                className="text-black hover:text-primary focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
                className="text-black hover:text-primary transition-colors px-2 py-1 text-lg"
              >
                Features
              </a>
              <a 
                href="#product" 
                onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                className="text-black hover:text-primary transition-colors px-2 py-1 text-lg"
              >
                Products
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                className="text-black hover:text-primary transition-colors px-2 py-1 text-lg ml-4"
              >
                Basic
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                className="text-black hover:text-primary transition-colors px-2 py-1 text-lg ml-4"
              >
                Lite
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                className="text-black hover:text-primary transition-colors px-2 py-1 text-lg ml-4"
              >
                Ultimate
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
                className="text-black hover:text-primary transition-colors px-2 py-1 text-lg"
              >
                Support
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
