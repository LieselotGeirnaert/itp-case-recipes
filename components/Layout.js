import styles from "./Layout.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Head over meals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>
          <Link href="/">
            <a
              className={
                styles.title
              }
            >
              Head over meals
            </a>
          </Link>
        </h1>
      </header>

      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p className={styles.footer__text}>Lieselot Geirnaert - 2021</p>
      </footer>
    </div>
  );
};

export default Layout;
