import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TrendingUp, Download, Filter, Search, BarChart3, Users, DollarSign, Activity } from "lucide-react";
import TradeDetailModal from "@/components/TradeDetailModal";
import TradesTable from "@/components/TradesTable";
import StatsCards from "@/components/StatsCards";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const [selectedTrade, setSelectedTrade] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [memberFilter, setMemberFilter] = useState("all");
  const [tickerFilter, setTickerFilter] = useState("all");

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto p-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Congressional Trades Dashboard</h1>
            <p className="text-slate-600 mt-1">Track and analyze stock disclosures from U.S. Congress members</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </Button>
            <Button className="bg-slate-900 hover:bg-slate-800">
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <StatsCards />

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Filters & Search</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Search member or ticker..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="7d">Last 7 Days</SelectItem>
                  <SelectItem value="30d">Last 30 Days</SelectItem>
                  <SelectItem value="90d">Last 90 Days</SelectItem>
                  <SelectItem value="ytd">Year to Date</SelectItem>
                </SelectContent>
              </Select>
              <Select value={memberFilter} onValueChange={setMemberFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Congress Member" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Members</SelectItem>
                  <SelectItem value="pelosi">Nancy Pelosi</SelectItem>
                  <SelectItem value="crenshaw">Dan Crenshaw</SelectItem>
                  <SelectItem value="gottheimer">Josh Gottheimer</SelectItem>
                  <SelectItem value="garcia">Sylvia Garcia</SelectItem>
                </SelectContent>
              </Select>
              <Select value={tickerFilter} onValueChange={setTickerFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Stock Ticker" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tickers</SelectItem>
                  <SelectItem value="NVDA">NVDA</SelectItem>
                  <SelectItem value="MSFT">MSFT</SelectItem>
                  <SelectItem value="AAPL">AAPL</SelectItem>
                  <SelectItem value="TSLA">TSLA</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="w-full">
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="trades" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="trades">Trade Details</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="exports">Export Data</TabsTrigger>
          </TabsList>

          <TabsContent value="trades">
            <TradesTable onTradeSelect={setSelectedTrade} />
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trade Volume by Month</CardTitle>
                  <CardDescription>Number of disclosed trades over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-slate-500">
                      <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                      <p>Chart Placeholder</p>
                      <p className="text-sm">Bar chart showing monthly trade volumes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ROI Distribution</CardTitle>
                  <CardDescription>Performance of congressional trades</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-slate-500">
                      <TrendingUp className="h-12 w-12 mx-auto mb-2" />
                      <p>Chart Placeholder</p>
                      <p className="text-sm">Line chart showing ROI trends</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="exports">
            <Card>
              <CardHeader>
                <CardTitle>Export Data</CardTitle>
                <CardDescription>Download filtered trade data in various formats</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <Download className="h-6 w-6 mb-2" />
                    <span>CSV Export</span>
                    <span className="text-xs text-slate-500">Spreadsheet format</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <Download className="h-6 w-6 mb-2" />
                    <span>JSON Export</span>
                    <span className="text-xs text-slate-500">Developer format</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <Download className="h-6 w-6 mb-2" />
                    <span>PDF Report</span>
                    <span className="text-xs text-slate-500">Summary format</span>
                  </Button>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-medium mb-2">Current Filter Summary</h4>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p>• Date Range: {dateFilter === "all" ? "All Time" : dateFilter}</p>
                    <p>• Member: {memberFilter === "all" ? "All Members" : memberFilter}</p>
                    <p>• Ticker: {tickerFilter === "all" ? "All Tickers" : tickerFilter}</p>
                    <p>• Total Records: 1,247 trades</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Trade Detail Modal */}
        {selectedTrade && (
          <TradeDetailModal
            trade={selectedTrade}
            open={!!selectedTrade}
            onClose={() => setSelectedTrade(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
