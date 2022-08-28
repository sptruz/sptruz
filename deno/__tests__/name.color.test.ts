import { expect } from "https://deno.land/x/expect@v0.2.6/mod.ts";
const test = Deno.test;

import { ColorsNames } from '../index.ts';

test('color name rgb', async () => {
  const color = ColorsNames.Red.rgb;

  expect(color).toEqual([255, 0, 0]);
});

test('color name hex', async () => {
  const color = ColorsNames.Red.hex;

  expect(color).toEqual('#ff0000');
});
