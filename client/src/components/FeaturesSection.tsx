import { Feature } from '@/lib/types';
import { 
  ChevronRight, 
  FileText, 
  ListOrdered, 
  Type, 
  Table, 
  BookOpen,
  Clock, 
  Save, 
  BookmarkCheck, 
  Palette,
  GraduationCap,
  Sparkles
} from 'lucide-react';

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: 'heading',
      title: 'Heading Automation',
      description: 'Automatically format headings according to your university\'s thesis guidelines with just a few clicks.'
    },
    {
      icon: 'pagenumbers',
      title: 'Page Numbering',
      description: 'Set up different page number formats for different sections, including Roman numerals for preliminaries.'
    },
    {
      icon: 'tableofcontents',
      title: 'Table of Contents',
      description: 'Generate and update your table of contents, list of figures, and list of tables automatically.'
    }
  ];

  return (
    <section id="features" className="bg-black text-white py-24">
      <div className="apple-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-5">Thesis formatting that saves you hours.</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Easy.kripsi handles the tedious formatting so you can focus on your research.
          </p>
          <div className="mt-5">
            <a href="#" className="text-blue-500 hover:underline font-medium text-xl flex items-center justify-center">
              Watch the demo <ChevronRight className="h-5 w-5 ml-0.5" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center">
            <div className="h-44 flex items-center justify-center mb-8">
              <Type className="w-32 h-32 text-blue-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Heading Automation</h3>
            <p className="text-gray-400 leading-relaxed font-light mb-3">
              Set up perfectly formatted headings according to your university's requirements. 
              Consistent formatting for all heading levels with a single click.
            </p>
            <div className="flex justify-center my-2">
              <span className="bg-blue-900/50 text-white text-sm px-3 py-1 rounded-full">Alt + 1-8</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="h-44 flex items-center justify-center mb-8">
              <ListOrdered className="w-32 h-32 text-blue-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Page Numbering</h3>
            <p className="text-gray-400 leading-relaxed font-light mb-3">
              Implement different page numbering styles (Roman, Arabic) for different sections of your 
              thesis, automatically handling complex pagination requirements.
            </p>
            <div className="flex justify-center my-2">
              <span className="bg-blue-900/50 text-white text-sm px-3 py-1 rounded-full">Alt + Shift + K</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="h-44 flex items-center justify-center mb-8">
              <Table className="w-32 h-32 text-blue-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Table of Contents</h3>
            <p className="text-gray-400 leading-relaxed font-light mb-3">
              Generate and update your table of contents, list of figures, and list of tables with perfect 
              formatting that matches your university's guidelines.
            </p>
            <div className="flex justify-center my-2">
              <span className="bg-blue-900/50 text-white text-sm px-3 py-1 rounded-full">Alt + D</span>
            </div>
          </div>
        </div>
        
        <div className="mt-28 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Time-saving tools for students
              </h2>
              <p className="text-xl text-gray-400 mb-8 font-light leading-relaxed">
                Easy.kripsi helps students complete their thesis formatting in minutes instead of days,
                with tools designed specifically for academic writing.
              </p>
              
              <ul className="space-y-5">
                <li className="flex">
                  <Clock className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-medium mb-1">Save Hours of Work</h4>
                    <p className="text-gray-400">What used to take days of manual formatting now takes minutes</p>
                  </div>
                </li>
                <li className="flex">
                  <Save className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-medium mb-1">Auto-Saving Templates</h4>
                    <p className="text-gray-400">Save your formatting preferences for future documents</p>
                  </div>
                </li>
                <li className="flex">
                  <BookmarkCheck className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-medium mb-1">University Compliance</h4>
                    <p className="text-gray-400">Ensure your thesis meets all formatting requirements</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="rounded-2xl overflow-hidden h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-black p-8">
                <FileText className="w-64 h-64 text-blue-400 opacity-80" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
          <div>
            <div className="rounded-2xl overflow-hidden h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-black p-8">
              <BookOpen className="w-64 h-64 text-blue-400 opacity-80" />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Perfect formatting for every thesis
            </h2>
            <p className="text-xl text-gray-400 mb-8 font-light leading-relaxed">
              Whether you're writing an undergraduate paper or a doctoral dissertation,
              Easy.kripsi helps you create professional-looking documents every time.
            </p>
            
            <ul className="space-y-5">
              <li className="flex">
                <Palette className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-medium mb-1">University Templates</h4>
                  <p className="text-gray-400">Pre-loaded templates for major universities and citation styles</p>
                </div>
              </li>
              <li className="flex">
                <GraduationCap className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-medium mb-1">Academic Standards</h4>
                  <p className="text-gray-400">Support for APA, MLA, Chicago, Harvard, and other citation styles</p>
                </div>
              </li>
              <li className="flex">
                <Sparkles className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-medium mb-1">Format Checker</h4>
                  <p className="text-gray-400">Automated checks to ensure your document meets all requirements</p>
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
