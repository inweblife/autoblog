import { Inter, Rye, Poppins, Rubik } from "next/font/google";
import "./globals.css";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rye = Rye({ subsets: ["latin"], weight: "400", variable: "--font-rye" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata = {
  title: "Autoblog",
  description: "Новини за автомобили, авточасти и бракуване на коли",
  icons: {
    icon: "/icon.ico",
  },
  other: {
    'google-site-verification': '_9S3dRyfOj_BuYTcSFmz14Fm5vFqv5XMJGFPNpmlo_4',
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://kolipari.com/feed.xml',
    },
  },
  openGraph: {
    title: 'Autoblog',
    description: 'Новини за автомобили, авточасти и бракуване на коли',
    url: 'https://kolipari.com/',
    siteName: 'Autoblog',
    locale: 'bg_BG',
    type: 'website',
    images: [
      {
        url: 'https://kolipari.com/og/cover.webp',
        width: 1200,
        height: 630,
        alt: 'Autoblog - новини за коли',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autoblog',
    description: 'Новини за автомобили, авточасти и бракуване на коли',
    images: ['https://kolipari.com/og/cover.webp'],
  },
};  
export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body className={`${inter.variable} ${rye.variable} ${poppins.variable} ${rubik.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

