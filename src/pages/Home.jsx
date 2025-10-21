import Navbar from "../components/Navbar.jsx";
import Type from "../components/Type.jsx";
import ProjectCard, { Technology } from "../components/ProjectCard.jsx";
import Wallpaper from "../components/wallpaper/Wallpaper.jsx";
import profileImage from "../assets/hugo.jpeg";
import site1 from "../assets/site1.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-[-1]">
          <Wallpaper />
        </div>
        <Navbar />
        <div className="relative min-h-screen font-montserrat flex justify-center items-center flex-col">
          <div className="flex flex-col min-h-screen justify-center min-w-md">
            <span className="text-white text-5xl font-bold mb-4 tracking-wider">
              <Type />
            </span>
            <p className="text-white text-3xl font-bold mb-4 tracking-wider">
              Je suis Hugo.
            </p>
          </div>
          <section className="h-full w-full py-10 bg-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-8 items-center">
              <div className="flex justify-end pl-0">
                <img
                  src={profileImage}
                  alt="Hugo - Développeur Full-Stack"
                  className="w-xs h-auto object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="border-s-3 p-6">
                <p className="text-xl">Hugo Poisot</p>
                <p className="text-lg">Développeur Full-Stack</p>
                <p className="text-lg">
                  Passionné par le développement web et les nouvelles
                  technologies.
                </p>
                <p className="text-lg">
                  Je crée des applications web modernes et performantes.
                </p>
                <p className="text-lg">
                  Toujours à la recherche de nouveaux défis et opportunités.
                </p>
                <p className="text-lg">
                  N'hésitez pas à me contacter pour discuter de vos projets !
                </p>
              </div>
            </div>
          </section>
          <section className="w-full bg-gradient-to-r from-[#2a7b9b] to-[#22229c]">
            <div
              className="w-full bg-indigo-400 h-[32px]"
              style={{
                background:
                  "linear-gradient(360deg, rgba(255,255,255,0) 0%, #e2e8f0 100%)",
              }}
            ></div>
            <div className=" max-w-6xl mx-auto py-16 px-4">
              <h2 className="text-white text-center text-4xl font-bold mb-8">
                Mes Projets
              </h2>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
                <ProjectCard
                  imageSrc={site1}
                  title="Hugonotfound.fr"
                  description="Description longue du projet, plein d’informations cools apparaissent ici au hover !"
                  tags={[Technology.React, Technology.JavaScript, Technology.Tailwind]}
                />
                <ProjectCard
                  imageSrc={site1}
                  title="Poisot Optique"
                  description="Description longue du projet, plein d’informations cools apparaissent ici au hover !"
                  tags={[Technology.React, Technology.TypeScript, Technology.Tailwind]}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
