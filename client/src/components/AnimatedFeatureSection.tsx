import React from 'react';
import { motion } from 'framer-motion';
import { Check, Keyboard, CheckCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ShortcutFeature {
  shortcut: string;
  description: string;
  isAdvanced?: boolean;
  highlight?: boolean;
}

const shortcuts: ShortcutFeature[] = [
  { shortcut: 'Alt + 1', description: 'BAB I PENDAHULUAN' },
  { shortcut: 'Alt + 2-8', description: 'Sub-Heading level 2-8' },
  { shortcut: 'Alt + D', description: 'Generate Daftar Isi otomatis' },
  { shortcut: 'Alt + G', description: 'Caption Gambar sederhana' },
  { shortcut: 'Alt + T', description: 'Caption Tabel sederhana' },
  { shortcut: 'Alt + L', description: 'Caption Lampiran sederhana' },
  { shortcut: 'Alt + Shift + G/T/L', description: 'Generate Daftar Gambar/Tabel' },
  { shortcut: 'Ctrl + Alt + G/T/L', description: 'Caption 2 Digit dengan nomor BAB (4.1)', isAdvanced: true },
  { shortcut: 'Alt + K', description: 'Halaman Latin (a, b, c)', isAdvanced: true },
  { shortcut: 'Alt + R', description: 'Halaman Romawi (i, ii, iii)', isAdvanced: true },
  { shortcut: 'Alt + Shift + K', description: 'Nomor Halaman Otomatis dengan deteksi posisi BAB', isAdvanced: true },
  { shortcut: 'Ctrl + Alt + K', description: 'Atur Posisi Nomor Halaman (tengah/kanan atas)', isAdvanced: true },
  { shortcut: 'Alt + C', description: 'Hapus Nomor Halaman pada halaman tertentu', isAdvanced: true },
  { shortcut: 'Alt + Q', description: 'Format Painter: Copy format teks/paragraf', isAdvanced: true, highlight: true },
  { shortcut: 'Alt + W', description: 'Format Painter: Paste format ke teks/paragraf lain', isAdvanced: true, highlight: true },
];

const FeatureCard: React.FC<{ feature: ShortcutFeature; index: number }> = ({ feature, index }) => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className={cn(
        "p-5 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-2",
        feature.isAdvanced 
          ? "bg-blue-900/30 border-blue-500/50 hover:border-blue-400/70 hover:shadow-blue-500/40" 
          : "bg-gray-900/30 border-gray-600/50 hover:border-gray-500/70 hover:shadow-gray-600/40"
      )}
    >
      {/* Card layout changed to vertical arrangement for better readability */}
      <div className="flex flex-col">
        {/* Keyboard shortcut - now better aligned with overall layout */}
        <div className="flex items-center mb-4">
          <div className={cn(
            "text-base font-mono px-4 py-2.5 rounded-lg shadow-lg font-bold tracking-wider border",
            feature.isAdvanced 
              ? "bg-blue-600/40 text-blue-50 shadow-blue-500/30 border-blue-400/40" 
              : "bg-gray-800/80 text-gray-100 shadow-gray-900/30 border-gray-600/40"
          )}>
            {feature.shortcut}
          </div>
        </div>
        
        {/* Description in middle with larger font and better line height */}
        <div className="flex items-start mb-3">
          <div className={cn(
            "p-2 rounded-full flex items-center justify-center shadow-md mr-3 border",
            feature.isAdvanced 
              ? "bg-blue-500/40 shadow-blue-500/30 border-blue-400/50" 
              : "bg-gray-800/80 shadow-gray-900/30 border-gray-600/50"
          )}>
            <Keyboard className={cn(
              "h-4 w-4",
              feature.isAdvanced ? "text-blue-200" : "text-gray-200"
            )} />
          </div>
          
          <p className={cn(
            "flex-1 text-base leading-relaxed",
            feature.isAdvanced ? "text-blue-100" : "text-gray-300"
          )}>
            {feature.description}
          </p>
        </div>
        
        {/* Package indicator at bottom with improved styling - now left aligned */}
        {feature.isAdvanced && (
          <div className="mt-2 flex items-center self-start">
            <div className="flex items-center justify-center h-5 w-5 bg-blue-500/40 rounded-full mr-2 border border-blue-400/50">
              <Check className="h-3 w-3 text-blue-200" />
            </div>
            <span className="text-sm bg-blue-500/20 px-2 py-0.5 rounded-md text-blue-200 font-medium border border-blue-400/30">Advanced</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function AnimatedFeatureSection() {
  const basicShortcuts = shortcuts.filter(feature => !feature.isAdvanced);
  const advancedShortcuts = shortcuts.filter(feature => feature.isAdvanced);

  return (
    <div className="px-4">
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-5 text-white tracking-tight leading-tight">
            Pintasan Keyboard <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">Powerful</span>
          </h2>
          <p className="text-blue-100 max-w-3xl text-xl font-light leading-relaxed">
            Gunakan pintasan keyboard intuitive untuk mempercepat format skripsi Anda
          </p>
        </motion.div>
      </div>

      {/* Basic Package Section */}
      <div className="mb-20 relative">
        {/* Decorative elements */}
        <div className="absolute -left-4 -top-4 w-32 h-32 bg-blue-50 rounded-full opacity-40 blur-xl z-0"></div>
        <div className="absolute right-10 top-20 w-48 h-48 bg-blue-100 rounded-full opacity-30 blur-3xl z-0"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center justify-center px-4 py-1 mb-3 bg-white/20 text-white text-xs font-medium uppercase tracking-wider rounded-full">
              Paket Dasar
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Basic Package</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-100 to-white/70 rounded-full mb-4"></div>
            <p className="text-blue-100 max-w-2xl">Fitur-fitur esensial untuk memulai format dokumen skripsi Anda dengan mudah dan cepat</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 relative z-10">
          {basicShortcuts.map((feature, index) => (
            <FeatureCard key={feature.shortcut} feature={feature} index={index} />
          ))}
        </div>
        
        <div className="flex justify-center mt-6 relative z-10">
          <div className="text-gray-700 text-sm italic font-medium bg-white px-5 py-2.5 rounded-lg border border-gray-200 shadow-sm">
            <span className="text-blue-600 font-semibold">*</span> Fitur dasar untuk pemformatan skripsi dengan harga Rp 50.000
          </div>
        </div>
      </div>

      {/* Advanced Package Section */}
      <div className="mb-20 relative">
        {/* Decorative elements for advanced section */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-100 rounded-full opacity-40 blur-xl z-0"></div>
        <div className="absolute left-20 top-40 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl z-0"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center justify-center px-4 py-1 mb-3 bg-white/30 text-white text-xs font-medium uppercase tracking-wider rounded-full backdrop-blur-sm">
              Paket Premium
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Advanced Package</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-100 to-white rounded-full mb-4"></div>
            <p className="text-blue-100 max-w-2xl">Fitur-fitur profesional untuk otomatisasi lengkap dengan penomoran 2-digit dan format painter</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 relative z-10">
          {advancedShortcuts.map((feature, index) => (
            <FeatureCard key={feature.shortcut} feature={feature} index={index} />
          ))}
        </div>
        
        <div className="flex justify-center mt-6 relative z-10">
          <div className="text-blue-800 text-sm italic font-medium bg-blue-50 px-5 py-2.5 rounded-lg border border-blue-200 shadow-sm">
            <span className="text-blue-600 font-semibold">*</span> Fitur profesional dengan penomoran 2-digit dan format painter dengan harga Rp 100.000
          </div>
        </div>
        
        <div className="absolute -right-10 bottom-20 w-48 h-48 bg-blue-50 rounded-full opacity-30 blur-2xl z-0"></div>
      </div>
        
      {/* Feature Comparison Table */}
      <div className="mb-20 relative">
        <div className="overflow-hidden w-full">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-900">Perbandingan Fitur Basic vs Advance</h3>
          <div className="overflow-x-auto p-4 rounded-lg bg-white shadow-lg border border-gray-100">
            <table className="w-full border-collapse bg-white rounded-lg">
              <thead>
                <tr className="bg-blue-50">
                  <th className="p-3 text-center text-gray-700 border-b">Fitur</th>
                  <th className="p-3 text-center text-gray-700 border-b">Basic</th>
                  <th className="p-3 text-center text-blue-800 border-b bg-blue-100/50">Advance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 pl-6 border-b text-gray-700 text-left">Format heading otomatis (Alt+1, Alt+2)</td>
                  <td className="p-3 border-b text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 pl-6 border-b text-gray-700 text-left">Daftar isi otomatis (Alt+D)</td>
                  <td className="p-3 border-b text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 pl-6 border-b text-gray-700 text-left">Nomor halaman dasar</td>
                  <td className="p-3 border-b text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 pl-6 border-b text-gray-700 text-left">Caption gambar & tabel sederhana</td>
                  <td className="p-3 border-b text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 pl-6 border-b text-gray-700 text-left">
                    <div className="font-medium">Membuat caption (Alt+G/T/L)</div>
                    <div className="text-xs text-gray-500 mt-1">Alt+G untuk gambar, Alt+T untuk tabel, Alt+L untuk lampiran</div>
                  </td>
                  <td className="p-3 border-b text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 pl-6 border-b text-gray-700 text-left">
                    <div className="font-medium">Caption dengan nomor BAB (Gambar 4.1)</div>
                    <div className="text-xs text-gray-500 mt-1">Penomoran otomatis sesuai dengan BAB (cth: "Gambar 4.1")</div>
                  </td>
                  <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                  <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 pl-6 border-b text-gray-700 text-left">
                    <div className="font-medium">Daftar isi gambar/tabel/lampiran (Alt+Shift+G/T/L)</div>
                    <div className="text-xs text-gray-500 mt-1">Tampilkan tabel daftar isi dari caption yang telah dibuat</div>
                  </td>
                  <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                  <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 pl-6 border-b text-gray-700 text-left">
                    <div className="font-medium">Penomoran halaman campuran (Alt+K, Alt+R)</div>
                    <div className="text-xs text-gray-500 mt-1">Angka Arab (Alt+K) dan Romawi (Alt+R) untuk berbagai bagian</div>
                  </td>
                  <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                  <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 pl-6 border-b text-gray-700 text-left">
                    <div className="font-medium">Penomoran halaman otomatis (Alt+Shift+K)</div>
                    <div className="text-xs text-gray-500 mt-1">Deteksi posisi bab dan format halaman secara otomatis</div>
                  </td>
                  <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                  <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 pl-6 border-b text-gray-700 text-left">
                    <div className="font-medium">Posisi nomor halaman (Ctrl+Alt+K)</div>
                    <div className="text-xs text-gray-500 mt-1">Opsi tengah bawah dan kanan atas</div>
                  </td>
                  <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                  <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 pl-6 border-b text-gray-700 text-left">
                    <div className="font-medium">Format painter (Alt+Q/W) & Hapus nomor (Alt+C)</div>
                    <div className="text-xs text-gray-500 mt-1">Copy format (Alt+Q), paste format (Alt+W), hapus nomor halaman (Alt+C)</div>
                  </td>
                  <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                  <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 pl-6 border-b text-gray-700 font-medium text-left">Dialog klik-pilih-selesai</td>
                  <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                  <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 pl-6 border-b text-gray-700 font-medium text-left">Template universitas</td>
                  <td className="p-3 border-b text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                  <td className="p-3 border-b text-center bg-blue-50/30"><CheckCircle className="h-5 w-5 text-blue-600 mx-auto" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 pl-6 font-semibold text-gray-800 text-left">Harga</td>
                  <td className="p-3 text-center font-medium">Rp 50.000</td>
                  <td className="p-3 text-center font-medium bg-blue-100/50 text-blue-800">Rp 100.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="my-16 px-4">
          <div className="rounded-2xl p-10 max-w-3xl mx-auto text-center shadow-lg border border-blue-200 relative overflow-hidden bg-gradient-to-r from-blue-50 to-white">
            <div className="relative z-10">
              <h2 className="text-3xl font-semibold mb-3 text-gray-900">Siap Menghemat Waktu Format Skripsi?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">Dapatkan Easy.kripsi sekarang dan fokus pada isi skripsi Anda, bukan formatnya.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-10 bg-gray-100 text-gray-800 font-medium rounded-full hover:bg-gray-200 transition-all shadow-md transform hover:scale-105 duration-300"
                >
                  Basic (Rp 50.000)
                </a>
                <a 
                  href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md transform hover:scale-105"
                >
                  Advance (Rp 100.000)
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                Developed by @Iklilzaki and @Bangdeniuss
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}