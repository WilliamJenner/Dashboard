export type Colour = {
  colorId: number;
  hexString: string;
  rgb: RGB;
  hsl: HSL;
  name: string;
};

export type RGB = {
  r: number;
  g: number;
  b: number;
};

export type HSL = {
  h: number;
  s: number;
  l: number;
};
