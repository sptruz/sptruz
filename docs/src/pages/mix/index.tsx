import Head from 'next/head';
import type { NextPage } from 'next';

import DeviconsReactOriginal from 'devicons-react/lib/icons/DeviconsReactOriginal';

import Mix from '@/components/api/mix';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mix | Sptruz</title>
      </Head>
      <header>
        <section className={'section-header'}>
          <DeviconsReactOriginal size={'3rem'} />
          <h1>
            Sptruz <span>Mix</span>
          </h1>
        </section>
      </header>

      <Mix />
    </>
  );
};

export default Page;
