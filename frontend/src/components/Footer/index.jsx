"use client";
import { BsWhatsapp } from "react-icons/bs";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <span className={styles.name}>
          © {year} Dionatan de Lima Moreira. Todos os direitos reservados. 💙
          </span>
        </div>
        <div className={styles.links}>
          <a href="https://github.com/DionatanLM/" target="_blank">
            <FiGithub />
          </a>

          <a href="https://linkedin.com/in/DionatanLM/" target="_blank">
            <FiLinkedin />
          </a>

          <a href="https://wa.me/48999440236" target="_blank">
            <BsWhatsapp />
          </a>
          <a href="mailto:dionatanlm12271@gmail.com" target="_blank">
            <FiMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
