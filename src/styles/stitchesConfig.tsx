import { createStitches } from "@stitches/react";

export const colors = {
  primary: "#1A73E8",
  gray1: "#FFFFFF",
  gray2: "#E7EAF0",
  gray3: "#CCD2DE",
  gray4: "#6B6F74",
};

export const { styled, css } = createStitches({
  theme: {
    colors,
    space: {
      0: "0px",
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56px",
      8: "64px",
      9: "72px",
      10: "80px",
    },
    fontSizes: {
      0: "0px",
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56px",
      8: "64px",
      9: "72px",
      10: "80px",
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    radii: {
      radii1: "20px",
      card: "25px",
    },
    shadows: {
      drop_shadow: "drop-shadow(0px 4px 100px rgb(231, 234, 240))",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {
      dashedBorder: "1px solid $primary",
    },
    zIndices: {},
    transitions: {},
  },
  media: {
    bp1: "(min-width: 480px)",
    bp2: "(min-width: 640px)",
    bp3: "(min-width: 768px)",
    bp4: "(min-width: 1024px)",
  },
  utils: {
    mx: (value: string) => ({ marginLeft: value, marginRight: value }),
    my: (value: string) => ({ marginTop: value, marginBottom: value }),
    px: (value: string) => ({ paddingLeft: value, paddingRight: value }),
    py: (value: string) => ({ paddingTop: value, paddingBottom: value }),
    bg: (value: string) => ({ backgroundColor: value }),
  },
});
