import Head from 'next/head';
import type { NextPage } from 'next';

import DeviconsReactOriginal from 'devicons-react/lib/icons/DeviconsReactOriginal';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sptruz | Sptruz</title>
      </Head>
      <header>
        <section className={'section-header'}>
          <DeviconsReactOriginal size={'3rem'} />
          <h1>
            Sptruz <span>Sptruz</span>
          </h1>
        </section>
      </header>
    </>
  );
};

export default Page;
