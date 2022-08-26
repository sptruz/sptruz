import { expect, test } from '@jest/globals';

import { ColorNameHEX, ColorNameRGB } from '../index';

test('color name rgb', async () => {
  const red = ColorNameRGB.Red;

  expect(red).toEqual([255, 0, 0]);
});

test('color name hex', async () => {
  const red = ColorNameHEX.Red;

  expect(red).toEqual('#ff0000');
});
