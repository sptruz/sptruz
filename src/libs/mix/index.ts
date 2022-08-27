import convert from '../convert';
import parse from '../parse';

import { ParseColor } from '../../types';
import {
  FirstColorSchema,
  FirstColor,
  SecondColorSchema,
  SecondColor,
} from '../../types';

const parseColor = (color: ParseColor) => {
  const result = parse(color);

  if (result === null) return null;

  if (result.type === 'hsl') result.values = convert.hsl.rgb(result.values);

  return result;
};

const mix = (color1: FirstColor, color2: SecondColor, percentage = 50) => {
  if (
    !FirstColorSchema.safeParse(color1).success ||
    !SecondColorSchema.safeParse(color2).success
  ) {
    throw new TypeError(
      `Input should be a valid color: ${color1} or ${color2}`,
    );
  }
  const firstColor = parseColor(color1);
  const secondColor = parseColor(color2);

  if (firstColor === null || secondColor === null) return null;

  const p = Math.min(Math.max(0, percentage), 100) / 100.0;
  const w = p * 2 - 1;
  const a = firstColor.alpha - secondColor.alpha;
  const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
  const w2 = 1 - w1;

  const [r, g, b] = firstColor.values.map((_c, i) =>
    Math.round(firstColor.values[i] * w1 + secondColor.values[i] * w2),
  );

  const alpha = parseFloat(
    (firstColor.alpha * p + secondColor.alpha * (1 - p)).toFixed(8),
  );

  return {
    hex: convert.rgb.hex([r, g, b]),
    hexa: convert.rgb.hex([r, g, b, alpha]),
    rgb: [r, g, b],
    rgba: [r, g, b, alpha],
    hsl: [...convert.rgb.hsl([r, g, b]).map(Math.round)],
    hsla: [...convert.rgb.hsl([r, g, b]).map(Math.round), alpha],
  };
};

export default mix;
