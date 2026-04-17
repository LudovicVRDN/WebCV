import React from "react";
import todo from "../assets/todolist.png";
import puissanceF from "../assets/puissance4.png";
import webcv from "../assets/webcv.png";

const Project = () => {
  const projets = [
    {
      name: "To-Do List ",
      stack: ["POO", "TypeScript", "TailwindCSS"],
      img: todo,
      url: "https://willowy-frangipane-fc6eb5.netlify.app",
      description:
        "  Pour un code structuré j'ai opté pour le principe POO SOLID avec le principe KISS afin d'optimiser la lecture, l'amélioration et la maintenance de ce projet.",
      gitLink: "https://github.com/LudovicVRDN/todolist",
    },
    {
      name: "Puissance 4",
      stack: ["TypeScript", "HTML", "Tailwind"],
      img: puissanceF,
      url: "https://puissancefour.netlify.app",
      description:
        "       Sur ce jeu du puissance 4 une logique algorithmique complexe estcréee en TypeScript, on y retrouve des gestions d'états et de la manipulation du DOM optimisée.",
      gitLink: "https://github.com/LudovicVRDN/puissance4",
    },
    {
      name: "Web CV",
      stack: ["React", "Vite", "TailwindCSS", "DaisyUI"],
      img: webcv,
      url: "https://ludovicvourdoncv.netlify.app",
      description:
        " Pour un design moderne et responsive j'ai choisi de créer mon CVinteractif via React et Vite. Ce framework moderne permet de créer des composants plus faciles à maintenir et à faire évoluer.",
      gitLink: "https://github.com/LudovicVRDN/WebCV",
    },
  ];
  return (
      <div className="carousel   bg-taupe-400 lg:w-325 lg:max-h-90 w-80  flex shadow-2xl rounded-3xl m-auto ">
        {projets.map((projet, i) => (
          <div
            id={`slide${i + 1}`}
            className="carousel-item relative w-full flex flex-col lg:flex-row items-center gap-6 bg-taupe-50 border border-taupe-200  "
          >
            {/* Image */}
            <figure className="shrink-0 p-5">
              <a href={projet.url} target="_blank">
                <img
                  className="w-48 h-48 lg:w-95 lg:h-80 object-cover rounded-2xl border border-taupe-200 hover:scale-105 transition-transform duration-300"
                  src={projet.img}
                  alt="Capture d'écran To-Do List"
                />
              </a>
            </figure>

            {/* Contenu */}
            <article className="flex flex-col gap-3 flex-1">
              <h3 className="text-xl lg:text-2xl font-medium text-taupe-900">
                {projet.name}
              </h3>

              {/* Badges techno */}
              <div className="flex flex-wrap gap-2">
                {projet.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-orange-100 text-blackfont-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm lg:text-base text-taupe-800 leading-relaxed"></p>

              {/* Description */}
              <p className="lg:w-150 w-50 lg:text-xl text-md text-gray-500">{projet.description}</p>

              {/* Liens */}
              <div className="flex gap-3 mt-2">
                <a
                  href={projet.url}
                  target="_blank"
                  className="text-xs px-4 py-2 rounded-lg bg-orange-300  hover:bg-yellow-600 transition-colors"
                >
                  Voir le projet
                </a>
                <a
                  href={projet.gitLink}
                  target="_blank"
                  className="text-xs px-4 py-2 rounded-lg border border-taupe-700 text-taupe-700 hover:bg-taupe-100 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </article>

            {/* Flèches carousel */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#slide${i === 0 ? projets.length : i}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${i === projets.length - 1 ? 1 : i + 2}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Project;
