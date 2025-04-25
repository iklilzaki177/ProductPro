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
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.4,
        ease: "easeOut", 
        delay: index * 0.05 
      }}
      whileHover={{ 
        y: -3, 
        boxShadow: feature.isAdvanced ? "0 8px 16px rgba(59, 130, 246, 0.15)" : "0 8px 16px rgba(15, 23, 42, 0.15)",
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
      className={cn(
        "p-5 rounded-xl border backdrop-blur-sm transition-all duration-300 relative overflow-hidden group h-full",
        feature.highlight
          ? "bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-400/40 hover:border-blue-300/50"
          : feature.isAdvanced 
            ? "bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-500/20 hover:border-blue-400/30" 
            : "bg-gradient-to-br from-zinc-900/30 to-zinc-800/10 border-zinc-700/20 hover:border-gray-600/30"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Card header with icon and shortcut */}
        <div className="flex items-center mb-3 relative z-10">
          {/* Icon */}
          <div className={cn(
            "p-1.5 rounded-md flex items-center justify-center flex-shrink-0 mr-2",
            feature.isAdvanced 
              ? "bg-blue-600/20 border border-blue-500/30" 
              : "bg-gray-800/40 border border-gray-700/30"
          )}>
            <Keyboard className={cn(
              "h-3.5 w-3.5",
              feature.isAdvanced ? "text-blue-300" : "text-gray-300"
            )} />
          </div>

          {/* Shortcut label */}
          <div className={cn(
            "inline-block text-sm font-mono font-medium px-2 py-0.5 rounded-md",
            feature.isAdvanced 
              ? "bg-blue-500/20 text-blue-200 border border-blue-500/30" 
              : "bg-gray-800/40 text-gray-300 border border-gray-700/30"
          )}>
            {feature.shortcut}
          </div>
        </div>
        
        {/* Description */}
        <p className={cn(
          "text-sm mt-1 leading-relaxed",
          feature.highlight 
            ? "text-blue-50 font-medium"
            : feature.isAdvanced ? "text-blue-100" : "text-gray-300"
        )}>
          {feature.description}
        </p>
        
        {/* Badge for highlight features */}
        {feature.highlight && (
          <div className="mt-auto pt-3">
            <span 
              className="inline-block px-2 py-0.5 bg-gradient-to-r from-blue-600 to-blue-500 text-xs font-medium text-white rounded-full"
            >
              Format Painter
            </span>
          </div>
        )}
      </div>
      
      {/* Subtle glow effect */}
      {feature.isAdvanced && (
        <div className="absolute -right-8 -bottom-8 w-16 h-16 bg-blue-500 rounded-full blur-2xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
      )}
    </motion.div>
  );
};

export default function AnimatedFeatureSection() {
  const basicShortcuts = shortcuts.filter(feature => !feature.isAdvanced);
  const advancedShortcuts = shortcuts.filter(feature => feature.isAdvanced);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Background elements for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-950 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      {/* Decorative background elements */}
      <div className="absolute -left-64 top-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -right-64 bottom-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            <h2 className="text-3xl font-semibold mb-3 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Pintasan Keyboard Powerful
            </h2>
            <p className="text-blue-200/90 max-w-2xl mx-auto text-sm">
              Gunakan pintasan keyboard intuitive untuk mempercepat format skripsi Anda
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 glass-effect rounded-2xl p-8 border border-zinc-800/50"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true }}
            className="flex items-center mb-8"
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-1.5 rounded-full text-sm font-medium text-blue-300 mr-3 border border-gray-700 shadow-md">
              Basic Package
            </div>
            <div className="h-px flex-grow bg-gradient-to-r from-gray-700 to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {basicShortcuts.map((feature, index) => (
              <FeatureCard key={feature.shortcut} feature={feature} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-10 glass-effect rounded-2xl p-8 border border-blue-800/20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1
            }}
            viewport={{ once: true }}
            className="flex items-center mb-8"
          >
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-4 py-1.5 rounded-full text-sm font-medium text-white mr-3 shadow-md shadow-blue-500/30 border border-blue-500/50">
              Advanced Package
            </div>
            <div className="h-px flex-grow bg-gradient-to-r from-blue-600/50 to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {advancedShortcuts.map((feature, index) => (
              <FeatureCard key={feature.shortcut} feature={feature} index={index + 10} />
            ))}
          </div>
        </motion.div>

        {/* Comparison Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
          viewport={{ once: true, margin: "-5% 0px" }}
          className="mt-12 text-center"
        >
          <p className="text-blue-200/80 mb-6 text-sm max-w-2xl mx-auto">
            <span className="text-white font-medium">Advance Package</span> menyediakan fitur penomoran halaman lanjutan, 
            penomoran otomatis dengan deteksi bab, dan Format Painter untuk memformat dengan lebih cepat.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a 
              href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="py-2.5 px-6 bg-white text-blue-900 font-medium rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg text-sm"
            >
              Basic (Rp 50.000)
            </motion.a>
            <motion.a 
              href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="py-2.5 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg text-sm"
            >
              Advance (Rp 100.000)
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}