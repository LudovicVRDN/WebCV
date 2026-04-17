
import Project from "./Project";
import Experiences from "./Experience";
import Aside from "./aside";

function Main() {
  const ecole = "<alt/>";
  return (
    <div className="bg-taupe-50 text-black flex flex-col justify-center items-center gap-15 p-5">
      <span className="text-rotate text-2xl lg:text-4xl leading-loose ">
        <span className="justify-items-center">
          <span>🧑‍🎓 LEARN</span>
          <span>🤝​ COLLABORATE</span>
          <span>🔨​ BUILD</span>
          <span>🎨 DESIGN</span>
          <span>⌨️ DEVELOP</span>
          <span>🌎 DEPLOY</span>
        </span>
      </span>

      <div className="card  card-lg  border-l-4 border-taupe-700 bg-taupe-100 rounded-lg p-2">
        <div className="card-body">
          <h2 className="card-title font-semibold text-xl lg:text-2xl">Je me présente !</h2>
          <p className="text-md lg:text-xl">
            Ancien coiffeur / coloriste, j’ai transposé ma minutie et mon sens
            du détail vers le développement web. Passionné par l’univers
            informatique j’ai été tout de suite conquis par la création
            d’applications web et mobile, utiles ou ludiques. J’ai à coeur de
            créer des projets qui seront durables grâce à des principes de codes
            comme KISS, POO et SOLID.
          </p>
        </div>
      </div>
      <details className="collapse   border-l-4 border-taupe-700 bg-taupe-100 rounded-lg p-6">
        <summary className="collapse-title font-semibold">
          <h2 className="text-2xl">Expériences</h2>
        </summary>
        <Aside />
      </details>

      <details className="collapse  border-l-4 border-taupe-700 bg-taupe-100 rounded-lg p-6">
        <summary className="collapse-title font-semibold">
          <h2 className="text-2xl">Expériences</h2>
        </summary>
        <Experiences />
      </details>

      <details className="collapse  border-l-4 border-taupe-700 bg-taupe-100 rounded-lg p-6">
      <summary className="collapse-title font-semibold">
          <h2 className="text-2xl">Projets Réalisés</h2>
        </summary>
      
         <Project />
        
      </details>
    </div>
  );
}

export default Main;
