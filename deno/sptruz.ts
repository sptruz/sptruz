import convert from 'https://deno.land/x/sptruz_convert@0.0.0-beta.0.0.1/mod.ts';
import mix from 'https://deno.land/x/sptruz_mix@0.0.0-beta.0.0.0/mod.ts';
import parse from 'https://deno.land/x/sptruz_parse@0.0.0-beta.0.0.0/mod.ts';

class Sptruz {
  private rgb: number[];
  private alpha: number;
  private type: 'base' | 'tint' | 'shade';
  private weight: number;

  constructor(
    _color = '#000',
    type: 'base' | 'tint' | 'shade' = 'base',
    weight = 0,
  ) {
    [this.rgb, this.alpha, this.type, this.weight] = [
      [0, 0, 0],
      1,
      type,
      weight,
    ];

    const color = _color === null ? '#000' : _color;
    if (typeof color !== 'string')
      throw new TypeError(`Input should be a string: ${color}`);

    const parsed = parse(color);
    if (!parsed) throw new Error(`Unable to parse color from string: ${color}`);

    return this.setFrom(parsed.type.toLowerCase(), [
      ...parsed.values,
      parsed.alpha,
    ]);
  }

  get getHEX() {
    return convert.rgb.hex(
      this.alpha >= 1 ? this.rgb : [...this.rgb, this.alpha],
    );
  }

  get getHSL() {
    return convert.hsl.string(convert.hsl.rgb(this.rgb));
  }

  get getRGB() {
    return convert.rgb.string(this.rgb);
  }

  setColor(color: string) {
    const parsed = parse(color);
    if (!parsed) return null;

    return this.setFrom(parsed.type.toLowerCase(), [
      ...parsed.values,
      parsed.alpha,
    ]);
  }

  tint(weight = 50) {
    return new Sptruz(
      `rgb(${mix('#fff', convert.rgb.string(this.rgb), weight)!.rgba})`,
      'tint',
      weight,
    );
  }

  tints(weight = 50) {
    return Array.from({ length: 100 / weight }, (_, i) =>
      this.tint((i + 1) * weight),
    );
  }

  shade(weight = 50) {
    return new Sptruz(
      `rgb(${mix('#000', convert.rgb.string(this.rgb), weight)!.rgba})`,
      'shade',
      weight,
    );
  }

  shades(weight = 50) {
    return Array.from({ length: 100 / weight }, (_, i) =>
      this.shade((i + 1) * weight),
    );
  }

  all(weight = 10) {
    return [
      ...this.tints(weight).reverse(),
      Object.assign(this),
      ...this.shades(weight),
    ];
  }

  private setFrom(type: string, values: number[]) {
    if (type === 'rgb') return this.setFromRGB(values);
    if (type === 'hsl') return this.setFromHSL(values);

    throw new Error(`Unable to set color from ${type}`);
  }

  private setFromRGB([r, g, b, a]: number[]) {
    [this.rgb, this.alpha] = [[r, g, b], a];

    return this;
  }

  private setFromHSL([h, s, l, a]: number[]) {
    [this.rgb, this.alpha] = [convert.hsl.rgb([h, s, l]).map(Math.round), a];

    return this;
  }
}

export default Sptruz;
