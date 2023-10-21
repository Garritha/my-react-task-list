import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "../src/pages/home";
import About from "../src/pages/About";
import NotFound from "../src/pages/NotFound";
import Menu from "../src/components/menu/Menu";
import ListTasks from "../src/pages/ListTasks";
import ProfilePage from "../src/pages/profile";
import {
  ChakraProvider,
  Button,
  ColorModeProvider,
  useColorMode,
  Box,
  Flex,
} from "@chakra-ui/react";
import { lightTheme, darkTheme } from "../src/themes";
import Login from "./pages/login";
import Register from "./pages/register";
import ResetPassword from "./pages/reset-password";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import fondoLight from './assets/fondo.jpg'; // Ruta a la imagen de fondo para el modo claro
import fondoDark from './assets/fondo-2.jpg'; // Ruta a la imagen de fondo para el modo oscuro

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const [userId, setUserId] = useState(null);

  const lightModeBackground = `url(${fondoLight})`;
  const darkModeBackground = `url(${fondoDark})`;

  return (
    <ChakraProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
      <ColorModeProvider value={colorMode}>
        <Router>
          <div
            style={{
              background: colorMode === "dark" ? darkModeBackground : lightModeBackground,
              backgroundAttachment: "fixed",
              backgroundSize: "auto", // Ajusta la imagen al tamaño de la pantalla
              minHeight: "100vh", // Para que el contenedor cubra toda la pantalla
              animation: "para 50s infinite linear",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Flex flexDirection="column">
              <Box p={4}>
                <Button
                  onClick={toggleColorMode}
                  leftIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                >
                  {colorMode === "dark" ? "" : ""}
                </Button>
              </Box>
              {isAuthenticated && <Menu />}
              <Box flex="1">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Login
                        setIsAuthenticated={setIsAuthenticated}
                        setUserId={setUserId}
                      />
                    }
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
                    path="/profile"
                    element={isAuthenticated ? <ProfilePage /> : <Navigate to="/" />}
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
          </div>
        </Router>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
