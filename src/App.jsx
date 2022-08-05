import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Proyect from './components/Proyect/Proyect';
import Contact from './components/Contact/Contact';

import { ThemeProvider } from 'styled-components';
import { themes } from './styles/themes';
import { useDarkMode } from './DarkLight/DarkMode';

function App() {

  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === 'light' ? 'light' : 'dark';

  return (
    <ThemeProvider theme={themes[themeMode]}>
      <Hero />
      <NavBar theme={theme} setTheme={setTheme} />
      <About />
      <Experience />
      <Proyect />
      <Contact />
    </ThemeProvider>
  )
}

export default App;