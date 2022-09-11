import { expect, test } from '@jest/globals';

import ColorName from '@sptruz/color-name';
import convert from '@sptruz/convert';

import Sptruz from '../index';

test('sptruz by hax color', async () => {
  const color = new Sptruz(ColorName['100Mph'].hex);

  expect(color).toEqual({
    rgb: [201, 63, 56],
    alpha: 1,
    type: 'base',
    weight: 0,
  });
});

test('sptruz by rgb color', async () => {
  const color = new Sptruz(
    convert.rgb.string(ColorName['20000LeaguesUndertheSea'].rgb),
  );

  expect(color).toEqual({
    rgb: [25, 25, 112],
    alpha: 1,
    type: 'base',
    weight: 0,
  });
});

test('sptruz by hsl color', async () => {
  const color = new Sptruz(convert.hsl.string(ColorName['PuffyPillow'].hsl));

  expect(color).toEqual({
    rgb: [232, 229, 222],
    alpha: 1,
    type: 'base',
    weight: 0,
  });
});

test('sptruz tint', async () => {
  const color = new Sptruz(ColorName['AhoyBlue'].hex);

  expect(color.tint()).toEqual({
    rgb: [128, 193, 208],
    alpha: 1,
    type: 'tint',
    weight: 50,
  });
});

test('sptruz tints', async () => {
  const color = new Sptruz(ColorName.Zen.hex);

  expect(color.tints()).toEqual([
    { rgb: [231, 236, 239], alpha: 1, type: 'tint', weight: 50 },
    {
      rgb: [255, 255, 255],
      alpha: 1,
      type: 'tint',
      weight: 100,
    },
  ]);
});

test('sptruz shade', async () => {
  const color = new Sptruz(ColorName['3AMinShibuya'].hex);

  expect(color.shade()).toEqual({
    rgb: [17, 43, 60],
    alpha: 1,
    type: 'shade',
    weight: 50,
  });
});

test('sptruz shades', async () => {
  const color = new Sptruz(ColorName['CafAuLait'].hex);

  expect(color.shades()).toEqual([
    { rgb: [83, 62, 46], alpha: 1, type: 'shade', weight: 50 },
    { rgb: [0, 0, 0], alpha: 1, type: 'shade', weight: 100 },
  ]);
});

test('sptruz all', async () => {
  const color = new Sptruz(ColorName.Windjammer.hex);

  expect(color.all()).toEqual([
    {
      rgb: [255, 255, 255],
      alpha: 1,
      type: 'tint',
      weight: 100,
    },
    { rgb: [239, 246, 252], alpha: 1, type: 'tint', weight: 90 },
    { rgb: [224, 237, 249], alpha: 1, type: 'tint', weight: 80 },
    { rgb: [208, 228, 245], alpha: 1, type: 'tint', weight: 70 },
    { rgb: [192, 219, 242], alpha: 1, type: 'tint', weight: 60 },
    { rgb: [177, 210, 239], alpha: 1, type: 'tint', weight: 50 },
    { rgb: [161, 201, 236], alpha: 1, type: 'tint', weight: 40 },
    { rgb: [145, 192, 233], alpha: 1, type: 'tint', weight: 30 },
    { rgb: [129, 183, 229], alpha: 1, type: 'tint', weight: 20 },
    { rgb: [114, 174, 226], alpha: 1, type: 'tint', weight: 10 },
    { rgb: [98, 165, 223], alpha: 1, type: 'base', weight: 0 },
    { rgb: [88, 149, 201], alpha: 1, type: 'shade', weight: 10 },
    { rgb: [78, 132, 178], alpha: 1, type: 'shade', weight: 20 },
    { rgb: [69, 115, 156], alpha: 1, type: 'shade', weight: 30 },
    { rgb: [59, 99, 134], alpha: 1, type: 'shade', weight: 40 },
    { rgb: [49, 83, 112], alpha: 1, type: 'shade', weight: 50 },
    { rgb: [39, 66, 89], alpha: 1, type: 'shade', weight: 60 },
    { rgb: [29, 50, 67], alpha: 1, type: 'shade', weight: 70 },
    { rgb: [20, 33, 45], alpha: 1, type: 'shade', weight: 80 },
    { rgb: [10, 16, 22], alpha: 1, type: 'shade', weight: 90 },
    { rgb: [0, 0, 0], alpha: 1, type: 'shade', weight: 100 },
  ]);
});

test('sptruz get HEX', async () => {
  const color = new Sptruz(ColorName.Viridian.hex);

  expect(color.getHEX).toEqual('#1e9167');
});

test('sptruz get RGB', async () => {
  const color = new Sptruz(ColorName.Tofu.hex);

  expect(color.getRGB).toEqual('rgb(232,227,217)');
});

test('sptruz get HSL', async () => {
  const color = new Sptruz(ColorName['SilkenGold'].hex);

  expect(color.getHSL).toEqual('hsl(399,454%,179%)');
});

test('sptruz set color', async () => {
  const color = new Sptruz(ColorName.Tofu.hex);

  expect(
    color.setColor(convert.rgb.string(ColorName['PerfumeHaze'].rgb)),
  ).toEqual({ rgb: [243, 233, 247], alpha: 1, type: 'base', weight: 0 });
});
