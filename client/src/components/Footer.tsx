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
      <div className="apple-container">
        <div className="border-b border-gray-300 pb-10">
          <p className="text-gray-500 max-w-xl text-xs leading-relaxed mb-5">
            1. iPhone 15 Pro and iPhone 15 Pro Max are splash, water, and dust resistant and were tested under controlled laboratory conditions with a rating of IP68 under IEC standard 60529.
          </p>
          <p className="text-gray-500 text-xs leading-relaxed">
            Apple TV+ requires a subscription. A new device purchase includes three months of Apple TV+ free. Terms apply.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 py-6 border-b border-gray-300">
          <div className="mb-8 md:mb-0">
            <h3 className="font-medium text-gray-900 mb-4">Shop and Learn</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Store</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Mac</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">iPad</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">iPhone</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Watch</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">AirPods</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">TV & Home</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">AirTag</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Accessories</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="font-medium text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Apple Music</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Apple TV+</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Apple Fitness+</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Apple News+</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Apple Arcade</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">iCloud</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Apple One</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Apple Card</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Apple Books</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Apple Podcasts</a></li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="font-medium text-gray-900 mb-4">Apple Store</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Find a Store</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Genius Bar</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Today at Apple</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Apple Camp</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Apple Trade In</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Ways to Buy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Recycling Programme</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Order Status</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Shopping Help</a></li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="font-medium text-gray-900 mb-4">For Business</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Apple and Business</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Shop for Business</a></li>
            </ul>
            
            <h3 className="font-medium text-gray-900 mt-8 mb-4">For Education</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Apple and Education</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Shop for Education</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Shop for University</a></li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="font-medium text-gray-900 mb-4">Apple Values</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Accessibility</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Environment</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Supplier Responsibility</a></li>
            </ul>
            
            <h3 className="font-medium text-gray-900 mt-8 mb-4">About Apple</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Newsroom</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Apple Leadership</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Career Opportunities</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Investors</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Ethics & Compliance</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Contact Apple</a></li>
            </ul>
          </div>
        </div>
        
        <div className="py-5 text-xs text-gray-500">
          <p className="pb-4">
            More ways to shop: <a href="#" className="text-blue-500 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-500 hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between border-t border-gray-300 pt-5">
            <p>Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
            <div className="flex flex-wrap mt-4 md:mt-0">
              <a href="#" className="mr-6 hover:underline">Privacy Policy</a>
              <a href="#" className="mr-6 hover:underline">Terms of Use</a>
              <a href="#" className="mr-6 hover:underline">Sales and Refunds</a>
              <a href="#" className="mr-6 hover:underline">Legal</a>
              <a href="#" className="hover:underline">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
