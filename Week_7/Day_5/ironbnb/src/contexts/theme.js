//Create a context
import { createContext, useState } from 'react';

const ThemeContext = createContext();

//create the Provider which will make the context available troughout the application

function ThemeProviderWrapper(props) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProviderWrapper };
