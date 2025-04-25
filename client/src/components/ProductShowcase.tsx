import { ChevronRight, FileText, Type, ListOrdered, CheckCircle, Table, Bookmark } from 'lucide-react';
import panelAdvanceImg from '@assets/panel advance.png';
import panelAdvance1Img from '@assets/panel advance1.png';
import iPhoneImg from '@assets/iPhone 14 & 15 Pro - 3.png';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic package */}
          <div className="bg-gray-100 rounded-3xl p-10 text-center overflow-hidden relative transition-all duration-300 hover:shadow-xl">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">Basic</h2>
              <p className="text-xl text-gray-500 font-light">Essential formatting for students.</p>
              <p className="text-3xl font-semibold mt-4">Rp 50.000</p>
              <div className="mt-6 flex justify-center space-x-6">
                <a href="#features" className="text-blue-500 hover:underline font-medium flex items-center">
                  Learn more <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
                <a href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium flex items-center">
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
              <div className="flex items-start">
                <Table className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Table of contents generation</span>
              </div>
            </div>
            <div className="mt-10">
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors inline-block text-center"
              >
                Get Basic
              </a>
            </div>
          </div>
          
          {/* Advance package */}
          <div className="bg-gradient-to-b from-blue-900 to-blue-950 text-white rounded-3xl p-10 text-center overflow-hidden relative transition-all duration-300 hover:shadow-xl ring-2 ring-blue-500">
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full">
              RECOMMENDED
            </div>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">Advance</h2>
              <p className="text-xl text-gray-300 font-light">Complete thesis automation suite.</p>
              <p className="text-3xl font-semibold mt-4">Rp 100.000</p>
              <div className="mt-6 flex justify-center space-x-6">
                <a href="#features" className="text-blue-400 hover:underline font-medium flex items-center">
                  Learn more <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
                <a href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-medium flex items-center">
                  Buy <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 text-left mt-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Everything in Basic</span>
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
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full hover:from-blue-700 hover:to-blue-500 transition-colors inline-block text-center"
              >
                Get Advance
              </a>
            </div>
          </div>
        </div>
        
        {/* Keyboard Shortcuts Showcase */}
        <div className="mt-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white rounded-3xl p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold mb-3">Powerful Keyboard Shortcuts</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Format your thesis in seconds with these time-saving shortcuts. <span className="text-blue-400 font-semibold">Advance version</span> has even more powerful features!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 rounded-sm p-1">✓</span>
                <h3 className="text-xl font-medium border-b border-blue-500 pb-2 w-full">Heading Formatting</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="flex space-x-1 mr-4 w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">1</span>
                  </div>
                  <span className="text-gray-300">KATA PENGANTAR / BAB I PENDAHULUAN</span>
                </li>
                <li className="flex items-center">
                  <div className="flex space-x-1 mr-4 w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">2</span>
                  </div>
                  <span className="text-gray-300">Apply sub-heading style (1.1, 1.2, etc.)</span>
                </li>
                <li className="flex items-center">
                  <div className="flex space-x-1 mr-4 w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">3</span>
                  </div>
                  <span className="text-gray-300">Apply sub-sub-heading style (1.3.1, etc.)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 rounded-sm p-1">✓</span>
                <h3 className="text-xl font-medium border-b border-blue-500 pb-2 w-full">Table of Contents Tools</h3>
              </div>
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
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">D</span>
                  </div>
                  <span className="text-gray-300">Update Table of Contents</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 rounded-sm p-1">✓</span>
                <h3 className="text-xl font-medium border-b border-blue-500 pb-2 w-full">Page Numbering</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="flex space-x-1 mr-4 w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Shift</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">K</span>
                  </div>
                  <span className="text-gray-300">Auto-detect and format page numbers</span>
                </li>
                <li className="flex items-center">
                  <div className="flex space-x-1 mr-4 w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">R</span>
                  </div>
                  <span className="text-gray-300">Roman numeral page numbers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 rounded-sm p-1">✓</span>
                <h3 className="text-xl font-medium border-b border-blue-500 pb-2 w-full">Images & Tables</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="flex space-x-1 mr-4 w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Ctrl</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">G/T/L</span>
                  </div>
                  <span className="text-gray-300">Auto-numbered captions linked to chapter numbers (e.g., Gambar 4.1 in BAB IV)</span>
                </li>
                <li className="flex items-center">
                  <div className="flex space-x-1 mr-4 w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">G</span>
                  </div>
                  <span className="text-gray-300">Insert image/table reference list</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
              The <span className="text-blue-400 font-semibold">Advance version</span> includes advanced page numbering with options for center bottom, top right, and mixed format settings
            </p>
            <a 
              href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full inline-block"
            >
              Get Advance Version
            </a>
          </div>
        </div>
        
        {/* Advance Version Showcase */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Introducing our most advanced features yet</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              The Advance version gives you even more powerful tools for thesis formatting
            </p>
            <div className="mt-4 py-1 px-4 bg-white text-blue-700 rounded-full inline-block text-sm font-bold">
              klik-pilih-done
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 rounded-sm p-1">✓</span>
                <h3 className="text-xl font-medium pb-2 w-full">Advanced Page Numbering</h3>
              </div>
              
              {/* Displaying the actual panel images from the posters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <p className="text-blue-100 mb-4">Simply press <span className="bg-blue-800 px-2 py-1 rounded">Alt + Shift + K</span> and choose from multiple page number styles:</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                      <span>LATIN (standard numbering)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>TENGAH BAWAH, KANAN ATAS (center bottom, top right)</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <a 
                      href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-2 rounded-full inline-block font-medium"
                    >
                      Upgrade to Advance
                    </a>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={panelAdvanceImg} 
                    alt="Advanced page numbering panel" 
                    className="w-full h-auto object-contain" 
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 rounded-sm p-1">✓</span>
                <h3 className="text-xl font-medium pb-2 w-full">Enhanced Image & Table References</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <p className="text-blue-100 mb-4">Advance version automatically links caption numbers to chapters (BAB). For example, if you're in BAB IV, pressing <span className="bg-blue-800 px-2 py-1 rounded">Ctrl + Alt + G/T/L</span> creates captions like "Gambar 4.1", "Tabel 4.2", etc.</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                      <span>Gambar (for images/figures)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                      <span>Tabel (for tables)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                      <span>Lampiran (for appendices)</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <a 
                      href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-2 rounded-full inline-block font-medium"
                    >
                      Upgrade to Advance
                    </a>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={panelAdvance1Img} 
                    alt="Advanced caption reference panel" 
                    className="w-full h-auto object-contain" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500 rounded-sm p-1">✓</span>
              <h3 className="text-xl font-medium pb-2 w-full">Example of Easy.kripsi in Action</h3>
            </div>
            
            <div className="flex justify-center">
              <div className="rounded-lg overflow-hidden shadow-lg w-full max-w-2xl">
                <img 
                  src={iPhoneImg} 
                  alt="Easy.kripsi interface example" 
                  className="w-full h-auto" 
                />
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-6">
                "klik-pilih-done" - Simple, fast, and efficient thesis formatting
              </p>
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full inline-block font-medium text-lg"
              >
                Get Advance Version Now
              </a>
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
