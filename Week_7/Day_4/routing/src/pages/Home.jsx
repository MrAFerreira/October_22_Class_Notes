import { useState } from 'react';
import { Navigate } from 'react-router-dom';
const imgURL =
  'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/home.gif';

function Home() {
  const [loggedIn, setLoggedIn] = useState(true);

  //Navigate is a component that will redirect you if some condition is met

  if (!loggedIn) return <Navigate to="/about" />;

  return (
    <div>
      <h1>Home</h1>
      <img src={imgURL} alt="home gif" className="page-img" />
    </div>
  );
}

export default Home;
