import { Button } from '@/components/ui/button';
import { ChevronRight, Check, FileText, Type, ListOrdered, Keyboard, Sparkles, Clock, ThumbsUp, Star, Zap, CheckCircle, X } from 'lucide-react';
import AnimatedFeatureSection from '@/components/AnimatedFeatureSection';

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
          

          
          {/* CTA buttons - Futuristic Style */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button 
              onClick={onBuyNowClick}
              className="techno-button px-8 py-3.5 text-lg font-medium flex items-center"
            >
              <span className="relative z-10 flex items-center">
                Beli Sekarang <ChevronRight className="h-5 w-5 ml-1" />
              </span>
            </button>
            <button 
              onClick={onLearnMoreClick}
              className="glass-effect text-white px-8 py-3.5 rounded-full font-medium text-lg flex items-center transition-all duration-300 hover:border-blue-400 border border-blue-600/30 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span className="flex items-center">
                Pelajari Lebih Lanjut <ChevronRight className="h-5 w-5 ml-1" />
              </span>
            </button>
          </div>
        </div>
        
        {/* Animated Feature Section - Full Width */}
        <div className="mt-16 py-12 bg-gradient-to-b from-blue-950/60 to-blue-900/40 border-y border-blue-600/20 shadow-lg relative">
          {/* Decorative elements for visual enhancement */}
          <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
          <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          
          {/* Subtle background patterns */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDRhODAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBhNiA2IDAgMSAxLTEyIDAgNiA2IDAgMCAxIDEyIDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedFeatureSection />
          </div>
        </div>
        
        {/* Key benefits - Futuristic Style */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16 px-4">
          <div className="glass-effect rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-zinc-800/30 relative overflow-hidden group transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-30 pointer-events-none"></div>
            <div className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 w-14 h-14 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-medium mb-3 text-white">Format Sekejap</h3>
            <p className="text-sm text-blue-100">Ubah skripsi Anda menjadi dokumen profesional hanya dengan beberapa klik</p>
          </div>
          
          <div className="glass-effect rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-zinc-800/30 relative overflow-hidden group transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-30 pointer-events-none"></div>
            <div className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 w-14 h-14 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-medium mb-3 text-white">Hemat Waktu</h3>
            <p className="text-sm text-blue-100">Kurangi waktu format skripsi dari berjam-jam menjadi hanya beberapa menit</p>
          </div>
          
          <div className="glass-effect rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-zinc-800/30 relative overflow-hidden group transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-30 pointer-events-none"></div>
            <div className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 w-14 h-14 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <ThumbsUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-medium mb-3 text-white">Sesuai Standar</h3>
            <p className="text-sm text-blue-100">Format otomatis sesuai standar universitas untuk hasil yang profesional</p>
          </div>
        </div>
        
        {/* Product Package Cards - Enhanced Futuristic Style */}
        <div className="mt-20 px-4 relative">
          {/* Connecting line between cards */}
          <div className="absolute left-1/2 top-1/2 w-px h-40 bg-gradient-to-b from-blue-500 to-transparent hidden md:block"></div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-3 text-white">Pilih Paket yang Tepat untuk Anda</h2>
            <p className="text-blue-200/80 max-w-2xl mx-auto">Sesuaikan pilihan dengan kebutuhan skripsi atau tesis Anda</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
            {/* Basic Package - Understated Style */}
            <div className="glass-effect rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/30 border border-zinc-800/50 relative overflow-hidden group md:transform md:scale-90">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-900/80 opacity-80 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="inline-block bg-gray-800/80 px-3 py-1.5 rounded-full mb-4 border border-gray-700/50">
                  <h3 className="text-xl font-medium tracking-wide text-blue-100">Basic</h3>
                </div>
                <p className="text-gray-300 mb-4">Alat format esensial untuk mahasiswa</p>
                <p className="text-4xl font-semibold mb-2 text-white">Rp 50.000</p>
                <p className="text-gray-400 text-sm mb-8">Pembayaran sekali, pemakaian selamanya</p>
                
                <div className="bg-zinc-900/50 rounded-xl p-4 mb-8 text-left space-y-3 backdrop-blur-sm">
                  <div className="flex items-start">
                    <div className="rounded-full p-1 bg-blue-900/30 text-blue-400 mr-3 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-gray-300 text-sm">Format heading otomatis dengan Alt+1, Alt+2, dll.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full p-1 bg-blue-900/30 text-blue-400 mr-3 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-gray-300 text-sm">Daftar isi otomatis dengan pintasan Alt+D</span>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full p-1 bg-blue-900/30 text-blue-400 mr-3 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-gray-300 text-sm">Caption gambar & tabel sederhana</span>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full p-1 bg-blue-900/30 text-blue-400 mr-3 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-gray-300 text-sm">Penomoran halaman dasar</span>
                  </div>
                </div>
                
                <a 
                  href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-3 px-8 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-full transition-all duration-300 shadow-lg group-hover:shadow-blue-500/30 hover:scale-105 font-medium"
                >
                  Dapatkan Basic
                </a>
              </div>
            </div>
            
            {/* Advanced Package - Enhanced Premium Style */}
            <div className="glass-effect rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 border border-blue-600/30 relative overflow-hidden group md:transform md:scale-110 md:z-20">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-800/10 to-blue-900/20 opacity-80 pointer-events-none"></div>
              
              {/* Subtle glow effect */}
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
              <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
              
              <div className="relative z-10">
                <div className="inline-block bg-blue-900/80 px-4 py-2 rounded-full mb-5 border border-blue-700/50 shadow-lg shadow-blue-500/20">
                  <h3 className="text-xl font-medium tracking-wide text-blue-100">Advance</h3>
                </div>
                <p className="text-blue-100 mb-4">Paket otomatisasi skripsi lengkap</p>
                <p className="text-4xl font-semibold mb-2 text-white">Rp 100.000</p>
                <p className="text-blue-200 text-sm mb-8">Hemat waktu & tenaga bernilai jutaan</p>
                
                <div className="bg-blue-900/20 rounded-xl p-5 mb-8 text-left space-y-4 backdrop-blur-sm border border-blue-600/20">
                  <div className="flex items-start">
                    <div className="rounded-full p-1 bg-blue-500/30 text-blue-300 mr-3 flex-shrink-0 shadow-sm">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-blue-100 text-sm">Semua fitur paket Basic</span>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full p-1 bg-blue-500/30 text-blue-300 mr-3 flex-shrink-0 shadow-sm">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-blue-100 text-sm">
                      <span className="font-medium text-white">Penomoran halaman lanjutan</span> dengan opsi tengah bawah/kanan atas
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
                
                <div>
                  <a 
                    href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="techno-button inline-block py-3.5 px-10 font-medium"
                  >
                    Dapatkan Advance
                  </a>
                </div>
              </div>
            </div>
            
            {/* Comparison annotation */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-20 hidden md:block">
              <div className="bg-blue-600/90 px-3 py-1 rounded-full text-xs font-medium shadow-md">
                VS
              </div>
            </div>
          </div>
          
          {/* Feature comparison note */}
          <div className="text-center mt-10 max-w-2xl mx-auto">
            <p className="text-blue-200/70 text-sm">Pilih Advance untuk mendapatkan <span className="text-white font-medium">2x lebih banyak fitur</span> dan <span className="text-white font-medium">3x lebih cepat</span> dalam formatting skripsi Anda!</p>
          </div>
          
          {/* Feature Comparison Table - Added from ProductShowcase */}
          <div className="mt-16 overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-white">Perbandingan Fitur Basic vs Advance</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="p-3 text-left text-gray-700 border-b">Fitur</th>
                    <th className="p-3 text-center text-gray-700 border-b">Basic</th>
                    <th className="p-3 text-center text-blue-800 border-b bg-blue-100/50">Advance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700">Format heading otomatis (Alt+1, Alt+2)</td>
                    <td className="p-3 border-b text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700">Daftar isi otomatis (Alt+D)</td>
                    <td className="p-3 border-b text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700">Nomor halaman dasar</td>
                    <td className="p-3 border-b text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700">Caption gambar & tabel sederhana</td>
                    <td className="p-3 border-b text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700">
                      <div className="font-medium">Membuat caption (Alt+G/T/L)</div>
                      <div className="text-xs text-gray-500 mt-1">Alt+G untuk gambar, Alt+T untuk tabel, Alt+L untuk lampiran</div>
                    </td>
                    <td className="p-3 border-b text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700">
                      <div className="font-medium">Caption dengan nomor BAB (Gambar 4.1)</div>
                      <div className="text-xs text-gray-500 mt-1">Penomoran otomatis sesuai dengan BAB (cth: "Gambar 4.1")</div>
                    </td>
                    <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700">
                      <div className="font-medium">Daftar isi gambar/tabel/lampiran (Alt+Shift+G/T/L)</div>
                      <div className="text-xs text-gray-500 mt-1">Tampilkan tabel daftar isi dari caption yang telah dibuat</div>
                    </td>
                    <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700">
                      <div className="font-medium">Penomoran halaman campuran (Alt+K, Alt+R)</div>
                      <div className="text-xs text-gray-500 mt-1">Angka Arab (Alt+K) dan Romawi (Alt+R) untuk berbagai bagian</div>
                    </td>
                    <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700">
                      <div className="font-medium">Penomoran halaman otomatis (Alt+Shift+K)</div>
                      <div className="text-xs text-gray-500 mt-1">Deteksi posisi bab dan format halaman secara otomatis</div>
                    </td>
                    <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700">
                      <div className="font-medium">Posisi nomor halaman (Ctrl+Alt+K)</div>
                      <div className="text-xs text-gray-500 mt-1">Opsi tengah bawah dan kanan atas</div>
                    </td>
                    <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700">
                      <div className="font-medium">Format painter (Alt+Q/W) & Hapus nomor (Alt+C)</div>
                      <div className="text-xs text-gray-500 mt-1">Copy format (Alt+Q), paste format (Alt+W), hapus nomor halaman (Alt+C)</div>
                    </td>
                    <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700 font-medium">Dialog klik-pilih-selesai</td>
                    <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700 font-medium">Template universitas</td>
                    <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-semibold text-gray-800">Harga</td>
                    <td className="p-3 text-center font-medium">Rp 50.000</td>
                    <td className="p-3 text-center font-medium bg-blue-100/50 text-blue-800">Rp 100.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Testimonials - Futuristic Style */}
        <div className="mt-20 px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold mb-3 text-white">Apa Kata Pengguna Kami</h2>
            <p className="text-blue-200/80 max-w-2xl mx-auto">Cerita pengalaman dari pengguna yang telah berhasil menghemat waktu</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            <div className="glass-effect rounded-xl p-6 max-w-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-zinc-800/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex mb-4 text-yellow-400">
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                </div>
                <div className="bg-blue-950/30 p-4 rounded-xl mb-5 backdrop-blur-sm">
                  <p className="text-gray-200 italic text-sm leading-relaxed">"Saya menghemat sekitar 10 jam untuk format skripsi berkat Easy.kripsi. Menu yang sangat intuitif dan pintasan keyboard sangat membantu!"</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 flex items-center justify-center text-sm font-medium mr-3 shadow-md">
                    AD
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Adi Darmawan</p>
                    <p className="text-xs text-blue-300">Mahasiswa Teknik, Universitas Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 max-w-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-zinc-800/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex mb-4 text-yellow-400">
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                </div>
                <div className="bg-blue-950/30 p-4 rounded-xl mb-5 backdrop-blur-sm">
                  <p className="text-gray-200 italic text-sm leading-relaxed">"Format caption dengan BAB di paket Advance sangat membantu. Bayangkan klik sekali dan semua caption gambar dan tabel jadi Gambar 4.1, Tabel 4.2, dst. Sangat menghemat waktu!"</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 flex items-center justify-center text-sm font-medium mr-3 shadow-md">
                    SR
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Siti Rahayu</p>
                    <p className="text-xs text-blue-300">Mahasiswa S2, Universitas Gadjah Mada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sample illustration - Futuristic Style */}
        <div className="mt-20 text-center px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold mb-3 text-white">Bagaimana Easy.kripsi Menghemat Waktu Anda</h2>
            <p className="text-blue-200/80 max-w-2xl mx-auto">Format profesional dengan beberapa klik saja</p>
          </div>
          
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between shadow-lg border border-zinc-800/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent opacity-30 pointer-events-none"></div>
            
            <div className="flex items-center justify-center md:w-1/2 mb-8 md:mb-0 relative z-10">
              <div className="relative">
                <FileText className="w-36 h-36 sm:w-48 sm:h-48 text-blue-400" />
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
            
            <div className="md:w-1/2 text-left relative z-10">
              <h3 className="text-xl font-medium mb-5 text-white tracking-wide">Format Skripsi dengan Satu Klik</h3>
              <div className="space-y-4">
                <div className="flex items-start bg-blue-900/20 p-3 rounded-xl backdrop-blur-sm border border-blue-800/20 hover:border-blue-600/30 transition-all duration-300">
                  <div className="rounded-full bg-blue-800/70 p-1.5 text-blue-300 mr-3 flex-shrink-0 shadow-sm">
                    <Type className="h-4 w-4" />
                  </div>
                  <span className="text-blue-100 text-sm">Gaya heading otomatis sesuai pedoman universitas Anda</span>
                </div>
                <div className="flex items-start bg-blue-900/20 p-3 rounded-xl backdrop-blur-sm border border-blue-800/20 hover:border-blue-600/30 transition-all duration-300">
                  <div className="rounded-full bg-blue-800/70 p-1.5 text-blue-300 mr-3 flex-shrink-0 shadow-sm">
                    <ListOrdered className="h-4 w-4" />
                  </div>
                  <span className="text-blue-100 text-sm">Penomoran halaman pintar dengan format berbeda untuk berbagai bagian</span>
                </div>
                <div className="flex items-start bg-blue-900/20 p-3 rounded-xl backdrop-blur-sm border border-blue-800/20 hover:border-blue-600/30 transition-all duration-300">
                  <div className="rounded-full bg-blue-800/70 p-1.5 text-blue-300 mr-3 flex-shrink-0 shadow-sm">
                    <FileText className="h-4 w-4" />
                  </div>
                  <span className="text-blue-100 text-sm">Hemat berjam-jam format manual dengan beberapa klik saja</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final CTA Section - Cleaner Style */}
        <div className="mt-24 mb-10 px-4">
          <div className="glass-effect rounded-2xl p-10 max-w-3xl mx-auto text-center shadow-lg border border-blue-800/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 opacity-80 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-semibold mb-3 text-white">Siap Menghemat Waktu Format Skripsi?</h2>
              <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">Dapatkan Easy.kripsi sekarang dan fokus pada isi skripsi Anda, bukan formatnya.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-10 bg-white text-blue-900 font-medium rounded-full hover:bg-blue-50 transition-all shadow-lg transform hover:scale-105 duration-300"
                >
                  Basic (Rp 50.000)
                </a>
                <a 
                  href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Advance (Rp 100.000)
                </a>
              </div>
              <div className="mt-6 text-sm text-blue-200/70">
                Developed by @Iklilzaki and @Bangdeniuss
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
