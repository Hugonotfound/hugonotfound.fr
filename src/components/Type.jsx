import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Bonjour !",
          "Hello !",
          "Hola !",
          "Hej !",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        pauseFor: 3000,
      }}
    />
  );
}

export default Type;