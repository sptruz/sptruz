import Head from 'next/head';
import type { NextPage } from 'next';

import DeviconsReactOriginal from 'devicons-react/lib/icons/DeviconsReactOriginal';

import Color from '@/components/api/color';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Colors Names | Sptruz</title>
      </Head>
      <header>
        <section className={'section-header'}>
          <DeviconsReactOriginal size={'3rem'} />
          <h1>
            Sptruz <span>Colors Names</span>
          </h1>
        </section>
      </header>

      <Color />
    </>
  );
};

export default Page;
