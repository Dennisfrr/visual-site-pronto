
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { DashboardMetrics } from "@/components/DashboardMetrics";
import { ChatInterface } from "@/components/ChatInterface";
import { UsersList } from "@/components/UsersList";
import { ContactsList } from "@/components/ContactsList";

const Index = () => {
  const [activeSection, setActiveSection] = useState("atendimentos");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeSection) {
      case "atendimentos":
        return <ChatInterface />;
      case "dashboard":
        return <DashboardMetrics />;
      case "usuarios":
        return <UsersList />;
      case "contatos":
        return <ContactsList />;
      default:
        return <ChatInterface />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        <Sidebar 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />
        
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
          <div className="p-6">
            {renderContent()}
          </div>
        </main>
      </div>
      
      <Toaster />
    </div>
  );
};

export default Index;
