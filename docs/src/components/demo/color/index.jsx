import React, { FC, useCallback, useEffect, useState } from 'react';
import { ColorsNames, Convert } from 'sptruz';

import ColorsNamesData from '@/data/colors.json';
import Highlight from '@/ui/highlight';

import { filterIt } from './utils/filterIt.util';
import initialItems from './utils/initialItems.util';

const Color = () => {
  const [items, setItems] = useState(initialItems(ColorsNamesData));

  const filterList = useCallback(({ target }) => {
    const searchQuery = target.value.toLowerCase();
    const updatedList = filterIt(searchQuery, initialItems(ColorsNamesData));
    setItems(updatedList);
  }, []);

  useEffect(() => {
    setItems(initialItems(ColorsNamesData));
  }, []);

  return (
    <>
      <section className={'colors'}>
        <section id="search" className={'section__search'}>
          <input
            className={'section__search-input'}
            type="text"
            placeholder="Search"
            onChange={filterList}
          />
        </section>

        <section className={'colors__container'}>
          {items.map(({ name }, index) => (
            <div key={index}>
              <div className={'card'}>
                <div
                  className={'color'}
                  style={{
                    '--color': `${ColorsNames[name].hex}`,
                  }}
                ></div>
                <div className={'card__info'}>
                  <h4 className={'card__title'}>{name}</h4>
                </div>
                <Highlight
                  language={'javascript'}
                  code={`// Name: ${name}
// HEX: ${ColorsNames[name].hex}
// RGB: ${Convert.rgb.string(ColorsNames[name].rgb)}
// HSL: ${Convert.hsl.string(ColorsNames[name].hsl)}`}
                />
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default React.memo(Color);
