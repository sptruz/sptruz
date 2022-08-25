import fs from 'fs';
import path from 'path';

import data from './data/colors.json';

(() => {
  const rgb = {};
  const hex = {};

  data.forEach((item) => {
    const key = item.name;
    const hexValue = item.hex;
    const rgbValue = item.rgb;

    hex[key] = hexValue;
    rgb[key] = rgbValue;
  });

  const outPathRgbJson = path.join(__dirname, './data/colors.rgb.json');
  const outPathHexJson = path.join(__dirname, './data/colors.hex.json');

  const outPathRgbts = path.join(__dirname, '../src/data/colors.rgb.data.ts');
  const outPathHexts = path.join(__dirname, '../src/data/colors.hex.data.ts');

  fs.writeFileSync(outPathRgbJson, JSON.stringify(rgb), 'utf8');
  fs.writeFileSync(outPathHexJson, JSON.stringify(hex), 'utf8');

  fs.writeFileSync(
    outPathRgbts,
    `const ColorNameRGB = ${JSON.stringify(
      rgb,
    )}${'\r\n'}export default ColorNameRGB;`,
    'utf8',
  );
  fs.writeFileSync(
    outPathHexts,
    `const ColorNameHEX = ${JSON.stringify(
      hex,
    )}${'\r\n'}export default ColorNameHEX;`,
    'utf8',
  );
})();
