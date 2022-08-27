import { z } from 'zod';
import { _HEX_REGEX } from '../constants/pattern.regex';

const HEXSchema = z.string().regex(_HEX_REGEX);
type HEX = z.infer<typeof HEXSchema>;

const HSLSchema = z.array(z.number()).min(3).max(4);
type HSL = z.infer<typeof HSLSchema>;

const RGBSchema = z.array(z.number()).min(3).max(4);
type RGB = z.infer<typeof RGBSchema>;

const ParseColorSchema = z.string();
type ParseColor = z.infer<typeof ParseColorSchema>;

const FirstColorSchema = z.string();
type FirstColor = z.infer<typeof FirstColorSchema>;
const SecondColorSchema = z.string();
type SecondColor = z.infer<typeof SecondColorSchema>;

const NumberSchema = z.number();
type Number = z.infer<typeof NumberSchema>;

export { HEXSchema, HEX };
export { HSLSchema, HSL };
export { RGBSchema, RGB };
export { ParseColorSchema, ParseColor };
export { FirstColorSchema, FirstColor, SecondColorSchema, SecondColor };
export { Number };
