import { useTest } from '../context/TestContext';
import { questions } from '../data/questions';

export function QuestionNavigator() {
  const { currentQuestionIndex, goToQuestion, answers } = useTest();

  const getStatusColor = (qIndex: number) => {
    if (qIndex === currentQuestionIndex) return 'bg-blue-500 text-white';
    if (answers[questions[qIndex].id]) return 'bg-green-100 text-green-700';
    return 'bg-gray-200 text-gray-700';
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-bold text-gray-900 mb-4">Navigasi Soal</h3>
      <div className="grid grid-cols-5 gap-2">
        {questions.map((q, idx) => (
          <button
            key={q.id}
            onClick={() => goToQuestion(idx)}
            className={`w-full aspect-square rounded font-bold text-sm transition-all ${getStatusColor(idx)}`}
            title={`Soal ${q.id}`}
          >
            {q.id}
          </button>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded"></div>
          <span>Soal aktif</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-100 border border-green-700 rounded"></div>
          <span>Sudah dijawab</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <span>Belum dijawab</span>
        </div>
      </div>
    </div>
  );
}
