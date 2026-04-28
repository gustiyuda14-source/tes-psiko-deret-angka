export const QUESTION_CATEGORIES = {
  PENALARAN_ANALITIS: 'penalaran_analitis',
  SILOGISME: 'silogisme',
  PERBANDINGAN: 'perbandingan',
  PERBANDINGAN_KUANTITATIF: 'perbandingan_kuantitatif',
} as const;

export const CATEGORY_LABELS = {
  penalaran_analitis: 'Penalaran Analitis',
  silogisme: 'Silogisme',
  perbandingan: 'Perbandingan',
  perbandingan_kuantitatif: 'Perbandingan Kuantitatif',
} as const;

export const DIFFICULTY_LEVELS = {
  MUDAH: 'mudah',
  SEDANG: 'sedang',
  SULIT: 'sulit',
} as const;

export const TEST_CONFIG = {
  DEFAULT_DURATION_MINUTES: 180,
  WARNING_TIME_MINUTES: 10,
  MAX_QUESTIONS: 110,
} as const;
