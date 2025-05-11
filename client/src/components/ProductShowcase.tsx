import { ChevronRight, FileText, Type, ListOrdered, CheckCircle, Table, Bookmark, X } from 'lucide-react';
import panelAdvanceImg from '@assets/panel advance.png';
import panelAdvance1Img from '@assets/panel advance1.png';
import panelAtasBawahImg from '@assets/4. panel atas + bawah.png';
import iPhoneImg from '@assets/iPhone 14 & 15 Pro - 3.png';
import basicVersionImg from '@assets/picture 1.png';
import advanceVersionImg from '@assets/picture 2.png';

interface ProductShowcaseProps {
  paymentLinks?: {
    basic: string;
    advance: string;
  };
  disableAdvance?: boolean;
}

export default function ProductShowcase({
  paymentLinks = {
    basic: "https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic",
    advance: "https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
  },
  disableAdvance = false
}: ProductShowcaseProps) {
  return (
    <section id="product" className="py-16 bg-white">
      <div className="main-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-3">Pilih paket Easy.kripsi Anda</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Bandingkan paket kami dan temukan solusi format skripsi yang sempurna untuk kebutuhan Anda.
          </p>
        </div>
        
        {/* Introduction Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-3">Fitur-fitur unggulan terbaru kami</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Versi Advance memberikan Anda alat yang lebih canggih untuk pemformatan skripsi
            </p>
          </div>
            
          <div className="mt-8 text-center">
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-3">
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
        
        {/* Visual Guides for Basic and Advance Features */}
        <div className="mt-8 mb-4" id="contoh-penggunaan">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Tampilan Fitur yang Anda Dapatkan</h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Berikut adalah tampilan dialog dan antarmuka yang akan Anda gunakan
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6 max-w-5xl mx-auto">
            {/* Basic Version */}
            <div className="flex-1 bg-gray-50 rounded-xl p-4 shadow-md border border-gray-200">
              <div className="bg-gray-200 text-gray-700 font-medium py-1.5 px-3 rounded-full inline-block mb-3 text-sm">
                Basic Version
              </div>
              <div className="rounded-lg overflow-hidden shadow-md bg-white max-w-md mx-auto">
                <img 
                  src={basicVersionImg} 
                  alt="Easy.kripsi Basic Version Features" 
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-3 text-center">
                <a 
                  href={paymentLinks.basic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1.5 px-5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Basic (Rp 50.000)
                </a>
              </div>
            </div>
            
            {/* Advance Version */}
            <div className="flex-1 bg-blue-50 rounded-xl p-4 shadow-md border border-blue-200">
              <div className="bg-blue-600 text-white font-medium py-1.5 px-3 rounded-full inline-block mb-3 text-sm">
                Advance Version
              </div>
              <div className="py-1 px-4 bg-blue-600/30 text-blue-800 rounded-full inline-block text-xs font-bold mb-3 border border-blue-300">
                EXCLUSIVE ADVANCE FEATURE
              </div>
              <div className="rounded-lg overflow-hidden shadow-md bg-white mb-3 max-w-md mx-auto">
                <img 
                  src={advanceVersionImg} 
                  alt="Easy.kripsi Advance Version Features" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md bg-white max-w-md mx-auto">
                <div className="bg-blue-50 py-1.5 px-3 text-blue-800 text-xs font-medium border-b border-blue-100">
                  Dialog Pengaturan Posisi Nomor Halaman
                </div>
                <img 
                  src={panelAtasBawahImg} 
                  alt="Panel penomoran halaman dengan opsi tengah bawah, kanan atas" 
                  className="w-full h-auto px-3 py-3" 
                />
                <div className="bg-blue-50 py-1.5 px-3 text-blue-600 text-xs italic border-t border-blue-100">
                  *Fitur khusus versi Advance untuk mengatur posisi nomor halaman
                </div>
              </div>
              <div className="mt-3 text-center">
                {paymentLinks.advance ? (
                  <a 
                    href={paymentLinks.advance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-1.5 px-5 bg-blue-700 text-white rounded-full text-sm font-medium hover:bg-blue-800 transition-colors shadow-sm"
                  >
                    Advance (Rp 100.000)
                  </a>
                ) : disableAdvance ? (
                  <span className="inline-block py-1.5 px-5 bg-gray-400 text-white rounded-full text-sm font-medium cursor-not-allowed">
                    Advance (Coming Soon)
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}