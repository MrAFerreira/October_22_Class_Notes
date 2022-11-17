import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        {/*  <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link> */}

        {/* NavLink works the same as Link, but it keeps track of where you are in the website */}
        <NavLink to="/" className={({ isActive }) => (isActive ? 'selected' : '')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'selected' : '')}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'selected' : '')}>
          Projects
        </NavLink>
        <NavLink to="/pokedex" className={({ isActive }) => (isActive ? 'selected' : '')}>
          Pokedex
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
