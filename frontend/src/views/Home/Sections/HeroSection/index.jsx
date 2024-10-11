import React from "react";
import ArrowDownIcon from "@/icons/ArrowDownIcon";
import styles from "../../Home.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.heroSectionContainer}>
      <div className={styles.heroFirstSectionContainer}>
        <h2>
          Desenvolvedor
          <br /> <p> Full Stack & Designer</p>
        </h2>
        <span>
          Olá, meu nome é Dionatan, e sou um desenvolvedor full-stack. Tenho
          experiência em criar aplicações de completas e intuitivas usando as
          linguagens JavaScript e TypeScript. Possuo habilidades de design, além
          de técnicas de codificação.
        </span>
        <a className={styles.buttonPrimary} href="/#projetos">
          Ver projetos <ArrowDownIcon />
        </a>
      </div>
      <div>
        <div className={styles.heroSecondSectionContainer}>
          <img src="/img/myImg.png" alt="Dionatan" className={styles.myImg} />
          <img
            src="/img/circleLines.png"
            alt="circle"
            className={styles.circleImg}
          />
          <img src="/img/square.png" alt="square" className={styles.square} />
          <img
            src="/img/squareTwo.png"
            alt="square"
            className={styles.squareTwo}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
