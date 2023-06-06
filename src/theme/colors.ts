import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#bfb5ff",
  primaryBright: "#1890ff",
  primaryDark: "#bfb5ff",
  secondary: "white",
  success: "white",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#2891f9",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#303444",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "whitesmoke",
  tertiary: "whitesmoke",
  text: "black",
  textDisabled: "#BDC2C4",
  textSubtle: "black",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "white",
  background: "#303444",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "darkgray",
  primaryDark: "black",
  tertiary: "#27262c",
  text: "white",
  textDisabled: "#666171",
  textSubtle: "whitesmoke",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};