import { Users, FileText } from "lucide-react"

export default function Admin() {
  return (
    <>
     <div className="flex flex-col bg-gray-100">
      <nav className="bg-blue-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-white text-2xl">Admin Panel</h1>
        </div>
      </nav>

      <main className="container w-full flex-grow">
      <div className="w-full min-h-screen p-8">
      <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">

        {/* Panel de usuario */}
        <div className="cursor-pointer bg-white p-4 hover:shadow-lg transition-shadow">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-lg font-medium">Panel de Usuarios</div>
            <Users className="h-8 w-8 text-violet-500" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Gestión de usuarios del sistema</p>
          </div>
        </div>
        {/* Panel de Solicitudes */}
        <div className="cursor-pointer bg-white p-4 hover:shadow-lg transition-shadow">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-lg font-medium">Panel de Solicitudes</div>
            <FileText className="h-8 w-8 text-pink-500" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Gestión de solicitudes pendientes</p>
          </div>
        </div>
      </div>
    </div>
      </main>

      <footer className="bg-gray-800 p-4">
        <div className="container mx-auto text-white">
          <p className="text-center">&copy; Todos los derechos reservados, Universidad Romulo Gallegos.</p>
        </div>
      </footer>
    </div>
    </>
  )
}
