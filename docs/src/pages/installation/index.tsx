import Head from 'next/head';
import type { NextPage } from 'next';

import DeviconsReactOriginal from 'devicons-react/lib/icons/DeviconsReactOriginal';

import Installation from '@/components/installation';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Installation | Sptruz</title>
      </Head>
      <header>
        <section className={'section-header'}>
          <DeviconsReactOriginal size={'3rem'} />
          <h1>
            Sptruz <span>Installation</span>
          </h1>
        </section>
      </header>

      <Installation />
    </>
  );
};

export default Page;
