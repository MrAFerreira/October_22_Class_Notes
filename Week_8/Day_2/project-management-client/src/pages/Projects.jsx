import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddProject from '../components/AddProject';

function Projects() {
  //declare the state
  const [projects, setProjects] = useState([]);

  //function to call the API

  const getProjects = async () => {
    try {
      //process.env.REACT_APP_API_URL is referring to lcoalhost 5005 locally but will be the deplpoyed link in the future
      const storedToken = localStorage.getItem('authToken');

      //every route that is protected in  the backend needs to receive the headers object with the authorization token
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/projects`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      setProjects(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //We need to call the function in a specific moment
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="ProjectListPage">
      <AddProject refreshProjects={getProjects} />
      <h1>List of projects:</h1>

      {projects.map((project) => {
        return (
          <div key={project._id} className="ProjectCard card">
            <Link to={`/projects/${project._id}`}>
              <h3>{project.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
