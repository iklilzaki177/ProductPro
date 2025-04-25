import { Button } from '@/components/ui/button';
import { ChevronRight, Check, FileText, Type, ListOrdered, Keyboard, Sparkles, Clock, ThumbsUp, Star, Zap } from 'lucide-react';

interface HeroSectionProps {
  onBuyNowClick: () => void;
  onLearnMoreClick: () => void;
}

export default function HeroSection({ onBuyNowClick, onLearnMoreClick }: HeroSectionProps) {
  return (
    <section className="pt-6 pb-12 bg-gradient-to-b from-black to-blue-950 text-white">
      <div className="hero-section">
        <div className="max-w-[600px] mx-auto px-4">
          {/* Value proposition headline */}
          <div className="bg-blue-600/20 inline-block rounded-full px-4 py-1 mb-4 text-sm font-medium text-blue-300">
            <span className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Hemat waktu, format otomatis</span>
          </div>
          <h1 className="hero-title mb-2">Easy.<span className="text-blue-500">kripsi</span></h1>
          <p className="text-xs text-blue-400">Dikembangkan oleh @Iklilzaki dan @Bangdeniuss</p>
          <h3 className="text-xl md:text-2xl font-light my-4 text-gray-200">Format skripsi Anda dalam <span className="text-blue-400 font-medium">beberapa detik</span> dengan pintasan keyboard dan menu yang mudah.</h3>
          
          {/* Social proof banner */}
          <div className="bg-blue-900/30 rounded-lg p-3 mt-5 mb-4 flex justify-center">
            <div className="flex items-center space-x-3 text-sm text-gray-300">
              <div className="flex">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              </div>
              <span>4.8/5 dari 100+ pengguna</span>
            </div>
          </div>
          
          {/* Keyboard shortcuts highlight */}
          <div className="bg-zinc-900/80 backdrop-blur-sm rounded-xl p-4 mt-6 mb-6 shadow-lg">
            <div className="flex items-center justify-center mb-3">
              <Keyboard className="h-5 w-5 text-blue-400 mr-2" />
              <h4 className="text-sm font-medium">Pintasan Keyboard Powerfull</h4>
            </div>
            
            {/* Basic Package Shortcuts */}
            <div>
              <div className="flex items-center mb-2 border-b border-blue-800 pb-1">
                <div className="bg-zinc-800 px-2 py-0.5 rounded text-xs font-medium text-blue-400 mr-1">Basic</div>
                <div className="h-px flex-grow bg-zinc-700"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-4">
                <div className="flex flex-col items-center">
                  <div className="shortcut-badge mb-1">Alt + 1</div>
                  <span className="text-xs text-gray-400">BAB I PENDAHULUAN</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="shortcut-badge mb-1">Alt + 2-8</div>
                  <span className="text-xs text-gray-400">Sub-Heading</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="shortcut-badge mb-1">Alt + D</div>
                  <span className="text-xs text-gray-400">Daftar Isi</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="shortcut-badge mb-1">Alt + G</div>
                  <span className="text-xs text-gray-400">Caption Gambar</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="shortcut-badge mb-1">Alt + T</div>
                  <span className="text-xs text-gray-400">Caption Tabel</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="shortcut-badge mb-1">Alt + L</div>
                  <span className="text-xs text-gray-400">Caption Lampiran</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="shortcut-badge mb-1">Alt + Shift + G/T/L</div>
                  <span className="text-xs text-gray-400">Daftar Gambar/Tabel</span>
                </div>
              </div>
            </div>
            
            {/* Advanced Package Shortcuts */}
            <div>
              <div className="flex items-center mb-2 border-b border-blue-600 pb-1">
                <div className="bg-blue-900 px-2 py-0.5 rounded text-xs font-medium text-blue-200 mr-1">Advance</div>
                <div className="h-px flex-grow bg-blue-800/50"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                <div className="flex flex-col items-center bg-blue-900/20 p-1.5 rounded-md">
                  <div className="shortcut-badge mb-1">Ctrl + Alt + G/T/L</div>
                  <span className="text-xs text-gray-300">Caption 2 Digit (4.1)</span>
                </div>
                <div className="flex flex-col items-center bg-blue-900/20 p-1.5 rounded-md">
                  <div className="shortcut-badge mb-1">Alt + K</div>
                  <span className="text-xs text-gray-300">Halaman Latin</span>
                </div>
                <div className="flex flex-col items-center bg-blue-900/20 p-1.5 rounded-md">
                  <div className="shortcut-badge mb-1">Alt + R</div>
                  <span className="text-xs text-gray-300">Halaman Romawi</span>
                </div>
                <div className="flex flex-col items-center bg-blue-900/20 p-1.5 rounded-md">
                  <div className="shortcut-badge mb-1">Alt + Shift + K</div>
                  <span className="text-xs text-gray-300">No. Halaman Auto</span>
                </div>
                <div className="flex flex-col items-center bg-blue-900/20 p-1.5 rounded-md">
                  <div className="shortcut-badge mb-1">Ctrl + Alt + K</div>
                  <span className="text-xs text-gray-300">Posisi Halaman</span>
                </div>
                <div className="flex flex-col items-center bg-blue-900/20 p-1.5 rounded-md">
                  <div className="shortcut-badge mb-1">Alt + C</div>
                  <span className="text-xs text-gray-300">Hapus No. Halaman</span>
                </div>
                <div className="flex flex-col items-center bg-blue-900/20 p-1.5 rounded-md">
                  <div className="shortcut-badge mb-1">Alt + Q</div>
                  <span className="text-xs text-gray-300">Format Painter Copy</span>
                </div>
                <div className="flex flex-col items-center bg-blue-900/20 p-1.5 rounded-md">
                  <div className="shortcut-badge mb-1">Alt + W</div>
                  <span className="text-xs text-gray-300">Format Painter Paste</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={onBuyNowClick}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium text-lg shadow-lg transition-all flex items-center hover:scale-105"
            >
              Beli sekarang <ChevronRight className="h-5 w-5 ml-0.5" />
            </button>
            <button 
              onClick={onLearnMoreClick}
              className="text-white hover:text-blue-400 border border-blue-500 px-4 py-3 rounded-full font-medium text-lg flex items-center hover:bg-blue-900/20 transition-all"
            >
              Pelajari lebih lanjut <ChevronRight className="h-5 w-5 ml-0.5" />
            </button>
          </div>
        </div>
        
        {/* Key benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto mt-12 px-4">
          <div className="bg-blue-950/50 rounded-xl p-5 text-center shadow-lg">
            <div className="rounded-full bg-blue-900/50 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Zap className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">Format Sekejap</h3>
            <p className="text-sm text-gray-300">Ubah skripsi Anda menjadi dokumen profesional hanya dengan beberapa klik</p>
          </div>
          <div className="bg-blue-950/50 rounded-xl p-5 text-center shadow-lg">
            <div className="rounded-full bg-blue-900/50 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Clock className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">Hemat Waktu</h3>
            <p className="text-sm text-gray-300">Kurangi waktu format skripsi dari berjam-jam menjadi hanya beberapa menit</p>
          </div>
          <div className="bg-blue-950/50 rounded-xl p-5 text-center shadow-lg">
            <div className="rounded-full bg-blue-900/50 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <ThumbsUp className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">Sesuai Standar</h3>
            <p className="text-sm text-gray-300">Format otomatis sesuai standar universitas untuk hasil yang profesional</p>
          </div>
        </div>
        
        {/* Product Package Cards */}
        <div className="mt-16 px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">Pilih Paket yang Tepat untuk Anda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Package */}
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 border border-zinc-800">
              <h3 className="text-2xl font-medium mb-3">Basic</h3>
              <p className="text-gray-400 mb-4">Alat format esensial untuk mahasiswa</p>
              <p className="text-3xl font-semibold mb-2">Rp 50.000</p>
              <p className="text-gray-500 text-sm mb-6">Pembayaran sekali, pemakaian selamanya</p>
              <ul className="text-left mb-6 space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Format heading otomatis dengan Alt+1, Alt+2, dll.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Daftar isi otomatis dengan pintasan Alt+D</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Caption gambar & tabel sederhana</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Penomoran halaman dasar</span>
                </li>
              </ul>
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 inline-block text-center font-medium shadow-lg hover:scale-105"
              >
                Dapatkan Basic
              </a>
            </div>
            
            {/* Advanced Package */}
            <div className="bg-gradient-to-b from-blue-900 to-blue-950 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/30 border border-blue-800 relative">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-blue-600 to-blue-500 text-xs font-bold py-1 px-4 rounded-full shadow-lg">
                PALING POPULER
              </div>
              <h3 className="text-2xl font-medium mb-3">Advance</h3>
              <p className="text-gray-300 mb-4">Paket otomatisasi skripsi lengkap</p>
              <p className="text-3xl font-semibold mb-2">Rp 100.000</p>
              <p className="text-blue-300 text-sm mb-6">Hemat waktu & tenaga bernilai jutaan</p>
              <ul className="text-left mb-6 space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Semua fitur paket Basic</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Penomoran halaman lanjutan dengan opsi tengah bawah/kanan atas</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Penomoran halaman otomatis (Alt+Shift+K) dengan deteksi posisi bab</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Opsi halaman latin (Alt+K) dan romawi (Alt+R) untuk berbagai bagian</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Caption gambar/tabel dengan nomor BAB (mis. Gambar 4.1) melalui Alt+G/T/L</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Caption 2-digit dengan auto-deteksi bab (Ctrl+Alt+G/T/L)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Daftar gambar/tabel/lampiran otomatis (Alt+Shift+G/T/L)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Format painter (Alt+Q/W) dan dialog klik-pilih-selesai</span>
                </li>
              </ul>
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full hover:from-blue-700 hover:to-blue-500 transition-all duration-300 inline-block text-center font-medium shadow-lg hover:scale-105"
              >
                Dapatkan Advance
              </a>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-16 px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">Apa Kata Pengguna Kami</h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl p-5 max-w-md shadow-lg">
              <div className="flex mb-3">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-gray-300 mb-4 italic">"Saya menghemat sekitar 10 jam untuk format skripsi berkat Easy.kripsi. Menu yang sangat intuitif dan pintasan keyboard sangat membantu!"</p>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-sm font-medium mr-3">
                  AD
                </div>
                <div>
                  <p className="text-sm font-medium">Adi Darmawan</p>
                  <p className="text-xs text-gray-400">Mahasiswa Teknik, Universitas Indonesia</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl p-5 max-w-md shadow-lg">
              <div className="flex mb-3">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-gray-300 mb-4 italic">"Format caption dengan BAB di paket Advance sangat membantu. Bayangkan klik sekali dan semua caption gambar dan tabel jadi Gambar 4.1, Tabel 4.2, dst. Sangat menghemat waktu!"</p>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-sm font-medium mr-3">
                  SR
                </div>
                <div>
                  <p className="text-sm font-medium">Siti Rahayu</p>
                  <p className="text-xs text-gray-400">Mahasiswa S2, Universitas Gadjah Mada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sample illustration */}
        <div className="mt-20 text-center px-4">
          <h2 className="text-2xl font-semibold mb-6">Bagaimana Easy.kripsi Menghemat Waktu Anda</h2>
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between shadow-xl">
            <div className="flex items-center justify-center md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <FileText className="w-36 h-36 sm:w-48 sm:h-48 text-blue-400 opacity-70" />
                <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 flex items-center justify-center">
                  <div className="w-full h-1/2 flex flex-col space-y-2">
                    <div className="h-2 bg-blue-500 rounded-full w-3/4"></div>
                    <div className="h-2 bg-blue-500 rounded-full w-full"></div>
                    <div className="h-2 bg-blue-500 rounded-full w-5/6"></div>
                    <div className="h-2 bg-blue-500 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-medium mb-4">Format skripsi dengan satu klik</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Type className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Gaya heading otomatis sesuai pedoman universitas Anda</span>
                </li>
                <li className="flex items-start">
                  <ListOrdered className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Penomoran halaman pintar dengan format berbeda untuk berbagai bagian</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Hemat berjam-jam format manual dengan beberapa klik saja</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Final CTA Section */}
        <div className="mt-20 px-4">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 max-w-3xl mx-auto text-center shadow-2xl">
            <h2 className="text-2xl font-semibold mb-3">Siap Menghemat Waktu Format Skripsi?</h2>
            <p className="text-lg text-gray-200 mb-6">Dapatkan Easy.kripsi sekarang dan fokus pada isi skripsi Anda, bukan formatnya.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 bg-white text-blue-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
              >
                Basic (Rp 50.000)
              </a>
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium rounded-full hover:from-blue-700 hover:to-blue-500 transition-colors shadow-lg"
              >
                Advance (Rp 100.000)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
