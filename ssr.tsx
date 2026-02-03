import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type Props = {
  serverTime: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      serverTime: new Date().toISOString(),
    },
  };
};

const SSRPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  serverTime,
}) => {
  return (
    <>
      <Head>
        <title>SSR Page</title>
      </Head>

      <main>
        <h1>SSR Page</h1>
        <p>This page uses SSR (getServerSideProps). Time should change on refresh.</p>
        <p>
          <b>Server Time:</b> {serverTime}
        </p>

        <p>
          <Link href="/">Back Home</Link>
        </p>
      </main>
    </>
  );
};

export default SSRPage;
