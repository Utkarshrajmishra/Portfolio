import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import AnimatedCursor from 'react-animated-cursor';
function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={12}
        outerSize={18}
        color="89, 90, 82"
      />
     <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
