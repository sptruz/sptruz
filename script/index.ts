import fs from 'fs';
import path from 'path';

import data from './data/colors.json';

(() => {
  const color = {};

  data.forEach((item) => {
    color[item.name] = {
      hex: item.hex,
      hsl: item.hsl,
      rgb: item.rgb,
    };
  });

  const outPathts = path.join(__dirname, '../src/data/colors.data.ts');

  fs.writeFileSync(
    outPathts,
    `const ColorName = ${JSON.stringify(
      color,
    )}${'\r\n'}export default ColorName;`,
    'utf8',
  );
})();
