import { useState } from "react";
import HeaderBanner, { default as header } from "./header.jsx";
import "../style/App.css";
import Aside from "./aside.jsx";

function App() {

    return(
        <div>
        <HeaderBanner />
        <Aside />
        </div>
    )
}

export default App;
