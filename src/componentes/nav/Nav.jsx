import React, { useContext, useEffect, useState } from "react";
import NavBtn from "./NavBtn";
import { ThemeLanguajeContext } from "../../ThemeLanguajeContext";
import Switch from "../Switch";
import ChangeLanguaje from "./ChangeLanguaje";

export default function Nav({ children }) {
  const { theme, languaje, setLanguaje, scheme } =
    useContext(ThemeLanguajeContext);

  const [mT, setMT] = useState(0);

  useEffect(() => {
    if (mT === 0) {
      const nav = document.querySelector("#nav");
      setMT(nav.offsetHeight);
    }
  }, [mT]);

  const handleLanguajeChange = () => {
    const newLanguaje = languaje === "es" ? "en" : "es";
    localStorage.setItem("leandrochelentano.comlanguaje", newLanguaje);
    setLanguaje(newLanguaje);
  };

  return (
    <>
      <nav
        id="nav"
        className="flex justify-around items-center py-2 fixed top-0 w-screen backdrop-blur-md shadow-xl"
        style={{
          color: scheme.text,
        }}
      >
        <h1 className="hidden text-3xl underline underline-offset-2 font-medium cursor-default sm:block">
          L. CH.
        </h1>
        <div>
          <ul className="flex gap-8">
            <li>
              <NavBtn path="/" value={languaje === "es" ? "Inicio" : "Home"} />
            </li>
            <li>
              <NavBtn
                path="/projects"
                value={languaje === "es" ? "Proyectos" : "Projects"}
              />
            </li>
            <li>
              <NavBtn
                path="/contact"
                value={languaje === "es" ? "Contacto" : "Contact"}
              />
            </li>
          </ul>
        </div>
        <div className="hidden sm:flex gap-4">
          <Switch h={30} />
          <ChangeLanguaje handleLanguajeChange={() => handleLanguajeChange()} />
        </div>
      </nav>
      <div
        style={{ paddingTop: `${mT}px`, backgroundColor: scheme.background }}
      >
        {children}
        <div className="w-full h-[150px]"></div>
      </div>
      <div className="fixed sm:hidden w-fill h-fill bottom-4 right-4">
        <ChangeLanguaje handleLanguajeChange={() => handleLanguajeChange()} />
      </div>
    </>
  );
}
