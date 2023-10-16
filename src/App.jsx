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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const [userId, setUserId] = useState(null);
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
                {colorMode === "dark" ? "Switch to Light" : "Switch to Dark"}
              </Button>
            </Box>
            {isAuthenticated && <Menu />}{" "}
            {/* Muestra el menú solo si isLoggedIn es true */}
            <Box flex="1">
              <Routes>
                <Route
                  path="/"
                  element={<Login setIsAuthenticated={setIsAuthenticated} setUserId={setUserId} />}
                />
                <Route path="/register" element={<Register />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route
                  path="/home"
                  element={isAuthenticated ? <Home /> : <Navigate to="/" />}
                />
                <Route
                  path="/about"
                  element={isAuthenticated ? <About /> : <Navigate to="/" />}
                />
                <Route
                  path="/tasks"
                  element={
                    isAuthenticated ? <ListTasks /> : <Navigate to="/" />
                  }
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
