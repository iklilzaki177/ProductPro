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
        
        {/* Grid layout for product displays - SECOND SECTION */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic package */}
          <div className="bg-gray-100 rounded-3xl p-10 text-center overflow-hidden relative transition-all duration-300 hover:shadow-xl">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">Basic</h2>
              <p className="text-xl text-gray-500 font-light">Format skripsi esensial untuk mahasiswa.</p>
              <p className="text-3xl font-semibold mt-4">Rp 50.000</p>
              <div className="mt-6 flex justify-center space-x-6">
                <a href="#features" className="text-blue-500 hover:underline font-medium flex items-center">
                  Selengkapnya <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
                <a href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium flex items-center">
                  Beli <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 text-left mt-8">
              <div className="flex items-start">
                <Type className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Format heading otomatis</span>
              </div>
              <div className="flex items-start">
                <ListOrdered className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Penomoran halaman otomatis</span>
              </div>
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Caption gambar & tabel sederhana</span>
              </div>
              <div className="flex items-start">
                <Table className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Pembuatan daftar isi</span>
              </div>
            </div>
            <div className="mt-10">
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors inline-block text-center"
              >
                Dapatkan Basic
              </a>
            </div>
          </div>
          
          {/* Advance package */}
          <div className="bg-gradient-to-b from-blue-900 to-blue-950 text-white rounded-3xl p-10 text-center overflow-hidden relative transition-all duration-300 hover:shadow-xl ring-2 ring-blue-500">
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full">
              DIREKOMENDASIKAN
            </div>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-2">Advance</h2>
              <p className="text-xl text-gray-300 font-light">Paket otomatisasi skripsi lengkap.</p>
              <p className="text-3xl font-semibold mt-4">Rp 100.000</p>
              <div className="mt-6 flex justify-center space-x-6">
                <a href="#features" className="text-blue-400 hover:underline font-medium flex items-center">
                  Selengkapnya <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
                <a href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-medium flex items-center">
                  Beli <ChevronRight className="h-5 w-5 ml-0.5" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 text-left mt-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Semua fitur Basic</span>
              </div>
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Caption otomatis dengan nomor BAB (mis. Gambar 4.1)</span>
              </div>
              <div className="flex items-start">
                <Type className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Pustaka template universitas</span>
              </div>
              <div className="flex items-start">
                <Bookmark className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Penomoran halaman campuran (Arab, Romawi)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Dukungan format prioritas</span>
              </div>
            </div>
            <div className="mt-10">
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full hover:from-blue-700 hover:to-blue-500 transition-colors inline-block text-center"
              >
                Dapatkan Advance
              </a>
            </div>
          </div>
        </div>
        
        {/* Keyboard Shortcuts Showcase - THIRD SECTION */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Pintasan Keyboard yang Powerfull</h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Format skripsi Anda dalam hitungan detik dengan pintasan yang menghemat waktu. <span className="text-blue-400 font-semibold">Versi Advance</span> memiliki fitur yang lebih kuat!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 rounded-sm p-1">✓</span>
                <h3 className="text-lg sm:text-xl font-medium border-b border-blue-500 pb-2 w-full">Format Heading</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex flex-wrap gap-1 mb-1 sm:mb-0 sm:mr-4 sm:w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">1</span>
                  </div>
                  <span className="text-gray-300">KATA PENGANTAR / BAB I PENDAHULUAN</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex flex-wrap gap-1 mb-1 sm:mb-0 sm:mr-4 sm:w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">2</span>
                  </div>
                  <span className="text-gray-300">Terapkan gaya sub-heading (1.1, 1.2, dll.)</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex flex-wrap gap-1 mb-1 sm:mb-0 sm:mr-4 sm:w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">3</span>
                  </div>
                  <span className="text-gray-300">Terapkan gaya sub-sub-heading (1.3.1, dll.)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 rounded-sm p-1">✓</span>
                <h3 className="text-lg sm:text-xl font-medium border-b border-blue-500 pb-2 w-full">Daftar Isi</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex flex-wrap gap-1 mb-1 sm:mb-0 sm:mr-4 sm:w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">D</span>
                  </div>
                  <span className="text-gray-300">Buat Daftar Isi otomatis</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex flex-wrap gap-1 mb-1 sm:mb-0 sm:mr-4 sm:w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Shift</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">D</span>
                  </div>
                  <span className="text-gray-300">Perbarui Daftar Isi</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 rounded-sm p-1">✓</span>
                <h3 className="text-lg sm:text-xl font-medium border-b border-blue-500 pb-2 w-full">Nomor Halaman</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex flex-wrap gap-1 mb-1 sm:mb-0 sm:mr-4 sm:w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Shift</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">K</span>
                  </div>
                  <span className="text-gray-300">Deteksi dan format nomor halaman otomatis</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex flex-wrap gap-1 mb-1 sm:mb-0 sm:mr-4 sm:w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">R</span>
                  </div>
                  <span className="text-gray-300">Nomor halaman angka Romawi</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 rounded-sm p-1">✓</span>
                <h3 className="text-lg sm:text-xl font-medium border-b border-blue-500 pb-2 w-full">Gambar & Tabel</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex flex-wrap gap-1 mb-1 sm:mb-0 sm:mr-4 sm:w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Shift</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">G</span>
                  </div>
                  <span className="text-gray-300">Caption gambar sederhana <span className="text-blue-300 font-semibold">(Basic)</span></span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex flex-wrap gap-1 mb-1 sm:mb-0 sm:mr-4 sm:w-24">
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Ctrl</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">Alt</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">+</span>
                    <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded">G/T/L</span>
                  </div>
                  <span className="text-gray-300">Caption dengan nomor BAB (mis. Gambar 4.1) <span className="text-blue-300 font-semibold">(Advance)</span></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-4">
              <span className="text-blue-400 font-semibold">Versi Advance</span> mencakup penomoran halaman lanjutan dengan opsi tengah bawah, kanan atas, dan pengaturan format campuran
            </p>
            <a 
              href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full inline-block"
            >
              Dapatkan Versi Advance
            </a>
          </div>
        </div>
        
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
          
          {/* Feature Comparison Table */}
          <div className="mt-16 overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Perbandingan Fitur Basic vs Advance</h3>
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
                    <td className="p-3 border-b text-gray-700">Membuat caption (Alt+G/T/L)</td>
                    <td className="p-3 border-b text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700 font-medium">Caption dengan nomor BAB (Gambar 4.1)</td>
                    <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700 font-medium">Daftar isi gambar/tabel/lampiran (Alt+Shift+G/T/L)</td>
                    <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700 font-medium">Penomoran halaman campuran (Arab, Romawi)</td>
                    <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                    <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border-b text-gray-700 font-medium">Opsi posisi nomor halaman (tengah bawah/kanan atas)</td>
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
          
          <div className="mt-10 text-center">
            <a 
              href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-block font-medium shadow-lg transition-all hover:scale-105"
            >
              Dapatkan Versi Advance - Rp 100.000
            </a>
          </div>
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
        
        {/* Purchase options - FINAL SECTION */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-blue-50 to-gray-100 p-6 sm:p-10 rounded-3xl shadow-sm">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Siap mengubah pengalaman format skripsi Anda?</h2>
            <p className="text-gray-600 text-base sm:text-lg mb-3 max-w-2xl mx-auto">
              Pilih paket Easy.kripsi yang tepat untuk Anda dan ucapkan selamat tinggal pada masalah pemformatan
            </p>
            <p className="text-gray-500">
              Dikembangkan oleh <span className="font-semibold">@Iklilzaki</span> dan <span className="font-semibold">@Bangdeniuss</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <div className="flex flex-col items-center">
              <div className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Rp 50.000</div>
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 sm:py-3 px-6 sm:px-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors inline-block"
              >
                Dapatkan Basic
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Rp 100.000</div>
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 sm:py-3 px-6 sm:px-8 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full hover:from-blue-700 hover:to-blue-600 transition-colors inline-block"
              >
                Dapatkan Advance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
