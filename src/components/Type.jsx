import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Chef de projet IT",
          "Gourou de l'informatique",
          "Développeur Full-Stack",
          "Ingénieur logiciel",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        pauseFor: 2000,
      }}
    />
  );
}

export default Type;