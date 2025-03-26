export const colors = {
  primary: {
    100: '#FFD8A8',
    200: '#FFC078',
    300: '#FFA94D',
    400: '#FF881B',
    500: '#F76707',
    600: '#E8590C',
    700: '#F6F6F6',
  },
  secondary: {
    50: '#F5F9FF',
    100: '#FFF9DB',
    200: '#FFF3BF',
    300: '#FFEC99',
    400: '#FFE066',
    500: '#FFD951',
    600: '#FFCD1B',
    700: '#FFB509',
    800: '#F59F00',
  },
  tertiary: {
    50: '#EDEDEF',
    100: '#878787',
    200: '#EBE9EA',
    300: '#C2C0C1',
    400: '#9B9798',
    500: '#707070',
    600: '#555555',
    700: '#2E3233',
    800: '#000000',
  },
};

export const fontWeight = {
  thin: 100,
  extraThin: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export const colorTypes = Object.keys(colors);
export const fontWeightTypes = Object.keys(fontWeight);

const theme = {
  color: colors,
  fontWeight,
};

export default theme;
