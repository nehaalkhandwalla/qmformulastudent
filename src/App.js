import logo from './logo_qmfs.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Team from './Team';
import Achievements from './Achievements';
import Cars from './Cars';
import Partners from './Partners';
import Layout from './Layout';
import Navbar from './NavBar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Team />} />
        <Route path="/" element={<Achievements />} />
        <Route path="/" element={<Cars />} />
        <Route path="/" element={<Partners />} />
      </Routes>
    </Router>
  );
}

export default App;
