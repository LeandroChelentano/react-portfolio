import React, { useState, useContext } from "react";
import { ThemeLanguajeContext } from "../../ThemeLanguajeContext";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { title, date, image } = props;

  const { scheme, languaje } = useContext(ThemeLanguajeContext);

  const [isHover, setHover] = useState(false);

  return (
    <article
      className="border rounded-md p-2 h-fit max-w-[400px]"
      style={{ border: `1px solid ${scheme.text}`, color: scheme.text }}
    >
      <h1 className="text-xl font-medium">{title}</h1>
      <h3 style={{ color: scheme.subtitle }}>{`${
        languaje === "es" ? "Terminado:" : "Finished on:"
      } ${date}`}</h3>
      <img
        className="rounded-md w-full aspect-video border mb-2"
        src={require(`../../images/${image}`)}
        alt=""
      />
      <Link
        className="transition-colors pl-2"
        to={`/projects/${title.toLowerCase().replaceAll(" ", "-")}`}
        style={{ color: isHover ? scheme.accent : scheme.disableaccent }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {languaje === "es" ? "Ver más" : "See more"}
      </Link>
    </article>
  );
}
