import { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="container">
        <div className="flex justify-between items-center h-14 md:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-gray-900 font-bold text-xl" onClick={(e) => { e.preventDefault(); }}>
              Easy.<span className="text-blue-600">kripsi</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm justify-center">
            <a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
              className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Fitur
            </a>
            <a 
              href="#product" 
              onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
              className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Produk
            </a>
            <a 
              href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Basic
            </a>
            <a 
              href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Advance
            </a>
          </nav>
          
          {/* CTAs */}
          <div className="flex items-center space-x-4">
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavClick('buy-now'); }}
              className="hidden md:inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Beli Sekarang
            </a>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                type="button" 
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop overlay */}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
            
            {/* Mobile menu panel */}
            <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-lg flex flex-col animate-in slide-in-from-right">
              {/* Menu header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <span className="text-lg font-semibold text-gray-900">Menu</span>
                <button 
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
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
                    className="text-gray-700 hover:bg-gray-100 transition-colors px-6 py-3 text-base border-b border-gray-200"
                  >
                    Fitur
                  </a>
                  <a 
                    href="#product" 
                    onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                    className="text-gray-700 hover:bg-gray-100 transition-colors px-6 py-3 text-base border-b border-gray-200"
                  >
                    Produk
                  </a>
                  <div className="bg-gray-50 border-b border-gray-200">
                    <div className="px-6 py-2 text-xs text-gray-500 uppercase font-medium">Paket</div>
                    <a 
                      href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:bg-gray-100 transition-colors px-6 py-3 text-base border-b border-gray-200 flex items-center"
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                      Basic
                    </a>
                    <a 
                      href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:bg-gray-100 transition-colors px-6 py-3 text-base flex items-center"
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                      Advance
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Menu footer */}
              <div className="p-4 border-t border-gray-200">
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