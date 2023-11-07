"use client";
import { useState } from "react";
import styles from "./Footer.module.scss";
import { FiGithub, FiLinkedin, FiMail, FiMoon } from "react-icons/fi";
import { BsSun, BsWhatsapp } from "react-icons/bs";
import { useTheme } from "next-themes";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <span className={styles.name}>
            Desenvolvido com 💙 por <strong>Dionatan</strong>, © 2023.
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
