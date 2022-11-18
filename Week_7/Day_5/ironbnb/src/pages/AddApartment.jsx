import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddApartment() {
  const [title, setTitle] = useState('');
  const [pricePerDay, setPricePerDay] = useState(0);

  const handleTitle = (e) => setTitle(e.target.value);
  const handlePricePerDay = (e) => setPricePerDay(e.target.value);

  //navigate comes from the useNavigate hook
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //The body of the request NEEDS to be an object
      const body = { title, pricePerDay };

      await axios.post('https://ironbnb-m3.herokuapp.com/apartments', body);

      setTitle('');
      setPricePerDay(0);

      //redirect to the home page
      navigate('/');

      /* 
      .then based version
        axios.post('https://ironbnb-m3.herokuapp.com/apartments', body)
        .then(response => {
          console.log(response)
        }).catch(err => {
          console.log(err)
        })
      */

      console.log(title, pricePerDay);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" value={title} onChange={handleTitle} />

        <label htmlFor="pricePerDay">Price:</label>
        <input type="number" value={pricePerDay} onChange={handlePricePerDay} />

        <button type="Submit">List apartment</button>
      </form>
    </div>
  );
}

export default AddApartment;
