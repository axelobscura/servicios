import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Axel.js!
        </h1>
      </main>
    </div>
  )
}
