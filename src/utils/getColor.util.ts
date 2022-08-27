import convert from '../libs/convert';
import clamp from './clamp.util';
import { z } from 'zod';

const StringOrNumberSchema = z.string().or(z.number());
type StringOrNumber = z.infer<typeof StringOrNumberSchema>;

const SpercentageSchema = z.string().regex(/^[0-9]+%$/);
type Spercentage = z.infer<typeof SpercentageSchema>;

const RGBaSchema = StringOrNumberSchema.array();
type RGBa = z.infer<typeof RGBaSchema>;

const parseRGB = (num: StringOrNumber) => {
  let n = num;
  if (typeof n !== 'number')
    n = n.endsWith('%') ? (parseFloat(n) * 255) / 100 : parseFloat(n);
  return clamp(Math.round(n), 0, 255);
};

const parsePercentage = (percentage: Spercentage) =>
  clamp(parseFloat(percentage), 0, 100);

const parseAlpha = (alpha: StringOrNumber) => {
  let a = alpha;
  if (typeof a !== 'number')
    a = a.endsWith('%') ? parseFloat(a) / 100 : parseFloat(a);
  return clamp(a, 0, 1);
};

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
  let hh = 0;
  if (h.endsWith('turn')) {
    hh = (parseFloat(h) * 360) / 1;
  } else if (h.endsWith('rad')) {
    hh = Math.round((parseFloat(h) * 180) / Math.PI);
  } else {
    hh = parseFloat(h);
  }
  return {
    type: 'hsl',
    values: [hh, parsePercentage(s), parsePercentage(l)],
    alpha: parseAlpha(a === null ? 1 : a),
  };
};

export { getHEX, getHSL, getRGB };
