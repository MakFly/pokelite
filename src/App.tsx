import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Layout from "./Layout";
import { ThemeProvider } from "@/components/theme-provider";
import Game from "./pages/Game";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          {/* Routes sans le Layout */}
          <Route path="/games" element={<Game />} />

          {/* Routes avec le Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
