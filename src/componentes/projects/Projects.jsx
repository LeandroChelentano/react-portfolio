import React, { useContext } from "react";
import { ThemeLanguajeContext } from "../../ThemeLanguajeContext";
import { projects } from "../../proyects";
import Card from "./Card";

export default function Projects() {
  const { scheme, languaje } = useContext(ThemeLanguajeContext);

  const proj = languaje === "es" ? projects.es : projects.en;

  document.title = `L.CH. - ${languaje === "es" ? "Proyectos" : "Projects"}`;

  return (
    <main className="h-fit min-h-screen w-full">
      <div className="w-11/12 md:1/2 m-auto">
        <h1
          className="text-2xl font-semibold text-center my-8"
          style={{ color: scheme.text }}
        >
          {languaje === "es" ? "Mis proyectos" : "My projects"}
        </h1>
        <div className="flex justify-center gap-8 flex-wrap">
          {proj.map((p, index) => {
            return (
              <Card
                key={index}
                title={p.title}
                date={p.date}
                image={p.images[0]}
                tech={p.tech}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
