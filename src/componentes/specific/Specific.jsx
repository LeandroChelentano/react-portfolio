import React, { useContext, useEffect, useState } from "react";
import { ThemeLanguajeContext } from "../../ThemeLanguajeContext";
import { projects } from "../../proyects";
import Tech from "./Tech";
import { useParams } from "react-router-dom";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { DiReact, DiSqllite } from "react-icons/di";
import { BsWindows } from "react-icons/bs";
import {
  SiStyledcomponents,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiNativescript,
} from "react-icons/si";

export default function Specific() {
  const { scheme, languaje } = useContext(ThemeLanguajeContext);
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [L, setL] = useState(languaje);

  let params = useParams();

  if (L !== languaje) setL(languaje);

  if (project)
    document.title = `L.CH. - ${
      languaje === "es" ? project.es.title : project.en.title
    }`;

  if (!project) {
    const everyProjectOnOneLanguaje =
      languaje === "es" ? projects.es : projects.en;
    const everyProjectOnSecondLanguaje =
      languaje === "es" ? projects.en : projects.es;

    let founded = false;
    everyProjectOnOneLanguaje.forEach((p, index) => {
      if (p.title.toLowerCase().replaceAll(" ", "-") === params.project) {
        founded = true;
        setProject({
          es: projects.es[index],
          en: projects.en[index],
        });
        setSelectedImage(p.images[0]);
      }
    });

    if (!founded)
      everyProjectOnSecondLanguaje.forEach((p, index) => {
        if (p.title.toLowerCase().replaceAll(" ", "-") === params.project) {
          founded = true;
          setProject({
            es: projects.es[index],
            en: projects.en[index],
          });
          setSelectedImage(p.images[0]);
        }
      });
  }

  const changeSelectedImage = (index) => {
    setSelectedImage(project.es.images[index]);
  };

  return project ? (
    <main className="h-fit min-h-screen w-full">
      <div
        className="h-full w-11/12 md:w-1/2 m-auto"
        style={{ color: scheme.text }}
      >
        <h1
          className="text-2xl font-semibold text-center my-8"
          onClick={() => console.log(project)}
        >
          {languaje === "es" ? project.es.title : project.en.title}
        </h1>
        <h3 style={{ color: scheme.subtitle }}>{`${
          languaje === "es" ? "Terminado:" : "Finished on:"
        } ${project.es.date}`}</h3>
        <p>
          {languaje === "es" ? project.es.description : project.en.description}
        </p>
        <div className="flex flex-wrap justify-start pt-2 gap-2">
          {project.es.tech.map((t) => {
            if (t === "React")
              return (
                <Tech
                  key={t}
                  icon={<DiReact className="text-xl" />}
                  value={t}
                  color="#5cd0ee"
                />
              );

            if (t === "NodeJS")
              return (
                <Tech
                  key={t}
                  icon={<FaNodeJs className="text-xl" />}
                  value={t}
                  color="#689f63"
                />
              );

            if (t === "Styled Components")
              return (
                <Tech
                  key={t}
                  icon={<SiStyledcomponents className="text-xl" />}
                  value={t}
                  color="#bd4ba3"
                />
              );

            if (t === "C#")
              return (
                <Tech
                  key={t}
                  icon={<SiCsharp className="text-xl" />}
                  value={t}
                  color="#2a0066"
                />
              );

            if (t === "Windows Forms")
              return (
                <Tech
                  key={t}
                  icon={<BsWindows className="text-xl" />}
                  value={t}
                  color="#115282"
                />
              );

            if (t === "SQL Server")
              return (
                <Tech
                  key={t}
                  icon={<SiMicrosoftsqlserver className="text-xl" />}
                  value={t}
                  color="#c6000b"
                />
              );

            if (t === "React Native")
              return (
                <Tech
                  key={t}
                  icon={<SiNativescript className="text-xl" />}
                  value={t}
                  color="#2596be"
                />
              );

            if (t === "SQLite")
              return (
                <Tech
                  key={t}
                  icon={<DiSqllite className="text-xl" />}
                  value={t}
                  color="#7CBEEC"
                />
              );
          })}
        </div>
        <img
          className="rounded-md border my-4 md:m-4 shadow-md"
          src={require(`../../images/${selectedImage}`)}
          alt=""
        />
        <div className="flex flex-row flex-wrap justify-center items-center gap-3">
          {project.es.images.map((image, index) => {
            return (
              <img
                className="border rounded-md w-1/4 max-w-300px shadow-md"
                src={require(`../../images/${image}`)}
                key={index}
                alt=""
                onClick={() => changeSelectedImage(index)}
              />
            );
          })}
        </div>
        <div
          className="flex justify-center items-center w-full"
          // onClick={() => window.open(`${project.git}`, "_blank")}
        >
          <a
            href={project.es.git}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row justify-center items-center gap-2 m-4"
          >
            <FaGithub className="text-xl" />
            <h2>{languaje === "es" ? "Ver más" : "See more"}</h2>
          </a>
        </div>
      </div>
    </main>
  ) : null;
}
