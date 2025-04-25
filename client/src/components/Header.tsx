import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, ShoppingBag, X } from 'lucide-react';

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800' : 'bg-black/80 backdrop-blur-sm'}`}>
      <div className="main-container">
        <div className="flex justify-between items-center h-12 md:h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-medium text-lg" onClick={(e) => { e.preventDefault(); }}>
              <span className="text-lg font-semibold tracking-tight">Easy.<span className="text-blue-400">kripsi</span></span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-xs justify-center flex-grow">
            <a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
              className="text-blue-100 hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Features
            </a>
            <a 
              href="#product" 
              onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
              className="text-blue-100 hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Products
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
              className="text-blue-100 hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Basic
            </a>

            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
              className="text-blue-100 hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Advance
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
              className="text-blue-100 hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              Support
            </a>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-blue-200 hover:text-blue-400 focus:outline-none">
              <Search className="h-4 w-4" />
            </button>
            <button 
              className="text-blue-200 hover:text-blue-400 focus:outline-none"
              onClick={() => handleNavClick('buy-now')}
            >
              <ShoppingBag className="h-4 w-4" />
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                type="button" 
                onClick={toggleMobileMenu}
                className="text-blue-200 hover:text-blue-400 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation - Improved for better mobile UX */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
            
            {/* Mobile menu panel */}
            <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-black/95 shadow-lg flex flex-col animate-in slide-in-from-right">
              {/* Menu header */}
              <div className="flex items-center justify-between p-4 border-b border-zinc-800">
                <span className="text-lg font-semibold text-white">Menu</span>
                <button 
                  className="p-2 rounded-full hover:bg-blue-900/30 text-blue-200 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Menu items */}
              <div className="flex-1 overflow-y-auto py-4">
                <div className="flex flex-col space-y-0">
                  <a 
                    href="#features" 
                    onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
                    className="text-blue-100 hover:bg-blue-900/30 hover:text-blue-400 transition-colors px-6 py-3 text-base border-b border-zinc-800"
                  >
                    Features
                  </a>
                  <a 
                    href="#product" 
                    onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                    className="text-blue-100 hover:bg-blue-900/30 hover:text-blue-400 transition-colors px-6 py-3 text-base border-b border-zinc-800"
                  >
                    Products
                  </a>
                  <div className="bg-blue-900/20 border-b border-zinc-800">
                    <div className="px-6 py-2 text-xs text-blue-400 uppercase">Paket</div>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                      className="text-blue-100 hover:bg-blue-900/30 hover:text-blue-400 transition-colors px-6 py-3 text-base border-b border-zinc-800 flex items-center"
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                      Basic
                    </a>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                      className="text-blue-100 hover:bg-blue-900/30 hover:text-blue-400 transition-colors px-6 py-3 text-base flex items-center"
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                      Advance
                    </a>
                  </div>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
                    className="text-blue-100 hover:bg-blue-900/30 hover:text-blue-400 transition-colors px-6 py-3 text-base"
                  >
                    Support
                  </a>
                </div>
              </div>
              
              {/* Menu footer */}
              <div className="p-4 border-t border-zinc-800">
                <a 
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                  className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Beli Sekarang
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
