import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutAuthor from "./pages/AboutAuthor";
import AboutApp from "./pages/AboutApp";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/about-app" element={<AboutApp />} />
      <Route path="/about/about-author" element={<AboutAuthor />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
