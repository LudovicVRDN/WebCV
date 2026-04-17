import logoHTML from "../assets/logoHTML.png";
import logoCSS from "../assets/logoCSS.png";
import logoJS from "../assets/logoJS.png";
import logoTS from "../assets/logoTS.png"
import logoReact from "../assets/react.png";
import logoNode from "../assets/node.png"
import { useState } from "react";

function Aside() {

  return (
    <div className="flex flex-col justify-center items-center gap-5 px-6 py-8">
      <div className="flex flex-col gap-5 bg-white border border-taupe-100 rounded-xl p-5 lg:w-325 w-80">
        <h2 className=" w-35 px-2  rounded-lg  bg-orange-300">A Propos de moi </h2>
        <ul className="flex flex-col lg:flex-row lg:gap-25 gap-5">
          <li>📍Lorraine, Moselle (57) </li>
          <li>🎂 28 ans</li>
          <li>🚗 Titulaire du permis B</li>
        </ul>
      </div>
      <div className="flex flex-col gap-5 bg-white border border-taupe-100 rounded-xl p-5 lg:w-325 w-80">
       <h2 className=" w-20 px-2  rounded-lg  bg-orange-300">Objecifs</h2>
        <ul>
          <li>🚀 Alternance bac+3 Concepteur Développeur web - Sept 2026</li>
        </ul>
      </div>
      <div className="flex flex-col bg-white border border-taupe-100 rounded-xl p-5 lg:w-325 w-80">
       <h2 className=" w-22 px-2   rounded-lg  bg-orange-300">Formation</h2>
        <ul >
          <li>
            {" "}
            💼 Formation en cours : <br />
            Développeur Web Centre Alt Incubateur Tech <br />
            Niveau 5 <br />
            Fin : Juillet 2026
          </li>
        </ul>
        
      </div>
      <div className="flex flex-col gap-5 bg-white border border-taupe-100 rounded-xl p-5 lg:w-325 w-80">
       <h2 className="w-57 px-2 rounded-lg  bg-orange-300">Langages de développement</h2>
        <ul className="flex flex-col lg:flex-row lg:gap-25 gap-5">
          <li className="flex flex-col w-25 text-center items-center ">
            <img src={logoHTML} alt="Logo HTML" />
            HTML 5
          </li>
          <li className="flex flex-col w-25 text-center items-center">
            <img src={logoCSS} alt="Logo CSS" />
            CSS 3 
          </li>
          <li className="flex flex-col w-25 text-center items-center">
            <img src={logoJS} alt="Logo JavaScript" />
            JavaScript 
          </li>
          <li className="flex flex-col w-25 text-center items-center">
            <img src={logoTS} alt="Logo TypeScript" />
            TypeScript 
          </li>
          <li className="flex flex-col w-25 text-center items-center">
            <img src={logoReact} alt="Logo React" className="w-12 h-12"  />
            React
          </li>
          <li className="flex flex-col w-25 text-center items-center">
            <img src={logoNode} alt="Logo NodeJS" className="w-12 h-12" />
            NodeJS 
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5 bg-white border border-taupe-100 rounded-xl p-5 lg:w-325 w-80">
       <h2 className=" w-19 px-2   rounded-lg  bg-orange-300">Contact</h2>
        <ul className="flex flex-col lg:flex-row lg:gap-25 gap-5 ">
          <li>📱 Télephone: 06.65.05.06.40</li>
          <li>✉️ Email: vourdon@live.fr</li>
        </ul>
      </div>
      <div className="flex flex-col gap-5 bg-white border border-taupe-100 rounded-xl p-5 lg:w-325 w-80">
       <h2 className=" w-35 px-2  rounded-lg  bg-orange-300"> Centres d'intérêt</h2>
        <ul className="flex flex-col lg:flex-row lg:gap-25 gap-5">
          <li>🎮 Jeux vidéos</li>
          <li>📺 Série télé </li>
          <li>📺 Anime</li>
          <li>📖 Lecture</li>
        </ul>
      </div>
    </div>
  );
}

export default Aside;
