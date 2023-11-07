"use client";
import React from "react";
import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { MdOutlineOpenInNew } from "react-icons/md";
import { useRouter } from "next/navigation";

const ProjectCard = ({
  id,
  slug,
  urlGithub,
  image,
  name,
  description,
  ...rest
}) => {
  const router = useRouter();

  return (
    <div className={styles.projectCardContainer} {...rest}>
      <div className={styles.projectCard}>
        <div>
          <Image src={image} alt={name} width={600} height={200} />
          <h2>{name}</h2>
          <p>
            {description.split("\n").map((item, i) => (
              <React.Fragment key={i}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <button onClick={() => router.push(`/projetos/${slug}`)}>
            <MdOutlineOpenInNew />
            Saiba mais
          </button>

          <button onClick={() => window.open(urlGithub)}>
            <BsGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
