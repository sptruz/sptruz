import { expect, test } from '@jest/globals';

import { Parse } from '../index';

test('parse by hax color', async () => {
  const red = Parse('#ff0000');

  expect(red).toEqual({ type: 'rgb', values: [255, 0, 0], alpha: 1 });
});

test('parse by rgb color', async () => {
  const red = Parse('rgb(255 0 0)');

  expect(red).toEqual({ type: 'rgb', values: [255, 0, 0], alpha: 1 });
});

test('parse by hsl color', async () => {
  const red = Parse('hsl(0deg 100% 50%)');

  expect(red).toEqual({ type: 'hsl', values: [0, 100, 50], alpha: 1 });
});

test('parse by color name', async () => {
  const red = Parse('red');

  expect(red).toEqual({ type: 'rgb', values: [255, 0, 0], alpha: 1 });
});
