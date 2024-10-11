import React from "react";
import styles from "../../Home.module.scss";
import { experienceDataSource } from "@/constants/ExperienceConstants";

const ProfessionalExperienceSection = () => {
  return (
    <div className={styles.professionalExperienceSection} id="experiencia">
      <div className={styles.skillSectionTitle}>
        <h1>Experiências profissionais</h1>
        <p>
          Aqui estão as empresas onde tive o prazer de trabalhar
        </p>
      </div>
      {experienceDataSource.map((data, index) => (
        <div key={index} className={styles.experienceCard}>
          <img src={data.companyImg} alt={data.company} />

          <div className={styles.experienceCardInfo}>
            <h1 className={styles.titleText}>{data.title}</h1>
            <p className={styles.titleCompany}>{data.company}</p>
            <p className={styles.titleDate}>{data.date}</p>
            <p className={styles.titleDescription}>{data.description}</p>
            {data.projects.length > 0 && (
              <ul className={styles.titleDescription}>
                {data.projects.map((project, index) => (
                  <li key={index}>
                    <strong>{project.name}:</strong> {project.description}
                    <br />
                    <strong>Contribuição:</strong> {project.contribution}
                    <br />
                    <strong>Tecnologias:</strong> {project.technologies}
                    <br />
                    <br />
                  </li>
                ))}
              </ul>
            )}

            {data.mainTechnologies.length > 0 && (
              <>
                <p className={styles.titleDescription}>Principais Tecnologias Utilizadas:</p>
                <ul className={styles.titleDescription}>
                  {data.mainTechnologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalExperienceSection;
