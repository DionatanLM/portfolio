import React from "react";
import styles from "./ProjectSlugPage.module.scss";
import { IoArrowBack } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";

const ProjectSlugPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <div>
        <a href="/#projetos" className={styles.backButton}>
          <IoArrowBack />
          Voltar
        </a>

        {data.images &&
          data.images.map((image, index) => (
            <img src={image} alt={data.title} key={index} />
          ))}
      </div>
      <div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{data.name}</h1>
          <a
            href={data.urlGithub}
            target="_blank"
            rel="noreferrer"
            className={styles.buttonPrimary}
          >
            Acessar repositório <BsGithub />
          </a>
        </div>
        {data.description_all &&
          data.description_all.map((description, index) => (
            <p key={index} className={styles.description}>
              <br />
              {description}
            </p>
          ))}
        <div className={styles.technologies}>
          {data.technologies?.map((tech, index) => (
            <p className={styles.technologiesCard} key={index}>
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlugPage;
