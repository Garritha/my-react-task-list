import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, CSSReset, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme"; // Importa el tema principal

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
