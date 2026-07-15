import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Varadha K | Software Developer & Data Analyst Portfolio",
  description: "Professional portfolio of Varadha K, MCA Graduate, Python Developer, Software Developer, and Data Analytics Enthusiast. Explore academic projects, certifications, publications, and professional background.",
  keywords: ["Varadha K", "Python Developer", "Software Developer", "Data Analyst", "MCA Graduate", "Interview Fairness System", "TrendScope YouTube Intelligence", "Portfolio"],
  authors: [{ name: "Varadha K" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
