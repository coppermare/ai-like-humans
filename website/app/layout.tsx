import type { Metadata } from "next";
import { Geist, Geist_Mono, Jersey_25 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jersey25 = Jersey_25({
  variable: "--font-jersey-25",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Like Humans | Personality Research",
  description: "Exploring personality traits in Large Language Models using validated psychometric methodology. Discover which AI model matches your favorite character.",
  openGraph: {
    title: "AI Like Humans | Personality Research",
    description: "Exploring personality traits in Large Language Models using validated psychometric methodology.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Like Humans | Personality Research",
    description: "Exploring personality traits in Large Language Models using validated psychometric methodology.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${jersey25.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
