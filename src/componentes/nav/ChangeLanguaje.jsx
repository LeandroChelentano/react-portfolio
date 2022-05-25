import React, { useContext } from "react";
import { ThemeLanguajeContext } from "../../ThemeLanguajeContext";

export default function ChangeLanguaje(props) {
  const { languaje } = useContext(ThemeLanguajeContext);

  return (
    <img
      src={require(`../../images/${languaje === "es" ? "en" : "es"}.jpg`)}
      alt={`${
        languaje === "es"
          ? "Read this page in English"
          : "Lee esta pagina en español"
      }`}
      className="h-[30px] cursor-pointer rounded-lg"
      onClick={() => props.handleLanguajeChange()}
    />
  );
}
