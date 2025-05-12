export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Easy.kripsi
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Format skripsi Anda dalam hitungan detik, bukan berjam-jam!
          </p>
          <p className="text-lg text-gray-500">
            Pilih versi yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-md border border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Versi Zaki</h2>
            <p className="text-gray-600 mb-6">
              Pembayaran melalui akun <span className="font-medium">@Iklilzaki</span> - Dengan fitur penuh dan dukungan lengkap.
            </p>
            <a 
              href="/zaki" 
              className="block w-full text-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Buka Halaman Zaki
            </a>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-md border border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Versi Denius</h2>
            <p className="text-gray-600 mb-6">
              Pembayaran melalui akun <span className="font-medium">@Bangdeniuss</span> - Tersedia paket Basic dan Advance.
            </p>
            <a 
              href="/denius" 
              className="block w-full text-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Buka Halaman Denius
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Easy.kripsi — Developed by{" "}
          <span className="font-medium">@Iklilzaki</span> and{" "}
          <span className="font-medium">@Bangdeniuss</span>
        </div>
      </div>
    </div>
  );
}