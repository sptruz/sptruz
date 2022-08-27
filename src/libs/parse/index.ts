import {
  HEX_REGEX,
  HSL3_REGEX,
  HSL4_REGEX,
  RGB3_NUMBER_REGEX,
  RGB3_PERCENTAGE_REGEX,
  RGB4_NUMBER_REGEX,
  RGB4_PERCENTAGE_REGEX,
  TRANSPARENT_REGEX,
} from '../../constants/pattern.regex';
import ColorsNames from '../../data/colors.data';
import { getHEX, getHSL, getRGB } from '../../utils/getColor.util';
import toLowerKeys from '../../utils/toLowerKeys.util';

import { ParseColorSchema, ParseColor } from '../../types';

const parse = (color: ParseColor) => {
  if (!ParseColorSchema.safeParse(color).success) {
    throw new TypeError(`Input should be a valid color: ${color}`);
  }

  const hex = HEX_REGEX.exec(color);
  if (hex) return getHEX(hex[0]);

  const hsl = HSL4_REGEX.exec(color) || HSL3_REGEX.exec(color);
  if (hsl) return getHSL([hsl[1], hsl[2], hsl[3]]);

  const rgb =
    RGB3_NUMBER_REGEX.exec(color) ||
    RGB3_PERCENTAGE_REGEX.exec(color) ||
    RGB4_NUMBER_REGEX.exec(color) ||
    RGB4_PERCENTAGE_REGEX.exec(color);

  if (rgb) return getRGB([rgb[1], rgb[2], rgb[3]]);

  const transparent = TRANSPARENT_REGEX.exec(color);
  if (transparent) return getRGB([0, 0, 0, 0]);

  const colorNameRGB = toLowerKeys(ColorsNames);

  const colorByName = colorNameRGB[color.toLowerCase()].rgb;

  if (colorByName)
    return getRGB([colorByName[0], colorByName[1], colorByName[2], 1]);

  return null;
};

export default parse;
