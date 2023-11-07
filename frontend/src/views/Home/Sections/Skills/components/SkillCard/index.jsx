import React from "react";
import styles from "../../../../Home.module.scss";

const SkillCard = ({ title, skills, ...rest }) => {
  return (
    <div className={styles.skillCardContainer} {...rest}>
      <h2 className={styles.skillCardTitle}>{title}</h2>
      <div className={styles.skillIconsContainer}>
        {skills.map((skill, index) => (
          <div className={styles.skillIconCard} key={index}>
            <img
              src={skill.icon}
              alt={skill.name}
              style={{ width: skill.width, marginTop: skill.marginTop }}
            />
            <p>{skill.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
