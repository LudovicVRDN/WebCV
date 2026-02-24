import { useState } from "react";
import HeaderBanner, { default as header } from "./header.jsx";
import Main from './main.jsx'
import Footer from './footer.jsx'
import "../style/App.css";
import Aside from "./aside.jsx";

function App() {

    return(
        <div>
        <HeaderBanner />
        <div className="content">
        <Aside />
        <section className="text">
        <Main />
        <Footer />
        </section>
        </div>
        </div>
    )
}

export default App;
