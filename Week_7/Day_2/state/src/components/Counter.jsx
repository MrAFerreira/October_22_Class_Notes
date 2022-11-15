//hooks
//useState hook - sets and controls the state of a component

import { useState } from 'react';

function Counter(props) {
  const { theme } = props;
  //state variable - count
  //updater function - setCount
  //inside the parenthesis we pass the initial value for the state
  const [count, setCount] = useState(0);

  /*  const myFunction = () => {
    setCount(count - 1)
  } */
  return (
    <div className={theme}>
      <h2>Counter</h2>

      <p>You clicked {count} times</p>
      {/* 
      
      To prevent infinite rerender we CANNOT call a function inside the on click. Either we pass a function with no arguments or we pass an anonymous function

       <button onClick={myFunction}> - </button>
      */}
      <button onClick={() => setCount((prevCount) => prevCount - 1)}> - </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}> + </button>
      <button onClick={() => setCount(0)}> Reset</button>
    </div>
  );
}

export default Counter;
