import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      body: {
        background: "#191919",
        color: "#F2F2F2",
        minHeight: "100vh",
      },
      button: {
        cursor: "pointer",
      },
    },
  },
});

export default theme;
