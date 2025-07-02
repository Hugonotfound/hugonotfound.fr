import { useState, useEffect } from "react";

const options = [
  { label: "Qui suis-je?", value: "profile" },
  { label: "Mes compétences", value: "competencies" },
  { label: "Mes projets", value: "projects" },
];

const Navbar = () => {
  const [selected, setSelected] = useState({});
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY <= 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // "fixed top-0 left-0 w-full z-50 flex items-center bg-white px-8 py-4 font-montserrat shadow-md"

    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center px-8 py-4 font-montserrat transition
        ${atTop ? "" : " bg-white shadow-md"}`}
    >
      <div
        className={`text-[28px] font-bold text flex items-center transition ${
          atTop ? "text-white" : "animated-gradient-text"
        } `}
      >
        HNF.
      </div>
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10 font-medium ${
          atTop ? "text-white" : "text-neutral-900"
        }`}
      >
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setSelected(option.value)}
            className={
              "relative text-center cursor-pointer " +
              (selected === option.value ? "font-semibold" : "")
            }
          >
            {option.label}
            {selected !== option.value && (
              <span
                className={`block mx-auto mt-2 w-[60%] h-0.5 rounded ${
                  atTop ? "bg-white" : "bg-neutral-900"
                }`}
                aria-hidden="true"
              />
            )}
          </button>
        ))}
      </div>
      <button className="ml-auto bg-[#2451A0] text-white text-[16px] px-6 py-2 rounded-full font-medium hover:bg-[#1a3e80] transition cursor-pointer">
        On se capte ?
      </button>
    </nav>
  );
};

export default Navbar;
