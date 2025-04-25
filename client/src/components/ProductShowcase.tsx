import { ChevronRight, FileText, Type, ListOrdered, CheckCircle, Table, Bookmark, X } from 'lucide-react';
import panelAdvanceImg from '@assets/panel advance.png';
import panelAdvance1Img from '@assets/panel advance1.png';
import panelAtasBawahImg from '@assets/4. panel atas + bawah.png';
import iPhoneImg from '@assets/iPhone 14 & 15 Pro - 3.png';

export default function ProductShowcase() {
  return (
    <section id="product" className="py-16 bg-white">
      <div className="main-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-3">Pilih paket Easy.kripsi Anda</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Bandingkan paket kami dan temukan solusi format skripsi yang sempurna untuk kebutuhan Anda.
          </p>
        </div>
        
        {/* Advanced Features Showcase - FIRST SECTION */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-3">Fitur-fitur unggulan terbaru kami</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Versi Advance memberikan Anda alat yang lebih canggih untuk pemformatan skripsi
            </p>
            <div className="mt-4 py-1 px-4 bg-white text-blue-700 rounded-full inline-block text-sm font-bold">
              klik-pilih-selesai
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg w-full max-w-2xl bg-white">
              <img 
                src={panelAtasBawahImg} 
                alt="Panel penomoran halaman dengan opsi tengah bawah, kanan atas" 
                className="w-full h-auto px-4 py-6" 
              />
            </div>
          </div>
            
          <div className="mt-8 text-center">
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-6">
              Format skripsi Anda secara otomatis dengan pintasan keyboard dan alat cerdas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-2 rounded-full inline-block font-medium"
              >
                Dapatkan Basic (Rp 50.000)
              </a>
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 border-2 border-white text-blue-700 hover:bg-white px-6 py-2 rounded-full inline-block font-medium"
              >
                Dapatkan Advance (Rp 100.000)
              </a>
            </div>
          </div>
        </div>
        
        {/* Package selection section removed to avoid duplication with HeroSection */}
        
        {/* Note: Keyboard Shortcuts Section has been removed to avoid duplication with AnimatedFeatureSection */}
        
        {/* Additional Features - FOURTH SECTION */}
        <div className="mt-20 bg-gray-100 rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Fitur canggih lainnya dalam versi Advance</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Tingkatkan format skripsi Anda ke level berikutnya dengan fitur-fitur eksklusif ini
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 text-white rounded-sm p-1">✓</span>
                <h3 className="text-lg sm:text-xl font-medium border-b border-blue-500 pb-2 w-full">Sitasi Otomatis</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Format kutipan dan referensi dalam gaya APA, MLA, atau gaya kustom hanya dengan beberapa klik. Tidak perlu khawatir tentang format manual lagi.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Format kutipan dalam teks otomatis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Menghasilkan daftar referensi lengkap</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mendukung berbagai gaya sitasi</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 text-white rounded-sm p-1">✓</span>
                <h3 className="text-lg sm:text-xl font-medium border-b border-blue-500 pb-2 w-full">Template Universitas</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Template yang sudah diformat sesuai dengan persyaratan universitas di Indonesia. Mulai skripsi Anda dengan format yang benar sejak awal.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Margin dan spasi yang sudah dikonfigurasi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Gaya dan ukuran font yang sesuai</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Halaman sampul khusus universitas</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature Comparison Table has been moved to HeroSection */}
          
          {/* Purchase button removed to avoid duplication with HeroSection */}
        </div>
        
        {/* Word Integration Showcase - FIFTH SECTION */}
        <div className="mt-20 bg-gray-100 rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Integrasi Microsoft Word yang Mulus</h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6">
                Easy.kripsi bekerja langsung di dalam Microsoft Word, menambahkan toolbar yang powerful yang memberikan akses satu klik ke semua alat pemformatan.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tidak perlu belajar software baru</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Kompatibel dengan semua versi Word (2016 dan lebih baru)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Berfungsi offline - tidak memerlukan internet setelah instalasi</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 relative mt-8 md:mt-0">
              <div className="h-6 sm:h-8 bg-gray-200 rounded-t-lg w-full absolute top-0 left-0 flex items-center px-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500 mx-auto">Document1.docx - Word</div>
              </div>
              
              <div className="pt-8 pb-2">
                {/* Simulated Word Toolbar */}
                <div className="bg-blue-50 border-b border-gray-300 py-1 px-2 flex flex-wrap gap-2">
                  <button className="bg-blue-600 text-white text-xs py-1 px-2 rounded">Format Heading</button>
                  <button className="bg-blue-600 text-white text-xs py-1 px-2 rounded">Nomor Halaman</button>
                  <button className="bg-blue-600 text-white text-xs py-1 px-2 rounded">Daftar Isi</button>
                  <button className="bg-blue-600 text-white text-xs py-1 px-2 rounded">Sitasi</button>
                </div>
                
                {/* Simulated Document Content */}
                <div className="py-4 px-4 sm:px-6">
                  <div className="w-full h-3 sm:h-4 bg-gray-800 mb-3 sm:mb-4"></div>
                  <div className="w-3/4 h-3 sm:h-4 bg-gray-800 mb-6 sm:mb-8"></div>
                  
                  <div className="w-1/2 h-2 sm:h-3 bg-blue-600 mb-2 sm:mb-3"></div>
                  <div className="w-full h-1.5 sm:h-2 bg-gray-400 mb-1.5 sm:mb-2"></div>
                  <div className="w-full h-1.5 sm:h-2 bg-gray-400 mb-1.5 sm:mb-2"></div>
                  <div className="w-2/3 h-1.5 sm:h-2 bg-gray-400 mb-4 sm:mb-6"></div>
                  
                  <div className="w-1/2 h-2 sm:h-3 bg-blue-600 mb-2 sm:mb-3"></div>
                  <div className="w-full h-1.5 sm:h-2 bg-gray-400 mb-1.5 sm:mb-2"></div>
                  <div className="w-full h-1.5 sm:h-2 bg-gray-400 mb-1.5 sm:mb-2"></div>
                  <div className="w-3/4 h-1.5 sm:h-2 bg-gray-400 mb-1.5 sm:mb-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Purchase options section removed to avoid duplication with HeroSection */}
      </div>
    </section>
  );
}
