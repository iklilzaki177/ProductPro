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
        "p-4 rounded-xl shadow-lg border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1",
        feature.isAdvanced 
          ? "bg-blue-900/10 border-blue-500/20 hover:border-blue-400/30" 
          : "bg-gray-900/10 border-zinc-700/20 hover:border-gray-600/30"
      )}
    >
      <div className="flex items-start space-x-4">
        <div className={cn(
          "p-2 rounded-full flex items-center justify-center",
          feature.isAdvanced ? "bg-blue-500/20" : "bg-gray-800/40"
        )}>
          <Keyboard className={cn(
            "h-4 w-4",
            feature.isAdvanced ? "text-blue-300" : "text-gray-300"
          )} />
        </div>

        <div className="flex-1">
          <div className={cn(
            "inline-block text-sm font-mono mb-2 px-2.5 py-1 rounded-md",
            feature.isAdvanced 
              ? "bg-blue-500/20 text-blue-200" 
              : "bg-gray-800/40 text-gray-300"
          )}>
            {feature.shortcut}
          </div>
          <p className={cn(
            "text-sm",
            feature.isAdvanced ? "text-blue-100" : "text-gray-300"
          )}>
            {feature.description}
          </p>
          
          {feature.isAdvanced && (
            <div className="mt-2 flex items-center">
              <div className="flex items-center justify-center h-5 w-5 bg-blue-500/20 rounded-full mr-2">
                <Check className="h-3 w-3 text-blue-300" />
              </div>
              <span className="text-xs text-blue-300">Advanced Package</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function AnimatedFeatureSection() {
  const basicShortcuts = shortcuts.filter(feature => !feature.isAdvanced);
  const advancedShortcuts = shortcuts.filter(feature => feature.isAdvanced);

  return (
    <div className="py-6 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-3 text-white">Pintasan Keyboard Powerful</h2>
          <p className="text-blue-200/80 max-w-2xl mx-auto">
            Gunakan pintasan keyboard intuitive untuk mempercepat format skripsi Anda
          </p>
        </motion.div>
      </div>

      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center mb-8"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-1.5 rounded-full text-sm font-medium text-blue-300 mr-3 border border-gray-700">
            Basic Package
          </div>
          <div className="h-px flex-grow bg-gradient-to-r from-gray-700 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {basicShortcuts.map((feature, index) => (
            <FeatureCard key={feature.shortcut} feature={feature} index={index} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center mb-8"
        >
          <div className="premium-badge px-4 py-1.5 text-sm font-medium text-white mr-3 shadow-md shadow-blue-500/30">
            Advanced Package
          </div>
          <div className="h-px flex-grow bg-gradient-to-r from-blue-600/50 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedShortcuts.map((feature, index) => (
            <FeatureCard key={feature.shortcut} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Comparison Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-blue-200/70 mb-8">
          <span className="text-white font-medium">Advance Package</span> includes all Basic features plus advanced pagination, 
          automatic chapter-aware numbering, and the powerful Format Painter for seamless formatting.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 bg-white text-blue-900 font-medium rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg"
          >
            Basic (Rp 50.000)
          </a>
          <a 
            href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg"
          >
            Advance (Rp 100.000)
          </a>
        </div>
      </motion.div>
    </div>
  );
}