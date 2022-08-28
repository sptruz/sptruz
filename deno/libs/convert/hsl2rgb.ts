const hsl2rgb = (hsl: number[]) => {
  // check if input is valid
  if ((hsl.length !== 3 && hsl.length !== 4) || typeof hsl === 'string') {
    throw new TypeError(`Input should be a valid HSL color: ${hsl}`);
  }

  const h = hsl[0] / 360;
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;

  let tmp1;
  let tmp2;

  let val;

  if (s == 0) return [l * 255, l * 255, l * 255];

  if (l < 0.5) tmp1 = l * (1 + s);
  else tmp1 = l + s - l * s;

  const tmp = 2 * l - tmp1;

  const rgb = [0, 0, 0];

  for (let i = 0; i < 3; i++) {
    tmp2 = h + (1 / 3) * -(i - 1);
    tmp2 < 0 && tmp2++;
    tmp2 > 1 && tmp2--;

    if (6 * tmp2 < 1) val = tmp + (tmp1 - tmp) * 6 * tmp2;
    else if (2 * tmp2 < 1) val = tmp1;
    else if (3 * tmp2 < 2) val = tmp + (tmp1 - tmp) * (2 / 3 - tmp2) * 6;
    else val = tmp;

    rgb[i] = val * 255;
  }

  return rgb;
};

export default hsl2rgb;
