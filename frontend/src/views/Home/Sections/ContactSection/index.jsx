import React from "react";
import styles from "../../Home.module.scss";
import { AiOutlineSend } from "react-icons/ai";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div className={styles.projectSection} id="contact">
      <div className={styles.contactSectionContainer}>
        <h1 className={styles.title}>Vamos trabalhar juntos</h1>
        <p className={styles.subTitle}>
          Quer discutir uma oportunidade de criar algo incrível? Estou pronto
          quando você estiver.
        </p>
        <Link
          href="https://wa.me/48999440236"
          className={styles.buttonPrimary}
          target="_blank"
        >
          <AiOutlineSend /> Entre em contato
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
