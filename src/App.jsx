import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "../src/pages/home";
import About from "../src/pages/About";
import NotFound from "../src/pages/NotFound";
import Menu from "../src/components/menu/Menu";
import ListTasks from "../src/pages/ListTasks";
import {
  ChakraProvider,
  Button,
  CSSReset,
  ColorModeProvider,
  useColorMode,
  Box,
  Flex,
} from "@chakra-ui/react";
import { lightTheme, darkTheme } from "../src/themes"; // Importa tus temas claro y oscuro
import Login from "./pages/login";
import Register from "./pages/register";
import ResetPassword from "./pages/reset-password";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
      <ColorModeProvider value={colorMode}>
        <Router>
          <Flex flexDirection="column" minHeight="100vh">
            <Box p={4}>
              <Button
                onClick={toggleColorMode}
                leftIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              >
                {colorMode === "dark" ? "" : ""}
              </Button>
            </Box>
            {isLoggedIn && <Menu />} {/* Muestra el menú solo si isLoggedIn es true */}
            <Box flex="1">
              <Routes>
                <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route
                  path="/home"
                  element={isLoggedIn ? <Home /> : <Navigate to="/" />}
                />
                <Route
                  path="/about"
                  element={isLoggedIn ? <About /> : <Navigate to="/" />}
                />
                <Route
                  path="/tasks"
                  element={isLoggedIn ? <ListTasks /> : <Navigate to="/" />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Box>
          </Flex>
        </Router>
      </ColorModeProvider>
    </ChakraProvider>
  );
}


export default App;
