# CAT Exam System - SKD Preparation Platform

🎓 **Computer Adaptive Testing (CAT) Platform** untuk persiapan ujian **Seleksi Kompetensi Dasar (SKD)** dengan soal terdiri dari:
- **Penalaran Analitis** (35 soal)
- **Silogisme** (45 soal)
- **Perbandingan** (18+ soal)
- **Perbandingan Kuantitatif** (soal tambahan)

## 🚀 Fitur Utama

### 👥 Exam Interface
- **2-Column Layout**: Soal di kiri (70%), Timer & Navigation Grid di kanan (30%)
- **Real-time Timer**: Server-side synced untuk security
- **Question Navigation**: Grid 1-110 soal dengan status visual
- **Anti-Cheat Detection**: Tab monitoring dengan auto-submit
- **Auto-save**: Jawaban tersimpan real-time

### 📊 Scoring & Analytics
- **Automatic Grading**: Instant score calculation per kategori
- **Category Breakdown**: Score per Penalaran Analitis, Silogisme, dst
- **Performance Tracking**: Historical data & progress monitoring
- **Student Analytics**: Dashboard dengan insights

### 🔐 Authentication
- **Gmail OAuth Login**: Simple & secure
- **Session Management**: 1 user per device/tab
- **JWT Tokens**: Secure API authentication

### 💾 Database
- **Supabase PostgreSQL**: Cloud-based, scalable
- **Row Level Security (RLS)**: User data protection
- **Real-time Sync**: Jawaban otomatis tersimpan

## 🛠️ Tech Stack

```
Frontend:  Next.js 14 + React 18 + TypeScript + Tailwind CSS
Backend:   Next.js API Routes
Auth:      NextAuth.js + Google OAuth
Database:  Supabase (PostgreSQL)
Deploy:    Vercel (recommended)
```

## 📋 Setup Instructions

### 1. Prerequisites
```bash
Node.js 18+ & npm/yarn
```

### 2. Environment Setup
```bash
cp .env.example .env.local
# Edit .env.local dengan Supabase credentials & Google OAuth
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Setup Supabase Database
- Go to https://supabase.com
- Create new project
- Copy URL & anon key to .env.local
- Run SQL schema:
  ```bash
  # Copy database_schema.sql content
  # Execute in Supabase SQL Editor
  ```

### 5. Google OAuth Setup
- Go to https://console.cloud.google.com
- Create OAuth 2.0 credentials
- Add localhost:3000 as redirect URI
- Copy Client ID & Secret to .env.local

### 6. Development Server
```bash
npm run dev
# Open http://localhost:3000
```

## 📁 Project Structure

```
.
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx      # Landing page
│   │   ├── exam/         # Exam interface
│   │   ├── results/      # Results dashboard
│   │   ├── api/          # API routes
│   │   └── auth/         # Auth pages
│   ├── components/       # React components
│   ├── lib/             # Utilities (Supabase, etc)
│   ├── types/           # TypeScript types
│   ├── hooks/           # Custom React hooks
│   └── constants/       # Constants & config
├── public/              # Static assets
├── database_schema.sql  # Supabase schema
├── .env.example         # Environment template
└── next.config.js       # Next.js config
```

## 🎯 Key Components

### ExamInterface Component
- Main exam view dengan 2-column layout
- Real-time timer dengan warning
- Question navigation grid
- Auto-save mechanism
- Tab detection anti-cheat

### Timer Component
- Server-side countdown
- Warning notifications
- Auto-submit on timeout
- Display MM:SS format

### QuestionGrid Component
- 110 soal dalam grid 10x11
- Status colors: putih (belum), oranye (terjawab), biru (aktif)
- Click to jump functionality
- Flagged questions support

## 📊 Question Categories

### 1. Penalaran Analitis
35 soal dengan tipe:
- Seating arrangements
- Logic puzzles
- Ordering problems
- Location mapping

### 2. Silogisme
45 soal dengan tipe:
- Deductive reasoning
- Set theory
- Logic propositions
- Conclusion validation

### 3. Perbandingan
18+ soal dengan tipe:
- Ratio problems
- Proportion calculations
- Work-rate problems
- Time/distance problems

### 4. Perbandingan Kuantitatif
Additional quantitative comparison soal

## 🔄 Data Flow

```
Login (Gmail)
    ↓
Create Test Session (Supabase)
    ↓
Load Questions (Cached)
    ↓
Answer Selection → Auto-save (Real-time)
    ↓
Submit Test
    ↓
Calculate Score (Server-side)
    ↓
Show Results & Analytics
```

## 🚀 Deployment

### Deploy to Vercel
```bash
# Connect GitHub repo
# Vercel auto-deploys on push
# Set environment variables in Vercel dashboard
```

**Production Setup:**
1. Update NEXTAUTH_URL in .env
2. Configure Google OAuth redirect URI
3. Supabase project in production
4. Database backups enabled

## 📈 Analytics & Reporting

**Available Reports:**
- Student test history
- Category-wise performance
- Question difficulty analysis
- Time spent per question
- Improvement tracking

## 🔒 Security Features

✅ JWT authentication  
✅ Row Level Security (Supabase)  
✅ HTTPS only (Vercel)  
✅ SQL injection prevention  
✅ XSS protection  
✅ CSRF tokens  
✅ Rate limiting ready  

## 🎨 UI/UX Design

**Color Scheme:**
- Primary: Gold (#D4AF37)
- Correct: Green (#4CAF50)
- Incorrect: Red (#E24B4A)
- Background: Light gray

**Responsive Design:**
- Desktop (1920px+)
- Tablet (768px-1024px)
- Mobile (480px-767px)

## 📝 API Endpoints

### Auth
- `POST /api/auth/signin` - Google login
- `POST /api/auth/signout` - Logout

### Exam
- `POST /api/exam/start` - Create test session
- `POST /api/exam/answer` - Save answer
- `POST /api/exam/submit` - Submit test
- `GET /api/exam/session/:id` - Get session

### Results
- `GET /api/results/:id` - Get test results
- `GET /api/analytics` - User analytics

## 🐛 Troubleshooting

**Login issues?**
- Check Google OAuth credentials
- Verify redirect URI matches

**Questions not loading?**
- Check Supabase connection
- Verify RLS policies

**Timer sync issues?**
- Check server time synchronization
- Clear browser cache

## 📞 Support

For issues & questions:
1. Check troubleshooting guide
2. Review Supabase logs
3. Check browser console errors

## 📄 License

MIT License - Free to use and modify

---

**Version:** 1.0.0  
**Status:** Production Ready ✅  
**Last Updated:** April 2024
