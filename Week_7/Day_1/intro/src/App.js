//import all dependencies and files here
import './App.css';
import catImage from './assets/download.jpeg';

//import all the components here
import Greeting from './components/Greeting';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import StudentList from './components/StudentList';
import ReactPlayer from 'react-player';

let firstName = 'Bárbara';

//JSX
//This is a comment
/* Multiline
Comment
*/
function App() {
  return (
    <div className="App">
      <Navbar />

      {/* class and for are reserved keywords so we need to use className and htmlFor (they serve the same purpose) */}
      {/*  <img
        src="https://sm.mashable.com/mashable_sea/photo/default/950_49a6.jpg"
        alt="my favourite cat"
      /> */}
      {/* importing local images */}
      {/*       <img src={catImage} alt="my other favourite cat" /> */}
      <label htmlFor=""></label>
      <button>Click heeere</button>
      <Greeting firstName="rafa" />
      <Greeting firstName="filipe" />

      {/* The double curly brackets shouldn't be confused with hbs,  the first one just declares its a javascript expression, the second one creates an object */}
      <StudentList>
        <StudentCard name="Carlota" week={7} info={{ bootcamp: 'UXUI', city: 'Lisbon' }} />
        <StudentCard name="Gonçalo" week={7} info={{ bootcamp: 'Data', city: 'Barcelona' }} />
      </StudentList>

      {/* Studentlist 2 has more students */}
      <StudentList>
        <StudentCard name="Carlota" week={7} info={{ bootcamp: 'UXUI', city: 'Lisbon' }} />
        <StudentCard name="Gonçalo" week={7} info={{ bootcamp: 'Data', city: 'Barcelona' }} />
        <StudentCard name="Natália" week={7} info={{ bootcamp: 'Web', city: 'Porto' }} />
        <StudentCard name="Lucas" week={23} info={{ bootcamp: 'GameDev', city: 'Rome' }} />
      </StudentList>

      <ReactPlayer
        url="https://www.youtube.com/watch?v=1C1yoO7jiRk"
        width="1200px"
        height="720px"
        playing={true}
      />
    </div>
  );
}

export default App;
