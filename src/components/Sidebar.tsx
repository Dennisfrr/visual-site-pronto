
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Apps, 
  User, 
  Settings,
  ChevronRight,
  Bell
} from "lucide-react";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const Sidebar = ({ activeSection, setActiveSection, isOpen, setIsOpen }: SidebarProps) => {
  const menuItems = [
    { 
      id: "atendimentos", 
      label: "Atendimentos", 
      icon: MessageCircle,
      badge: "Novos"
    },
    { 
      id: "dashboard", 
      label: "Dashboard", 
      icon: Apps 
    },
    { 
      id: "usuarios", 
      label: "Usuários", 
      icon: User 
    },
    { 
      id: "contatos", 
      label: "Contatos", 
      icon: User 
    },
    { 
      id: "configuracoes", 
      label: "Configurações", 
      icon: Settings 
    }
  ];

  return (
    <div className={cn(
      "fixed left-0 top-20 h-[calc(100vh-5rem)] bg-white border-r transition-all duration-300 z-30",
      isOpen ? "w-64" : "w-16"
    )}>
      <div className="p-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-start mb-4"
        >
          <ChevronRight className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
          {isOpen && <span className="ml-2">Menu</span>}
        </Button>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start transition-all duration-200",
                  activeSection === item.id && "bg-purple-100 text-purple-700 border-purple-200"
                )}
                onClick={() => setActiveSection(item.id)}
              >
                <Icon className="w-4 h-4" />
                {isOpen && (
                  <>
                    <span className="ml-3">{item.label}</span>
                    {item.badge && (
                      <div className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {item.badge}
                      </div>
                    )}
                  </>
                )}
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
