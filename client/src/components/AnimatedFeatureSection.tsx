import React from 'react';
import { motion } from 'framer-motion';
import { Check, Keyboard, CheckCircle, X, Info } from 'lucide-react';
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
    <div 
      className={`notion-fade-in notion-panel ${
        feature.isAdvanced ? "notion-vs-card-advanced" : ""
      }`}
    >
      <div className="notion-panel-body p-4">
        <div className="notion-shortcut-item">
          <span className="notion-kbd mr-3">{feature.shortcut}</span>
          <span className="notion-kbd-description">{feature.description}</span>
          {feature.highlight && (
            <span className="premium-badge ml-auto">Pro</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default function AnimatedFeatureSection() {
  const basicShortcuts = shortcuts.filter(feature => !feature.isAdvanced);
  const advancedShortcuts = shortcuts.filter(feature => feature.isAdvanced);

  return (
    <div className="notion-content-md notion-section">
      <div className="notion-fade-in mb-12">
        <h2 className="notion-h2 mb-4 text-gray-900">
          Pintasan Keyboard <span className="text-blue-600">Powerful</span>
        </h2>
        <p className="notion-text mb-6">
          Gunakan pintasan keyboard intuitif untuk mempercepat pemformatan skripsi Anda.
          Easy.kripsi menyediakan berbagai shortcut yang memudahkan proses penulisan skripsi.
        </p>
        
        {/* VS comparison for packages */}
        <div className="notion-vs-container">
          <div className="notion-vs-card notion-vs-card-basic">
            <div className="notion-vs-header bg-gray-50">
              <div className="notion-vs-title text-gray-900">Basic</div>
              <div className="notion-vs-price text-gray-500">Rp 50.000</div>
            </div>
            <div className="notion-panel-body">
              <div className="notion-stagger-fade-in space-y-3">
                {basicShortcuts.map((feature, index) => (
                  <div key={feature.shortcut} className="notion-shortcut-item">
                    <span className="notion-kbd">{feature.shortcut}</span>
                    <span className="notion-kbd-description">{feature.description}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a 
                  href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="notion-btn notion-btn-secondary w-full justify-center"
                >
                  Beli Paket Basic
                </a>
              </div>
            </div>
          </div>
          
          <div className="notion-vs-divider">VS</div>
          
          <div className="notion-vs-card notion-vs-card-advanced">
            <div className="notion-vs-header bg-blue-50">
              <div className="notion-vs-title text-blue-700">Advance</div>
              <div className="notion-vs-price text-blue-600">Rp 100.000</div>
            </div>
            <div className="notion-panel-body">
              <div className="notion-stagger-fade-in space-y-3">
                {advancedShortcuts.map((feature, index) => (
                  <div key={feature.shortcut} className="notion-shortcut-item">
                    <span className="notion-kbd">{feature.shortcut}</span>
                    <span className="notion-kbd-description">{feature.description}</span>
                    {feature.highlight && (
                      <span className="premium-badge ml-auto">Pro</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a 
                  href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="notion-btn notion-btn-primary w-full justify-center"
                >
                  Beli Paket Advance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature comparison table */}
      <div className="mt-16 notion-fade-in">
        <h3 className="notion-h3 mb-6 text-center">Perbandingan Fitur Lengkap</h3>
        
        <div className="notion-compare-table-container">
          <table className="notion-compare-table">
            <thead>
              <tr>
                <th className="w-1/2">Fitur</th>
                <th className="w-1/4 text-center">Basic</th>
                <th className="w-1/4 text-center">Advance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Format Heading (Alt+1 sampai Alt+8)</td>
                <td className="text-center"><CheckCircle className="notion-compare-check inline-block h-5 w-5" /></td>
                <td className="text-center"><CheckCircle className="notion-compare-check inline-block h-5 w-5" /></td>
              </tr>
              <tr>
                <td>Daftar Isi Otomatis</td>
                <td className="text-center"><CheckCircle className="notion-compare-check inline-block h-5 w-5" /></td>
                <td className="text-center"><CheckCircle className="notion-compare-check inline-block h-5 w-5" /></td>
              </tr>
              <tr>
                <td>Caption Gambar, Tabel (1 digit)</td>
                <td className="text-center"><CheckCircle className="notion-compare-check inline-block h-5 w-5" /></td>
                <td className="text-center"><CheckCircle className="notion-compare-check inline-block h-5 w-5" /></td>
              </tr>
              <tr>
                <td>Daftar Gambar & Tabel</td>
                <td className="text-center"><CheckCircle className="notion-compare-check inline-block h-5 w-5" /></td>
                <td className="text-center"><CheckCircle className="notion-compare-check inline-block h-5 w-5" /></td>
              </tr>
              <tr>
                <td>Caption 2 Digit dengan nomor BAB (4.1)</td>
                <td className="text-center"><X className="notion-compare-x inline-block h-5 w-5" /></td>
                <td className="text-center"><CheckCircle className="notion-compare-check inline-block h-5 w-5" /></td>
              </tr>
              <tr>
                <td>Nomor Halaman Latin/Romawi</td>
                <td className="text-center"><X className="notion-compare-x inline-block h-5 w-5" /></td>
                <td className="text-center"><CheckCircle className="notion-compare-check inline-block h-5 w-5" /></td>
              </tr>
              <tr>
                <td>Nomor Halaman Otomatis</td>
                <td className="text-center"><X className="notion-compare-x inline-block h-5 w-5" /></td>
                <td className="text-center"><CheckCircle className="notion-compare-check inline-block h-5 w-5" /></td>
              </tr>
              <tr>
                <td>Format Painter</td>
                <td className="text-center"><X className="notion-compare-x inline-block h-5 w-5" /></td>
                <td className="text-center"><CheckCircle className="notion-compare-check inline-block h-5 w-5" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Mobile feature comparison */}
        <div className="notion-mobile-feature-container">
          <div className="space-y-4">
            <div className="notion-panel">
              <div className="notion-panel-header">
                <h4 className="font-medium">Basic (Rp 50.000)</h4>
              </div>
              <div className="notion-panel-body">
                <ul className="notion-feature-list">
                  <li className="notion-feature-item">
                    <CheckCircle className="notion-feature-icon h-4 w-4" />
                    <span className="notion-feature-text">Format Heading (Alt+1 sampai Alt+8)</span>
                  </li>
                  <li className="notion-feature-item">
                    <CheckCircle className="notion-feature-icon h-4 w-4" />
                    <span className="notion-feature-text">Daftar Isi Otomatis</span>
                  </li>
                  <li className="notion-feature-item">
                    <CheckCircle className="notion-feature-icon h-4 w-4" />
                    <span className="notion-feature-text">Caption Gambar, Tabel (1 digit)</span>
                  </li>
                  <li className="notion-feature-item">
                    <CheckCircle className="notion-feature-icon h-4 w-4" />
                    <span className="notion-feature-text">Daftar Gambar & Tabel</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="notion-panel notion-vs-card-advanced">
              <div className="notion-panel-header bg-blue-50">
                <h4 className="font-medium text-blue-700">Advance (Rp 100.000)</h4>
              </div>
              <div className="notion-panel-body">
                <ul className="notion-feature-list">
                  <li className="notion-feature-item">
                    <CheckCircle className="notion-feature-icon h-4 w-4" />
                    <span className="notion-feature-text">Semua fitur Basic</span>
                  </li>
                  <li className="notion-feature-item">
                    <CheckCircle className="notion-feature-icon h-4 w-4" />
                    <span className="notion-feature-text">Caption 2 Digit dengan nomor BAB (4.1)</span>
                  </li>
                  <li className="notion-feature-item">
                    <CheckCircle className="notion-feature-icon h-4 w-4" />
                    <span className="notion-feature-text">Nomor Halaman Latin/Romawi</span>
                  </li>
                  <li className="notion-feature-item">
                    <CheckCircle className="notion-feature-icon h-4 w-4" />
                    <span className="notion-feature-text">Nomor Halaman Otomatis</span>
                  </li>
                  <li className="notion-feature-item">
                    <CheckCircle className="notion-feature-icon h-4 w-4" />
                    <span className="notion-feature-text">Format Painter</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notion-styled callout */}
      <div className="notion-callout mt-12 mb-12 bg-blue-50 border border-blue-100">
        <div className="notion-callout-icon text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>
        <div>
          <p className="font-medium mb-1 text-blue-800">Pengguna sudah 1600+ sejak 2022</p>
          <p className="text-blue-700 text-sm">
            Easy.kripsi telah terbukti membantu mahasiswa di berbagai universitas di Indonesia. 
            Tingkatkan efisiensi pengerjaan skripsi Anda hari ini!
          </p>
        </div>
      </div>

      {/* CTA section */}
      <div className="mt-12 mb-8 notion-fade-in text-center notion-panel p-8 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
        <h3 className="notion-h3 mb-4">Siap Menghemat Waktu Format Skripsi?</h3>
        <p className="notion-text mb-8 max-w-xl mx-auto">
          Dapatkan Easy.kripsi sekarang dan fokus pada isi skripsi Anda, bukan formatnya.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
            target="_blank"
            rel="noopener noreferrer"
            className="notion-btn notion-btn-secondary"
          >
            Basic (Rp 50.000)
          </a>
          <a 
            href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
            target="_blank"
            rel="noopener noreferrer"
            className="notion-btn notion-btn-primary"
          >
            Advance (Rp 100.000)
          </a>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          Developed by @Iklilzaki and @Bangdeniuss
        </div>
      </div>
    </div>
  );
}