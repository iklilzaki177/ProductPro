import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onNavClick: (id: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-primary font-heading">
              ProductBrand
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              Features
            </a>
            <a 
              href="#product" 
              onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              Product
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => { e.preventDefault(); handleNavClick('pricing'); }}
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => { e.preventDefault(); handleNavClick('testimonials'); }}
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-primary focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => handleNavClick('buy-now')}
              className="bg-primary hover:bg-blue-600 text-white"
            >
              Buy Now
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a 
                href="#features" 
                onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
                className="text-dark hover:text-primary transition-colors font-medium"
              >
                Features
              </a>
              <a 
                href="#product" 
                onClick={(e) => { e.preventDefault(); handleNavClick('product'); }}
                className="text-dark hover:text-primary transition-colors font-medium"
              >
                Product
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => { e.preventDefault(); handleNavClick('pricing'); }}
                className="text-dark hover:text-primary transition-colors font-medium"
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                onClick={(e) => { e.preventDefault(); handleNavClick('testimonials'); }}
                className="text-dark hover:text-primary transition-colors font-medium"
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                className="text-dark hover:text-primary transition-colors font-medium"
              >
                Contact
              </a>
              <Button
                onClick={() => handleNavClick('buy-now')}
                className="bg-primary hover:bg-blue-600 text-white w-full justify-center"
              >
                Buy Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
