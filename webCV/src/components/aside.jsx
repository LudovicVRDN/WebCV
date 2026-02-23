import "../style/aside.css";
import logoHTML from '../assets/logoHTML.png'
import logoCSS from '../assets/logoCSS.png'
import logoJS from '../assets/logoJS.png'
import logoTS from '../assets/logoTS.png'


function Aside() {
  return (
    <div className="contactASide">
      <h2>A Propos de moi </h2>
      <ul>
        <li>📍Lorraine, Moselle (57) </li>
        <li>🎂 28 ans</li>
        <li>🚗 Titulaire du permis B</li>
      </ul>
      <h2>Objecifs</h2>
      <ul>
        <li>🚀 Alternance bac+3 Concepteur Dévolppeur web - Sept 2026</li>
      </ul>
      <h2>Formation</h2>
      <ul>
        <li> 💼 Formation en cours : <br />
        Développeur Web Centre Alt Incubateur Tech <br />
        Niveau 5 <br />
        Fin : Juillet 2026
        </li>
      </ul>
      <h2>Langages de développement</h2>
      <ul className="devList">
        <li><img src={logoHTML} alt="Logo HTML" />
          HTML 5
         </li>
        <li><img src={logoCSS} alt="Logo HTML" />
         CSS 3 (Tailwind également)
        </li>
        <li>
          <img src={logoJS} alt="Logo HTML" />
           JavaScript (Principe KISS et SOLID)
          </li>
        <li>
          <img src={logoTS} alt="Logo HTML" />
           TypeScript (Principe KISS et SOLID)
          </li>
      </ul>
      <h2>Contact</h2>
      <ul>
        <li>📱 Télephone: 06.65.05.06.40</li>
        <li>✉️ Email: vourdon@live.fr</li>
      </ul>
      <h2> Centres intérêt</h2>
      <ul>
        <li>🎮 Jeux vidéos</li>
        <li>📺 Série télé/ Anime</li>
        <li>📖 Lecture</li>
      </ul>
    </div>
  );
}

export default Aside;
