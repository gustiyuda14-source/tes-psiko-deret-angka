# 🚀 Quick Start Guide - CAT Exam System

Setup & deployment dalam 30 menit!

## 1️⃣ Supabase Setup (5 menit)

### A. Create Supabase Project
1. Go to https://supabase.com/dashboard
2. Click "New Project"
3. Fill in name, password, region
4. Wait for creation

### B. Get API Credentials
1. Settings > API
2. Copy URL & anon key
3. Save to `.env.local`

### C. Setup Database Schema
1. SQL Editor > New Query
2. Paste `database_schema.sql`
3. Run it

---

## 2️⃣ Google OAuth (10 menit)

1. Go to https://console.cloud.google.com
2. Create new project: `cat-exam-system`
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://your-domain.vercel.app/api/auth/callback/google`

---

## 3️⃣ Local Setup (5 menit)

```bash
# Install dependencies
npm install

# Create .env.local with Supabase & Google credentials
cp .env.example .env.local

# Start dev server
npm run dev
# Open http://localhost:3000
```

---

## 4️⃣ GitHub & Vercel (5 menit)

```bash
# Push to GitHub
git push origin main
```

Then on Vercel:
1. https://vercel.com/new
2. Import repo
3. Add environment variables
4. Deploy

---

## ✅ Success = Login works!

Test your setup by logging in with Gmail. If it works, everything is configured correctly.

---

For detailed instructions, see `GITHUB_SETUP.md` and `README.md`
