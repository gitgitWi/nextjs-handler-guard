import Head from 'next/head';

const TITLE = `nextjs-handler-guard-mvp`;

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <h1>{TITLE}</h1>
    </>
  );
}
