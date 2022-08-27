import clamp from '../../utils/clamp.util';

import { RGBSchema, RGB } from '../../types';

const component2hex = (val: number) => {
  const value = Math.round(clamp(val, 0, 255));
  const hex = value.toString(16);

  return hex.length == 1 ? '0' + hex : hex;
};

const rgb2hex = (rgb: RGB) => {
  if (!RGBSchema.safeParse(rgb).success) {
    throw new TypeError(`Input should be a valid RGB color: ${rgb}`);
  }

  const alpha = rgb.length === 4 ? component2hex(rgb[3] * 255) : '';

  return (
    '#' +
    component2hex(rgb[0]) +
    component2hex(rgb[1]) +
    component2hex(rgb[2]) +
    alpha
  );
};

export default rgb2hex;
