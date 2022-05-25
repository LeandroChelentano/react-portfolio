import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { colors } from "../../colors";
import { ThemeLanguajeContext } from "../../ThemeLanguajeContext";

export default function NavBtn(props) {
  const { theme } = useContext(ThemeLanguajeContext);

  const [isHover, setIsHover] = React.useState(false);

  return (
    <Link
      className="underline underline-offset-2 transition-colors duration-200 delay-75 cursor-pointer text-lg font-normal"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        textDecorationColor: isHover
          ? theme === "light"
            ? colors.dark.primary
            : colors.light.primary
          : "transparent",
      }}
      to={props.path}
    >
      {props.value}
    </Link>
  );
}
