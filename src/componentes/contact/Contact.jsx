import React, { useContext, useState } from "react";
import { ThemeLanguajeContext } from "../../ThemeLanguajeContext";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BsClipboard, BsClipboardCheck } from "react-icons/bs";
import Card from "./Card";

export default function Contact() {
  const { scheme, languaje } = useContext(ThemeLanguajeContext);

  const [copied, setCopied] = useState(false);

  const copy = () => {
    setCopied(true);
    navigator.clipboard.writeText("personal@leandrochelentano.com");
  };

  document.title = `L.CH. - ${languaje === "es" ? "Contacto" : "Contact"}`;

  const iconStyle = `text-4xl`;

  return (
    <main className="h-screen w-full">
      <h1
        className="text-2xl font-semibold text-center my-8"
        style={{ color: scheme.text }}
      >
        {languaje === "es" ? "Formas de contacto" : "Contact ways"}
      </h1>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <Card
          title="LinkedIn"
          path="https://www.linkedin.com/in/leandrochelentano/"
          icon={<SiLinkedin className={iconStyle} />}
          color="#4b86ff"
          colorhover="#1964ff"
        />
        <Card
          title="GitHub"
          path="https://github.com/LeandroChelentano"
          icon={<FaGithub className={iconStyle} />}
          color="#ffad71"
          colorhover="#ff7f22"
        />
      </div>
      <div className="w-full h-fit flex justify-center items-center py-8">
        <div className="flex flex-col md:flex-row w-fit border-2 border-gray-600 rounded-md">
          <div
            className="px-2 py-2 md:px-4"
            style={{
              fontFamily: "'Source Code Pro', monospace",
              color: scheme.text,
            }}
          >
            personal@leandrochelentano.com
          </div>
          <div
            className="px-4 py-2 md:border-l-2 border-gray-600 flex justify-center items-center cursor-pointer transition-colors md:rounded-r-md"
            onClick={() => copy()}
            style={{ backgroundColor: copied ? "#00ff0021" : "transparent" }}
          >
            {copied ? (
              <BsClipboardCheck className="text-green-700 text-xl" />
            ) : (
              <BsClipboard className="text-xl" style={{ color: scheme.text }} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
