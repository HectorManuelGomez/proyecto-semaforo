import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a la central semafórica inteligente
        </h1>

        <p className={styles.description}>
          Creado por Hector Gomez, Andres Mora y Dany Sandoval
        </p>

        <div className={styles.grid}>
          <a
            href="http://127.0.0.1:8090/_/"
            target="_blank"
            className={styles.card}
          >
            <h2>Base de datos &rarr;</h2>
            <p>Acceda a la base de datos de la central</p>
          </a>

          <Link href="/dashboard" className={styles.card}>
            <h2>Dashboard &rarr;</h2>
            <p>Acceda al mapa de la ciudad</p>
          </Link>

          <a
            href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Repositorio &rarr;</h2>
            <p>Acceda al repositorio del proyecto</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
