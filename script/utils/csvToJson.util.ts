import fs from 'fs';
import path from 'path';
import { hexToRgb } from './hexToRgb.util';

type Color = {
  name: string;
  hex: string;
  rgb: number[];
};

const csvToJson = (csvFilePath: string) => {
  const filePath = path.join(__dirname, csvFilePath);

  const data: string[] = fs
    .readFileSync(filePath, { encoding: 'utf-8' })
    .split('\n');

  const headers = data?.shift()?.split(',');

  const json: Color[] = [];

  data.forEach((item) => {
    let color: Color = {
      name: '',
      hex: '',
      rgb: [],
    };

    let row = item.split(',');
    for (let i = 0; i < headers!.length; i++) {
      color[headers![i]] = row[i];

      if (headers![i] === 'hex') {
        color['rgb'] = hexToRgb(row[i]);
      }
    }

    json.push(color);
  });

  const outPath = path.join(__dirname, '../data/colors.json');

  fs.writeFileSync(outPath, JSON.stringify(json), 'utf8');
};

(() => {
  csvToJson('../../color-names/dist/colornames.bestof.csv');
})();
