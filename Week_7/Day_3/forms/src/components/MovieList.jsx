import { useState } from 'react';

//import from a JSON file
import allMovies from '../assets/movies.json';

import MovieCard from './MovieCard';
import AddMovie from './AddMovie';
import Searchbar from './Searchbar';

function MovieList() {
  const [movies, setMovies] = useState(allMovies);
  const [showMovies, setShowMovies] = useState(allMovies);

  const deleteMovie = (id) => {
    const filteredMovies = movies.filter((movie) => movie._id !== id);
    setMovies(filteredMovies);
    setShowMovies(filteredMovies);
  };

  const createMovie = (movie) => {
    //this is okay
    /* const moviesCopy = [...movies]
    moviesCopy.push(movie)
    setMovies(moviesCopy) */
    //but....

    const newMovies = [movie, ...movies];
    setMovies(newMovies);
  };

  const filterMovies = (searchQuery) => {
    //to filter we can use .startsWith(to check the beggining of the string)
    //includes to check the whole string
    //endsWith to check the end
    // === direct comparisons are not a good idea, because you need to write the whole title

    /* let filteredMovies = movies.filter((movie) => movie.title.startsWith(searchQuery)); */
    let filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setShowMovies(filteredMovies);
  };

  return (
    <div>
      <AddMovie createMovie={createMovie} />
      <Searchbar filterMovies={filterMovies} />
      {showMovies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie} />;
      })}
    </div>
  );
}

export default MovieList;
