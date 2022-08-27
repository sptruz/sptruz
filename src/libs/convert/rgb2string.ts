import { RGBSchema, RGB } from '../../types';

const rgb2string = (rgb: RGB) => {
  if (!RGBSchema.safeParse(rgb).success) {
    throw new TypeError(`Input should be a valid RGB color: ${rgb}`);
  }

  let scheme = 'rgb';

  if (rgb.length === 4) {
    scheme += 'a';
  }

  rgb[0] = Math.round(rgb[0]);
  rgb[1] = Math.round(rgb[1]);
  rgb[2] = Math.round(rgb[2]);

  return scheme + '(' + rgb.join(',') + ')';
};

export default rgb2string;
