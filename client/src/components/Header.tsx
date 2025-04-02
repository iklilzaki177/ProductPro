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
            <a href="#" className="text-black" onClick={(e) => { e.preventDefault(); }}>
              <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg" className="h-12 w-3.5">
                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.667-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5996zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
              </svg>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-xs text-gray-800 justify-center flex-grow">
            <a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              Store
            </a>
            <a 
              href="#product" 
              onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              Mac
            </a>
            <a 
              href="#product" 
              onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              iPad
            </a>
            <a 
              href="#product" 
              onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              iPhone
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => { e.preventDefault(); handleNavClick('pricing'); }}
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              Watch
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => { e.preventDefault(); handleNavClick('testimonials'); }}
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              AirPods
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
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
                Store
              </a>
              <a 
                href="#product" 
                onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                className="text-black hover:text-primary transition-colors px-2 py-1 text-lg"
              >
                Mac
              </a>
              <a 
                href="#product" 
                onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                className="text-black hover:text-primary transition-colors px-2 py-1 text-lg"
              >
                iPad
              </a>
              <a 
                href="#product" 
                onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                className="text-black hover:text-primary transition-colors px-2 py-1 text-lg"
              >
                iPhone
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => { e.preventDefault(); handleNavClick('pricing'); }}
                className="text-black hover:text-primary transition-colors px-2 py-1 text-lg"
              >
                Watch
              </a>
              <a 
                href="#testimonials" 
                onClick={(e) => { e.preventDefault(); handleNavClick('testimonials'); }}
                className="text-black hover:text-primary transition-colors px-2 py-1 text-lg"
              >
                AirPods
              </a>
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
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
