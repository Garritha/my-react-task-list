import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import About from "../src/pages/About";
import NotFound from "../src/pages/NotFound";
import Menu from "../src/components/menu/Menu"
import ListTasks from "../src/pages/ListTasks";
import Register from "./pages/register";
import ResetPassword from "./pages/restar-password";
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme";
import Login from "./pages/login";



function App() {
  return (
   
   <ChakraProvider theme={theme}>
   
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<ListTasks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
   </ChakraProvider>
   
  );
}

export default App;
