import { Rubik } from "next/font/google";
import "./globals.css";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const rubik = Rubik({ subsets: ["latin"] });

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
    canonical: 'https://autoblog-bg.netlify.app/',
    types: {
      'application/rss+xml': 'https://autoblog-bg.netlify.app/feed.xml',
    },
  },
  openGraph: {
    title: 'Autoblog',
    description: 'Новини за автомобили, авточасти и бракуване на коли',
    url: 'https://autoblog-bg.netlify.app/',
    siteName: 'Autoblog',
    locale: 'bg_BG',
    type: 'website',
    images: [
      {
        url: 'https://autoblog-bg.netlify.app/og/cover.webp',
        width: 800,
        height: 600,
        alt: 'Autoblog - новини за коли',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autoblog',
    description: 'Новини за автомобили, авточасти и бракуване на коли',
    images: ['https://autoblog-bg.netlify.app/og/cover.webp'],
  },
};  
export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body className={rubik.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
