import { useState } from 'react';

function Searchbar({ filterMovies }) {
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
    filterMovies(e.target.value);
  };

  return (
    <div>
      <h3>Search</h3>

      <input type="text" value={query} onChange={handleQuery} />
    </div>
  );
}

export default Searchbar;
