
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const DashboardMetrics = () => {
  const metrics = [
    {
      title: "Fila",
      value: "0",
      subtitle: "Atendimentos",
      description: "agora",
      color: "text-red-500",
      bgColor: "bg-red-50 border-red-200"
    },
    {
      title: "Em atendimento",
      value: "0",
      subtitle: "Atendimentos",
      description: "agora",
      color: "text-orange-500",
      bgColor: "bg-orange-50 border-orange-200"
    },
    {
      title: "Concluídos",
      value: "0",
      subtitle: "Atendimentos",
      description: "últimos 30 dias",
      color: "text-green-500",
      bgColor: "bg-green-50 border-green-200"
    },
    {
      title: "Total",
      value: "0",
      subtitle: "Atendimentos",
      description: "pendentes + concluídos",
      color: "text-blue-500",
      bgColor: "bg-blue-50 border-blue-200"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded-lg font-medium">Geral</button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Usuário</button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Resultados</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className={`${metric.bgColor} hover:shadow-lg transition-all duration-200 animate-fade-in`}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">
                {metric.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-4xl font-bold ${metric.color} mb-1`}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-600">
                {metric.subtitle}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {metric.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Equipes:</span>
          <Select defaultValue="todos">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="vendas">Vendas</SelectItem>
              <SelectItem value="suporte">Suporte</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Período:</span>
          <Select defaultValue="26/06/2025 - 03/07/2025">
            <SelectTrigger className="w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="26/06/2025 - 03/07/2025">26/06/2025 - 03/07/2025</SelectItem>
              <SelectItem value="últimos-7-dias">Últimos 7 dias</SelectItem>
              <SelectItem value="últimos-30-dias">Últimos 30 dias</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Capacidade de atendimento</CardTitle>
          <p className="text-sm text-gray-600">Número de atendimentos novos x concluídos</p>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p>Gráfico de capacidade será exibido aqui</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Atendimentos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-700">0</div>
            <div className="text-sm text-red-500">↓ 0%</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Novos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-700">0</div>
            <div className="text-sm text-red-500">↓ 0% por dia</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Concluídos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-700">0</div>
            <div className="text-sm text-red-500">↓ 0% por dia</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
