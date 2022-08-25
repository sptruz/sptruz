import hex2rgb from './hex2rgb';
import hsl2rgb from './hsl2rgb';
import rgb2hex from './rgb2hex';

export default {
  hex: {
    rgb: hex2rgb,
  },
  hsl: {
    rgb: hsl2rgb,
  },
  rgb: {
    hex: rgb2hex,
  },
};
