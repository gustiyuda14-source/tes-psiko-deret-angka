import { useTest } from '../context/TestContext';
import { questions } from '../data/questions';

interface NavigationProps {
  onSubmit: () => void;
}

export function Navigation({ onSubmit }: NavigationProps) {
  const { currentQuestionIndex, previousQuestion, nextQuestion, clearAnswer, answers } = useTest();
  const question = questions[currentQuestionIndex];
  const selectedAnswer = answers[question.id];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={previousQuestion}
        disabled={currentQuestionIndex === 0}
        className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        ← Sebelumnya
      </button>

      <button
        onClick={() => clearAnswer(question.id)}
        disabled={!selectedAnswer}
        className="px-6 py-2 bg-orange-100 text-orange-700 rounded-lg font-semibold hover:bg-orange-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        ✕ Hapus Jawaban
      </button>

      <button
        onClick={nextQuestion}
        disabled={currentQuestionIndex === 29}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Selanjutnya →
      </button>

      <button
        onClick={onSubmit}
        className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
      >
        ✓ Submit Jawaban
      </button>
    </div>
  );
}
