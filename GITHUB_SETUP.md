# GitHub Repository Setup

## 📌 Repository Creation

This is a Next.js + Supabase + NextAuth CAT (Computer Adaptive Testing) exam platform for SKD preparation.

### Create Repository

1. Go to https://github.com/new
2. Repository name: `cat-exam-system`
3. Description: "Computer Adaptive Testing Platform for SKD exam preparation"
4. Choose public or private
5. Don't initialize with README (we have one)

### Setup Local Git

```bash
cd cat-exam-system
git remote add origin https://github.com/YOUR_USERNAME/cat-exam-system.git
git branch -M main
git push -u origin main
```

## 🔑 Environment Variables Setup

### 1. Create `.env.local` (Never commit this!)

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# NextAuth
NEXTAUTH_SECRET=$(openssl rand -base64 32)
NEXTAUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Database (for local dev)
DATABASE_URL=postgresql://user:password@localhost:5432/cat_system
```

### 2. Get Supabase Credentials

- Go to https://supabase.com/dashboard
- Create new project
- Project Settings > API > Copy URL & anon key
- Copy to `.env.local`

### 3. Get Google OAuth Credentials

- Go to https://console.cloud.google.com
- Create new project
- APIs & Services > Credentials > Create OAuth 2.0 Client ID
- Application type: Web application
- Authorized JavaScript origins: http://localhost:3000
- Authorized redirect URIs:
  - http://localhost:3000/api/auth/callback/google
  - https://your-domain.com/api/auth/callback/google (for production)

## 🗄️ Database Setup

### Execute Schema on Supabase

1. Go to Supabase Dashboard > SQL Editor
2. Create new query
3. Paste contents of `database_schema.sql`
4. Run query

This creates:
- questions table
- users table
- test_sessions table
- test_questions table
- test_results table
- user_analytics table
- All indexes & RLS policies

## 🚀 Deploy to Vercel

### 1. Connect GitHub

```bash
# Push to GitHub first
git push origin main

# Then on Vercel:
# https://vercel.com/new
# > Import Git Repository
# > Select cat-exam-system
# > Next.js framework detected automatically
```

### 2. Environment Variables on Vercel

In Vercel Dashboard > Settings > Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
NEXTAUTH_SECRET
NEXTAUTH_URL (set to your Vercel domain)
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
```

### 3. Update Google OAuth for Production

- Go to Google Cloud Console
- Update Authorized redirect URIs:
  ```
  https://cat-exam-system-vercel-domain.vercel.app/api/auth/callback/google
  ```

## 📝 GitHub Best Practices

### .gitignore (already configured)

```
.env.local
.env.*.local
node_modules/
.next/
out/
dist/
*.db
.DS_Store
```

### Commit Message Format

```
feat: Add exam interface components
fix: Correct timer sync issue
docs: Update setup guide
chore: Update dependencies
test: Add auth tests
```

### PR Checklist

- [ ] Tests pass locally (`npm run lint`)
- [ ] No console errors
- [ ] ENV variables documented
- [ ] Database migrations tested
- [ ] Updated README if needed

## 🔄 Workflow

1. Create branch: `git checkout -b feature/exam-questions`
2. Make changes
3. Commit: `git commit -m "feat: Add question seeding script"`
4. Push: `git push origin feature/exam-questions`
5. Create PR on GitHub
6. Merge to main after review

## 📊 Project Structure

```
cat-exam-system/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   ├── lib/             # Utilities & Supabase
│   ├── types/           # TypeScript types
│   ├── hooks/           # Custom hooks
│   ├── constants/       # Constants
│   └── styles/          # Global CSS
├── public/              # Static files
├── database_schema.sql  # Supabase schema
├── .env.example         # Env template
├── README.md            # Documentation
├── next.config.js       # Next.js config
├── tsconfig.json        # TypeScript config
├── tailwind.config.js   # Tailwind config
└── package.json         # Dependencies
```

## 🔐 Security Notes

1. **Never commit .env.local**
2. **Google Client Secret** only on server
3. **Supabase Service Role** only on server
4. **NextAuth Secret** should be random & long
5. Use **HTTPS** in production
6. Enable **RLS** on all Supabase tables

## 📚 Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build            # Build for production
npm start                # Start production server

# Code quality
npm run lint             # Run ESLint

# Database
# (If using local PostgreSQL)
psql postgresql://user@localhost/cat_system < database_schema.sql
```

## 🎯 Next Steps

1. ✅ Push to GitHub
2. ⏳ Setup Supabase project
3. ⏳ Configure Google OAuth
4. ⏳ Deploy to Vercel
5. ⏳ Add test questions
6. ⏳ Test exam flow
7. ⏳ Setup analytics

## 📞 Troubleshooting

**Deployment fails?**
- Check environment variables in Vercel
- Verify Supabase project is active
- Check build logs

**Auth not working?**
- Verify redirect URIs match
- Check Google credentials
- Review NextAuth logs

**Database not syncing?**
- Verify RLS policies allow your user
- Check Supabase connection
- Review row-level security settings

