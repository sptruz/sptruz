import hex2rgb from './hex2rgb.ts';
import hsl2rgb from './hsl2rgb.ts';
import hsl2string from './hsl2string.ts';
import rgb2hex from './rgb2hex.ts';
import rgb2hsl from './rgb2hsl.ts';
import rgb2string from './rgb2string.ts';

export default {
  hex: {
    rgb: hex2rgb,
  },
  hsl: {
    rgb: hsl2rgb,
    string: hsl2string,
  },
  rgb: {
    hex: rgb2hex,
    hsl: rgb2hsl,
    string: rgb2string,
  },
};
