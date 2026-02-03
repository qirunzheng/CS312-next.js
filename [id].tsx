import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type Props = {
  id: string;
  serverTime: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const id = String(context.params?.id ?? "unknown");

  return {
    props: {
      id,
      serverTime: new Date().toISOString(),
    },
  };
};

const UserPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  id,
  serverTime,
}) => {
  return (
    <>
      <Head>
        <title>User {id}</title>
      </Head>

      <main>
        <h1>Dynamic Route</h1>
        <p>
          This page is <b>/user/[id]</b>. Current id: <b>{id}</b>
        </p>
        <p>
          <b>SSR Time:</b> {serverTime}
        </p>

        <p>
          Try: <Link href="/user/1">User 1</Link> | <Link href="/user/2">User 2</Link> |{" "}
          <Link href="/user/999">User 999</Link>
        </p>

        <p>
          <Link href="/">Back Home</Link>
        </p>
      </main>
    </>
  );
};

export default UserPage;
