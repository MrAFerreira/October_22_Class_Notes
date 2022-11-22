import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditProject() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const getProject = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/projects/${id}`);

      //response.data = {title, description}
      setTitle(response.data.title);
      setDescription(response.data.description);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/projects/${id}`, { title, description });

      //clear the inputs
      setTitle('');
      setDescription('');

      //redirect to the details view
      navigate(`/projects/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProject = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/projects/${id}`);
      //after we delete we redirect back to the project list
      navigate('/projects');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="EditProjectPage">
      <h3>Edit project</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          value={description}
          cols="30"
          rows="10"
          onChange={handleDescription}
        ></textarea>

        <button type="submit">Edit Project</button>
      </form>

      {/* Delete the project */}
      <button onClick={deleteProject}>
        Delete project!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      </button>
    </div>
  );
}

export default EditProject;
