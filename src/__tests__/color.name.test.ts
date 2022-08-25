import { expect, test } from '@jest/globals';

import { ColorNameHex, ColorNameRGB } from '../index';

test('color name rgb', async () => {
  const red = ColorNameRGB.Red;

  expect(red).toEqual([255, 0, 0]);
});

test('color name hex', async () => {
  const red = ColorNameHex.Red;

  expect(red).toEqual('#ff0000');
});
