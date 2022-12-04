import { styled } from "@styles/stitchesConfig";

export const Text = styled("p", {
  variants: {
    size: {
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
    },
    color: {
      primary: {
        color: "$primary",
      },
      light: {
        color: "$gray1",
      },
      dark: {
        color: "$gray4",
      },
    },
  },
});
