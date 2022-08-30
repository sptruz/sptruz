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
              code={'import { Parse } from "sptruz";'}
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
                'import { Parse } from "https://deno.land/x/sptruz/mod.ts";'
              }
            />
          </div>
        </TabPanel>
      </Tabs>

      <div className={'card'}>
        <div className={'card__info'}>
          <h4 className={'card__title'}>Parse</h4>
          <p className={'card__description'}></p>
        </div>
        <Highlight
          language={'javascript'}
          code={`(() => {
  const color = 'hsl(340deg 82% 52%)';
  const parse = Parse(color);

  console.log('parse', parse);
})();

// output:
// parse { type: 'hsl', values: [ 340, 82, 52 ], alpha: 1 }`}
        />
      </div>

      <div className={'card'}>
        <div className={'card__info'}>
          <h4 className={'card__title'}>Parse</h4>
          <p className={'card__description'}></p>
        </div>
        <Highlight
          language={'javascript'}
          code={`(() => {
  const color = 'rgb(76, 175, 80)';
  const parse = Parse(color);

  console.log('parse', parse);
})();

// output:
// parse { type: 'rgb', values: [ 76, 175, 80 ], alpha: 1 }`}
        />
      </div>

      <div className={'card'}>
        <div className={'card__info'}>
          <h4 className={'card__title'}>Parse</h4>
          <p className={'card__description'}></p>
        </div>
        <Highlight
          language={'javascript'}
          code={`(() => {
  const color = '#00BCD4';
  const parse = Parse(color);

  console.log('parse', parse);
})();

// output:
// parse { type: 'rgb', values: [ 0, 188, 212 ], alpha: 1 }`}
        />
      </div>
    </>
  );
};

export default index;
