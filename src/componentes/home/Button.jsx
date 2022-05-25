import React, { useContext, useState } from "react";
import { ThemeLanguajeContext } from "../../ThemeLanguajeContext";
import { Link } from "react-router-dom";

export default function Button(props) {
  const { scheme } = useContext(ThemeLanguajeContext);

  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      to={props.path}
      className="px-4 py-2 uppercase text-base font-semibold rounded-xl transition-colors duration-300 delay-75 "
      style={{
        backgroundColor: isHover ? scheme.accent : scheme.disableaccent,
        color: scheme.text,
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {props.value}
    </Link>
  );
}
