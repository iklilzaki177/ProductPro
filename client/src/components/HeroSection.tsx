import { ChevronRight, Clock, Star, ThumbsUp, Zap, Check } from 'lucide-react';
import AnimatedFeatureSection from './AnimatedFeatureSection';
import advanceImg from '@assets/panel advance.png';

interface HeroSectionProps {
  onBuyNowClick: () => void;
  onLearnMoreClick: () => void;
}

export default function HeroSection({ onBuyNowClick, onLearnMoreClick }: HeroSectionProps) {
  return (
    <section className="relative">
      {/* Hero Section - Light Theme Style */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-sm font-medium text-blue-600 mb-4">
                Easy.kripsi – Template Penulisan Skripsi
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Otomatisasi format skripsi/tesis Anda dalam sekejap
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
                Hemat waktu penulisan skripsi dengan pintasan keyboard dan alat cerdas untuk Word
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-8 text-gray-500 text-sm">
                <span className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                  <Check className="h-4 w-4 text-blue-600 mr-1" /> 1600+ pengguna sejak 2022
                </span>
                <span className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                  <Check className="h-4 w-4 text-blue-600 mr-1" /> Format pintasan keyboard
                </span>
                <span className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                  <Check className="h-4 w-4 text-blue-600 mr-1" /> Support selamanya
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Dapatkan Basic (Rp 50.000)
                </a>
                <a 
                  href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Dapatkan Advance (Rp 100.000)
                </a>
              </div>
              
              <div className="mt-8 flex items-center text-sm text-gray-500">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-xs font-medium text-white border-2 border-white">AD</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-xs font-medium text-white border-2 border-white">SR</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-xs font-medium text-white border-2 border-white">+</div>
                </div>
                <div>Dikembangkan oleh <span className="font-medium">@Iklilzaki</span> dan <span className="font-medium">@Bangdeniuss</span></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg border border-blue-100 w-full max-w-lg overflow-hidden">
                {/* Feature Cards - Better Visual Representation */}
                <div className="space-y-3 p-4">
                  {/* Feature 1 - Numbered Captions with Chapter */}
                  <div className="bg-white rounded-lg p-3 border border-gray-200 relative">
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">ADVANCE</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900">Daftar gambar 2 digit?</h4>
                        <div className="mt-1 text-xs text-gray-600">
                          <span className="bg-gray-100 px-2 py-0.5 rounded">ctrl + alt + g/t/l</span>
                        </div>
                        <div className="mt-2 grid grid-cols-3 gap-2 justify-center">
                          <div className="text-xs text-center text-gray-600">
                            <div className="border border-gray-200 rounded py-1 text-xs mb-1">Gambar 1.1</div>
                            <div className="text-[10px]">Gambar 1.2, 1.3, ...</div>
                          </div>
                          <div className="text-xs text-center text-gray-600">
                            <div className="border border-gray-200 rounded py-1 text-xs mb-1">Tabel 1.1</div>
                            <div className="text-[10px]">Tabel 1.2, 1.3, ...</div>
                          </div>
                          <div className="text-xs text-center text-gray-600">
                            <div className="border border-gray-200 rounded py-1 text-xs mb-1">Lampiran 1.1</div>
                            <div className="text-[10px]">Lampiran 1.2, 1.3, ...</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Feature 2 - Roman Page Numbers */}
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900">Nomor halaman romawi</h4>
                        <div className="mt-1 text-xs text-gray-600">
                          <span className="bg-gray-100 px-2 py-0.5 rounded">alt + r</span>
                        </div>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                          <div className="border border-gray-200 rounded flex items-center justify-center h-12 text-xs text-gray-600">i</div>
                          <div className="border border-gray-200 rounded flex items-center justify-center h-12 text-xs text-gray-600">ii</div>
                          <div className="border border-gray-200 rounded flex items-center justify-center h-12 text-xs text-gray-600">iii</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Feature 3 - Latin Page Numbers */}
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900">Nomor halaman latin</h4>
                        <div className="mt-1 text-xs text-gray-600">
                          <span className="bg-gray-100 px-2 py-0.5 rounded">alt + k</span>
                        </div>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                          <div className="border border-gray-200 rounded flex flex-col items-center justify-center h-14 p-1 text-xs text-gray-600">
                            <div className="text-[9px] font-medium text-gray-500">BAB I</div>
                            <div className="text-[9px]">PENDAHULUAN</div>
                            <div className="mt-auto">1</div>
                          </div>
                          <div className="border border-gray-200 rounded flex items-center justify-center h-14 text-xs text-gray-600">2</div>
                          <div className="border border-gray-200 rounded flex items-center justify-center h-14 text-xs text-gray-600">3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 px-4 py-3 border-t border-blue-100 text-center">
                  <button
                    onClick={() => {
                      const section = document.getElementById('contoh-penggunaan');
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-sm"
                  >
                    Lihat Semua Fitur <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Keunggulan Easy.kripsi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Format skripsi dalam hitungan detik, bukan berjam-jam
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Zap className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Format Sekejap</h3>
              <p className="text-gray-600">Ubah skripsi Anda menjadi dokumen profesional hanya dengan beberapa klik</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Hemat Waktu</h3>
              <p className="text-gray-600">Kurangi waktu format skripsi dari berjam-jam menjadi hanya beberapa menit</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <ThumbsUp className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Sesuai Standar</h3>
              <p className="text-gray-600">Format otomatis sesuai standar universitas untuk hasil yang profesional</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedFeatureSection />
          </div>
        </div>
      </div>
      
      {/* Pricing Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pilih Paket yang Tepat untuk Anda</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sesuaikan pilihan dengan kebutuhan skripsi atau tesis Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Package */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 relative hover:shadow-xl transition-shadow">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
                <p className="text-gray-600 mb-4">Alat format esensial untuk mahasiswa</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">Rp 50.000</span>
                  <span className="ml-2 text-gray-500 text-sm">pembayaran sekali</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="ml-3 text-gray-600">Format heading otomatis dengan Alt+1, Alt+2, dll.</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="ml-3 text-gray-600">Daftar isi otomatis dengan pintasan Alt+D</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="ml-3 text-gray-600">Caption gambar & tabel sederhana</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="ml-3 text-gray-600">Penomoran halaman dasar</span>
                </div>
              </div>
              
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors"
              >
                Dapatkan Basic
              </a>
            </div>
            
            {/* Advanced Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-500 relative md:scale-105 hover:shadow-xl transition-shadow">
              <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                RECOMMENDED
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advance</h3>
                <p className="text-gray-600 mb-4">Paket otomatisasi skripsi lengkap</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">Rp 100.000</span>
                  <span className="ml-2 text-gray-500 text-sm">hemat waktu bernilai jutaan</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    <span className="font-medium">Semua fitur</span> paket Basic
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    <span className="font-medium">Penomoran halaman lanjutan</span> dengan opsi tengah bawah/kanan atas
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    <span className="font-medium">Penomoran halaman otomatis</span> (Alt+Shift+K) dengan deteksi posisi bab
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Opsi halaman <span className="font-medium">latin (Alt+K) dan romawi (Alt+R)</span>
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    <span className="font-medium">Caption 2-digit otomatis</span> dengan nomor BAB (Gambar 4.1)
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    <span className="font-medium">Format painter</span> (Alt+Q/W) dan dialog klik-pilih-selesai
                  </span>
                </div>
              </div>
              
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Dapatkan Advance
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 max-w-2xl mx-auto">
            <p className="text-gray-500 text-sm">Pilih Advance untuk mendapatkan <span className="font-medium text-gray-700">2x lebih banyak fitur</span> dan <span className="font-medium text-gray-700">3x lebih cepat</span> dalam formatting skripsi Anda!</p>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apa Kata Pengguna Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dari 1600+ pengguna sejak 2022 yang telah berhasil menghemat waktu
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex mb-4 text-yellow-400">
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Saya menghemat sekitar 10 jam untuk format skripsi berkat Easy.kripsi. Menu yang sangat intuitif dan pintasan keyboard sangat membantu!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-600 mr-3">
                  AD
                </div>
                <div>
                  <p className="font-medium text-gray-900">Adi Darmawan</p>
                  <p className="text-sm text-gray-500">Mahasiswa Teknik, Universitas Indonesia</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex mb-4 text-yellow-400">
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Format caption dengan BAB di paket Advance sangat membantu. Bayangkan klik sekali dan semua caption gambar dan tabel jadi Gambar 4.1, Tabel 4.2, dst. Sangat menghemat waktu!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-600 mr-3">
                  SR
                </div>
                <div>
                  <p className="font-medium text-gray-900">Siti Rahayu</p>
                  <p className="text-sm text-gray-500">Mahasiswa S2, Universitas Gadjah Mada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with Developer Credits */}
      <div className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Easy.kripsi — Developed by <span className="font-medium">@Iklilzaki</span> and <span className="font-medium">@Bangdeniuss</span>
          </p>
        </div>
      </div>
    </section>
  );
}