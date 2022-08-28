import convert from '../libs/convert';
import clamp from './clamp.util';

const parseRGB = (num: number | string) => {
  let n = num;
  if (typeof n !== 'number') {
    n = n.endsWith('%') ? (parseFloat(n) * 255) / 100 : parseFloat(n);
  }

  return clamp(Math.round(n), 0, 255);
};

const parsePercentage = (percentage: string) => {
  return clamp(parseFloat(percentage), 0, 100);
};

const parseAlpha = (alpha: number | string) => {
  let a = alpha;
  if (typeof a !== 'number') {
    a = a.endsWith('%') ? parseFloat(a) / 100 : parseFloat(a);
  }

  return clamp(a, 0, 1);
};

type RGBa = [
  r: string | number,
  g: string | number,
  b: string | number,
  a?: number,
];

const getRGB = ([r, g, b, a = 1]: RGBa) => {
  return {
    type: 'rgb',
    values: [r, g, b].map(parseRGB),
    alpha: parseAlpha(a === null ? 1 : a),
  };
};

const getHEX = (hex: string) => {
  const [r, g, b, a] = convert.hex.rgb(hex);
  return getRGB([r, g, b, a]);
};

type HSLa = [h: string, s: string, l: string, a?: number];

const getHSL = ([h, s, l, a = 1]: HSLa) => {
  let _h = 0;
  if (h.endsWith('turn')) {
    _h = (parseFloat(h) * 360) / 1;
  } else if (h.endsWith('rad')) {
    _h = Math.round((parseFloat(h) * 180) / Math.PI);
  } else {
    _h = parseFloat(h);
  }
  return {
    type: 'hsl',
    values: [_h, parsePercentage(s), parsePercentage(l)],
    alpha: parseAlpha(a === null ? 1 : a),
  };
};

export { getHEX, getHSL, getRGB };
