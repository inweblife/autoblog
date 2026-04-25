'use client';

import { Inter, Rye, Poppins } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rye = Rye({ subsets: ["latin"], weight: "400", variable: "--font-rye" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

export default function RootLayout({ children }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://analytics.ahrefs.com/analytics.js';
    script.setAttribute('data-key', 'qA+9oNpqAVpV17dz99iDmw');
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <html lang="bg">
      <body className={`${inter.variable} ${rye.variable} ${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

