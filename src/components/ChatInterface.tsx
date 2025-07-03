
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Bell } from "lucide-react";

export const ChatInterface = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex h-[calc(100vh-200px)]">
      {/* Lista de conversas */}
      <div className="w-80 border-r bg-white">
        <div className="p-4 border-b bg-blue-50">
          <div className="flex items-center space-x-2 text-blue-600 mb-4">
            <Bell className="w-4 h-4" />
            <span className="text-sm">Ative as notificações na web</span>
          </div>
          
          <div className="flex space-x-2 mb-4">
            <Button variant="default" size="sm" className="bg-gray-600">Novos</Button>
            <Button variant="ghost" size="sm">Meus</Button>
            <Button variant="ghost" size="sm">Outros</Button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar atendimento"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="p-4">
          <div className="text-center text-gray-500 py-8">
            <div className="text-4xl mb-4">💬</div>
            <p>Nenhum atendimento encontrado</p>
          </div>
        </div>
      </div>

      {/* Área principal do chat */}
      <div className="flex-1 flex flex-col">
        <Card className="flex-1 m-4">
          <CardContent className="h-full flex flex-col items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-6">💬</div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Escolha um atendimento para iniciar a conversa
              </h2>
              <p className="text-gray-500">
                Selecione uma conversa da lista ao lado para começar a atender seus clientes
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Barra inferior para número de telefone */}
        <div className="border-t bg-white p-4">
          <div className="flex items-center space-x-4">
            <select className="border rounded px-3 py-2 text-sm">
              <option>+55</option>
            </select>
            <Input 
              placeholder="(00) 0000-0000" 
              className="flex-1"
            />
            <Button>Conversar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
