import { ChevronRight, Clock, Star, ThumbsUp, Zap, Check } from 'lucide-react';
import AnimatedFeatureSection from './AnimatedFeatureSection';
import advanceImg from '@assets/panel advance.png';
import { useState, useEffect } from 'react';

interface HeroSectionProps {
  onBuyNowClick: () => void;
  onLearnMoreClick: () => void;
}

export default function HeroSection({ onBuyNowClick, onLearnMoreClick }: HeroSectionProps) {
  // Rotating features state
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const features = [
    'Nomor Halaman',
    'Daftar Isi',
    'Daftar Gambar',
    'Heading Bab',
    'Heading Sub Bab'
  ];
  
  // Effect for rotating features every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
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
              
              {/* Animated Feature on Mobile only */}
              <div className="lg:hidden mt-10">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg border border-blue-100 w-full overflow-hidden flex items-center justify-center min-h-[180px] py-6">
                  <div className="relative h-28 w-full flex items-center justify-center">
                    {features.map((feature, index) => (
                      <div 
                        key={`mobile-${index}`}
                        className={`absolute transition-all duration-700 ease-in-out ${
                          index === currentFeatureIndex 
                            ? 'opacity-100 transform-none' 
                            : 'opacity-0 translate-y-8'
                        }`}
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
                          {feature}
                        </h3>
                        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col justify-center items-center">
              {/* Desktop Version - Image and Feature text side by side */}
              <div className="hidden lg:block relative w-full">
                {/* Desktop Feature Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-32 w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-white bg-opacity-90 rounded-lg">
                    {features.map((feature, index) => (
                      <div 
                        key={`desktop-${index}`}
                        className={`absolute transition-all duration-700 ease-in-out ${
                          index === currentFeatureIndex 
                            ? 'opacity-100 transform-none' 
                            : 'opacity-0 translate-y-8'
                        }`}
                      >
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
                          {feature}
                        </h3>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              
                {/* Desktop Image */}
                <img 
                  src={advanceImg} 
                  alt="Easy.kripsi Advance Version Interface" 
                  className="w-full max-w-md mx-auto h-auto object-contain rounded-lg shadow-lg border border-gray-200 opacity-80" 
                />
              </div>
              
              {/* Mobile Version - Only Image */}
              <div className="lg:hidden">
                <img 
                  src={advanceImg} 
                  alt="Easy.kripsi Advance Version Interface" 
                  className="w-full max-w-md mx-auto h-auto object-contain rounded-lg shadow-lg border border-gray-200" 
                />
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