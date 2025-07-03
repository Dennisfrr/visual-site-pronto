
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Plus, User } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const UsersList = () => {
  const users = [
    {
      id: 1,
      name: "Islan",
      email: "islan",
      role: "Administrador",
      avatar: "I"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Usuários</h1>
          <p className="text-gray-600">1 de 20 usuários contratados</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Novo
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar"
            className="pl-10"
          />
        </div>
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Perfil:" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="agente">Agente</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {users.map((user) => (
              <div key={user.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">{user.avatar}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{user.name}</h3>
                    <p className="text-gray-600 text-sm">{user.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {user.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {users.length === 0 && (
        <Card>
          <CardContent className="py-12">
            <div className="text-center">
              <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhum usuário encontrado</h3>
              <p className="text-gray-600 mb-4">Adicione usuários para começar a gerenciar sua equipe</p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Usuário
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
