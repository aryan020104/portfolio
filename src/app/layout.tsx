import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aryan — Senior Software Engineer & Full Stack Architect",
  description: "Awwwards-inspired personal portfolio of Aryan. Specializing in Java Spring Boot backend microservices, Next.js 15, Three.js WebGL, and high-concurrency systems.",
  keywords: [
    "Aryan",
    "Software Engineer",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot",
    "Next.js 15",
    "React Three Fiber",
    "Awwwards Portfolio",
    "TH Aschaffenburg",
    "Germany Software Engineer"
  ],
  authors: [{ name: "Aryan" }],
  creator: "Aryan",
  openGraph: {
    title: "Aryan — Senior Software Engineer & Full Stack Architect",
    description: "Building high-performance backend systems, distributed microservices, and immersive digital web experiences.",
    url: "https://aryan.dev",
    siteName: "Aryan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan — Software Engineer & Full Stack Developer",
    description: "Building high-performance backend systems and immersive 3D digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} ${playfair.variable} bg-[#0a0908] text-[#fffbeb] antialiased selection:bg-amber-500 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
