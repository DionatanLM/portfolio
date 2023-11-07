import React from "react";
import styles from "./Home.module.scss";
import HeroSection from "./Sections/HeroSection";
import SkillSection from "./Sections/Skills";
import ProjectSection from "./Sections/ProjectSection";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <SkillSection />
      <ProjectSection />
    </div>
  );
};

export default HomePage;
