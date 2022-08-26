import hex2rgb from './hex2rgb';
import hsl2rgb from './hsl2rgb';
import hsl2string from './hsl2string';
import rgb2hex from './rgb2hex';
import rgb2hsl from './rgb2hsl';
import rgb2string from './rgb2string';

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
