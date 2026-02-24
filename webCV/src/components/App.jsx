import { useState } from "react";
import HeaderBanner, { default as header } from "./header.jsx";
import Main from './main.jsx'
import "../style/App.css";
import Aside from "./aside.jsx";

function App() {

    return(
        <div>
        <HeaderBanner />
        <div className="content">
        <Main />
        <Aside />
        </div>
        </div>
    )
}

export default App;
