import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ProjectDetails() {
  /* useParams will extract the current id from the url */
  const { id } = useParams();
  return (
    <div>
      <h1>Project Details</h1>
      <h2>{id}</h2>
      <Link to="/projects"> Go back</Link>
    </div>
  );
}

export default ProjectDetails;
