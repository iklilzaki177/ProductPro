import React from 'react';
import { Check, X, CheckCircle } from 'lucide-react';

interface FeatureItem {
  name: string;
  description?: string;
  inBasic: boolean;
  inAdvance: boolean;
}

export default function ResponsiveFeatureTable() {
  const features: FeatureItem[] = [
    {
      name: "Format heading dengan Alt+1 s/d Alt+8",
      inBasic: true,
      inAdvance: true
    },
    {
      name: "Daftar isi otomatis (Alt+D)",
      inBasic: true,
      inAdvance: true
    },
    {
      name: "Nomor halaman dasar",
      inBasic: true,
      inAdvance: true
    },
    {
      name: "Caption gambar & tabel sederhana",
      inBasic: true,
      inAdvance: true
    },
    {
      name: "Membuat caption (Alt+G/T/L)",
      description: "Alt+G untuk gambar, Alt+T untuk tabel, Alt+L untuk lampiran",
      inBasic: true,
      inAdvance: true
    },
    {
      name: "Caption dengan nomor BAB (Gambar 4.1)",
      description: "Penomoran otomatis sesuai dengan BAB (cth: \"Gambar 4.1\")",
      inBasic: false,
      inAdvance: true
    },
    {
      name: "Penomoran halaman otomatis (Alt+Shift+K)",
      description: "Deteksi posisi bab dan format halaman secara otomatis",
      inBasic: false,
      inAdvance: true
    },
    {
      name: "Posisi nomor halaman (Ctrl+Alt+K)",
      description: "Opsi tengah bawah dan kanan atas",
      inBasic: false,
      inAdvance: true
    },
    {
      name: "Format painter (Alt+Q/W) & Hapus nomor (Alt+C)",
      description: "Copy format (Alt+Q), paste format (Alt+W), hapus nomor halaman (Alt+C)",
      inBasic: false,
      inAdvance: true
    },
    {
      name: "Dialog klik-pilih-selesai",
      inBasic: false,
      inAdvance: true
    },
    {
      name: "Template universitas",
      inBasic: false,
      inAdvance: true
    }
  ];

  return (
    <div className="mt-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-3 text-white">Bandingkan Fitur</h2>
        <p className="text-blue-200/80 max-w-2xl mx-auto">Pilih paket yang sesuai dengan kebutuhan Anda</p>
      </div>
      
      <div className="glass-effect rounded-2xl p-2 sm:p-6 shadow-xl border border-zinc-800/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent opacity-20 pointer-events-none"></div>
        
        {/* Mobile comparison cards (shown on small screens) */}
        <div className="md:hidden space-y-4 p-2 relative z-10">
          {/* Basic Package Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gray-100 p-3 text-center border-b">
              <h3 className="font-semibold text-gray-700">Basic</h3>
              <p className="text-blue-600 font-medium mt-1">Rp 50.000</p>
            </div>
            <div className="p-4 space-y-3">
              {features.map((feature, index) => (
                <div key={`basic-${index}`} className="flex items-start space-x-2">
                  {feature.inBasic ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <p className="text-sm text-gray-700">{feature.name}</p>
                    {feature.description && <p className="text-xs text-gray-500 mt-0.5">{feature.description}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 pt-0">
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-gray-100 text-blue-700 font-medium text-center rounded-lg hover:bg-gray-200 transition-colors"
              >
                Beli Basic
              </a>
            </div>
          </div>

          {/* Advance Package Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-100">
            <div className="bg-blue-50 p-3 text-center border-b">
              <h3 className="font-semibold text-blue-800">Advance</h3>
              <p className="text-blue-600 font-medium mt-1">Rp 100.000</p>
            </div>
            <div className="p-4 space-y-3">
              {features.map((feature, index) => (
                <div key={`advance-${index}`} className="flex items-start space-x-2">
                  {feature.inAdvance ? (
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <p className="text-sm text-gray-700">{feature.name}</p>
                    {feature.description && <p className="text-xs text-gray-500 mt-0.5">{feature.description}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 pt-0">
              <a 
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-blue-600 text-white font-medium text-center rounded-lg hover:bg-blue-700 transition-colors"
              >
                Beli Advance
              </a>
            </div>
          </div>
        </div>
        
        {/* Desktop table (hidden on mobile) */}
        <div className="hidden md:block relative z-10 overflow-auto">
          <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left text-gray-700 font-semibold w-1/2">Fitur</th>
                <th className="p-3 text-center text-gray-700 font-semibold w-1/4">Basic</th>
                <th className="p-3 text-center bg-blue-50 text-blue-800 font-semibold w-1/4">Advance</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3 pl-6 border-b text-gray-700 text-left">
                    <div className="font-medium">{feature.name}</div>
                    {feature.description && <div className="text-xs text-gray-500 mt-1">{feature.description}</div>}
                  </td>
                  <td className="p-3 border-b text-center">
                    {feature.inBasic ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    )}
                  </td>
                  <td className="p-3 border-b text-center bg-blue-50/30">
                    {feature.inAdvance ? (
                      <CheckCircle className="h-5 w-5 text-blue-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-50">
                <td className="p-3 pl-6 font-semibold text-gray-800 text-left">Harga</td>
                <td className="p-3 text-center font-medium">Rp 50.000</td>
                <td className="p-3 text-center font-medium bg-blue-100/50 text-blue-800">Rp 100.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Purchase links - Desktop only */}
      <div className="hidden md:flex justify-center mt-6 space-x-6">
        <a 
          href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-8 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-colors"
        >
          Beli Basic
        </a>
        <a 
          href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md"
        >
          Beli Advance
        </a>
      </div>
    </div>
  );
}