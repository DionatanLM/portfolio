import React from "react";
import styles from "../../Home.module.scss";
import SkillCard from "./components/SkillCard";
import { skillsData } from "@/constants/SkillsConstants";

const SkillSection = () => {
  return (
    <div className={styles.skillSectionContainer} id="habilidades">
      <div className={styles.skillSectionTitle}>
        <p>Tecnologias que utilizo.</p>
        <h1>Habilidades</h1>
      </div>
      <div className={styles.skillSectionCardsContainer}>
        {Object.keys(skillsData).map((category) => (
          <SkillCard
            key={category}
            title={category}
            skills={skillsData[category]}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
