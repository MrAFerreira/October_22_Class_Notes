//https://restcountries.com/v3.1/name/{name}

//Axios

const getCountry = async (name) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    const country = response.data[0];

    document.getElementById('country-name').innerText = country.name.common;
    document.getElementById('capital').innerText = country.capital[0];
    document.getElementById('flag').setAttribute('src', country.flags.png);

    console.log(country);
  } catch (error) {
    console.log(error);

    /*     if (error.response.status === 404) {
      alert(`The country ${name} doesn't exist`);
    } else {
      alert('Server error, sorry.');
    } */

    //Ternary
    error.response.status === 404
      ? alert(`The country ${name} doesn't exist`)
      : alert('Server error, sorry.');
  }
};

document.getElementById('get-country').addEventListener('click', () => {
  const countryToSearch = document.getElementById('name-input').value;
  getCountry(countryToSearch);
});
