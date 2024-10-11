import React from "react";
import styles from "./NavOffCanvas.module.scss";

const NavOffCanvas = ({ setShowMenu, showMenu }) => {
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={styles.container}
      style={{ left: showMenu ? "0" : "-100%" }}
    >
      {/* <a href="/#home" onClick={handleShowMenu}>
        Sobre
      </a> */}
      <a href="/#projetos" onClick={handleShowMenu}>
        Projetos
      </a>
      <a href="/#habilidades" onClick={handleShowMenu}>
        Habilidades
      </a>
      <a href="/#experiencia" onClick={handleShowMenu}>
        Experiência
      </a>
      <a href="/#contact" onClick={handleShowMenu}>
        Contato
      </a>
    </div>
  );
};

export default NavOffCanvas;
