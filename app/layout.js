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
  openGraph: {
    title: 'Autoblog',
    description: 'Новини за автомобили, авточасти и бракуване на коли',
    url: 'https://autoblog-bg.netlify.app/',
    type: 'website',
    images: [
      {
        url: 'https://autoblog-bg.netlify.app/cover.webp',
        width: 800,
        height: 600,
        alt: 'car scrap',
      },
    ],
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
