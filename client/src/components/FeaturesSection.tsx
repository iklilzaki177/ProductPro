import { Feature } from '@/lib/types';
import { ChevronRight, Shield, Lock, Key, EyeOff, BarChart, Laptop, Users, Clock, Globe } from 'lucide-react';

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: 'encryption',
      title: 'End-to-End Encryption',
      description: 'Industry-leading encryption technology that keeps your data secure and private at all times.'
    },
    {
      icon: 'password',
      title: 'Password Manager',
      description: 'Generate, store, and autofill strong unique passwords across all your devices with military-grade security.'
    },
    {
      icon: 'privacy',
      title: 'Data Privacy Controls',
      description: 'Powerful privacy features that give you complete control over your digital footprint and personal information.'
    }
  ];

  return (
    <section id="features" className="bg-black text-white py-24">
      <div className="apple-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-5">Advanced security features for the digital age.</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Easy.kripsi offers powerful protection for everything that matters.
          </p>
          <div className="mt-5">
            <a href="#" className="text-blue-500 hover:underline font-medium text-xl flex items-center justify-center">
              See how it works <ChevronRight className="h-5 w-5 ml-0.5" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center">
            <div className="h-44 flex items-center justify-center mb-8">
              <Shield className="w-32 h-32 text-blue-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">End-to-End Encryption</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Industry-leading encryption technology that keeps your data secure and private at all times, 
              protecting your information from unauthorized access.
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-44 flex items-center justify-center mb-8">
              <Key className="w-32 h-32 text-blue-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Password Manager</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Generate, store, and autofill strong unique passwords across all your devices with 
              military-grade security and seamless integration.
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-44 flex items-center justify-center mb-8">
              <EyeOff className="w-32 h-32 text-blue-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Data Privacy Controls</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Powerful privacy features that give you complete control over your digital footprint 
              and personal information with intuitive management tools.
            </p>
          </div>
        </div>
        
        <div className="mt-28 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Enterprise-grade security for everyone
              </h2>
              <p className="text-xl text-gray-400 mb-8 font-light leading-relaxed">
                Easy.kripsi brings the same level of security used by Fortune 500 companies to individuals 
                and small businesses, making advanced protection accessible to all.
              </p>
              
              <ul className="space-y-5">
                <li className="flex">
                  <BarChart className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-medium mb-1">Advanced Analytics</h4>
                    <p className="text-gray-400">Monitor your security status with real-time threat detection and analysis</p>
                  </div>
                </li>
                <li className="flex">
                  <Laptop className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-medium mb-1">Cross-Device Protection</h4>
                    <p className="text-gray-400">Secure all your devices with a single account, from laptops to smartphones</p>
                  </div>
                </li>
                <li className="flex">
                  <Users className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-medium mb-1">Family Sharing</h4>
                    <p className="text-gray-400">Protect up to 5 family members with our family plans (available in Ultimate)</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="rounded-2xl overflow-hidden h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-black p-8">
                <Lock className="w-64 h-64 text-blue-400 opacity-80" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
          <div>
            <div className="rounded-2xl overflow-hidden h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-black p-8">
              <Globe className="w-64 h-64 text-blue-400 opacity-80" />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Global protection, anywhere you go
            </h2>
            <p className="text-xl text-gray-400 mb-8 font-light leading-relaxed">
              Whether you're at home or traveling the world, Easy.kripsi keeps your digital life 
              protected with world-class security infrastructure across six continents.
            </p>
            
            <ul className="space-y-5">
              <li className="flex">
                <Clock className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-medium mb-1">24/7 Protection</h4>
                  <p className="text-gray-400">Constant security monitoring and updates to keep you protected around the clock</p>
                </div>
              </li>
              <li className="flex">
                <Shield className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-medium mb-1">Automatic Updates</h4>
                  <p className="text-gray-400">Stay protected against the latest threats with automatic security updates</p>
                </div>
              </li>
              <li className="flex">
                <Users className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-medium mb-1">Expert Support</h4>
                  <p className="text-gray-400">Access to security experts who can help you with any questions or concerns</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <a href="#" className="text-blue-500 hover:underline font-medium text-xl inline-flex items-center">
            See all Easy.kripsi features <ChevronRight className="h-5 w-5 ml-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
