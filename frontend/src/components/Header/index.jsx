'use client'
import { useState } from 'react'
import styles from './Header.module.scss'
import NavOffCanvas from '../NavOffCanvas'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  function handleShowNavOffCanvas() {
    setShowMenu(showMenu ? false : true)
    document.getElementById('hamburger').classList.toggle('active')
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/img/logo.png" alt="logo" />
          <div className={styles.lineVertical} />
          <span>Dionatan de Lima Moreira</span>
        </div>
        <nav className={styles.nav}>
          <a href="#about">Sobre</a>

          <a href="#projects">Projetos</a>

          <a href="#contact">Contato</a>
        </nav>
        <nav className={styles.navMobile}>
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
  )
}

export default Header
