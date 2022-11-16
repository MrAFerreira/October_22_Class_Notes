import { useState } from 'react';

import './App.css';

import MovieList from './components/MovieList';
import Spinner from './components/Spinner';

function App() {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);

  //SetTimeout just for demonstration purposes
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const toggleTheme = (e) => {
    setTheme(e.target.value);
  };

  const toggleVisibility = () => {
    setShow(!show);
    console.log(show);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className={`App ${theme}`}>
        <select onChange={toggleTheme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <button onClick={toggleVisibility}>{show ? 'Hide' : 'Show'}</button>
        {show && <MovieList />}

        <Spinner />
      </div>
    );
  }
}

export default App;
