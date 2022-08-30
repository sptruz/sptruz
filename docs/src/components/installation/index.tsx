import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Highlight from '@/ui/highlight';

import Data from '@/data/data';

const Installation = () => {
  return (
    <Tabs className={'tabs__container'}>
      <TabList className={'tabs__list'}>
        <Tab className={'tab__container'}>NodeJS</Tab>
        <Tab className={'tab__container'}>Deno</Tab>
      </TabList>

      <TabPanel>
        <div className={'card'}>
          <div className={'card__info'}>
            <h4 className={'card__title'}>Install package</h4>
          </div>
          <Highlight language={'bash'} code={Data.installation.node} />
        </div>
      </TabPanel>
      <TabPanel>
        <div className={'card'}>
          <div className={'card__info'}>
            <h4 className={'card__title'}>Deno | Latest Version</h4>
            <p className={'card__description'}>
              Unlike Node, Deno relies on direct URL imports instead of a
              package manager like NPM. The latest version can be imported like
              so:
            </p>
          </div>
          <Highlight
            language={'javascript'}
            code={Data.installation.deno.latest}
          />
        </div>

        <div className={'card'}>
          <div className={'card__info'}>
            <h4 className={'card__title'}>Deno | Specify Version</h4>
            <p className={'card__description'}>
              You can also specify a particular version:
            </p>
          </div>
          <Highlight
            language={'javascript'}
            code={Data.installation.deno.specifyVersion}
          />
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default Installation;
