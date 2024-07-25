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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
