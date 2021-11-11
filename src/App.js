import React from "react";
import MainMenu from "./pages/MainMenu";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Fibonacci from "./pages/Fibonacci";
import Arpertri from "./pages/Arpertri";
import Arpercir from "./pages/Arpercir";
import Arperec from "./pages/Arperec";
import Factorial from "./pages/Factorial";

class App extends React.Component {
    render() {
        return (
            <Router>
                    <Routes>
                        <Route exact path="/" element={<MainMenu/>}/>
                        <Route exact path="/fibonacci" element={<Fibonacci/>}/>
                        <Route exact path="/factorial" element={<Factorial/>}/>
                        <Route exact path="/arpertri" element={<Arpertri/>}/>
                        <Route exact path="/arpercir" element={<Arpercir/>}/>
                        <Route exact path="/arperec" element={<Arperec/>}/>
                    </Routes>
            </Router>
        );
    }
}

export default App;
