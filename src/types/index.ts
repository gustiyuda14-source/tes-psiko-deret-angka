export type QuestionCategory = 'penalaran_analitis' | 'silogisme' | 'perbandingan' | 'perbandingan_kuantitatif';
export type Difficulty = 'mudah' | 'sedang' | 'sulit';
export type TestStatus = 'in_progress' | 'submitted' | 'completed';

export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  code: string;
  category: QuestionCategory;
  subcategory?: string;
  difficulty: Difficulty;
  question_text: string;
  options: QuestionOption[];
  correct_answer: string;
  explanation?: string;
  tutorial?: {
    steps: string[];
    formula?: string;
    tips?: string[];
  };
  created_at: string;
  updated_at: string;
}

export interface TestSession {
  id: string;
  user_id: string;
  session_code: string;
  test_name: string;
  status: TestStatus;
  start_time: string;
  end_time?: string;
  duration_minutes: number;
  created_at: string;
}

export interface TestQuestion {
  id: string;
  test_session_id: string;
  question_id: string;
  question_index: number;
  selected_answer?: string;
  is_correct?: boolean;
  time_spent_seconds: number;
  visited: boolean;
  flagged: boolean;
  created_at: string;
}

export interface TestResult {
  id: string;
  test_session_id: string;
  user_id: string;
  total_questions: number;
  total_correct: number;
  score_percentage: number;
  time_taken_seconds: number;
  category_results: {
    [key: string]: {
      total: number;
      correct: number;
      percentage: number;
    };
  };
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}
