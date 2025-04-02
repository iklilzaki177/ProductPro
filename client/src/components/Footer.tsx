import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavClick(id);
  };

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4 font-heading">ProductBrand</h4>
            <p className="text-gray-400 mb-4">
              Providing innovative solutions since 2023. Our mission is to deliver high-quality products that make a difference.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#features" 
                  onClick={handleNavClick('features')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#product" 
                  onClick={handleNavClick('product')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Product
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={handleNavClick('pricing')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={handleNavClick('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={handleNavClick('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-heading">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">User Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-heading">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ProductBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
