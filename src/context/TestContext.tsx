import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { TestState } from '../types';

interface TestContextType extends TestState {
  selectAnswer: (questionId: number, answer: 'A' | 'B' | 'C' | 'D' | 'E') => void;
  clearAnswer: (questionId: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  goToQuestion: (index: number) => void;
  submitTest: () => void;
  startTest: () => void;
  resetTest: () => void;
  getTotalAnswered: () => number;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

const TOTAL_TIME = 60 * 60; // 60 minutes in seconds
const STORAGE_KEY = 'psych_test_state';

export function TestProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<TestState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      currentQuestionIndex: 0,
      answers: {},
      timeRemaining: TOTAL_TIME,
      testStarted: false,
      testSubmitted: false,
      submittedAt: null,
    };
  });

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Timer countdown
  useEffect(() => {
    if (!state.testStarted || state.testSubmitted) return;

    const interval = setInterval(() => {
      setState(prev => {
        const remaining = Math.max(0, prev.timeRemaining - 1);
        if (remaining === 0) {
          // Auto-submit when time runs out
          submitTest();
        }
        return { ...prev, timeRemaining: remaining };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [state.testStarted, state.testSubmitted]);

  const selectAnswer = (questionId: number, answer: 'A' | 'B' | 'C' | 'D' | 'E') => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answer }
    }));
  };

  const clearAnswer = (questionId: number) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: null }
    }));
  };

  const nextQuestion = () => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: Math.min(29, prev.currentQuestionIndex + 1)
    }));
  };

  const previousQuestion = () => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1)
    }));
  };

  const goToQuestion = (index: number) => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, Math.min(29, index))
    }));
  };

  const submitTest = () => {
    setState(prev => ({
      ...prev,
      testSubmitted: true,
      submittedAt: Date.now()
    }));
  };

  const startTest = () => {
    setState(prev => ({
      ...prev,
      testStarted: true
    }));
  };

  const resetTest = () => {
    localStorage.removeItem(STORAGE_KEY);
    setState({
      currentQuestionIndex: 0,
      answers: {},
      timeRemaining: TOTAL_TIME,
      testStarted: false,
      testSubmitted: false,
      submittedAt: null,
    });
  };

  const getTotalAnswered = () => {
    return Object.values(state.answers).filter(a => a !== null).length;
  };

  return (
    <TestContext.Provider value={{
      ...state,
      selectAnswer,
      clearAnswer,
      nextQuestion,
      previousQuestion,
      goToQuestion,
      submitTest,
      startTest,
      resetTest,
      getTotalAnswered
    }}>
      {children}
    </TestContext.Provider>
  );
}

export function useTest() {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTest must be used within TestProvider');
  }
  return context;
}
