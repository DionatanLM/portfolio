import HomePage from '@/views/Home'
import styles from './Page.module.scss'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImg}  />
      <Header />
      <HomePage />
    </div>
  )
}
