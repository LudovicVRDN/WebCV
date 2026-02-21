import profilPicture from"../assets/testPdp2.jpg"
import "../style/header.css"

function HeaderBanner(){
    const title = "Vourdon Ludovic"
    const subTitle = "Développeur web junior en formation"

    return (
        <div className="headerBanner">
            <div >
            <img 
            src = {profilPicture}
            alt = "Photo de profil CV" 
            className= "profilPicture"
            />
            </div>
            <section>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            </section>
        </div>
    )

}

export default HeaderBanner 