import { expect, test } from '@jest/globals';

import Convert from '../libs/convert';

test('Convert HSL to RGB', async () => {
  const color = Convert.hsl.rgb([0, 100, 50]);

  expect(color).toEqual([255, 0, 0]);
});

test('Convert RGB to HEX', async () => {
  const color = Convert.rgb.hex([255, 0, 0]);

  expect(color).toEqual('#ff0000');
});

test('Convert RGB to HSL', async () => {
  const color = Convert.rgb.hsl([255, 0, 0]);

  expect(color).toEqual([0, 100, 50]);
});

test('Convert HEX to RGB', async () => {
  const color = Convert.hex.rgb('#ff0000');

  expect(color).toEqual([255, 0, 0, 1]);
});
