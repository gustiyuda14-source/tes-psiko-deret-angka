import { useTest } from '../context/TestContext';
import { questions } from '../data/questions';
import { calculateScore, calculateByCategory, getScorePercentage, getPerformanceLevel, getCategoryLabel, getWeakCategories } from '../utils/scoring';
import { AnswerReview } from './AnswerReview';
import { useState } from 'react';

export function ResultsPage() {
  const { answers, submittedAt, resetTest } = useTest();
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const score = calculateScore(answers);
  const percentage = getScorePercentage(score);
  const categoryScores = calculateByCategory(answers);
  const weakCategories = getWeakCategories(categoryScores);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Score Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Hasil Tes Anda</h1>
          <p className="text-gray-600 mb-6">
            Tes selesai pada {submittedAt ? new Date(submittedAt).toLocaleString('id-ID') : 'N/A'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">{score}</div>
              <div className="text-gray-700 font-semibold">Skor Benar dari 30</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <div className="text-5xl font-bold text-green-600 mb-2">{percentage}%</div>
              <div className="text-gray-700 font-semibold">Persentase Benar</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">{getPerformanceLevel(percentage)}</div>
              <div className="text-gray-700 font-semibold">Tingkat Prestasi</div>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Analisis Per Kategori</h2>
            <div className="space-y-4">
              {categoryScores.map(cs => (
                <div key={cs.category} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">{getCategoryLabel(cs.category)}</span>
                    <span className="text-lg font-bold text-gray-900">
                      {cs.correct}/{cs.total} ({cs.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        cs.percentage >= 80 ? 'bg-green-500' : cs.percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${cs.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          {weakCategories.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <h3 className="font-bold text-yellow-900 mb-2">💡 Rekomendasi Belajar</h3>
              <p className="text-yellow-800 text-sm mb-2">
                Fokus belajar pada kategori dengan performa kurang:
              </p>
              <ul className="text-yellow-800 text-sm space-y-1">
                {weakCategories.map(cat => (
                  <li key={cat}>• {getCategoryLabel(cat)}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Answer Review Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rincian Jawaban</h2>

          <div className="space-y-4 mb-6">
            <button
              onClick={() => setSelectedQuestion(null)}
              className={`w-full p-3 text-left rounded-lg font-semibold transition ${
                selectedQuestion === null
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              Lihat Semua Jawaban
            </button>
          </div>

          {selectedQuestion === null ? (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {questions.map(q => {
                const isCorrect = answers[q.id] === q.correctAnswer;
                return (
                  <button
                    key={q.id}
                    onClick={() => setSelectedQuestion(q.id)}
                    className={`w-full p-3 text-left rounded-lg border-2 transition ${
                      isCorrect
                        ? 'border-green-300 bg-green-50'
                        : 'border-red-300 bg-red-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900">Soal {q.id}:</span>
                        <span className="text-gray-700 ml-2">{q.question}</span>
                      </div>
                      <span className={`font-bold ml-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {isCorrect ? '✓' : '✗'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <AnswerReview
              questionId={selectedQuestion}
              onBack={() => setSelectedQuestion(null)}
            />
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <button
            onClick={resetTest}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            ↻ Coba Lagi
          </button>
          <button
            onClick={() => window.print()}
            className="px-8 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            🖨️ Cetak Hasil
          </button>
        </div>
      </div>
    </div>
  );
}
