import { Inter, Rye, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rye = Rye({ subsets: ["latin"], weight: "400", variable: "--font-rye" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body className={`${inter.variable} ${rye.variable} ${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="qA+9oNpqAVpV17dz99iDmw"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

