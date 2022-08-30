import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Highlight from '@/ui/highlight';

const index = () => {
  return (
    <>
      <Tabs className={'tabs__container'}>
        <TabList className={'tabs__list'}>
          <Tab className={'tab__container'}>NodeJS</Tab>
          <Tab className={'tab__container'}>Deno</Tab>
        </TabList>

        <TabPanel>
          <div className={'card'}>
            <div className={'card__info'}>
              <h4 className={'card__title'}>NodeJS</h4>
            </div>
            <Highlight
              language={'javascript'}
              code={'import { Sptruz } from "sptruz";'}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={'card'}>
            <div className={'card__info'}>
              <h4 className={'card__title'}>Deno</h4>
            </div>
            <Highlight
              language={'javascript'}
              code={
                'import { Sptruz } from "https://deno.land/x/sptruz/mod.ts";'
              }
            />
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default index;
