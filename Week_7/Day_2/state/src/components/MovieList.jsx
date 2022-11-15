import { useState } from 'react';

//import from a JSON file
import allMovies from '../assets/movies.json';

import MovieCard from './MovieCard';

/* 
Simple demo array
const movies = [
  'Titanic',
  'Inception',
  'Mean Girls',
  'Interstellar',
  'Police Academy 2',
  'Lord of the Rings: The Two towers',
]; */

function MovieList() {
  //create a state using the json array
  const [movies, setMovies] = useState(allMovies);

  const deleteMovie = (id) => {
    const filteredMovies = movies.filter((movie) => movie._id !== id);
    setMovies(filteredMovies);
  };

  return (
    <div>
      {movies.map((movie) => {
        return (
          /* Inside the map you always need to pass the key to the uppermost parent. 
          Also, you can only have one parent element
            */
          <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie} />
        );
      })}
    </div>
  );
}

export default MovieList;
