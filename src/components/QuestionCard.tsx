import { useTest } from '../context/TestContext';
import { questions } from '../data/questions';
import { getCategoryLabel } from '../utils/scoring';

export function QuestionCard() {
  const { currentQuestionIndex, answers, selectAnswer } = useTest();
  const question = questions[currentQuestionIndex];
  const selectedAnswer = answers[question.id] || null;

  const answerOptions = ['A', 'B', 'C', 'D', 'E'] as const;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Question Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-gray-600">
            Soal {currentQuestionIndex + 1} dari 30
          </span>
          <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
            {getCategoryLabel(question.category)}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {answerOptions.map((option, idx) => (
          <button
            key={option}
            onClick={() => selectAnswer(question.id, option)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
              selectedAnswer === option
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-center">
              <div
                className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center font-semibold ${
                  selectedAnswer === option
                    ? 'border-blue-500 bg-blue-500 text-white'
                    : 'border-gray-300 text-gray-500'
                }`}
              >
                {option}
              </div>
              <span className="text-lg text-gray-800">
                {question.options[idx].slice(3)}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Answer Status */}
      <div className="mt-6 text-center">
        {selectedAnswer ? (
          <p className="text-sm text-green-600 font-medium">
            ✓ Jawaban dipilih: {selectedAnswer}
          </p>
        ) : (
          <p className="text-sm text-gray-500">
            Pilih salah satu jawaban di atas
          </p>
        )}
      </div>
    </div>
  );
}
