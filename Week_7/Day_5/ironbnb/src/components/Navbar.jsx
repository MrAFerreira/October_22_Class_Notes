import { NavLink } from 'react-router-dom';
//useContext
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <nav className={`Navbar ${theme}`}>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>

      <NavLink to="/apartments/new">
        <button>Add Apartment</button>
      </NavLink>

      <button onClick={toggleTheme}>Change to {theme === 'light' ? 'dark' : 'light'}</button>
    </nav>
  );
}

export default Navbar;
