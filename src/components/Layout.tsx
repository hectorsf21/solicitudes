import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-white text-2xl">SOLICITUD UNERG</h1>
          <ul className="flex gap-x-4">
            <li className="text-white cursor-pointer">
              <Link to="/fundesurg">Fundesurg</Link>
            </li>
            <li className="text-white cursor-pointer">
              <Link to="/control-de-estudio">Control de estudio</Link>
            </li>
            <li className="text-white cursor-pointer">
              <Link to="/egresados">Egresados</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto my-8 flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 p-4">
        <div className="container mx-auto text-white">
          <p className="text-center">&copy; Todos los derechos reservados, Universidad Romulo Gallegos.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
