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
              code={'import { ColorsNames } from "sptruz";'}
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
                'import { ColorsNames } from "https://deno.land/x/sptruz/mod.ts";'
              }
            />
          </div>
        </TabPanel>
      </Tabs>

      <div className={'card'}>
        <div className={'card__info'}>
          <h4 className={'card__title'}>Demo | ColorsNames</h4>
        </div>
        <Highlight
          language={'javascript'}
          code={`(() => {
  const hex = ColorsNames.Arancio.hex;
  const rgb = ColorsNames.Arancio.rgb;
  const hsl = ColorsNames.Arancio.hsl;

  console.log('hex:', hex);
  console.log('rgb:', rgb);
  console.log('hsl:', hsl);
})();`}
        />
      </div>

      <div className={'card'}>
        <div className={'card__info'}>
          <h4 className={'card__title'}>outpot</h4>
        </div>
        <Highlight
          language={'bash'}
          code={`hex: #ff7013
rgb: [ 255, 112, 19 ]
hsl: [ 23.644067796610166, 100, 53.72549019607843 ]`}
        />
      </div>

      <p className={'mtop2'}>To obtain CSS/SCSS color, you can use convert.</p>

      <div className={'card'}>
        <div className={'card__info'}>
          <h4 className={'card__title'}>Demo | ColorsNames</h4>
        </div>
        <Highlight
          language={'javascript'}
          code={`(() => {
  const hex = ColorsNames.Arancio.hex;
  const rgb = Convert.rgb.string(ColorsNames.Arancio.rgb);
  const hsl = Convert.hsl.string(ColorsNames.Arancio.hsl);

  console.log('hex:', hex);
  console.log('rgb:', rgb);
  console.log('hsl:', hsl);
})();`}
        />
      </div>

      <div className={'card'}>
        <div className={'card__info'}>
          <h4 className={'card__title'}>outpot</h4>
        </div>
        <Highlight
          language={'bash'}
          code={`hex: #ff7013
rgb: rgb(255,112,19)
hsl: hsl(24,100%,54%)`}
        />
      </div>
    </>
  );
};

export default index;
