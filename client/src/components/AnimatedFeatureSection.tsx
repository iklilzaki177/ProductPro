import React from 'react';
import { motion } from 'framer-motion';
import { Check, Keyboard } from 'lucide-react';
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
        "p-5 rounded-xl shadow-lg border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        feature.isAdvanced 
          ? "bg-blue-900/30 border-blue-500/30 hover:border-blue-400/50 hover:shadow-blue-500/20" 
          : "bg-gray-900/30 border-zinc-700/30 hover:border-gray-600/50 hover:shadow-gray-700/20"
      )}
    >
      {/* Card layout changed to vertical arrangement for better readability */}
      <div className="flex flex-col">
        {/* Keyboard shortcut - now better aligned with overall layout */}
        <div className="flex items-center mb-4">
          <div className={cn(
            "text-base font-mono px-4 py-2.5 rounded-lg shadow-md font-bold tracking-wider",
            feature.isAdvanced 
              ? "bg-blue-500/40 text-blue-100 shadow-blue-500/20" 
              : "bg-gray-800/60 text-gray-100 shadow-gray-900/20"
          )}>
            {feature.shortcut}
          </div>
        </div>
        
        {/* Description in middle with larger font and better line height */}
        <div className="flex items-start mb-3">
          <div className={cn(
            "p-2 rounded-full flex items-center justify-center shadow-md mr-3",
            feature.isAdvanced ? "bg-blue-500/40 shadow-blue-500/20" : "bg-gray-800/60 shadow-gray-900/20"
          )}>
            <Keyboard className={cn(
              "h-4 w-4",
              feature.isAdvanced ? "text-blue-300" : "text-gray-300"
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
            <div className="flex items-center justify-center h-5 w-5 bg-blue-500/20 rounded-full mr-2">
              <Check className="h-3 w-3 text-blue-300" />
            </div>
            <span className="text-sm text-blue-300 font-medium">Advanced</span>
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
          <h2 className="text-4xl font-bold mb-5 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 tracking-tight leading-tight">
            Pintasan Keyboard <span className="text-blue-300">Powerful</span>
          </h2>
          <p className="text-blue-200/90 max-w-3xl text-xl font-light leading-relaxed">
            Gunakan pintasan keyboard intuitive untuk mempercepat format skripsi Anda
          </p>
        </motion.div>
      </div>

      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center mb-8"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-2.5 rounded-full text-lg font-semibold text-blue-300 mr-4 border border-gray-700 shadow-md shadow-gray-900/20">
            Basic Package
          </div>
          <div className="h-px flex-grow bg-gradient-to-r from-gray-700 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-3">
          {basicShortcuts.map((feature, index) => (
            <FeatureCard key={feature.shortcut} feature={feature} index={index} />
          ))}
        </div>
        
        <div className="text-gray-400 text-sm ml-2 italic">
          *Fitur dasar untuk pemformatan skripsi
        </div>
      </div>

      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center mb-8"
        >
          <div className="premium-badge px-6 py-2.5 rounded-full text-lg font-bold text-white mr-4 shadow-lg shadow-blue-500/40">
            Advanced Package
          </div>
          <div className="h-px flex-grow bg-gradient-to-r from-blue-600/50 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-3">
          {advancedShortcuts.map((feature, index) => (
            <FeatureCard key={feature.shortcut} feature={feature} index={index} />
          ))}
        </div>
        
        <div className="text-blue-400 text-sm ml-2 italic">
          *Fitur profesional dengan penomoran 2-digit dan format painter
        </div>
      </div>

      {/* Comparison Call to Action - Copied from HeroSection */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
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
      </motion.div>
    </div>
  );
}