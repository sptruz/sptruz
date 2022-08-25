const COMPONENT = /-?\d+(\.\d+)?%?/g;

const FLOAT = '-?\\d*(?:\\.\\d+)';

const NUMBER = `(${FLOAT}?)`;
const PERCENTAGE = `(${FLOAT}?%)`;
const NUMBER_OR_PERCENTAGE = `(${FLOAT}?%?)`;

const PATTERN_HEX = /^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/;
const HEX_REGEX = new RegExp(PATTERN_HEX, 'i');

const PATTERN_HSL3 = `^
hsla?\\(
  \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,
  \\s*${PERCENTAGE}\\s*,
  \\s*${PERCENTAGE}\\s*
  (?:,\\s*${NUMBER_OR_PERCENTAGE}\\s*)?
\\)
$
`.replace(/\n|\s/g, '');
const HSL3_REGEX = new RegExp(PATTERN_HSL3);

const PATTERN_HSL4 = `^
hsla?\\(
  \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*
  \\s+${PERCENTAGE}
  \\s+${PERCENTAGE}
  \\s*(?:\\s*\\/\\s*${NUMBER_OR_PERCENTAGE}\\s*)?
\\)
$
`.replace(/\n|\s/g, '');
const HSL4_REGEX = new RegExp(PATTERN_HSL4);

const PATTERN_RGB3_NUMBER = `^
rgba?\\(
  \\s*${NUMBER}\\s*,
  \\s*${NUMBER}\\s*,
  \\s*${NUMBER}\\s*
  (?:,\\s*${NUMBER_OR_PERCENTAGE}\\s*)?
\\)
$
`.replace(/\n|\s/g, '');
const RGB3_NUMBER_REGEX = new RegExp(PATTERN_RGB3_NUMBER);

const PATTERN_RGB3_PERCENTAGE = `^
rgba?\\(
  \\s*${PERCENTAGE}\\s*,
  \\s*${PERCENTAGE}\\s*,
  \\s*${PERCENTAGE}\\s*
  (?:,\\s*${NUMBER_OR_PERCENTAGE}\\s*)?
\\)
$
`.replace(/\n|\s/g, '');
const RGB3_PERCENTAGE_REGEX = new RegExp(PATTERN_RGB3_PERCENTAGE);

const PATTERN_RGB4_NUMBER = `^
rgba?\\(
  \\s*${NUMBER}
  \\s+${NUMBER}
  \\s+${NUMBER}
  \\s*(?:\\s*\\/\\s*${NUMBER_OR_PERCENTAGE}\\s*)?
\\)
$
`.replace(/\n|\s/g, '');
const RGB4_NUMBER_REGEX = new RegExp(PATTERN_RGB4_NUMBER);

const PATTERN_RGB4_PERCENTAGE = `^
rgba?\\(
  \\s*${PERCENTAGE}
  \\s+${PERCENTAGE}
  \\s+${PERCENTAGE}
  \\s*(?:\\s*\\/\\s*${NUMBER_OR_PERCENTAGE}\\s*)?
\\)
$
`.replace(/\n|\s/g, '');
const RGB4_PERCENTAGE_REGEX = new RegExp(PATTERN_RGB4_PERCENTAGE);

const TRANSPARENT_PERCENTAGE = /^transparent$/;
const TRANSPARENT_REGEX = new RegExp(TRANSPARENT_PERCENTAGE, 'i');

export {
  COMPONENT,
  HEX_REGEX,
  HSL3_REGEX,
  HSL4_REGEX,
  RGB3_NUMBER_REGEX,
  RGB3_PERCENTAGE_REGEX,
  RGB4_NUMBER_REGEX,
  RGB4_PERCENTAGE_REGEX,
  TRANSPARENT_REGEX,
};
