import { useState } from "react";
import HeaderBanner, { default as header } from "./Navbar.jsx";
import Main from './Hero.jsx'


import Aside from "./aside.jsx";

function App() {

    return(
        <div className="lg:p-5 p-2 bg-taupe-50 h-full ">
        <HeaderBanner />
        <Main />
        </div>
    )
}

export default App;
