import { useTest } from '../context/TestContext';

export function StartPage() {
  const { startTest } = useTest();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Simulasi Tes Psiko
          </h1>
          <h2 className="text-2xl text-blue-600 font-semibold mb-8 text-center">
            Deret Angka - Tingkat Tinggi
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">📋 Informasi Test</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <span className="font-semibold">Jumlah Soal:</span> 30 soal</li>
                <li>• <span className="font-semibold">Waktu:</span> 60 menit</li>
                <li>• <span className="font-semibold">Tingkat Kesulitan:</span> Setara CPNS/BUMN (Tier 2-3)</li>
                <li>• <span className="font-semibold">Kategori:</span> Deret Aritmatika, Geometri, dan Campuran</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-bold text-yellow-900 mb-3 text-lg">⚠️ Perhatian</h3>
              <ul className="space-y-2 text-yellow-900 text-sm">
                <li>• Test ini akan mulai dengan timer 60 menit</li>
                <li>• Jawaban akan disimpan otomatis</li>
                <li>• Anda dapat melewati soal dan kembali nanti</li>
                <li>• Setelah waktu habis, test akan otomatis disubmit</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-bold text-green-900 mb-3 text-lg">✓ Panduan Cara Kerja</h3>
              <ul className="space-y-2 text-green-900 text-sm">
                <li>1. Baca soal dengan teliti</li>
                <li>2. Identifikasi pola dalam deret angka</li>
                <li>3. Pilih satu jawaban yang Anda rasa paling tepat</li>
                <li>4. Gunakan tombol navigasi untuk berpindah antar soal</li>
                <li>5. Tekan submit ketika sudah selesai</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={startTest}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg"
            >
              🚀 Mulai Test Sekarang
            </button>
            <p className="text-center text-gray-600 text-sm">
              Pastikan Anda siap dan dalam kondisi optimal sebelum memulai
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>Simulasi Tes Psikologi Psiko Deret Angka • Versi 1.0</p>
          <p className="mt-2">Created with ❤️ untuk membantu Anda</p>
        </div>
      </div>
    </div>
  );
}
