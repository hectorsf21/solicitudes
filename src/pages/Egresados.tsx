import { useUser } from '../context/UserContext';

const Egresados = () => {

  const { user } = useUser();

  return (
    <div>
      <h1>Egresados</h1>
      {user ? (
        <div>
          <p>Bienvenido, {user.name}</p>
          <p>Tu ID es: {user.id}</p>
        </div>
      ) : (
        <p>No estás logueado.</p>
      )}
      <p>Contenido de la página Egresados.</p>
    </div>
  );
};

export default Egresados;