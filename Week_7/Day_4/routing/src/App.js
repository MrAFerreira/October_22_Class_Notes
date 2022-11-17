import './App.css';
import { Routes, Route } from 'react-router-dom';
import projectsData from './assets/projects-data.json';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import ProjectDetails from './pages/ProjectDetails';
import Pokedex from './pages/Pokedex';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Routes will wrap the individual route that defines each page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* To pass props we do it as normal, inside the elemnt to render, NOT on the Route component */}
        <Route path="/projects" element={<Projects projectsData={projectsData} />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
