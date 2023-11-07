"use client";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Providers } from "./Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiArrowUp } from "react-icons/fi";
import { useEffect, useState } from "react";
import styles from "./Page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 50) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };

    changeNavbarColor();

    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  }
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Providers>
          <Header colorChange={colorChange} />
          {children}
          <Footer />
          <button
            className={
              !colorChange
                ? `${styles.scrollOnTop} ${styles.disabled}`
                : `${styles.scrollOnTop} `
            }
            onClick={scrollToTop}
          >
            <FiArrowUp size={25} cursor="pointer" />
          </button>
        </Providers>
      </body>
    </html>
  );
}
