import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight, ExternalLink, Info, ShoppingBag } from 'lucide-react';

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
        isScrolled ? 'bg-white border-b border-gray-200' : 'bg-white'
      }`}
    >
      <div className="notion-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#" 
              className="flex items-center" 
              onClick={(e) => { e.preventDefault(); }}
            >
              <span className="text-lg md:text-xl font-semibold text-gray-900">
                Easy.<span className="text-blue-600">kripsi</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation - Notion style with minimal design */}
          <nav className="hidden md:flex items-center space-x-2">
            <a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
              className="notion-nav-item rounded-md"
            >
              Fitur
            </a>
            <a 
              href="#product" 
              onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
              className="notion-nav-item rounded-md"
            >
              Harga
            </a>
            <a 
              href="#compare" 
              onClick={(e) => { e.preventDefault(); handleNavClick('compare'); }}
              className="notion-nav-item rounded-md"
            >
              Perbandingan
            </a>
            
            <div className="ml-2">
              <button 
                onClick={() => handleNavClick('product')}
                className="notion-btn notion-btn-primary"
              >
                Dapatkan Easy.kripsi
              </button>
            </div>
          </nav>
          
          {/* Mobile menu button - Made more touch-friendly */}
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className="mobile-tap-area p-2 text-gray-600 hover:text-blue-600 focus:outline-none rounded-md"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">{isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}</span>
              <Menu className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation - Notion inspired slide-in panel */}
      <div 
        className={`notion-mobile-menu ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-full flex flex-col">
          {/* Menu header */}
          <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
            <a href="#" className="text-lg font-medium text-gray-900" onClick={(e) => { e.preventDefault(); }}>
              Easy.<span className="text-blue-600">kripsi</span>
            </a>
            <button 
              className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          
          {/* Menu items with improved spacing and touch targets - Notion style */}
          <div className="flex-1 overflow-y-auto bg-white">
            <div className="px-5 py-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Easy.kripsi
                  </h3>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <a 
                        href="#features" 
                        onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
                        className="block px-3 py-2 rounded-md text-base text-gray-900 hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <span>Fitur</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#product" 
                        onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                        className="block px-3 py-2 rounded-md text-base text-gray-900 hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <span>Harga</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#compare" 
                        onClick={(e) => { e.preventDefault(); handleNavClick('compare'); }}
                        className="block px-3 py-2 rounded-md text-base text-gray-900 hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <span>Perbandingan</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Paket
                  </h3>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <a 
                        href="#product" 
                        onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                        className="block px-3 py-2 rounded-md text-base text-gray-900 hover:bg-gray-100"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-gray-500 mr-2"></div>
                            <span>Basic</span>
                          </div>
                          <span className="text-sm font-medium text-gray-500">Rp 50.000</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#product" 
                        onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                        className="block px-3 py-2 rounded-md text-base text-gray-900 hover:bg-gray-100"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-blue-600 mr-2"></div>
                            <span className="font-medium">Advance</span>
                          </div>
                          <span className="text-sm font-medium text-gray-500">Rp 100.000</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Bantuan
                  </h3>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <a 
                        href="#features" 
                        onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
                        className="block px-3 py-2 rounded-md text-base text-gray-900 hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <Info className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                          <span>Info Penggunaan</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://iklilzaki.myr.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 rounded-md text-base text-gray-900 hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <ExternalLink className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                          <span>Website Developer</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => handleNavClick('product')}
                  className="w-full flex items-center justify-center notion-btn notion-btn-primary py-3"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Dapatkan Easy.kripsi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu backdrop - Notion style blur backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
}
