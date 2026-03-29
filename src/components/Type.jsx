import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur Full-Stack",
          "Créateur d'expériences web",
          "Passionné par l'innovation",
          "Résolveur de problèmes",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        pauseFor: 2500,
      }}
    />
  );
}

export default Type;
