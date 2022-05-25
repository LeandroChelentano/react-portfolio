import React, { useContext } from "react";
import { ThemeLanguajeContext } from "../../ThemeLanguajeContext";
import Card from "./Card";

export default function Home() {
  const { scheme, languaje } = useContext(ThemeLanguajeContext);

  document.title = `L.CH. - ${languaje === "es" ? "Inicio" : "Home"}`;

  return (
    <main className="h-fit min-h-screen w-full">
      <section className="flex flex-col md:flex-row items-center justify-center gap-[40px] h-full max-h-[500px] pt-4">
        <div
          className="w-[300px] h-[300px] rounded-full flex justify-center items-center"
          style={{ backgroundColor: scheme.disableaccent }}
        >
          profile pic
        </div>
        <div style={{ color: scheme.text }}>
          <h1 className="text-3xl font-bold">
            {languaje === "es" ? "Hola!" : "Hi!"}
          </h1>
          <h2 className="text-2xl font-normal">
            {languaje === "es"
              ? "Soy Leandro Chelentano"
              : "I'm Leandro Chelentano"}
          </h2>
          <h3 className="text-xl">
            {languaje === "es"
              ? "Desarrollador Full-Stack"
              : "A Full-Stack developer"}
          </h3>
          <a
            href="https://www.linkedin.com/in/leandrochelentano/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            @<span className="underline">LinkedIn</span>
          </a>
        </div>
      </section>
      <div className="w-full h-fit py-4 flex justify-center items-center gap-4 flex-wrap">
        <Card
          title={languaje === "es" ? `¡Necesito una web!` : "I need a web!"}
          desc={
            languaje === "es"
              ? "Creo webs que te permitirán darte a conocer."
              : "I create websites that will help you to get to know you."
          }
          button={languaje === "es" ? "Contáctame" : "Contact me"}
          buttonpath="/contact"
        />
        <Card
          title={
            languaje === "es"
              ? `¿Necesitas un desarrollador?`
              : "You need a developer?"
          }
          desc={
            languaje === "es"
              ? "Estoy abierto a trabajar para empresas Uruguayas y también extranjeras."
              : "I'm open to work with Uruguayan companies or somewhere else."
          }
          button={languaje === "es" ? "contratame" : "hire me"}
          buttonpath="/contact"
        />
      </div>
    </main>
  );
}
