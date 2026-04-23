# 🎯 Simulasi Tes Psikologi - Deret Angka Tingkat Tinggi

Aplikasi web interaktif untuk simulasi tes psikologi jenis **deret angka** dengan tingkat kesulitan tinggi, setara dengan level CPNS/BUMN Tier 2-3.

## ✨ Fitur Utama

- ✅ **30 Soal Lengkap** - Terdiri dari 3 kategori:
  - Deret Aritmatika Kompleks (10 soal)
  - Deret Geometri & Kombinasi (10 soal)
  - Deret Campuran & Non-Linear (10 soal)

- ✅ **Timer 60 Menit** - Countdown real-time dengan notifikasi warning
- ✅ **Auto-save** - Jawaban disimpan otomatis ke localStorage
- ✅ **Progress Tracking** - Visual progress bar dan question navigator
- ✅ **Detailed Analytics** - Breakdown skor per kategori + rekomendasi belajar
- ✅ **Answer Review** - Penjelasan lengkap (kunci) untuk setiap soal
- ✅ **Responsive Design** - Works perfectly di mobile, tablet, desktop
- ✅ **Professional UI** - Modern design dengan Tailwind CSS

## 🚀 Quick Start

### Requirements
- Node.js 16+
- npm atau yarn

### Installation
```bash
git clone <repository-url>
cd my-first-project
npm install
```

### Development
```bash
npm run dev
# Open http://localhost:5173
```

### Production Build
```bash
npm run build
npm run preview
```

## 🏗️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **State Management**: React Context API
- **Storage**: localStorage

## 📁 Project Structure

```
src/
├── components/       # React components
├── pages/           # Page components
├── context/         # State management
├── data/            # Questions database
├── utils/           # Helper functions
├── types/           # TypeScript types
└── App.tsx          # Main router
```

## 🎮 Features

- 30 high-difficulty questions across 3 categories
- 60-minute timer with auto-submit
- Real-time score tracking
- Detailed answer explanations
- Category-wise performance analysis
- Mobile-responsive design

## 📈 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

## 📝 License

MIT License

---

Created with ❤️ using Claude Code
