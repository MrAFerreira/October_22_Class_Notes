import { useState } from 'react';

function AddMovie({ createMovie }) {
  //For every single input we need a state variable
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [hasOscars, setHasOscars] = useState(true);
  const [IMDBRating, setIMDBRating] = useState(5);

  //Create a handler function for every input/state
  const handleTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const handleDirector = (e) => setDirector(e.target.value);
  const handleHasOscars = (e) => setHasOscars(e.target.checked);
  const handleIMDBRating = (e) => setIMDBRating(e.target.value);

  //handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();

    let newMovie = { title, director, hasOscars, IMDBRating };
    console.log(newMovie);

    //We trigger the createMovie function that will update the state on the parent component

    createMovie(newMovie);

    //Reset the states
    setTitle('');
    setDirector('');
    setHasOscars(false);
    setIMDBRating(5);
  };

  return (
    <div>
      <h4>Add Movie</h4>
      {/* We don't need an action or method anymore */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" value={title} onChange={handleTitle} />

        <label htmlFor="director">Director</label>
        <input type="text" value={director} onChange={handleDirector} />

        <label htmlFor="hasOscars">Oscars</label>
        <input type="checkbox" checked={hasOscars} onChange={handleHasOscars} />

        <label htmlFor="IMDBRating">IMDB Rating</label>
        <input type="number" value={IMDBRating} onChange={handleIMDBRating} />

        <button>Create movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
