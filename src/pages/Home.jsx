import Navbar from "../components/Navbar.jsx";
import Type from "../components/Type.jsx";
import ProjectCard, { Technology } from "../components/ProjectCard.jsx";
import profileImage from "../assets/hugo.jpeg";
import site1 from "../assets/site1.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-montserrat flex flex-col items-center">
        <Navbar />

        {/* HERO SECTION */}
        <section id="hero" className="w-full min-h-screen flex flex-col justify-center items-center relative px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-[-1]" />

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 tracking-tight">
              Je suis <span className="text-blue-600">Hugo</span>.
            </h1>
            <div className="text-2xl md:text-4xl text-slate-600 font-medium h-16 flex items-center justify-center">
              <Type />
            </div>
            <p className="mt-8 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
              Je conçois et développe des applications web modernes, robustes et orientées utilisateur.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
                Voir mes projets
              </a>
              <a href="#contact" className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition shadow-sm">
                Me contacter
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="w-full py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">À propos de moi</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-3 -z-10"></div>
                  <img
                    src={profileImage}
                    alt="Hugo - Développeur Full-Stack"
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-xl ring-4 ring-white"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <h3 className="text-2xl font-semibold text-slate-800">Hugo Poisot</h3>
                <h4 className="text-xl text-blue-600 font-medium">Développeur Full-Stack</h4>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Passionné par le développement web et les nouvelles technologies, je m'efforce de créer des expériences numériques qui ont du sens.
                  </p>
                  <p>
                    Mon approche est centrée sur la qualité du code, la performance et l'expérience utilisateur. J'aime résoudre des problèmes complexes avec des solutions simples et élégantes.
                  </p>
                  <p>
                    Toujours en quête d'apprentissage, je reste à l'affût des dernières tendances pour apporter les meilleures pratiques à mes projets.
                  </p>
                </div>
                <div className="pt-4">
                  <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Télécharger mon CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="w-full py-24 bg-slate-50 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mes Compétences</h2>
              <p className="text-slate-600">Voici les technologies et outils avec lesquels je travaille au quotidien pour donner vie à vos projets.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Frontend Card */}
              <div className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Frontend</h3>
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">React & Next.js</span>
                      <span className="text-sm text-blue-600 font-medium">90%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-500 h-2 rounded-full w-[90%] transform origin-left group-hover:scale-x-105 transition-transform duration-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">TypeScript / JS</span>
                      <span className="text-sm text-blue-600 font-medium">85%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-400 h-2 rounded-full w-[85%] transform origin-left group-hover:scale-x-105 transition-transform duration-500 delay-75"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">Tailwind CSS</span>
                      <span className="text-sm text-blue-600 font-medium">95%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-300 h-2 rounded-full w-[95%] transform origin-left group-hover:scale-x-105 transition-transform duration-500 delay-150"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend Card */}
              <div className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Backend</h3>
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">Node.js / Express</span>
                      <span className="text-sm text-emerald-600 font-medium">80%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-500 h-2 rounded-full w-[80%] transform origin-left group-hover:scale-x-105 transition-transform duration-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">PostgreSQL</span>
                      <span className="text-sm text-emerald-600 font-medium">75%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-400 h-2 rounded-full w-[75%] transform origin-left group-hover:scale-x-105 transition-transform duration-500 delay-75"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">API REST / GraphQL</span>
                      <span className="text-sm text-emerald-600 font-medium">85%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-300 h-2 rounded-full w-[85%] transform origin-left group-hover:scale-x-105 transition-transform duration-500 delay-150"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools Card - Tags style */}
              <div className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Outils & Déploiement</h3>
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-medium text-sm group-hover:border-purple-200 group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors">Git & GitHub</span>
                  <span className="px-4 py-2 bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-medium text-sm group-hover:border-purple-200 group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors delay-75">Docker</span>
                  <span className="px-4 py-2 bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-medium text-sm group-hover:border-purple-200 group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors delay-100">Figma</span>
                  <span className="px-4 py-2 bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-medium text-sm group-hover:border-purple-200 group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors delay-150">Vercel</span>
                  <span className="px-4 py-2 bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-medium text-sm group-hover:border-purple-200 group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors delay-200">Agile / Scrum</span>
                  <span className="px-4 py-2 bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-medium text-sm group-hover:border-purple-200 group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors delay-300">Linux</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="w-full py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
              Mes Projets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
              <ProjectCard
                imageSrc={site1}
                title="Hugonotfound.fr"
                description="Mon portfolio personnel construit avec React et Tailwind CSS. Une Single Page Application fluide et moderne."
                tags={[Technology.React, Technology.JavaScript, Technology.Tailwind]}
              />
              <ProjectCard
                imageSrc={site1}
                title="Poisot Optique"
                description="Site vitrine pour un opticien, incluant une présentation des services et une prise de rendez-vous."
                tags={[Technology.React, Technology.TypeScript, Technology.Tailwind]}
              />
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="w-full py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent"></div>
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à collaborer ?</h2>
            <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
              Je suis actuellement à la recherche de nouvelles opportunités. Que ce soit pour une question ou simplement pour dire bonjour, je ferai de mon mieux pour vous répondre !
            </p>

            <a
              href="mailto:contact@hugonotfound.fr"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/30"
            >
              Dites Bonjour 👋
            </a>

            <div className="mt-16 flex justify-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full py-6 bg-slate-950 text-slate-500 text-center text-sm border-t border-slate-800">
          <p>© {new Date().getFullYear()} Hugo Poisot. Tous droits réservés.</p>
          <p className="mt-1 text-slate-600 text-xs">Conçu et développé avec passion.</p>
        </footer>

      </div>
    </>
  );
}

export default Home;
