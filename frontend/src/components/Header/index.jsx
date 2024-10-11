"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import NavOffCanvas from "../NavOffCanvas";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = ({ colorChange }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleShowNavOffCanvas() {
    setShowMenu(showMenu ? false : true);
    document.getElementById("hamburger").classList.toggle("active");
  }

  return (
    <div
      className={
        colorChange
          ? `${styles.container} ${styles.fixed}`
          : `${styles.container} `
      }
    >
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <img src="/img/logo.png" alt="logo" />
          <div className={styles.lineVertical} />
          <span className={styles.name}>Dionatan de Lima Moreira</span>
        </Link>
        <nav className={styles.nav}>
          {/* <a href="/#about">Sobre</a> */}
          <a href="/#projetos">Projetos</a>
          <a href="/#habilidades">Habilidades</a>
          <a href="/#experiencia">Experiência</a>
          <a href="/#contact">Contato</a>
          {theme === "light" ? (
            <FiMoon
              size={25}
              cursor="pointer"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <BsSun
              size={25}
              cursor="pointer"
              onClick={() => setTheme("light")}
            />
          )}
        </nav>
        <nav className={styles.navMobile}>
          {theme === "light" ? (
            <FiMoon
              size={25}
              cursor="pointer"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <BsSun
              size={25}
              cursor="pointer"
              onClick={() => setTheme("light")}
            />
          )}
          <div
            className={styles.containerMenu}
            onClick={handleShowNavOffCanvas}
          >
            <div
              className={
                showMenu
                  ? `${styles.hamburger} ${styles.active}`
                  : `${styles.hamburger}`
              }
              id="hamburger"
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </div>
          </div>
        </nav>
        <NavOffCanvas setShowMenu={setShowMenu} showMenu={showMenu} />
      </header>
    </div>
  );
};

export default Header;
