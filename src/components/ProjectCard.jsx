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
  [Technology.React]: "bg-cyan-500",
  [Technology.TypeScript]: "bg-blue-600",
  [Technology.JavaScript]: "bg-yellow-500",
  [Technology.Node]: "bg-green-600",
  [Technology.NextJS]: "bg-zinc-800",
  [Technology.Tailwind]: "bg-teal-500",
  [Technology.GraphQL]: "bg-pink-600",
  [Technology.Prisma]: "bg-emerald-600",
  [Technology.Docker]: "bg-sky-600",
};

function ProjectCard({ imageSrc, title, description, tags = [] }) {
  return (
    <div className="relative group glass-morphism rounded-xl w-full aspect-[16/9] overflow-hidden">
      <img src={imageSrc} alt="" className="object-cover w-full h-full" />
      <div className="absolute glass-morphism bottom-0 left-0 w-full px-4 flex text-white h-[64px] z-40 group-hover:h-[160px] transition-all flex-col justify-end overflow-hidden">
        <div className="absolute top-4 right-4 flex space-x-2 z-50">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`inline-block px-3 py-1 ${
                tagStyles[tag] || "bg-blue-500"
              } text-white font-bold text-xs rounded-full shadow`}
              title={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute bottom-[48px] left-0 w-full opacity-0 group-hover:opacity-100 px-4 py-2 transition-all duration-300">
          <p className="text-sm">{description}</p>
        </div>
        <span className="block font-bold relative flex items-center h-[64px]">
          {title}
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;
