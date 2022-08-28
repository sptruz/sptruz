import { expect } from "https://deno.land/x/expect@v0.2.6/mod.ts";
const test = Deno.test;

import { ColorsNames, Convert, Mix } from '../index.ts';

test('mix color hsl with rgb', async () => {
  const color = Mix(
    Convert.hsl.string(ColorsNames.Red.hsl),
    Convert.rgb.string(ColorsNames.Blue.rgb),
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
    Convert.hsl.string(ColorsNames['Baby Blue'].hsl),
    ColorsNames['Radiant Sunrise'].hex,
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
