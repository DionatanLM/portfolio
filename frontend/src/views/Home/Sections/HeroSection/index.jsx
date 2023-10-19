import React from 'react'
import ArrowDownIcon from '@/icons/ArrowDownIcon'
import styles from '../../Home.module.scss'

const HeroSection = () => {
  return (
    <div>
      <div className={styles.heroSectionContainer}>
        <h2>
          Desenvolvedor
          <br /> <p> Full Stack & Designer</p>
        </h2>
        <span>
          Olá, meu nome é Dionatan, e sou um desenvolvedor full-stack. <br />
          Tenho experiência em criar aplicações de completas e <br />
          intuitivas usando as linguagens JavaScript, TypeScript.
          <br /> Possuo habilidades de design, além de técnicas de codificação.
        </span>
        <button>
          Ver projetos <ArrowDownIcon />
        </button>
      </div>
      <div>{/* algo aqui */}</div>
    </div>
  )
}

export default HeroSection
