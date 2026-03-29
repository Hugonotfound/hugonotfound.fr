import { useState, useEffect } from "react";

const options = [
  { label: "À propos", value: "about" },
  { label: "Compétences", value: "skills" },
  { label: "Projets", value: "projects" },
];

const Navbar = () => {
  const [selected, setSelected] = useState("");
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY <= 50);

      // Update selected section based on scroll position
      const sections = ["about", "skills", "projects", "contact"];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setSelected(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 py-4 font-montserrat transition-all duration-300
        ${atTop ? "bg-transparent" : "glass-morphism rounded-full shadow-md bg-white/80"}`}
    >
      <button
        onClick={() => {
           window.scrollTo({ top: 0, behavior: 'smooth' });
           setSelected("");
        }}
        className={`text-2xl font-bold transition-colors cursor-pointer ${
          atTop ? "text-slate-800" : "text-blue-600"
        }`}
      >
        HNF.
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 font-medium">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => scrollToSection(option.value)}
            className={`relative text-center cursor-pointer transition-colors hover:text-blue-600 ${
              selected === option.value ? "text-blue-600 font-semibold" : "text-slate-600"
            }`}
          >
            {option.label}
            {selected === option.value && (
              <span
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 block w-1/2 h-0.5 rounded bg-blue-600 transition-all"
                aria-hidden="true"
              />
            )}
          </button>
        ))}
      </div>

      <button
        onClick={() => scrollToSection("contact")}
        className={`transition-all cursor-pointer py-2 px-6 rounded-full font-medium hover:-translate-y-0.5
          ${atTop
            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/50"
            : "border border-slate-200 bg-white text-slate-800 hover:border-blue-200 hover:text-blue-600"}`}
      >
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
