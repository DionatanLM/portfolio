import React from 'react'
import styles from './NavOffCanvas.module.scss'

const NavOffCanvas = ({ setShowMenu, showMenu }) => {
  return (
    <div
      className={styles.container}
      style={{ left: showMenu ? '0' : '-100%' }}
    >
      NavOffCanvas
    </div>
  )
}

export default NavOffCanvas
