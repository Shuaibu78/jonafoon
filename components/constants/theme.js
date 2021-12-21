const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

export const media = {
  smallScreenLaptop: customMediaQuery(1024),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};

export const Colors = {
  primaryColor: "#0093DD",
  secondryColor: "#0083C4",
  sectionColor: "#F9F9F9",
  white: "#FFFFFF",
  black: "#000000",
};

export const FontSizes = {
  headerFontSize: "32px",
  titleFontSize: "24px",
  secondaryFontSize: "16px",
  cardTitleFontSize: "14px",
  paragraphFontSize: "12px",
};

export const BoxShadow = "4px 4px 30px rgba(24, 88, 177, 0.5)";
export const SmallerBoxShadow = "4px 4px 20px rgba(24, 88, 177, 0.2)";