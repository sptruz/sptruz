import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Highlight from '@/ui/highlight';

import Data from '@/data/data';

const BasicUsage = () => {
  return (
    <>
      <div className={'card'}>
        <div className={'card__info'}>
          <h4 className={'card__title'}>Basic Usage:</h4>
          <p className={'card__description'}></p>
        </div>
        <Highlight language={'javascript'} code={Data.basicusage} />
      </div>
    </>
  );
};

export default BasicUsage;
