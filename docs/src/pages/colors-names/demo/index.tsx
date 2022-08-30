import Head from 'next/head';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import DeviconsReactOriginal from 'devicons-react/lib/icons/DeviconsReactOriginal';

import Color from '@/components/demo/color';

const DynamicColor = dynamic(() => import('@/components/demo/color'), {
  loading: () => <Color />,
  suspense: true,
});

const Loading: NextPage = () => {
  return (
    <>
      <h1>Loading...</h1>
    </>
  );
};

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
      <Suspense fallback={<Loading />}>
        <DynamicColor />
      </Suspense>
    </>
  );
};

export default Page;
