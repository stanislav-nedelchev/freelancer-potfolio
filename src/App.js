import './styles/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.jsx';
import ProjectPage from './pages/ProjectPage/ProjectPage.jsx';
import ContactsPage from './pages/ContactsPage/ContactsPage.jsx';

import ScrollToTop from './utils/scrollToTop.js';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
