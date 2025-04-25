import React from 'react';
import { Check } from 'lucide-react';

export default function ResponsiveProductCards() {
  return (
    <div className="mt-20 px-4 relative">
      {/* Connecting line between cards - visible only on desktop */}
      <div className="absolute left-1/2 top-1/2 w-px h-40 bg-gradient-to-b from-blue-500 to-transparent hidden md:block"></div>
      
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-3 text-white">Pilih Paket yang Tepat untuk Anda</h2>
        <p className="text-blue-200/80 max-w-2xl mx-auto">Sesuaikan pilihan dengan kebutuhan skripsi atau tesis Anda</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
        {/* Basic Package - Understated Style */}
        <div className="glass-effect rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/30 border border-zinc-800/50 relative overflow-hidden group md:transform md:scale-90">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-900/80 opacity-80 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="inline-block bg-gray-800/80 px-3 py-1.5 rounded-full mb-4 border border-gray-700/50">
              <h3 className="text-xl font-medium tracking-wide text-blue-100">Basic</h3>
            </div>
            <p className="text-gray-300 mb-4">Alat format esensial untuk mahasiswa</p>
            <p className="text-3xl sm:text-4xl font-semibold mb-2 text-white">Rp 50.000</p>
            <p className="text-gray-400 text-sm mb-8">Pembayaran sekali, pemakaian selamanya</p>
            
            <div className="bg-zinc-900/50 rounded-xl p-4 mb-8 text-left space-y-3 backdrop-blur-sm">
              <div className="flex items-start">
                <div className="rounded-full p-1 bg-blue-900/30 text-blue-400 mr-3 flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-blue-200 text-sm">
                  Format heading dengan <span className="font-medium text-white">Alt+1 s/d Alt+8</span>
                </span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full p-1 bg-blue-900/30 text-blue-400 mr-3 flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-blue-200 text-sm">
                  Buat daftar isi otomatis dengan <span className="font-medium text-white">Alt+D</span>
                </span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full p-1 bg-blue-900/30 text-blue-400 mr-3 flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-blue-200 text-sm">
                  Buat caption <span className="font-medium text-white">sederhana 1-digit</span> (Gambar 1, Tabel 2, dll)
                </span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full p-1 bg-blue-900/30 text-blue-400 mr-3 flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-blue-200 text-sm">
                  <span className="font-medium text-white">Nomor halaman dasar</span> untuk dokumen sederhana
                </span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-block py-3 px-6 sm:px-8 bg-gray-700/70 hover:bg-gray-700 text-blue-100 font-medium rounded-lg transition-colors mobile-tap-area"
              >
                Dapatkan Basic
              </a>
            </div>
          </div>
        </div>
        
        {/* Advance Package - Futuristic Premium Style */}
        <div className="glass-effect rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 border border-blue-900/30 relative overflow-hidden group glow-card">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/20 to-blue-900/40 opacity-80 pointer-events-none"></div>
          
          {/* Premium badge */}
          <div className="absolute top-0 right-0">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs px-3 py-1 rounded-bl-lg shadow-md">
              PREMIUM
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-block bg-gradient-to-r from-blue-900 to-blue-800 px-3 py-1.5 rounded-full mb-4 border border-blue-700/50 shadow-lg">
              <h3 className="text-xl font-medium tracking-wide bg-gradient-to-r from-blue-200 to-white text-transparent bg-clip-text">Advance</h3>
            </div>
            <p className="text-blue-100 mb-4">Format skripsi profesional & lengkap</p>
            <p className="text-3xl sm:text-4xl font-semibold mb-2 bg-gradient-to-r from-blue-200 to-white text-transparent bg-clip-text">Rp 100.000</p>
            <p className="text-blue-200/70 text-sm mb-8">Pembayaran sekali, pemakaian selamanya</p>
            
            <div className="bg-blue-900/30 rounded-xl p-4 mb-8 text-left space-y-3 backdrop-blur-sm border border-blue-800/30">
              <div className="flex items-start">
                <div className="rounded-full p-1 bg-blue-500/30 text-blue-300 mr-3 flex-shrink-0 shadow-sm">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-blue-100 text-sm">
                  <span className="font-medium text-white">Semua fitur Basic</span> plus fitur canggih lainnya
                </span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full p-1 bg-blue-500/30 text-blue-300 mr-3 flex-shrink-0 shadow-sm">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-blue-100 text-sm">
                  <span className="font-medium text-white">Penomoran halaman otomatis</span> (Alt+Shift+K) dengan deteksi posisi bab
                </span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full p-1 bg-blue-500/30 text-blue-300 mr-3 flex-shrink-0 shadow-sm">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-blue-100 text-sm">
                  Opsi halaman <span className="font-medium text-white">latin (Alt+K) dan romawi (Alt+R)</span> untuk berbagai bagian
                </span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full p-1 bg-blue-500/30 text-blue-300 mr-3 flex-shrink-0 shadow-sm">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-blue-100 text-sm">
                  <span className="font-medium text-white">Caption 2-digit otomatis</span> dengan nomor BAB (Gambar 4.1) meningkatkan profesionalitas
                </span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full p-1 bg-blue-500/30 text-blue-300 mr-3 flex-shrink-0 shadow-sm">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-blue-100 text-sm">
                  <span className="font-medium text-white">Format painter</span> (Alt+Q/W) dan dialog <span className="font-medium text-white">klik-pilih-selesai</span>
                </span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto techno-button inline-block py-3 px-6 sm:px-10 font-medium mobile-tap-area"
              >
                Dapatkan Advance
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Comparison annotation */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-20 hidden md:block">
        <div className="bg-blue-600/90 px-3 py-1 rounded-full text-xs font-medium shadow-md">
          VS
        </div>
      </div>
      
      {/* Feature comparison note */}
      <div className="text-center mt-10 max-w-2xl mx-auto">
        <p className="text-blue-200/70 text-sm">Pilih Advance untuk mendapatkan <span className="text-white font-medium">2x lebih banyak fitur</span> dan <span className="text-white font-medium">3x lebih cepat</span> dalam formatting skripsi Anda!</p>
      </div>
    </div>
  );
}