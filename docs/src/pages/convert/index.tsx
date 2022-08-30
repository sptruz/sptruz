import Head from 'next/head';
import type { NextPage } from 'next';

import DeviconsReactOriginal from 'devicons-react/lib/icons/DeviconsReactOriginal';

import Convert from '@/components/api/convert';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Convert | Sptruz</title>
      </Head>
      <header>
        <section className={'section-header'}>
          <DeviconsReactOriginal size={'3rem'} />
          <h1>
            Sptruz <span>Convert</span>
          </h1>
        </section>
      </header>
      <Convert />
    </>
  );
};

export default Page;
