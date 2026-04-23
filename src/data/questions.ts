import type { Question } from '../types';

export const questions: Question[] = [
  // KATEGORI 1: DERET ARITMATIKA KOMPLEKS (Soal 1-10)
  {
    id: 1,
    category: 'aritmatika_kompleks',
    question: '2, 5, 10, 17, 26, ?',
    options: ['A) 37', 'B) 38', 'C) 39', 'D) 40', 'E) 41'],
    correctAnswer: 'A',
    explanation: 'Pola: +3, +5, +7, +9, +11 → 26+11=37. Selisih bertambah 2 setiap langkah (aritmatika berlapis).',
    difficulty: 7,
    idealTime: 45,
    patternType: 'aritmatika_berlapis'
  },
  {
    id: 2,
    category: 'aritmatika_kompleks',
    question: '1, 2, 4, 7, 11, 16, ?',
    options: ['A) 20', 'B) 21', 'C) 22', 'D) 23', 'E) 24'],
    correctAnswer: 'C',
    explanation: 'Selisih: +1, +2, +3, +4, +5, +6 → 16+6=22',
    difficulty: 6,
    idealTime: 45,
    patternType: 'aritmatika_berlapis'
  },
  {
    id: 3,
    category: 'aritmatika_kompleks',
    question: '5, 6, 8, 11, 15, 20, ?',
    options: ['A) 25', 'B) 26', 'C) 27', 'D) 28', 'E) 29'],
    correctAnswer: 'B',
    explanation: 'Selisih: +1, +2, +3, +4, +5, +6 → 20+6=26',
    difficulty: 6,
    idealTime: 45,
    patternType: 'aritmatika_berlapis'
  },
  {
    id: 4,
    category: 'aritmatika_kompleks',
    question: '3, 5, 9, 15, 23, 33, ?',
    options: ['A) 42', 'B) 43', 'C) 44', 'D) 45', 'E) 46'],
    correctAnswer: 'D',
    explanation: 'Selisih: +2, +4, +6, +8, +10, +12 → 33+12=45',
    difficulty: 7,
    idealTime: 45,
    patternType: 'aritmatika_berlapis'
  },
  {
    id: 5,
    category: 'aritmatika_kompleks',
    question: '2, 3, 5, 8, 12, 17, ?',
    options: ['A) 22', 'B) 23', 'C) 24', 'D) 25', 'E) 26'],
    correctAnswer: 'B',
    explanation: 'Selisih: +1, +2, +3, +4, +5, +6 → 17+6=23',
    difficulty: 6,
    idealTime: 45,
    patternType: 'aritmatika_berlapis'
  },
  {
    id: 6,
    category: 'aritmatika_kompleks',
    question: '4, 7, 11, 16, 22, 29, ?',
    options: ['A) 36', 'B) 37', 'C) 38', 'D) 39', 'E) 40'],
    correctAnswer: 'B',
    explanation: 'Selisih: +3, +4, +5, +6, +7, +8 → 29+8=37',
    difficulty: 7,
    idealTime: 45,
    patternType: 'aritmatika_berlapis'
  },
  {
    id: 7,
    category: 'aritmatika_kompleks',
    question: '10, 11, 13, 16, 20, 25, ?',
    options: ['A) 30', 'B) 31', 'C) 32', 'D) 33', 'E) 34'],
    correctAnswer: 'B',
    explanation: 'Selisih: +1, +2, +3, +4, +5, +6 → 25+6=31',
    difficulty: 6,
    idealTime: 45,
    patternType: 'aritmatika_berlapis'
  },
  {
    id: 8,
    category: 'aritmatika_kompleks',
    question: '1, 3, 6, 10, 15, 21, ?',
    options: ['A) 26', 'B) 27', 'C) 28', 'D) 29', 'E) 30'],
    correctAnswer: 'C',
    explanation: 'Bilangan segitiga (triangular numbers): +2, +3, +4, +5, +6, +7 → 21+7=28',
    difficulty: 7,
    idealTime: 45,
    patternType: 'bilangan_segitiga'
  },
  {
    id: 9,
    category: 'aritmatika_kompleks',
    question: '5, 8, 12, 17, 23, 30, ?',
    options: ['A) 37', 'B) 38', 'C) 39', 'D) 40', 'E) 41'],
    correctAnswer: 'B',
    explanation: 'Selisih: +3, +4, +5, +6, +7, +8 → 30+8=38',
    difficulty: 7,
    idealTime: 45,
    patternType: 'aritmatika_berlapis'
  },
  {
    id: 10,
    category: 'aritmatika_kompleks',
    question: '7, 9, 12, 16, 21, 27, ?',
    options: ['A) 33', 'B) 34', 'C) 35', 'D) 36', 'E) 37'],
    correctAnswer: 'B',
    explanation: 'Selisih: +2, +3, +4, +5, +6, +7 → 27+7=34',
    difficulty: 7,
    idealTime: 45,
    patternType: 'aritmatika_berlapis'
  },

  // KATEGORI 2: DERET GEOMETRI & KOMBINASI (Soal 11-20)
  {
    id: 11,
    category: 'geometri_kombinasi',
    question: '2, 6, 18, 54, 162, ?',
    options: ['A) 486', 'B) 487', 'C) 488', 'D) 489', 'E) 490'],
    correctAnswer: 'A',
    explanation: 'Deret geometri dengan rasio × 3 → 162 × 3 = 486',
    difficulty: 5,
    idealTime: 40,
    patternType: 'geometri_simple'
  },
  {
    id: 12,
    category: 'geometri_kombinasi',
    question: '3, 6, 12, 24, 48, ?',
    options: ['A) 94', 'B) 95', 'C) 96', 'D) 97', 'E) 98'],
    correctAnswer: 'C',
    explanation: 'Deret geometri dengan rasio × 2 → 48 × 2 = 96',
    difficulty: 5,
    idealTime: 40,
    patternType: 'geometri_simple'
  },
  {
    id: 13,
    category: 'geometri_kombinasi',
    question: '1, 2, 4, 8, 16, 32, ?',
    options: ['A) 62', 'B) 63', 'C) 64', 'D) 65', 'E) 66'],
    correctAnswer: 'C',
    explanation: 'Pangkat 2: 2⁰, 2¹, 2², 2³, 2⁴, 2⁵, 2⁶ → 2⁶ = 64',
    difficulty: 5,
    idealTime: 40,
    patternType: 'geometri_pangkat'
  },
  {
    id: 14,
    category: 'geometri_kombinasi',
    question: '5, 10, 20, 40, 80, ?',
    options: ['A) 156', 'B) 157', 'C) 158', 'D) 159', 'E) 160'],
    correctAnswer: 'E',
    explanation: 'Deret geometri dengan rasio × 2 → 80 × 2 = 160',
    difficulty: 5,
    idealTime: 40,
    patternType: 'geometri_simple'
  },
  {
    id: 15,
    category: 'geometri_kombinasi',
    question: '2, 3, 6, 9, 18, 27, ?',
    options: ['A) 52', 'B) 53', 'C) 54', 'D) 55', 'E) 56'],
    correctAnswer: 'C',
    explanation: 'Pola kombinasi: ×3, ÷2, ×2, ÷2, ×2 → 27 × 2 = 54. Alternatif: (2,3), (6,9), (18,27), (?,?) → setiap pasangan berlipat 3 dari pasangan sebelumnya',
    difficulty: 8,
    idealTime: 50,
    patternType: 'kombinasi_kompleks'
  },
  {
    id: 16,
    category: 'geometri_kombinasi',
    question: '4, 8, 16, 32, 64, ?',
    options: ['A) 126', 'B) 127', 'C) 128', 'D) 129', 'E) 130'],
    correctAnswer: 'C',
    explanation: 'Deret geometri dengan rasio × 2 (2² × 2⁰, 2² × 2¹, ...) → 64 × 2 = 128 atau 2⁷ = 128',
    difficulty: 5,
    idealTime: 40,
    patternType: 'geometri_simple'
  },
  {
    id: 17,
    category: 'geometri_kombinasi',
    question: '1, 3, 9, 27, 81, ?',
    options: ['A) 242', 'B) 243', 'C) 244', 'D) 245', 'E) 246'],
    correctAnswer: 'B',
    explanation: 'Deret geometri dengan rasio × 3 (perpangkatan 3): 3⁰, 3¹, 3², 3³, 3⁴, 3⁵ → 3⁵ = 243',
    difficulty: 5,
    idealTime: 40,
    patternType: 'geometri_pangkat'
  },
  {
    id: 18,
    category: 'geometri_kombinasi',
    question: '2, 4, 8, 16, 32, 64, ?',
    options: ['A) 126', 'B) 127', 'C) 128', 'D) 129', 'E) 130'],
    correctAnswer: 'C',
    explanation: 'Pangkat 2: 2¹, 2², 2³, 2⁴, 2⁵, 2⁶, 2⁷ → 2⁷ = 128',
    difficulty: 5,
    idealTime: 40,
    patternType: 'geometri_pangkat'
  },
  {
    id: 19,
    category: 'geometri_kombinasi',
    question: '3, 9, 27, 81, 243, ?',
    options: ['A) 726', 'B) 727', 'C) 728', 'D) 729', 'E) 730'],
    correctAnswer: 'D',
    explanation: 'Deret geometri dengan rasio × 3 (3ⁿ): 3¹, 3², 3³, 3⁴, 3⁵, 3⁶ → 3⁶ = 729',
    difficulty: 5,
    idealTime: 40,
    patternType: 'geometri_pangkat'
  },
  {
    id: 20,
    category: 'geometri_kombinasi',
    question: '5, 25, 125, 625, ?',
    options: ['A) 3124', 'B) 3125', 'C) 3126', 'D) 3127', 'E) 3128'],
    correctAnswer: 'B',
    explanation: 'Deret geometri dengan rasio × 5 (5ⁿ): 5¹, 5², 5³, 5⁴, 5⁵ → 5⁵ = 3125',
    difficulty: 5,
    idealTime: 40,
    patternType: 'geometri_pangkat'
  },

  // KATEGORI 3: DERET CAMPURAN & POLA NON-LINEAR (Soal 21-30)
  {
    id: 21,
    category: 'campuran_nonlinear',
    question: '1, 1, 2, 3, 5, 8, 13, ?',
    options: ['A) 20', 'B) 21', 'C) 22', 'D) 23', 'E) 24'],
    correctAnswer: 'B',
    explanation: 'Fibonacci: setiap angka = jumlah 2 angka sebelumnya → 8+13=21',
    difficulty: 6,
    idealTime: 45,
    patternType: 'fibonacci'
  },
  {
    id: 22,
    category: 'campuran_nonlinear',
    question: '1, 4, 9, 16, 25, 36, ?',
    options: ['A) 48', 'B) 49', 'C) 50', 'D) 51', 'E) 52'],
    correctAnswer: 'B',
    explanation: 'Kuadrat sempurna: 1², 2², 3², 4², 5², 6², 7² → 7²=49',
    difficulty: 5,
    idealTime: 40,
    patternType: 'kuadrat'
  },
  {
    id: 23,
    category: 'campuran_nonlinear',
    question: '1, 8, 27, 64, 125, ?',
    options: ['A) 214', 'B) 215', 'C) 216', 'D) 217', 'E) 218'],
    correctAnswer: 'C',
    explanation: 'Kubik: 1³, 2³, 3³, 4³, 5³, 6³ → 6³=216',
    difficulty: 5,
    idealTime: 40,
    patternType: 'kubik'
  },
  {
    id: 24,
    category: 'campuran_nonlinear',
    question: '2, 3, 5, 8, 13, 21, ?',
    options: ['A) 32', 'B) 33', 'C) 34', 'D) 35', 'E) 36'],
    correctAnswer: 'C',
    explanation: 'Fibonacci yang dimulai 2,3: 2+3=5, 3+5=8, 5+8=13, 8+13=21, 13+21=34',
    difficulty: 6,
    idealTime: 45,
    patternType: 'fibonacci_modified'
  },
  {
    id: 25,
    category: 'campuran_nonlinear',
    question: '1, 1, 2, 6, 24, 120, ?',
    options: ['A) 718', 'B) 719', 'C) 720', 'D) 721', 'E) 722'],
    correctAnswer: 'C',
    explanation: 'Faktorial: 1!, 1!, 2!, 3!, 4!, 5!, 6! → 6!=720',
    difficulty: 7,
    idealTime: 45,
    patternType: 'faktorial'
  },
  {
    id: 26,
    category: 'campuran_nonlinear',
    question: '2, 5, 10, 19, 36, 67, ?',
    options: ['A) 126', 'B) 127', 'C) 128', 'D) 129', 'E) 130'],
    correctAnswer: 'C',
    explanation: 'Pola campuran: 2→×2+1→5→×2→10→×2-1→19→×2→36→×2-1→67→×2→134... Atau: perbedaan: +3,+5,+9,+17,+31,+61 (masing-masing kurang-lebih 2x sebelumnya). Cek: 67+2×(31)=67+62=129... Hmm mari periksa: 67×2=134? Atau pattern lain: selisih +3,+5,+9,+17,+31,+61 → 61 = 2×31-1, jadi 67+61=128',
    difficulty: 9,
    idealTime: 60,
    patternType: 'campuran_kompleks'
  },
  {
    id: 27,
    category: 'campuran_nonlinear',
    question: '1, 8, 2, 9, 3, 10, 4, 11, ?',
    options: ['A) 5', 'B) 6', 'C) 7', 'D) 8', 'E) 9'],
    correctAnswer: 'A',
    explanation: 'Deret ganda alternating: posisi ganjil (1,2,3,4,?) dan posisi genap (8,9,10,11,?) → posisi 9 adalah ganjil ke-5 = 5',
    difficulty: 8,
    idealTime: 50,
    patternType: 'alternating'
  },
  {
    id: 28,
    category: 'campuran_nonlinear',
    question: '2, 4, 6, 8, 4, 8, 12, 16, 8, 16, 24, 32, ?',
    options: ['A) 16', 'B) 17', 'C) 18', 'D) 19', 'E) 20'],
    correctAnswer: 'A',
    explanation: 'Kelompok 4: (2,4,6,8)×1, (4,8,12,16)×1, (8,16,24,32)×1 → pola: 2(1,2,3,4), 4(1,2,3,4), 8(1,2,3,4)... Selanjutnya 16(1,...) → 16',
    difficulty: 9,
    idealTime: 60,
    patternType: 'pola_kelompok'
  },
  {
    id: 29,
    category: 'campuran_nonlinear',
    question: '11, 23, 36, 410, 515, ?',
    options: ['A) 621', 'B) 622', 'C) 623', 'D) 624', 'E) 625'],
    correctAnswer: 'A',
    explanation: 'Format n(n+1): 1(1), 2(3), 3(6), 4(10), 5(15), 6(21) → 621. Angka pertama = n, angka kedua = n×(n+1)/2 (bilangan segitiga)',
    difficulty: 9,
    idealTime: 60,
    patternType: 'pola_digit'
  },
  {
    id: 30,
    category: 'campuran_nonlinear',
    question: '2, 3, 6, 11, 22, 43, ?',
    options: ['A) 85', 'B) 86', 'C) 87', 'D) 88', 'E) 89'],
    correctAnswer: 'B',
    explanation: 'Operasi: +1, ×2, +5, ×2, +21, ×2 → 43×2=86. Pattern: tambah bilangan ganjil (1,5,21,...) lalu kalikan 2. Bilangan ganjil: 1, 5, 21 (bisa 4×1+1=5, 4×5+1=21)',
    difficulty: 9,
    idealTime: 60,
    patternType: 'operasi_kompleks'
  }
];

export const getQuestionsByCategory = (category: string) => {
  return questions.filter(q => q.category === category);
};
