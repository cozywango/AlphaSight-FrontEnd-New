import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Activity, LogOut } from "lucide-react";
import { useTrades } from "@/hooks/useTrades";

const Index = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const { data: trades = [], isLoading } = useTrades();

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate("/auth");
    }
  };

  const recentTrades = trades.slice(0, 3);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <TrendingUp className="h-12 w-12 mx-auto mb-4 text-blue-400 animate-pulse" />
          <p className="text-slate-600">Loading AlphaSight...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <TrendingUp className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold">AlphaSight</h1>
          </div>
          <div className="flex items-center space-x-4">
            {user && (
              <div className="text-sm text-slate-300">
                Welcome, {user.email}
              </div>
            )}
            <Button 
              onClick={handleAuthAction}
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-slate-900"
            >
              {user ? (
                <>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-300">System Online</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Welcome Section */}
          <Card className="w-full max-w-md mx-auto lg:mx-0">
            <CardHeader>
              <CardTitle>
                {user ? "Welcome Back" : "Private Access"}
              </CardTitle>
              <CardDescription>
                {user 
                  ? "Access your congressional stock disclosure analytics"
                  : "Congressional stock disclosure analytics for friends & family"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {user ? (
                <Button 
                  onClick={() => navigate("/dashboard")}
                  className="w-full bg-slate-900 hover:bg-slate-800"
                >
                  Go to Dashboard
                </Button>
              ) : (
                <Button 
                  onClick={() => navigate("/auth")}
                  className="w-full bg-slate-900 hover:bg-slate-800"
                >
                  Enter Platform
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Preview Section */}
          <div className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="p-4">
                  <Users className="h-6 w-6 mx-auto mb-2 text-slate-600" />
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm text-slate-600">Members</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <DollarSign className="h-6 w-6 mx-auto mb-2 text-slate-600" />
                  <div className="text-2xl font-bold">{trades.length}</div>
                  <div className="text-sm text-slate-600">Total Trades</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <TrendingUp className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <div className="text-2xl font-bold">+8.3%</div>
                  <div className="text-sm text-slate-600">Avg ROI</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Activity className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold">Live</div>
                  <div className="text-sm text-slate-600">Data</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Trades Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Latest Disclosures</CardTitle>
                <CardDescription>Most recent congressional stock trades</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center py-4 text-slate-500">Loading trades...</div>
                ) : (
                  <div className="space-y-3">
                    {recentTrades.map((trade, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-medium text-sm">{trade.member.name}</div>
                            <div className="text-xs text-slate-600">{trade.trade_date}</div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-mono text-sm font-medium">{trade.ticker}</div>
                          <div className="text-xs text-slate-600">{trade.action}</div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${
                            trade.roi_percentage > 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {trade.roi_percentage > 0 ? '+' : ''}{trade.roi_percentage}%
                          </div>
                          <Badge 
                            variant={trade.status === "verified" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {trade.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
