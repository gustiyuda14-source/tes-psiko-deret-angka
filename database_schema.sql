-- CAT Exam System Database Schema for Supabase

-- Questions Table
CREATE TABLE IF NOT EXISTS questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code VARCHAR(50) UNIQUE NOT NULL,
  category VARCHAR(50) NOT NULL,  -- 'penalaran_analitis', 'silogisme', 'perbandingan', 'perbandingan_kuantitatif'
  subcategory VARCHAR(100),
  difficulty VARCHAR(20) DEFAULT 'medium',
  question_text TEXT NOT NULL,
  options JSONB NOT NULL,  -- [{"id": "A", "text": "..."], ...}
  correct_answer VARCHAR(10) NOT NULL,
  explanation TEXT,
  tutorial JSONB,  -- Step-by-step solution
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Users Table (with Supabase Auth)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL UNIQUE,
  full_name VARCHAR(255),
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Test Sessions Table
CREATE TABLE IF NOT EXISTS test_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  session_code VARCHAR(20) UNIQUE,
  test_name VARCHAR(255) NOT NULL,
  status VARCHAR(20) DEFAULT 'in_progress',  -- 'in_progress', 'submitted', 'completed'
  start_time TIMESTAMP DEFAULT NOW(),
  end_time TIMESTAMP,
  duration_minutes INTEGER DEFAULT 180,
  started_at TIMESTAMP DEFAULT NOW(),
  submitted_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Question Selections for Test
CREATE TABLE IF NOT EXISTS test_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  test_session_id UUID NOT NULL REFERENCES test_sessions(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES questions(id),
  question_index INTEGER NOT NULL,
  selected_answer VARCHAR(10),
  is_correct BOOLEAN,
  time_spent_seconds INTEGER,
  visited BOOLEAN DEFAULT FALSE,
  flagged BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Test Results
CREATE TABLE IF NOT EXISTS test_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  test_session_id UUID NOT NULL UNIQUE REFERENCES test_sessions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id),
  total_questions INTEGER,
  total_correct INTEGER,
  score_percentage DECIMAL(5, 2),
  time_taken_seconds INTEGER,
  category_results JSONB,  -- {"penalaran_analitis": {...}, "silogisme": {...}, ...}
  created_at TIMESTAMP DEFAULT NOW()
);

-- User Progress Analytics
CREATE TABLE IF NOT EXISTS user_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  category VARCHAR(50) NOT NULL,
  tests_taken INTEGER DEFAULT 0,
  correct_answers INTEGER DEFAULT 0,
  total_answers INTEGER DEFAULT 0,
  average_score DECIMAL(5, 2),
  last_test_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, category)
);

-- Create Indexes
CREATE INDEX IF NOT EXISTS idx_questions_category ON questions(category);
CREATE INDEX IF NOT EXISTS idx_test_sessions_user_id ON test_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_test_questions_session_id ON test_questions(test_session_id);
CREATE INDEX IF NOT EXISTS idx_test_results_user_id ON test_results(user_id);
CREATE INDEX IF NOT EXISTS idx_user_analytics_user_id ON user_analytics(user_id);

-- Enable RLS (Row Level Security)
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_analytics ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can read all questions" ON questions
  FOR SELECT USING (true);

CREATE POLICY "Users can read own profile" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can read own test sessions" ON test_sessions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own test sessions" ON test_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own test questions" ON test_questions
  FOR SELECT USING (
    EXISTS(
      SELECT 1 FROM test_sessions
      WHERE test_sessions.id = test_questions.test_session_id
      AND test_sessions.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can read own results" ON test_results
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can read own analytics" ON user_analytics
  FOR SELECT USING (auth.uid() = user_id);
