import { expect, test } from '@jest/globals';

import {
  ColorNameHEX,
  ColorNameHSL,
  ColorNameRGB,
  Convert,
  Mix,
} from '../index';

test('mix color hsl with rgb', async () => {
  const color = Mix(
    Convert.hsl.string(ColorNameHSL.Red),
    Convert.rgb.string(ColorNameRGB.Blue),
  );

  expect(color).toEqual({
    hex: '#800080',
    hexa: '#800080ff',
    rgb: [128, 0, 128],
    rgba: [128, 0, 128, 1],
    hsl: [300, 100, 25],
    hsla: [300, 100, 25, 1],
  });
});

test('mix color hsl with hex', async () => {
  const color = Mix(
    Convert.hsl.string(ColorNameHSL['Baby Blue']),
    ColorNameHEX['Radiant Sunrise'],
    30,
  );

  expect(color).toEqual({
    hex: '#d8c35f',
    hexa: '#d8c35fff',
    rgb: [216, 195, 95],
    rgba: [216, 195, 95, 1],
    hsl: [50, 61, 61],
    hsla: [50, 61, 61, 1],
  });
});
