import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './home';
import About from './pages/about';
import Projects from './pages/projects';
import Experience from './pages/experiance';
import Contactt from './pages/contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={About} />
        <Route path="/projects" exact Component={Projects} />
        <Route path="/experience" exact Component={Experience} />
        <Route path="/contact" exact Component={Contactt} />
      </Routes>
    </Router>

  );
}

export default App;
