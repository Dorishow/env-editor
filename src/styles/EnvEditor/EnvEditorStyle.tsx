import { styled } from "@styles/stitchesConfig";

export const FileInput = styled("article", {
  backgroundColor: "$gray1",
  py: "$1",
  filter: "$shadows$drop_shadow",
  display: "flex",
  alignItems: "center",
  gap: "$2",
  fontSize: "$1",
  fontWeight: "bold",
  px: "$5",

  variants: {
    type: {
      empty: {
        color: "$primary",
      },
      filling: {
        color: "$primary",
        border: "1px dashed $primary",
        borderRadius: "$radii1",
        backgroundColor: "$gray4",
      },
      filled: {
        color: "$gray4",
      },
    },
  },
});
