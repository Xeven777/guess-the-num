import type { Metadata } from "next";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import MusicBtn from "@/components/MusicBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guess The Number 7️⃣",
  description: "A Simple Guessing Game made with Next.js",
  metadataBase: new URL("https://guess-d-num.netlify.app/"),
  openGraph: {
    type: "website",
    url: "https://guess-d-num.netlify.app/",
    title: "Guess The Number 7️⃣",
    description: "A Simple Guessing Game made with Next.js",
    images: [
      {
        url: "https://i.imgur.com/ZqVmpv2l.png",
        width: 1200,
        height: 630,
        alt: "Guess The Number 7️⃣",
      },
    ],
  },
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MusicBtn />
        {children}
        <Footer />
      </body>
    </html>
  );
}
