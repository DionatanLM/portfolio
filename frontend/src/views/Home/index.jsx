import React from "react";
import styles from "./Home.module.scss";
import HeroSection from "./Sections/HeroSection";
import SkillSection from "./Sections/Skills";
import ProjectSection from "./Sections/ProjectSection";
import ContactSection from "./Sections/ContactSection";
import ProfessionalExperienceSection from "./Sections/ProfessionalExperienceSection";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <SkillSection />
      <ProfessionalExperienceSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
