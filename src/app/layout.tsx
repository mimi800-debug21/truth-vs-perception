import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Truth vs. Perception – Teste deine Intuition",
  description: "Eine interaktive Challenge, die deine Erwartungen hinterfragt. Teste deine Intuition an echten Daten und erlebe Aha-Momente.",
  keywords: ["Quiz", "Challenge", "Daten", "Intuition", "Wahrheit", "Wahrnehmung"],
  authors: [{ name: "Truth vs. Perception" }],
  openGraph: {
    title: "Truth vs. Perception – Denkst du, du weißt die Wahrheit?",
    description: "Teste deine Intuition an echten Daten. Jede Frage ist ein kleiner Aha-Moment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
