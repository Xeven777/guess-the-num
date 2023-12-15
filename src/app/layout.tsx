import type { Metadata } from "next";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import MusicBtn from "@/components/MusicBtn";
import Logo from "@/components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guess The Number 7️⃣",
  description: "A Simple Guessing Game made with Next.js",
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
        {/* <Logo /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
