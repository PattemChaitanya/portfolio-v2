import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/index';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import PageTransition from './components/transitions/page-transition';
import Resume from './pages/resume';
import Articles from './pages/articles';
import AppContext from './components/utils/context';
import { useState, useEffect } from 'react';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [theme, setTheme] = useState('light');
  const [show, setShow] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleOpen = () => {
    setShow(!show);
  };

  const closeShow = () => {
    setShow(false);
  };

  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <PageTransition>
        <AppContext.Provider
          value={{
            theme,
            toggleTheme,
            show,
            handleopen: () => handleOpen(),
            closeShow: () => closeShow(),
          }}
        >
          <AnimatedRoutes />
        </AppContext.Provider>
      </PageTransition>
    </Router>
  );
}

export default App;
