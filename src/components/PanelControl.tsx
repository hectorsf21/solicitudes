import { Users, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PanelControl() {
  const navigate = useNavigate();

  const send_panel_usuario = () => {
    navigate('/admin/panel-usuario');
  };
  const send_panel_solicitudes = () => {
    navigate('/admin/panel-solicitudes');
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 max-w-4xl w-full px-4">
      {/* Panel de usuario */}
      <div
        onClick={send_panel_usuario}
        className="cursor-pointer bg-white p-4 hover:shadow-lg transition-shadow rounded-lg"
      >
        <div className="flex flex-row items-center justify-between pb-2">
          <div className="text-lg font-medium">Panel de Usuarios</div>
          <Users className="h-8 w-8 text-violet-500" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Gestión de usuarios del sistema</p>
        </div>
      </div>

      {/* Panel de Solicitudes */}
      <div
      onClick={send_panel_solicitudes} 
      className="cursor-pointer bg-white p-4 hover:shadow-lg transition-shadow rounded-lg">
        <div className="flex flex-row items-center justify-between pb-2">
          <div className="text-lg font-medium">Panel de Solicitudes</div>
          <FileText className="h-8 w-8 text-pink-500" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Gestión de solicitudes pendientes</p>
        </div>
      </div>
    </div>
  );
}
