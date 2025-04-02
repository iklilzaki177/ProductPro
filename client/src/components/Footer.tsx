interface FooterProps {
  onNavClick: (id: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavClick(id);
  };

  return (
    <footer className="bg-gray-100 pt-10 text-sm">
      <div className="main-container">        
        <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-gray-300">
          <div className="mb-8 md:mb-0">
            <h3 className="font-medium text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Basic</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Lite</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Ultimate</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Enterprise Solutions</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">University Templates</a></li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="font-medium text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Installation Guide</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Keyboard Shortcuts</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="py-5 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row md:justify-between border-t border-gray-300 pt-5">
            <p>Copyright © {new Date().getFullYear()} Easy.kripsi. All rights reserved. Developed by @Iklilzaki and @Bangdeniuss</p>
            <div className="flex flex-wrap mt-4 md:mt-0">
              <a href="#" className="mr-6 hover:underline">Privacy Policy</a>
              <a href="#" className="mr-6 hover:underline">Terms of Use</a>
              <a href="#" className="mr-6 hover:underline">License Agreement</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
