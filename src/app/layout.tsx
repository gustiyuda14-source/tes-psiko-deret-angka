import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CAT Exam System - SKD Preparation",
  description: "Computer Adaptive Testing Platform untuk persiapan SKD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
          {children}
        </div>
      </body>
    </html>
  );
}
