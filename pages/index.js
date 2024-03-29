import Head from 'next/head';
import Layout from '@/components/layout';
import Hero from '@/components/home/hero';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>김진형의 포트폴리오</title>
        <meta name="description" content="jinhyungchannels" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Layout>
  );
}
