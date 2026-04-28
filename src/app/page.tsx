"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { BookOpen, Users, Clock, Target } from 'lucide-react';

export default function Home() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    const { data: { session } } = await supabase.auth.getSession();
    setSession(session);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin">
          <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-slate-900 border-b border-slate-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-500">CAT Exam System</h1>
          {session ? (
            <button
              onClick={() => supabase.auth.signOut()}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/auth/signin"
              className="px-4 py-2 bg-amber-500 text-slate-900 rounded hover:bg-amber-600 font-semibold"
            >
              Login dengan Gmail
            </Link>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Persiapan Ujian SKD
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Platform CAT (Computer Adaptive Testing) terpadu dengan 100+ soal berkualitas
          </p>
          
          {!session ? (
            <Link
              href="/auth/signin"
              className="inline-block px-8 py-4 bg-amber-500 text-slate-900 rounded-lg font-bold text-lg hover:bg-amber-600 transition"
            >
              Mulai Ujian Sekarang
            </Link>
          ) : (
            <Link
              href="/exam/start"
              className="inline-block px-8 py-4 bg-amber-500 text-slate-900 rounded-lg font-bold text-lg hover:bg-amber-600 transition"
            >
              Lanjut ke Ujian
            </Link>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="bg-slate-800 border border-slate-700 p-8 rounded-lg">
            <BookOpen className="w-12 h-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Penalaran Analitis
            </h3>
            <p className="text-slate-400">35 soal logic puzzles & seating arrangements</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 p-8 rounded-lg">
            <Target className="w-12 h-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Silogisme
            </h3>
            <p className="text-slate-400">45 soal logical reasoning & conclusions</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 p-8 rounded-lg">
            <Clock className="w-12 h-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Perbandingan
            </h3>
            <p className="text-slate-400">18+ soal ratio & proportion problems</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 p-8 rounded-lg">
            <Users className="w-12 h-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Kuantitatif
            </h3>
            <p className="text-slate-400">Soal perbandingan kuantitatif & analisis</p>
          </div>
        </div>

        {/* Test Stats */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg p-8 text-slate-900">
          <h3 className="text-2xl font-bold mb-6">Spesifikasi Test</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold">110</p>
              <p className="text-lg">Total Soal</p>
            </div>
            <div>
              <p className="text-4xl font-bold">180</p>
              <p className="text-lg">Menit (3 Jam)</p>
            </div>
            <div>
              <p className="text-4xl font-bold">4</p>
              <p className="text-lg">Kategori Soal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 px-6 py-8 mt-20">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 CAT Exam System. All rights reserved.</p>
          <p className="mt-2">Platform persiapan ujian berkualitas tinggi</p>
        </div>
      </footer>
    </main>
  );
}
