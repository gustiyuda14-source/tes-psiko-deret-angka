import { Header } from '../components/Header';
import { QuestionCard } from '../components/QuestionCard';
import { Navigation } from '../components/Navigation';
import { QuestionNavigator } from '../components/QuestionNavigator';
import { useTest } from '../context/TestContext';
import { useState } from 'react';

export function TestPage() {
  const { submitTest, getTotalAnswered } = useTest();
  const [showConfirm, setShowConfirm] = useState(false);

  const answered = getTotalAnswered();

  const handleSubmit = () => {
    if (answered < 30) {
      setShowConfirm(true);
    } else {
      submitTest();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <QuestionCard />
            </div>

            <div className="mt-8">
              <Navigation onSubmit={handleSubmit} />
            </div>
          </div>

          {/* Sidebar Navigator */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <QuestionNavigator />
            </div>
          </div>
        </div>
      </main>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Konfirmasi Submit</h2>
            <p className="text-gray-700 mb-6">
              Anda baru mengerjakan <span className="font-bold">{answered} dari 30</span> soal.
              <br />
              <br />
              Apakah Anda yakin ingin submit sekarang?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Lanjut Mengerjakan
              </button>
              <button
                onClick={() => {
                  setShowConfirm(false);
                  submitTest();
                }}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Ya, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
