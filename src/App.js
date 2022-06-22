import React from "react";

import "./styles/App.css"
import {AppRouter, Navbar} from "./components";
import {BrowserRouter} from "react-router-dom";


function App() {

    return (<BrowserRouter>
                <Navbar/>
                <AppRouter/>
        </BrowserRouter>
    )
}

export default App;
