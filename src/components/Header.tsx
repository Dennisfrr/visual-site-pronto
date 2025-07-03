
import { Bell, Settings, User, Apps, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold text-sm">CRM</span>
            </div>
            <span className="font-semibold text-lg">CRM & WhatsApp</span>
          </div>
          
          <nav className="flex items-center space-x-6">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Atendimentos
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:bg-white/10 flex items-center space-x-1">
                  <span>CRM</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Contatos</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Apps className="w-4 h-4" />
                  <span>Painéis</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:bg-white/10 flex items-center space-x-1">
                  <Apps className="w-4 h-4" />
                  <span>Apps</span>
                  <div className="bg-blue-500 text-xs px-2 py-0.5 rounded ml-1">NOVO</div>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem>Campanhas</DropdownMenuItem>
                <DropdownMenuItem>Chatbot</DropdownMenuItem>
                <DropdownMenuItem>Sequências</DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-between">
                  <span>Mais apps</span>
                  <div className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">NOVO</div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="text-white hover:bg-white/10">
              Relatórios
            </Button>
            
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Ajustes
            </Button>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-white/10 px-4 py-2 rounded-full text-sm">
            Em implantação
          </div>
          <Button className="bg-white text-purple-600 hover:bg-gray-100">
            Conversar com a equipe de implantação
          </Button>
          <Bell className="w-5 h-5 cursor-pointer hover:text-gray-200" />
          <Settings className="w-5 h-5 cursor-pointer hover:text-gray-200" />
          <User className="w-5 h-5 cursor-pointer hover:text-gray-200" />
        </div>
      </div>
    </header>
  );
};
