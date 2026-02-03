import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js Activity</title>
        <meta
          name="description"
          content="Demo for SSR + SSG + API + Dynamic route"
        />
      </Head>

      <main>
        <h1 className={styles.title}>Next.js Activity Demo</h1>

        <Image src="/next.svg" alt="Next Logo" width={200} height={50} priority />

        <div className={styles.card}>
          <h2>Routes</h2>

      
          <div className={styles.nav}>
            <Link href="/ssr">SSR Page</Link>
            <Link href="/ssg">SSG Page</Link>
            <Link href="/user/1">Dynamic User 1</Link>
            <Link href="/user/2">Dynamic User 2</Link>
          </div>

          <p className={styles.note}>
            API endpoint (returns JSON):{" "}
            <a href="/api/data" target="_blank" rel="noreferrer">
              /api/data
            </a>
          </p>

          <p className={styles.note}>
            Tip: SSR page time should change on refresh. SSG build time should not
            change on refresh.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
