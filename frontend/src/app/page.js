import HomePage from "@/views/Home";
import styles from "./Page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImg} />
      <div className={styles.backgroundBlur} />
      <div className={styles.backgroundBlur2} />
      <div className={styles.backgroundBlur3} />

      <HomePage />
    </div>
  );
}
