const hsl2string = (hsl: number[]) => {
  if (hsl.length === 4) {
    const scheme = 'hsla';
    const _hsl4: [number, string, string, number] = [
      Math.round(hsl[0]),
      Math.round(hsl[1]) + '%',
      Math.round(hsl[2]) + '%',
      Math.round(hsl[0]),
    ];

    return `${scheme}(${_hsl4.join(',')})`;
  }

  const scheme = 'hsl';

  const _hsl3: [number, string, string] = [
    Math.round(hsl[0]),
    Math.round(hsl[1]) + '%',
    Math.round(hsl[2]) + '%',
  ];

  return `${scheme}(${_hsl3.join(',')})`;
};

export default hsl2string;
