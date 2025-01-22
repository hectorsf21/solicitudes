import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fundesurg from './pages/Fundesurg';
import ControlDeEstudio from './pages/ControlDeEstudio';
import Egresados from './pages/Egresados';
import Home from './pages/index';
import NotRegistered from './components/NotRegistered';
import Admin from './pages/Admin';
import { Link } from 'react-router-dom';

export default function App() {

  return (
    <Router>
      <div>
      <nav className='p-4 flex justify-around'>
      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/f">Fundesurg</Link>
      <Link to="/c">Control de Estudio</Link>
      <Link to="/e">Egresados</Link>
      <Link to="/error">Error</Link>
    </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/f" element={<Fundesurg />} />
        <Route path="/c" element={<ControlDeEstudio />} />
        <Route path="/e" element={<Egresados />} />
        <Route path="/error" element={<NotRegistered />} />
      </Routes>
    </Router>
  );
}