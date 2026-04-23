export type Category = 'aritmatika_kompleks' | 'geometri_kombinasi' | 'campuran_nonlinear';

export interface Question {
  id: number;
  category: Category;
  question: string;
  options: string[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string;
  difficulty: number;
  idealTime: number;
  patternType: string;
}

export interface TestState {
  currentQuestionIndex: number;
  answers: Record<number, 'A' | 'B' | 'C' | 'D' | 'E' | null>;
  timeRemaining: number;
  testStarted: boolean;
  testSubmitted: boolean;
  submittedAt: number | null;
}

export interface CategoryScore {
  category: Category;
  correct: number;
  total: number;
  percentage: number;
}

export interface TestResult {
  totalScore: number;
  percentage: number;
  categoryScores: CategoryScore[];
  answers: Record<number, 'A' | 'B' | 'C' | 'D' | 'E' | null>;
  submittedAt: number;
  timeTaken: number;
}
