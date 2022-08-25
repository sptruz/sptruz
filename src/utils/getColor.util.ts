import convert from '../libs/convert';
import clamp from './clamp.util';

const parseRGB = (num: any) => {
  let n = num;
  if (typeof n !== 'number')
    n = n.endsWith('%') ? (parseFloat(n) * 255) / 100 : parseFloat(n);
  return clamp(Math.round(n), 0, 255);
};

const parsePercentage = (percentage: any) =>
  clamp(parseFloat(percentage), 0, 100);

const parseAlpha = (alpha: any) => {
  let a = alpha;
  if (typeof a !== 'number')
    a = a.endsWith('%') ? parseFloat(a) / 100 : parseFloat(a);
  return clamp(a, 0, 1);
};

const getRGB = ([, r, g, b, a = 1]: any) => {
  return {
    type: 'rgb',
    values: [r, g, b].map(parseRGB),
    alpha: parseAlpha(a === null ? 1 : a),
  };
};

const getHEX = (hex: any) => {
  const [r, g, b, a] = convert.hex.rgb(hex);
  return getRGB([null, ...[r, g, b, a]]);
};

const getHSL = ([, h, s, l, a = 1]: any) => {
  let hh = h;
  if (hh.endsWith('turn')) {
    hh = (parseFloat(hh) * 360) / 1;
  } else if (hh.endsWith('rad')) {
    hh = Math.round((parseFloat(hh) * 180) / Math.PI);
  } else {
    hh = parseFloat(hh);
  }
  return {
    type: 'hsl',
    values: [hh, parsePercentage(s), parsePercentage(l)],
    alpha: parseAlpha(a === null ? 1 : a),
  };
};

export { getHEX, getHSL, getRGB };
