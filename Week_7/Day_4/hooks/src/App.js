import './App.css';
import { useState } from 'react';

import Counter from './components/Counter';
import Timer from './components/Timer';
import ApartmentList from './components/ApartmentList';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}> {show ? 'Hide' : 'Show'} </button>

      {/*  {show && <Counter />} */}
      {show && <Timer />}
      {/*  <ApartmentList /> */}
    </div>
  );
}

export default App;
