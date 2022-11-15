import { useState } from 'react';

import './App.css';

import Counter from './components/Counter';
import MovieList from './components/MovieList';
import Spinner from './components/Spinner';

/* 
Remember that components are just regular functions, so they can have variable returns
const myFunction = (bool) => {
  if(bool){
    return "This is true"
  }else{
    return "This is false"
  }
} */

function App() {
  //declaring state
  const [theme, setTheme] = useState('light');

  const [loading, setLoading] = useState(true);

  const [show, setShow] = useState(true);

  //SetTimeout just for demonstration purposes
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  //Updater function
  const toggleTheme = (e) => {
    setTheme(e.target.value);

    //this will not work, we need to use the setFunction
    //theme = 'dark';
  };

  //toggle the visibility

  const toggleVisibility = () => {
    //show ? setShow(false) : setShow(true)
    setShow(!show);
    console.log(show);
  };

  //Conditional rendering using if/else
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className={`App ${theme}`}>
        <select onChange={toggleTheme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        {/* <Counter theme={theme} /> */}
        <button onClick={toggleVisibility}>{show ? 'Hide' : 'Show'}</button>
        {show && <MovieList />}

        <Spinner />
      </div>
    );
  }
}

export default App;
