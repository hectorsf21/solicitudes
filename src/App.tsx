import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fundesurg from './pages/Fundesurg';
import ControlDeEstudio from './pages/ControlDeEstudio';
import Egresados from './pages/Egresados';
import Home from './pages/index';
import NotRegistered from './components/NotRegistered';
import AdminLayout from './pages/AdminLayout';
//import { Link } from 'react-router-dom';
import Layout from './components/Layout';
import PanelUsuario from './components/PanelUsuario';
import PanelControl from './components/PanelControl';
import PanelSolicitudes from './components/PanelSolicitudes';

export default function App() {

  return (
    <Router>
      {/* <div>
      <nav className='p-4 flex justify-around'>
      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/f">Fundesurg</Link>
      <Link to="/c">Control de Estudio</Link>
      <Link to="/e">Egresados</Link>
      <Link to="/error">Error</Link>
    </nav>
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLayout><PanelControl/></AdminLayout>} />
        <Route path="/f" element={<Layout><Fundesurg /></Layout>} />
        <Route path="/c" element={<Layout><ControlDeEstudio /></Layout>} />
        <Route path="/e" element={<Layout><Egresados /></Layout>} />
        <Route path="/error" element={<Layout><NotRegistered /></Layout>} />
        <Route path="/admin/panel-usuario" element={<AdminLayout><PanelUsuario/></AdminLayout>} />
        <Route path="/admin/panel-solicitudes" element={<AdminLayout><PanelSolicitudes/></AdminLayout>} />
      </Routes>
    </Router>
  );
}