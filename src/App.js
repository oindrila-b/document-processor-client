import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import {NavbarComponent} from "./components/NavbarComponent.jsx";
import { Home } from "./components/Home.jsx";
import { AboutTheProject } from "./components/AboutTheProject.jsx";
import { Services } from "./components/Services.jsx";

function App() {
  return (
    <div className='App'>
        <Router>
        <NavbarComponent/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/about" element={<AboutTheProject/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
