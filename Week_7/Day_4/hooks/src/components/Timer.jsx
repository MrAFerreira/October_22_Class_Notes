import { useState, useEffect } from 'react';

/* 
//this doesn't work
const myFunction = () => {
  useEffect()
} */

function Timer() {
  const [count, setCount] = useState(0);

  //useEffect(callback, dependencyArray)
  //useEffect(() => {}, [])
  //We call the callback function, depending on the depency Array
  //if the array is empty
  //if we pass a variable, the callback function will be called everytime the value changes

  //Mounting phase useEffect
  useEffect(() => {
    console.log('Mounting phase');
    //since the dependency array is empty, this only runs once
    let intervalId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    //return inside useEffect only happens on the unmounting phase
    /* return () => {
      clearInterval(intervalId);
      console.log('Unmounting phase');
    }; */
  }, []);

  useEffect(() => {
    console.log('Update phase');
    document.title = count;
  }, [count]);

  return (
    <div className="Timer">
      <h2>Timer</h2>

      <p>{count}</p>
    </div>
  );
}

export default Timer;
