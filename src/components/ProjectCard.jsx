export const Technology = Object.freeze({
  React: "React",
  TypeScript: "TypeScript",
  JavaScript: "JavaScript",
  Node: "Node",
  NextJS: "Next.js",
  Tailwind: "Tailwind",
  GraphQL: "GraphQL",
  Prisma: "Prisma",
  Docker: "Docker",
});

const tagStyles = {
  [Technology.React]: "text-cyan-600 bg-cyan-50 border-cyan-200",
  [Technology.TypeScript]: "text-blue-600 bg-blue-50 border-blue-200",
  [Technology.JavaScript]: "text-yellow-600 bg-yellow-50 border-yellow-200",
  [Technology.Node]: "text-green-600 bg-green-50 border-green-200",
  [Technology.NextJS]: "text-zinc-800 bg-zinc-100 border-zinc-300",
  [Technology.Tailwind]: "text-teal-600 bg-teal-50 border-teal-200",
  [Technology.GraphQL]: "text-pink-600 bg-pink-50 border-pink-200",
  [Technology.Prisma]: "text-emerald-600 bg-emerald-50 border-emerald-200",
  [Technology.Docker]: "text-sky-600 bg-sky-50 border-sky-200",
};

function ProjectCard({ imageSrc, title, description, tags = [] }) {
  return (
    <div className="group bg-white rounded-2xl w-full overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <span className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white/20 backdrop-blur-md text-white border border-white/40 px-6 py-2 rounded-full font-medium">
             Voir les détails
           </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`inline-block px-3 py-1 font-semibold text-xs rounded-full border ${
                tagStyles[tag] || "text-blue-600 bg-blue-50 border-blue-200"
              }`}
              title={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
