import profilPicture from "../assets/testPdp2.jpg";

import linked from '../assets/linkedin.png' 
import git from "../assets/github.png"

function HeaderBanner() {
  const title = "Vourdon Ludovic";
  const subTitle = "Développeur web junior en formation";

  return (
    <div className="navbar bg-yellow-900 justify-between gap-5 lg:p-5 rounded-4xl h-50 ">
      <div>
        <img
          src={profilPicture}
          alt="Photo de profil CV"
          className="h-25 w-25 lg:h-40 lg:w-40 rounded-full"
        />
      </div>
      <section>
        <h1 className="text-md lg:text-2xl">{title}</h1>
        <p className="text-lg lg:text-4xl">{subTitle}</p>
      </section>
      <div className="flex flex-col lg:flex-raw gap-5">
        <a target="_blank" href="https://github.com/LudovicVRDN">
          <img src={git} alt="Logo gitHub" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ludovic-vourdon-b8a62639b/"
        >
          <img src={linked} alt="Logo LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default HeaderBanner;
