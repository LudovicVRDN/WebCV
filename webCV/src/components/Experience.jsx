import React from 'react'

const Experience = () => {
   
const experiences = [
  {
    icon: "💻",
    type: "dev",
    title: "Formation DWWM — Alt/code",
    subtitle: "Développeur Web et Web Mobile",
    date: "Nov 2025 → Juil 2026",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "NodeJS"],
    tagType: "tech"
  },
  {
    icon: "✂️",
    type: "hair",
    title: "Coiffeur / Styliste — Be-Way",
    subtitle: "Metz",
    date: "Oct 2024 → Sep 2025",
    tags: ["Travail d'équipe", "Réalisation minutieuse", "Gestion clientèle"],
    tagType: "soft"
  },
  {
    icon: "✂️",
    type: "hair",
    title: "Coiffeur / Styliste — Mod's Hair",
    subtitle: "Metz",
    date: "Mars 2024 → Oct 2024",
    tags: ["Gestion des plannings", "Gestion des stocks", "Gestion de caisse"],
    tagType: "soft"
  },
  {
    icon: "✂️",
    type: "hair",
    title: "Coiffeur / Styliste — Mrs Cut By Polyne",
    subtitle: "Faulquemont",
    date: "Juil 2022 → Mars 2024",
    tags: ["Formation apprentis", "Mise en avant produits", "Autonomie"],
    tagType: "soft"
  }
]


  return (
    
    
      <div className="flex flex-col gap-4 lg:w-325 w-80">
        {experiences.map((xp, i) => (
          <div
            key={i}
            className="bg-white border border-taupe-100 rounded-xl p-5"
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0 bg-orange-300`}
           
              >
                {xp.icon}
              </div>

              <div className="flex-1">
                <p className="sm:text-sm lg:text-xl font-medium text-gray-900">{xp.title}</p>
                <p className="sm:text-xs lg:text-md text-gray-500">{xp.subtitle}</p>
              </div>

              <span className="text-xs text-gray-400 whitespace-nowrap pt-0.5">
                {xp.date}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {xp.tags.map((tag, j) => (
                <span
                  key={j}
                  className={`text-xs px-3 py-1 rounded-full font-medium bg-orange-100`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    
  )
}


export default Experience
