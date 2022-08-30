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
              code={'import { Convert } from "sptruz";'}
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
                'import { Convert } from "https://deno.land/x/sptruz/mod.ts";'
              }
            />
          </div>
        </TabPanel>
      </Tabs>

      <div className={'card'}>
        <div className={'card__info'}>
          <h4 className={'card__title'}>Convert</h4>
          <p className={'card__description'}>You can convert between:</p>
        </div>
        <Highlight
          language={'bash'}
          code={`Convert
  ├── hex
  │   └── rgb
  ├── hsl
  │   ├── rgb
  │   └── string
  └── rgb
      ├── hex
      ├── hsl
      └── string`}
        />
      </div>

      <div className={'card'}>
        <div className={'card__info'}>
          <h4 className={'card__title'}>Convert | HEX</h4>
          <p className={'card__description'}>HEX to RGB</p>
        </div>
        <Highlight
          language={'javascript'}
          code={`(() => {
  const color = '#ff0000';
  const rgb = Convert.hex.rgb(color);

  console.log('rgb', rgb);
})();

// output:
// rgb [ 255, 0, 0, 1 ]`}
        />
      </div>

      <div className={'card'}>
        <div className={'card__info'}>
          <h4 className={'card__title'}>Convert | HSL</h4>
          <p className={'card__description'}>HSL to RGB</p>
          <p className={'card__description'}>HSL to string</p>
        </div>
        <Highlight
          language={'javascript'}
          code={`(() => {
  const color = [0, 100, 50];
  const rgb = Convert.hsl.rgb(color);
  const string = Convert.hsl.string(color);

  console.log('rgb', rgb);
  console.log('string', string);
})();

// output:
// rgb [ 255, 0, 0 ]
// string hsl(0,100%,50%)`}
        />
      </div>

      <div className={'card'}>
        <div className={'card__info'}>
          <h4 className={'card__title'}>Convert | RGB</h4>
          <p className={'card__description'}>RGB to HEX</p>
          <p className={'card__description'}>RGB to HSL</p>
          <p className={'card__description'}>RGB to string</p>
        </div>
        <Highlight
          language={'javascript'}
          code={`(() => {
  const color = [255, 0, 0];
  const hex = Convert.rgb.hex(color);
  const hsl = Convert.rgb.hsl(color);
  const string = Convert.rgb.string(color);

  console.log('hex', hex);
  console.log('hsl', hsl);
  console.log('string', string);
})();

// output:
// hex #ff0000
// hsl [ 0, 100, 50 ]
// string rgb(255,0,0)`}
        />
      </div>
    </>
  );
};

export default index;
