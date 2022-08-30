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
              code={'import { Mix } from "sptruz";'}
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
              code={'import { Mix } from "https://deno.land/x/sptruz/mod.ts";'}
            />
          </div>
        </TabPanel>
      </Tabs>

      <div className={'card'}>
        <div className={'card__info'}>
          <h4 className={'card__title'}>Mix</h4>
          <p className={'card__description'}></p>
        </div>
        <Highlight
          language={'javascript'}
          code={`(() => {
  const color1 = 'rgb(233, 30, 99)';
  const color2 = 'rgb(255, 193, 7)';
  const mix = Mix(color1, color2);

  console.log('mix', mix);
})();

// output:
// mix {
//   hex: '#f47035',
//   hexa: '#f47035ff',
//   rgb: [ 244, 112, 53 ],
//   rgba: [ 244, 112, 53, 1 ],
//   hsl: [ 19, 90, 58 ],
//   hsla: [ 19, 90, 58, 1 ]
// }`}
        />
      </div>

      <div className={'card'}>
        <div className={'card__info'}>
          <h4 className={'card__title'}>Mix</h4>
          <p className={'card__description'}></p>
        </div>
        <Highlight
          language={'javascript'}
          code={`(() => {
  const color1 = 'hsl(340deg 82% 52%)';
  const color2 = 'hsl(45deg 100% 51%)';
  const percentage = 70;
  const mix = Mix(color1, color2, percentage);

  console.log('mix', mix);
})();

// output:
// mix {
//   hex: '#f04f47',
//   hexa: '#f04f47ff',
//   rgb: [ 240, 79, 71 ],
//   rgba: [ 240, 79, 71, 1 ],
//   hsl: [ 3, 85, 61 ],
//   hsla: [ 3, 85, 61, 1 ]
// }`}
        />
      </div>
    </>
  );
};

export default index;
