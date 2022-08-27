import { Number } from '../types';

const clamp = (num: Number, min: Number, max: Number) =>
  Math.min(Math.max(min, num), max);

export default clamp;
