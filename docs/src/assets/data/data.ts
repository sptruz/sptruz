const node = `#npm
npm install --save sptruz

#yarn
yarn add sptruz

#pnpm
pnpm add sptruz`;

const denolatest = `import { Sptruz } from "https://deno.land/x/sptruz/mod.ts";`;

const denospecifyversion = `import { Sptruz } from "https://deno.land/x/sptruz@0.0.0-beta.0.0.2/mod.ts";`;

const basicusage = `import { Sptruz, Convert, ColorsNames } from "sptruz";

(() => {
  const sptruz = new Sptruz(Convert.hsl.string(ColorsNames.Arancio.hsl));

  console.log(sptruz);

  console.log('Sptruz All:', sptruz.all());

  console.log('Sptruz tint:', sptruz.tint(0.5));

  console.log('Sptruz tints:', sptruz.tints(0.5));

  console.log('Sptruz shade:', sptruz.shade(0.5));

  console.log('Sptruz shades:', sptruz.shades(0.5));

  console.log('Sptruz HEX:', sptruz.getHEX);

  console.log('Sptruz RGB:', sptruz.getRGB);

  console.log('Sptruz HSL:', sptruz.getHSL);
})();`;

export default {
  installation: {
    node,
    deno: {
      latest: denolatest,
      specifyVersion: denospecifyversion,
    },
  },
  basicusage,
};
