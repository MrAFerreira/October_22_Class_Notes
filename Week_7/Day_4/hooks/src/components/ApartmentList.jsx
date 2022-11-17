import { useState, useEffect } from 'react';
import axios from 'axios';
//everytime you need info from an API you need both hooks (useEffect and useState)

function ApartmentList() {
  const [apartments, setApartments] = useState([]);
  //we need one more state to know if we already got the information
  const [fetching, setFetching] = useState(true);

  const getApartments = async () => {
    try {
      const response = await axios.get('https://ironbnb-m3.herokuapp.com/apartments');
      const apartments = response.data;
      setApartments(apartments);
      setFetching(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApartments();
  }, []);

  if (fetching) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        {apartments.map((apartment) => {
          return (
            <div key={apartment._id} className="card">
              <img src={apartment.img} alt="apartment" />
              <h2>{apartment.title}</h2>
              <p>{apartment.pricePerDay}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ApartmentList;
