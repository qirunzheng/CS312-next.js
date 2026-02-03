import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type Props = {
  buildTime: string;
  note: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      buildTime: new Date().toISOString(),
      note: "This page uses SSG (getStaticProps). Build time should NOT change on refresh.",
    },
  };
};

const SSGPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  buildTime,
  note,
}) => {
  return (
    <>
      <Head>
        <title>SSG Page</title>
      </Head>

      <main>
        <h1>SSG Page</h1>
        <p>{note}</p>
        <p>
          <b>Build Time:</b> {buildTime}
        </p>

        <p>
          <Link href="/">Back Home</Link>
        </p>
      </main>
    </>
  );
};

export default SSGPage;
