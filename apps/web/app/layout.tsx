import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

export const metadata: Metadata = {
  title: "Chosen Visuals — Imagine. Create. Inspire.",
  description:
    "Creative media and technology brand offering design, training, printing, and event visual solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans text-brand-navy antialiased`}>
        {children}
      </body>
    </html>
  );
}
