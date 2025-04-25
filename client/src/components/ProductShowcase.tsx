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
        
        {/* Other sections removed as requested */}
      </div>
    </section>
  );
}