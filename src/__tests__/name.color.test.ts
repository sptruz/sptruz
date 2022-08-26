import { expect, test } from '@jest/globals';

import { ColorsNames } from '../index';

test('color name rgb', async () => {
  const color = ColorsNames.Red.rgb;

  expect(color).toEqual([255, 0, 0]);
});

test('color name hex', async () => {
  const color = ColorsNames.Red.hex;

  expect(color).toEqual('#ff0000');
});
