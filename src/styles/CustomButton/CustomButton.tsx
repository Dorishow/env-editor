import { css } from "@styles/stitchesConfig";

export const customButtonStyle = css("button", {
  border: "none",
  width: "230px",
  height: "230px",
  cursor: "pointer",

  span: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },

  variants: {
    type: {
      lightBlue: {
        "&:hover": {},
      },
      darkBlue: {},
    },
  },
});
