import React from 'react';

function MovieCard(props) {
  const { movie, deleteMovie } = props;

  const rateMovie = (rating) => {
    if (rating > 9) {
      return 'green';
    } else if (rating > 7) {
      return 'yellow';
    } else {
      return 'red';
    }
  };
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>
        Rating: <span className={rateMovie(movie.IMDBRating)}>{movie.IMDBRating}</span>
      </p>
      {/* Inline conditions using && */}
      {/* {movie.hasOscars && <p>This movie won an oscar</p>}
      {!movie.hasOscars && <p>No oscar for you</p>} */}

      {/* Ternary operator */}
      {movie.hasOscars ? <p>Won an oscar</p> : <p>No oscar for you</p>}

      <button onClick={() => deleteMovie(movie._id)}>Delete</button>
    </div>
  );
}

export default MovieCard;
