import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import About from "../src/pages/About";
import NotFound from "../src/pages/NotFound";
import Menu from "../src/components/menu/Menu"
import ListTasks from "../src/pages/ListTasks";
import { ChakraProvider, useColorMode, IconButton, ColorModeProvider } from '@chakra-ui/react'
import theme from "./theme";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
   
   <ChakraProvider theme={theme}>
    <ColorModeProvider>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          size="md"
          onClick={toggleColorMode}
          position="fixed"
          top="1rem"
          right="1rem"
        />
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<ListTasks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </ColorModeProvider>
   </ChakraProvider>
   
  );
}

export default App;
