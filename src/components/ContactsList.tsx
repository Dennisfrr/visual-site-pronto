
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, User } from "lucide-react";

export const ContactsList = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contatos</h1>
          <p className="text-gray-600">Gerencie seus contatos do WhatsApp</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Novo Contato
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Buscar contatos..."
          className="pl-10"
        />
      </div>

      <Card>
        <CardContent className="py-12">
          <div className="text-center">
            <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhum contato encontrado</h3>
            <p className="text-gray-600 mb-4">Adicione contatos para começar a gerenciar sua base de clientes</p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Contato
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
