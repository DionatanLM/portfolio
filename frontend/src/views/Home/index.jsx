import React from 'react'
import styles from './Home.module.scss'
import HeroSection from './Sections/HeroSection'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
    </div>
  )
}

export default HomePage
