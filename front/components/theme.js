const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  buttonSize: calcRem(35),
  titleSize: calcRem(50),
};

const paddings = {
  xsmall: calcRem(5),
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const margins = {
  xsmall: calcRem(5),
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const colors = {
  black: "#000000",
  white: "#FFFFFF",
  gray_1: "#d6d6c2",
  gray_2: "#767676",
  gray_3: "#f4f4f4",
  gray_4: "#e0e0d1",
  blue_1: "#33ccff",
  blue_2: "#0099cc",
  pink: "#eb2f96",
  hover: "rgba(153, 204, 255,0.2)",
  hover_gray: "rgb(234, 234, 225,0.4)",
  disabled: "#b3ecff",
  gradient:
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(220,245,149,1) 0%, rgba(0,203,255,0.8662815467984069) 100%)",
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "767px",
  tabletL: "1024px",
  pcS: "1279px",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
  pcS: `only screen and (max-width: ${deviceSizes.pcS})`,
};

const theme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
  paddings,
  margins,
};

export default theme;
