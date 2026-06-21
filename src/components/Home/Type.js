import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Regala alimentos",
          "Ayuda a los necesitados",
          "Evita el desperdicio de comida",
          "Se un buen vecino",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
