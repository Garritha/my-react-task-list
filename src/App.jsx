import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import About from "../src/pages/About";
import NotFound from "../src/pages/NotFound";
import Menu from "../src/components/menu/Menu"
import ListTasks from "../src/pages/ListTasks";
<<<<<<< HEAD
import { ChakraProvider, useColorMode, IconButton, ColorModeProvider } from '@chakra-ui/react'
import theme from "./theme";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
=======
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme";
>>>>>>> a018da4372ded818c2db2186452a87f35a6fd56e


function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
   
   <ChakraProvider theme={theme}>
<<<<<<< HEAD
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
=======
   
>>>>>>> a018da4372ded818c2db2186452a87f35a6fd56e
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<ListTasks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
<<<<<<< HEAD
    </ColorModeProvider>
=======
>>>>>>> a018da4372ded818c2db2186452a87f35a6fd56e
   </ChakraProvider>
   
  );
}

export default App;
