import { globalCss } from "."

export const globalStyled = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    background: "$gray900",
    color: "$gray100",
    "-webkit-font-smoothing-": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
})
