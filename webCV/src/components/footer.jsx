import "../style/footer.css"
import linked from '../assets/linkedin.png' 
import git from "../assets/github.png"

function Footer(){

    return(
        <div className="social">
            <a target="_blank" href="https://github.com/LudovicVRDN">
            <img src={git} alt="Logo gitHub" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/ludovic-vourdon-b8a62639b/">
            <img src={linked} alt="Logo LinkedIn" />
            </a>
        </div>
    )
}
export default Footer