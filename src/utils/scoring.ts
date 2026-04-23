import type { CategoryScore } from '../types';
import { questions } from '../data/questions';

export function calculateScore(
  answers: Record<number, 'A' | 'B' | 'C' | 'D' | 'E' | null>
): number {
  let score = 0;
  questions.forEach(q => {
    if (answers[q.id] === q.correctAnswer) {
      score++;
    }
  });
  return score;
}

export function getScorePercentage(score: number, total: number = 30): number {
  return Math.round((score / total) * 100);
}

export function calculateByCategory(
  answers: Record<number, 'A' | 'B' | 'C' | 'D' | 'E' | null>
): CategoryScore[] {
  const categories = ['aritmatika_kompleks', 'geometri_kombinasi', 'campuran_nonlinear'];

  return categories.map(category => {
    const categoryQuestions = questions.filter(q => q.category === category);
    const correct = categoryQuestions.filter(q => answers[q.id] === q.correctAnswer).length;
    const total = categoryQuestions.length;
    const percentage = Math.round((correct / total) * 100);

    return {
      category: category as any,
      correct,
      total,
      percentage
    };
  });
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    aritmatika_kompleks: 'Deret Aritmatika Kompleks',
    geometri_kombinasi: 'Deret Geometri & Kombinasi',
    campuran_nonlinear: 'Deret Campuran & Non-Linear'
  };
  return labels[category] || category;
}

export function getWeakCategories(
  categoryScores: CategoryScore[],
  threshold: number = 70
): string[] {
  return categoryScores
    .filter(cs => cs.percentage < threshold)
    .map(cs => cs.category);
}

export function getPerformanceLevel(percentage: number): string {
  if (percentage >= 90) return 'Sangat Baik (A)';
  if (percentage >= 80) return 'Baik (B)';
  if (percentage >= 70) return 'Cukup (C)';
  if (percentage >= 60) return 'Kurang (D)';
  return 'Gagal (E)';
}
