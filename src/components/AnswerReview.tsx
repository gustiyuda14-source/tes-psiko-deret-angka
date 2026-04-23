import { useTest } from '../context/TestContext';
import { questions } from '../data/questions';
import { getCategoryLabel } from '../utils/scoring';

interface AnswerReviewProps {
  questionId: number;
  onBack: () => void;
}

export function AnswerReview({ questionId, onBack }: AnswerReviewProps) {
  const { answers } = useTest();
  const question = questions.find(q => q.id === questionId);

  if (!question) return null;

  const userAnswer = answers[questionId];
  const isCorrect = userAnswer === question.correctAnswer;
  const userAnswerText = userAnswer ? question.options[question.options.findIndex(opt => opt.startsWith(userAnswer))] : 'Tidak dijawab';
  const correctAnswerText = question.options[question.options.findIndex(opt => opt.startsWith(question.correctAnswer))];

  return (
    <div className="max-h-[600px] overflow-y-auto">
      <button
        onClick={onBack}
        className="mb-6 text-blue-600 hover:text-blue-700 font-semibold"
      >
        ← Kembali ke Daftar
      </button>

      <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Soal {question.id}</h3>
            <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {getCategoryLabel(question.category)}
            </span>
          </div>
          <div className={`text-4xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? '✓' : '✗'}
          </div>
        </div>

        <div className="mb-6 p-4 bg-gray-100 rounded-lg">
          <p className="text-lg font-semibold text-gray-900">{question.question}</p>
        </div>

        {/* Answer Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className={`p-4 rounded-lg border-2 ${
            isCorrect ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'
          }`}>
            <p className="text-sm text-gray-600 font-semibold mb-1">Jawaban Anda</p>
            <p className="text-lg font-bold text-gray-900">{userAnswerText}</p>
          </div>
          <div className="p-4 rounded-lg border-2 border-green-300 bg-green-50">
            <p className="text-sm text-gray-600 font-semibold mb-1">Jawaban Benar</p>
            <p className="text-lg font-bold text-green-600">{correctAnswerText}</p>
          </div>
        </div>

        {/* Explanation */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-bold text-blue-900 mb-3">📚 Pembahasan Lengkap</h4>
          <p className="text-blue-900 leading-relaxed whitespace-pre-wrap">{question.explanation}</p>
        </div>

        {/* Pattern Type */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="text-xs text-gray-600 font-semibold">Tipe Pola</p>
            <p className="text-sm font-semibold text-gray-900">{question.patternType}</p>
          </div>
          <div className="p-3 bg-gray-100 rounded-lg">
            <p className="text-xs text-gray-600 font-semibold">Tingkat Kesulitan</p>
            <p className="text-sm font-semibold text-gray-900">{question.difficulty}/10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
