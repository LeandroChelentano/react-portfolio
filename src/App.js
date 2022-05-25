import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./componentes/home/Home";
import Projects from "./componentes/projects/Projects";
import Contact from "./componentes/contact/Contact";

import Nav from "./componentes/nav/Nav";

import { ThemeLanguajeContext } from "./ThemeLanguajeContext";
import { colors } from "./colors";
import Specific from "./componentes/specific/Specific";

export default function App() {
  const [theme, setTheme] = useState(null);
  const [scheme, setScheme] = useState(null);
  const [languaje, setLanguaje] = useState(null);

  useEffect(() => {
    if (!languaje) {
      const stored = localStorage.getItem("leandrochelentano.comlanguaje");

      if (!stored) {
        localStorage.setItem("leandrochelentano.comlanguaje", "en");
        setLanguaje("en");
      }

      if (stored !== "en" && stored !== "es") {
        localStorage.setItem("leandrochelentano.comlanguaje", "en");
        setLanguaje("en");
      }

      setLanguaje(stored);
    }

    if (!theme) {
      const stored = localStorage.getItem("leandrochelentano.comtheme");

      if (stored === "dark" || stored === "light") {
        setTheme(stored);
        setScheme(null);
        return;
      }

      console.log(`Re seteando el tema por defecto`);
      localStorage.setItem("leandrochelentano.comtheme", "dark");
      setTheme("dark");
      setScheme(null);
    }
  }, [languaje, theme, scheme]);

  if (!scheme) setScheme(theme === "dark" ? colors.dark : colors.light);

  return theme && scheme && languaje ? (
    <ThemeLanguajeContext.Provider
      value={{ theme, setTheme, scheme, setScheme, languaje, setLanguaje }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Nav>
                <Home />
              </Nav>
            }
          />
          <Route
            path="/projects"
            element={
              <Nav>
                <Projects />
              </Nav>
            }
          />
          <Route
            path="/projects/:project"
            element={
              <Nav>
                <Specific />
              </Nav>
            }
          />
          <Route
            path="/contact"
            element={
              <Nav>
                <Contact />
              </Nav>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeLanguajeContext.Provider>
  ) : (
    <h1>Loging</h1>
  );
}
