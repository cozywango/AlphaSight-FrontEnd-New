import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, DollarSign, Activity, BarChart3 } from "lucide-react";
import { useTradeStats } from "@/hooks/useTrades";

const StatsCards = () => {
  const { data: stats, isLoading } = useTradeStats();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="animate-pulse">
            <CardContent className="p-4">
              <div className="h-5 w-5 bg-slate-200 rounded mb-2"></div>
              <div className="h-6 bg-slate-200 rounded mb-1"></div>
              <div className="h-4 bg-slate-200 rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const statsDisplay = [
    {
      title: "Total Members",
      value: stats?.totalMembers?.toString() || "0",
      change: "+12",
      changeType: "positive" as const,
      icon: Users,
      description: "Active congress members"
    },
    {
      title: "Trades YTD",
      value: stats?.tradesYTD?.toLocaleString() || "0",
      change: "+18%",
      changeType: "positive" as const, 
      icon: BarChart3,
      description: "vs. last year"
    },
    {
      title: "Avg ROI",
      value: `${stats?.avgROI?.toFixed(1) || "0"}%`,
      change: `+${((stats?.avgROI || 0) / 10).toFixed(1)}%`,
      changeType: (stats?.avgROI || 0) >= 0 ? "positive" as const : "negative" as const,
      icon: TrendingUp,
      description: "Portfolio performance"
    },
    {
      title: "Total Volume",
      value: `$${((stats?.totalVolume || 0) / 1000000).toFixed(1)}M`,
      change: "-5.2%",
      changeType: "negative" as const,
      icon: DollarSign,
      description: "Disclosed value"
    },
    {
      title: "Active Tickers",
      value: stats?.activeTickers?.toString() || "0",
      change: "+87",
      changeType: "positive" as const,
      icon: Activity,
      description: "Unique stocks traded"
    },
    {
      title: "Last Update",
      value: "Live",
      change: "now",
      changeType: "neutral" as const,
      icon: Activity,
      description: "Data freshness"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
      {statsDisplay.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Icon className={`h-5 w-5 ${
                  stat.changeType === 'positive' ? 'text-green-600' :
                  stat.changeType === 'negative' ? 'text-red-600' :
                  'text-slate-600'
                }`} />
                <div className={`flex items-center text-sm ${
                  stat.changeType === 'positive' ? 'text-green-600' :
                  stat.changeType === 'negative' ? 'text-red-600' :
                  'text-slate-600'
                }`}>
                  {stat.changeType === 'positive' && <TrendingUp className="h-3 w-3 mr-1" />}
                  {stat.changeType === 'negative' && <TrendingDown className="h-3 w-3 mr-1" />}
                  {stat.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-xs text-slate-600">{stat.title}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.description}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCards;
