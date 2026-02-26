import "../style/main.css";
import todo from '../assets/todolist.png'
import puissanceF from "../assets/puissance4.png"
import webcv from '../assets/webcv.png'
import "../style/footer.css"
import linked from '../assets/linkedin.png' 
import git from "../assets/github.png"

function Main() {
    const ecole = "<alt/>"
  return (
    <div className="mainSide">
      <article className="intro">
        <h2>Développeur en reconversion</h2>
        <div className="block">
          <p>
            Quand j'ai choisi de faire une reconversion professionnelle le choix
            a été plutôt évident ,passioné d'informatique et l'univers du
            numérique le développement m'a tout de suite plu. J'aime le fait de
            pouvoir créer de zéro.J'ai pour projet d'enrichir mes connaissances
            et mes compétences au maximum je suis curieux et je m'intéresse
            beaucoup aux nouvelles technologies et aux évolutions numériques.
          </p>
        </div>
      </article>
      <article className="experience">
        <h2>Expériences</h2>
        <ul className="block">
          <li>
            🖥️ Formation Développeur Web et Web Mobile (DWWM) {ecole} commencée en
            Novembre 2025 fin Juillet 2026
            <ul className="list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>NodeJS</li>
            </ul>
          </li>
          <li>
            ✂️ Coiffeur/Styliste Be-Way Metz Octobre 2024 à Septembre 2025
            <ul className="list">
              <li>Travail d'équipe</li>
              <li>Réalisation Minutieuse</li>
              <li>Gestion de la clientèle</li>
            </ul>
          </li>
          <li>
            ✂️ Coiffeur/Styliste Mod's Hair Metz Mars 2024 à Octobre 2024
            <ul className="list">
              <li>Gestion des plannings</li>
              <li>Gestion des stocks</li>
              <li>Gestion de l'ouverture et de la clôture de la caisse</li>
            </ul>
          </li>
          <li>
            ✂️ Coiffeur/Styliste Mrs Cut By Polyne Faulquemont Juillet 2022 à Mars 2024
            <ul className="list">
              <li>Formation d'apprentis et stagiaires</li>
              <li>Mise en avant des produits de revente</li>
              <li>Gestion autonome du temps de travail</li>
            </ul>
          </li>
        </ul>
      </article>
      <article>
        <h2>Projet réalisés</h2>
        <ul className="blockProjet">
            <li className="project">
                <a target="_blank" href="https://willowy-frangipane-fc6eb5.netlify.app"> <img className="projet" src ={todo} alt="Capture d'écran to do list"/>
                </a>
                To-Do List | POO, TypeScript, Tailwind: <br/>
                Pour un code structuré j'ai opté pour le principe POO SOLID avec le principe KISS afin d'optimiser la lecture , l'amélioration et la maintenance de ce projet. 
            </li>
            <li className="project">
                <a target="_blank" href="https://puissancefour.netlify.app"> <img className="projet" src ={puissanceF} alt="Capture d'écran to do list"/>
                </a>
                Puissance 4 | TypeScript, HTML, Tailwind:  <br/>
                Sur ce jeu du puissance 4 une logique algorithmique complexe est créee en TypeScript, on y retrouve des gestions d'états et de la manipulation du DOM optimisée.
            </li>
               <li className="project">
                <a target="_blank" href="https://ludovicvourdoncv.netlify.app" > <img className="projet" src ={webcv} alt="Capture d'écran to do list"/>
                </a>
                Web CV | React, Vite, Tailwind <br/>
                Pour un design moderne et responsive j'ai choisi de créer mon CV interactif via React et Vite. Ce framework moderne permet de créer des composants plus faciles à maintenir et à faire évoluer.
            </li>
        </ul>
      </article>

    </div>
  );
}

export default Main;
