import { ChevronRight, FileText, Type, ListOrdered, CheckCircle, Table, Bookmark } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section id="product" className="py-16 bg-white">
      <div className="main-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-3">Choose your Easy.kripsi plan</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Compare our packages and find the perfect thesis formatting solution for your needs.
          </p>
        </div>
        
        {/* Grid layout for product displays */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic package */}
          <div className="bg-gray-100 rounded-3xl p-10 text-center overflow-hidden relative transition-all duration-300 hover:shadow-xl">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">Basic</h2>
              <p className="text-xl text-gray-500 font-light">Essential formatting for students.</p>
              <p className="text-3xl font-semibold mt-4">$9.99<span className="text-lg font-normal text-gray-500">/mo</span></p>
              <div className="mt-6 flex justify-center space-x-6">
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Learn more <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Buy <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 text-left mt-8">
              <div className="flex items-start">
                <Type className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Automatic heading formatting</span>
              </div>
              <div className="flex items-start">
                <ListOrdered className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Page number automation</span>
              </div>
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Basic citation assistance</span>
              </div>
            </div>
            <div className="mt-10">
              <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Choose Basic
              </button>
            </div>
          </div>
          
          {/* Lite package */}
          <div className="bg-gray-100 rounded-3xl p-10 text-center overflow-hidden relative transition-all duration-300 hover:shadow-xl">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">Lite</h2>
              <p className="text-xl text-gray-500 font-light">Advanced tools for graduate students.</p>
              <p className="text-3xl font-semibold mt-4">$19.99<span className="text-lg font-normal text-gray-500">/mo</span></p>
              <div className="mt-6 flex justify-center space-x-6">
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Learn more <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
                <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                  Buy <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 text-left mt-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Everything in Basic</span>
              </div>
              <div className="flex items-start">
                <Table className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Table of contents generation</span>
              </div>
              <div className="flex items-start">
                <Bookmark className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Figure & table captions</span>
              </div>
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Multiple citation styles</span>
              </div>
            </div>
            <div className="mt-10">
              <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Choose Lite
              </button>
            </div>
          </div>
          
          {/* Ultimate package */}
          <div className="bg-gradient-to-b from-blue-900 to-blue-950 text-white rounded-3xl p-10 text-center overflow-hidden relative transition-all duration-300 hover:shadow-xl ring-2 ring-blue-500">
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full">
              MOST POPULAR
            </div>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">Ultimate</h2>
              <p className="text-xl text-gray-300 font-light">Complete thesis automation suite.</p>
              <p className="text-3xl font-semibold mt-4">$39.99<span className="text-lg font-normal text-gray-300">/mo</span></p>
              <div className="mt-6 flex justify-center space-x-6">
                <a href="#" className="text-blue-400 hover:underline font-medium flex items-center">
                  Learn more <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
                <a href="#" className="text-blue-400 hover:underline font-medium flex items-center">
                  Buy <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 text-left mt-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Everything in Lite</span>
              </div>
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Reference management system</span>
              </div>
              <div className="flex items-start">
                <Type className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">University template library</span>
              </div>
              <div className="flex items-start">
                <Bookmark className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">AI-powered proofreading</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Priority formatting support</span>
              </div>
            </div>
            <div className="mt-10">
              <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full hover:from-blue-700 hover:to-blue-500 transition-colors">
                Choose Ultimate
              </button>
            </div>
          </div>
        </div>
        
        {/* Keyboard Shortcuts Showcase */}
        <div className="mt-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white rounded-3xl p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold mb-3">Powerful Keyboard Shortcuts</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Format your thesis in seconds with these time-saving shortcuts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-medium mb-4 border-b border-blue-500 pb-2">Heading Formatting</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="flex space-x-1 mr-4 w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">1</span>
                  </div>
                  <span className="text-gray-300">Apply Heading 1 style to selected text</span>
                </li>
                <li className="flex items-center">
                  <div className="flex space-x-1 mr-4 w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">2-8</span>
                  </div>
                  <span className="text-gray-300">Apply Heading 2-8 styles respectively</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-medium mb-4 border-b border-blue-500 pb-2">Page & Content Tools</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="flex space-x-1 mr-4 w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">D</span>
                  </div>
                  <span className="text-gray-300">Generate Table of Contents ("Daftar Isi")</span>
                </li>
                <li className="flex items-center">
                  <div className="flex space-x-1 mr-4 w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Shift</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">K</span>
                  </div>
                  <span className="text-gray-300">Auto-detect and format page numbers (center, bottom, top right)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Word Integration Showcase */}
        <div className="mt-20 bg-gray-100 rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Seamless Microsoft Word Integration</h2>
              <p className="text-gray-600 text-lg mb-6">
                Easy.kripsi works directly within Microsoft Word, adding a powerful toolbar that gives you one-click access to all formatting tools.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">No need to learn new software</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Compatible with all versions of Word (2016 and newer)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Works offline - no internet required after installation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 relative">
              <div className="h-8 bg-gray-200 rounded-t-lg w-full absolute top-0 left-0 flex items-center px-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500 mx-auto">Document1.docx - Word</div>
              </div>
              
              <div className="pt-8 pb-2">
                {/* Simulated Word Toolbar */}
                <div className="bg-blue-50 border-b border-gray-300 py-1 px-2 flex space-x-3">
                  <button className="bg-blue-600 text-white text-xs py-1 px-2 rounded">Format Headings</button>
                  <button className="bg-blue-600 text-white text-xs py-1 px-2 rounded">Page Numbers</button>
                  <button className="bg-blue-600 text-white text-xs py-1 px-2 rounded">Table of Contents</button>
                  <button className="bg-blue-600 text-white text-xs py-1 px-2 rounded">Citations</button>
                </div>
                
                {/* Simulated Document Content */}
                <div className="py-4 px-6">
                  <div className="w-full h-4 bg-gray-800 mb-4"></div>
                  <div className="w-3/4 h-4 bg-gray-800 mb-8"></div>
                  
                  <div className="w-1/2 h-3 bg-blue-600 mb-3"></div>
                  <div className="w-full h-2 bg-gray-400 mb-2"></div>
                  <div className="w-full h-2 bg-gray-400 mb-2"></div>
                  <div className="w-2/3 h-2 bg-gray-400 mb-6"></div>
                  
                  <div className="w-1/2 h-3 bg-blue-600 mb-3"></div>
                  <div className="w-full h-2 bg-gray-400 mb-2"></div>
                  <div className="w-full h-2 bg-gray-400 mb-2"></div>
                  <div className="w-3/4 h-2 bg-gray-400 mb-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional marketing message */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4 max-w-xl mx-auto">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <a href="#" className="text-blue-500 hover:underline font-medium inline-flex items-center">
            Compare all Easy.kripsi features <ChevronRight className="h-5 w-5 ml-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
