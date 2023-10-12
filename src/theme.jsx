import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light", // Establece el modo claro como predeterminado
  },
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      body: {
        minHeight: "100vh",
      },
      button: {
        cursor: "pointer",
      },
    },
  },
});

export default theme;