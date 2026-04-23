import { useTest } from '../context/TestContext';
import { Timer } from './Timer';

export function Header() {
  const { getTotalAnswered } = useTest();
  const answered = getTotalAnswered();
  const percentage = Math.round((answered / 30) * 100);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Simulasi Tes Psiko</h1>
            <p className="text-blue-100 text-sm mt-1">Deret Angka - Tingkat Tinggi</p>
          </div>
          <Timer />
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progres Pengerjaan</span>
            <span className="font-semibold">{answered}/30 soal ({percentage}%)</span>
          </div>
          <div className="w-full bg-blue-300 rounded-full h-2.5">
            <div
              className="bg-white h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}
