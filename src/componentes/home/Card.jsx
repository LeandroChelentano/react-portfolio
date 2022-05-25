import React, { useContext } from "react";
import { ThemeLanguajeContext } from "../../ThemeLanguajeContext";
import Button from "./Button";

export default function Card(props) {
  const { scheme } = useContext(ThemeLanguajeContext);

  return (
    <article
      className="w-[300px] p-4 rounded-lg shadow-2xl"
      style={{ backgroundColor: scheme.primary, color: scheme.text }}
    >
      <h1 className="text-2xl font-bold text-center mb-2">{props.title}</h1>
      <h3
        className="text-lg text-center mb-2"
        style={{ color: scheme.subtitle }}
      >
        {props.desc}
      </h3>
      <div className="flex justify-center items-center w-full">
        {props.button ? (
          <Button value={props.button} path={props.buttonpath} />
        ) : null}
      </div>
    </article>
  );
}
