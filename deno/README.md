<div align="center">
  <img src="https://raw.githubusercontent.com/sptruz/sptruz/main/assets/logo.svg" alt="@MKAbuMattar/sptruz"
   width="400" height="200"
  />

  <h1>sptruz</h1>

<a href="https://sptruz.vercel.app/">https://sptruz.vercel.app/</a>

  <p>sptruz is a package for allows you to combine two colors in a variety of combinations and obtain CSS color tints and shades.</p>
</div>

## Installation

### Node/npm

```sh
#npm
npm install --save sptruz

#yarn
yarn add sptruz

#pnpm
pnpm add sptruz
```

### Deno

Unlike Node, Deno doesn't use a package management like NPM and instead depends on direct URL imports. You can access sptruz on deno.land/x. This is how the most recent version may be imported:

You can also specify a particular version:

```ts
import * as Sptruz from 'https://deno.land/x/sptruz@0.0.0-beta.0.1.0/mod.ts';
```

or letest version:

```ts
import * as Sptruz from 'https://deno.land/x/sptruz/mod.ts';
```

### CDN

```html
<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/sptruz/lib/index.umd.js"></script>

<!-- Unpkg -->
<script src="https://unpkg.com/sptruz/lib/index.umd.js"></script>
```

> NOTE: There isn't much of a change in how it's used, but the remainder of this README assumes you're using npm and importing straight from the sptruz.

## Basic usage

```ts
import Sptruz from 'sptruz';

(() => {
  // sptruz by hax color
  console.log(new Sptruz('#c93f38'));
  // output: Sptruz { rgb: [ 201, 63, 56 ], alpha: 1, type: 'base', weight: 0 }

  // sptruz by rgb color
  console.log(new Sptruz('rgb(25, 25, 112)'));
  // output: Sptruz { rgb: [ 25, 25, 112 ], alpha: 1, type: 'base', weight: 0 }

  // sptruz by hsl color
  console.log(new Sptruz('hsl(240, 100%, 50%)'));
  // output: Sptruz { rgb: [ 0, 0, 255 ], alpha: 1, type: 'base', weight: 0 }

  // sptruz tint
  console.log(new Sptruz('#80c1d0').tint());
  // output: Sptruz { rgb: [ 192, 224, 232 ], alpha: 1, type: 'tint', weight: 50 }

  // sptruz tints
  console.log(new Sptruz('#e7ecef').tints());
  // output:
  /*
    [
      Sptruz { rgb: [ 243, 246, 247 ], alpha: 1, type: 'tint', weight: 50 },
      Sptruz {
        rgb: [ 255, 255, 255 ],
        alpha: 1,
        type: 'tint',
        weight: 100
      }
    ]
  */

  // sptruz shade
  console.log(new Sptruz('#80c1d0').shade());
  // output: Sptruz { rgb: [ 64, 97, 104 ], alpha: 1, type: 'shade', weight: 50 }

  // sptruz shades
  console.log(new Sptruz('#e7ecef').shades());
  // output:
  /*
    [
      Sptruz {
        rgb: [ 116, 118, 120 ],
        alpha: 1,
        type: 'shade',
        weight: 50
      },
      Sptruz { rgb: [ 0, 0, 0 ], alpha: 1, type: 'shade', weight: 100 }
    ]
  */

  // sptruz all
  console.log(new Sptruz('#80c1d0').all());
  // output:
  /*
    [
      Sptruz {
        rgb: [ 255, 255, 255 ],
        alpha: 1,
        type: 'tint',
        weight: 100
      },
      Sptruz { rgb: [ 242, 249, 250 ], alpha: 1, type: 'tint', weight: 90 },
      Sptruz { rgb: [ 230, 243, 246 ], alpha: 1, type: 'tint', weight: 80 },
      Sptruz { rgb: [ 217, 236, 241 ], alpha: 1, type: 'tint', weight: 70 },
      Sptruz { rgb: [ 204, 230, 236 ], alpha: 1, type: 'tint', weight: 60 },
      Sptruz { rgb: [ 192, 224, 232 ], alpha: 1, type: 'tint', weight: 50 },
      Sptruz { rgb: [ 179, 218, 227 ], alpha: 1, type: 'tint', weight: 40 },
      Sptruz { rgb: [ 166, 212, 222 ], alpha: 1, type: 'tint', weight: 30 },
      Sptruz { rgb: [ 153, 205, 217 ], alpha: 1, type: 'tint', weight: 20 },
      Sptruz { rgb: [ 141, 199, 213 ], alpha: 1, type: 'tint', weight: 10 },
      Sptruz { rgb: [ 128, 193, 208 ], alpha: 1, type: 'base', weight: 0 },
      Sptruz {
        rgb: [ 115, 174, 187 ],
        alpha: 1,
        type: 'shade',
        weight: 10
      },
      Sptruz {
        rgb: [ 102, 154, 166 ],
        alpha: 1,
        type: 'shade',
        weight: 20
      },
      Sptruz { rgb: [ 90, 135, 146 ], alpha: 1, type: 'shade', weight: 30 },
      Sptruz { rgb: [ 77, 116, 125 ], alpha: 1, type: 'shade', weight: 40 },
      Sptruz { rgb: [ 64, 97, 104 ], alpha: 1, type: 'shade', weight: 50 },
      Sptruz { rgb: [ 51, 77, 83 ], alpha: 1, type: 'shade', weight: 60 },
      Sptruz { rgb: [ 38, 58, 62 ], alpha: 1, type: 'shade', weight: 70 },
      Sptruz { rgb: [ 26, 39, 42 ], alpha: 1, type: 'shade', weight: 80 },
      Sptruz { rgb: [ 13, 19, 21 ], alpha: 1, type: 'shade', weight: 90 },
      Sptruz { rgb: [ 0, 0, 0 ], alpha: 1, type: 'shade', weight: 100 }
    ]
  */

  // sptruz get hex color
  console.log(new Sptruz('#80c1d0').tint().getHEX);
  // output: #c0e0e8

  // sptruz get rgb color
  console.log(new Sptruz('#80c1d0').shade().getRGB);
  // output: rgb(64,97,104)

  // sptruz get hsl color
  console.log(new Sptruz('#80c1d0').shade().getHSL);
  // output:hsl(257,255%,275%)

  // sptruz set color
  console.log(new Sptruz('#80c1d0').setColor('#c93f38'));
  // output: Sptruz { rgb: [ 201, 63, 56 ], alpha: 1, type: 'base', weight: 0 }
})();
```

## Supports

- color value
  - HEX/a (hexadecimal) | example: #FF0000, #FF0000FF, #F00, #F00F
  - RGB/a (red, green, blue) | example: rgb(255, 0, 0), rgb(100%, 0%, 0%), rgba(255, 0, 0, 0.5), rgba(100%, 0%, 0%, 50%)
  - HSL/a (hue, saturation, lightness) | example: hsl(0, 100%, 50%), hsl(0turn, 100%, 50%), hsl(0rad, 100%, 50%), hsl(0deg, 100%, 50%), hsla(0, 100%, 50%, 0.5), hsla(0turn, 100%, 50%, 50%), hsla(0rad, 100%, 50%, 50%), hsla(0deg, 100%, 50%, 50%)
- color name
  - example: red, green, blue, yellow, orange, purple, pink, brown, black, white, gray, silver, gold, cyan, magenta, lime, maroon, navy, olive, teal, aqua, fuchsia, transparent.

## API

### Sptruz constructor

`@param color: string` CSS color string

`@return Sptruz`

### setColor

`@param color: string` CSS color string

`@return Sptruz`

### tint

`@param weight: number` tint weight (default: 50)

`@return Sptruz`

### tints

`@param weight: number` tints weight (default: 50)

`@return Sptruz[]`

### shade

`@param weight: number` shade weight (default: 50)

`@return Sptruz`

### shades

`@param weight: number` shades weight (default: 50)

`@return Sptruz[]`

### all

`@return Sptruz[]`

### getHEX

`@return string`

### getRGB

`@return string`

### getHSL

`@return string`

## License

sptruz is licensed under the [MIT License](https://raw.githubusercontent.com/sptruz/sptruz/main/LICENSE).

Created with ♥ by [@MKAbuMattar](https://github.com/MKAbuMattar).
