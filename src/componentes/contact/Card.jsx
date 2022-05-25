import React, { useContext, useState } from "react";
import { ThemeLanguajeContext } from "../../ThemeLanguajeContext";

export default function Card(props) {
  const [buttonHover, setButtonHover] = useState(false);
  const [articleHover, setArticleHover] = useState(false);

  const { languaje, scheme } = useContext(ThemeLanguajeContext);

  const { title, path, icon, color, colorhover } = props;

  return (
    <article
      style={{
        color: scheme.text,
        border: `2px solid ${articleHover ? color : colorhover}`,
      }}
      className="p-2 rounded-md flex flex-col gap-3 items-center transition-colors"
      onMouseEnter={() => setArticleHover(true)}
      onMouseLeave={() => setArticleHover(false)}
      onClick={() => console.log(articleHover)}
    >
      <h1 className="text-xl font-semibold cursor-default">{title}</h1>
      {icon}
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
        className="py-2 px-4 uppercase rounded-md transition-colors text-sm"
        style={{
          backgroundColor: buttonHover ? color : colorhover,
        }}
      >
        {languaje === "es" ? `Ir a ${title}` : `Go to ${title}`}
      </a>
    </article>
  );
}
