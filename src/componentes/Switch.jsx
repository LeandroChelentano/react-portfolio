import React, { useContext } from "react";
import { ThemeLanguajeContext } from "../ThemeLanguajeContext";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const Switch = (props) => {
  const { theme, setTheme, setScheme } = useContext(ThemeLanguajeContext);

  const handlethemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("leandrochelentano.comtheme", newTheme);
    setScheme(null);
  };

  return (
    <>
      <input
        className="react-switch-checkbox hidden"
        id="react-switch-new"
        type="checkbox"
        defaultChecked={theme !== "light"}
        onChange={() => handlethemeChange()}
      />
      <label
        className={`react-switch-label flex items-center h-[${props.h}] w-[${
          props.h * 2
        }]`}
        htmlFor="react-switch-new"
        style={{ backgroundColor: theme === "light" ? "#fff" : "gray" }}
      >
        <span
          className="react-switch-button flex justify-center items-center"
          style={{ width: props.h - 6, height: props.h - 6 }}
        >
          {theme === "light" ? (
            <BsFillSunFill className="text-yellow-500" />
          ) : (
            <BsFillMoonStarsFill className="text-black" />
          )}
        </span>
      </label>
    </>
  );
};

export default Switch;
