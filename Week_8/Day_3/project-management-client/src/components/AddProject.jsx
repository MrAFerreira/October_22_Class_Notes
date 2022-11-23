import { useState } from 'react';
import axios from 'axios';

function AddProject(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const handleUpload = async (e) => {
    try {
      setLoading(true);

      //formData === enctype=multipart/formdata
      const uploadData = new FormData();

      //add the file to the formData
      uploadData.append('image', e.target.files[0]);

      //send the file to our api
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/upload`, uploadData);

      console.log(response.data.fileUrl);
      setImage(response.data.fileUrl);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/projects`, {
        title,
        description,
        imageUrl: image,
      });

      //clear the inputs
      setTitle('');
      setDescription('');

      //refresh the list
      props.refreshProjects();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AddProject">
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

        <label htmlFor="image">Project Image</label>
        <input type="file" name="image" onChange={handleUpload} />

        {loading ? <p>Loading...</p> : <button type="submit">Add Project</button>}
      </form>
    </div>
  );
}

export default AddProject;
