const NotRegistered = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-red-600">Acceso Denegado</h2>
        <p className="text-gray-700 mb-6">
          Lo sentimos, pero parece que no estás registrado en nuestro sistema.
        </p>
        <p className="text-gray-700 mb-6">
          Si crees que esto es un error, por favor contacta al administrador del sistema.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => window.location.href = '/'}
        >
          Volver al Inicio de Sesión
        </button>
      </div>
    </div>
  );
};

export default NotRegistered;