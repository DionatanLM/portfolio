import React from "react";
import styles from "../../Home.module.scss";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants/ProjectsConstants";
import { BsStars } from "react-icons/bs";

const ProjectSection = () => {
  return (
    <div className={styles.projectSection} id="projetos">
      <div className={styles.skillSectionTitle}>
        <p>Meus principais</p>
        <h1>Projetos</h1>
      </div>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard
            id={project.id}
            slug={project.slug}
            urlGithub={project.urlGithub}
            name={project.name}
            description={project.description}
            image={project.image}
            key={index}
          />
        ))}
        <div className={styles.projectCardContainer}>
          <BsStars size={70} />
          <h2>SEU PROJETO VAI AQUI </h2>
          <p>Vamos transformar sua ideia em realidade!</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
