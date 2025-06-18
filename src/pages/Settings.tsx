import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Key, Database, Download, RefreshCw, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";

const Settings = () => {
  const [tiingoKey, setTiingoKey] = useState("");
  const [alphaVantageKey, setAlphaVantageKey] = useState("");
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);

  const systemStatus = [
    { service: "PDF Parser", status: "healthy", lastUpdate: "2 minutes ago" },
    { service: "Tiingo API", status: "healthy", lastUpdate: "5 minutes ago" },
    { service: "Alpha Vantage API", status: "warning", lastUpdate: "15 minutes ago" },
    { service: "Data Enrichment", status: "healthy", lastUpdate: "1 minute ago" },
    { service: "Database", status: "healthy", lastUpdate: "30 seconds ago" }
  ];

  const recentLogs = [
    { timestamp: "2024-06-18 14:32:15", level: "INFO", message: "Successfully processed PTR filing for member ID 123" },
    { timestamp: "2024-06-18 14:31:42", level: "INFO", message: "Enriched NVDA trade data with current market price" },
    { timestamp: "2024-06-18 14:30:18", level: "WARN", message: "Rate limit approaching for Alpha Vantage API" },
    { timestamp: "2024-06-18 14:29:55", level: "INFO", message: "Database backup completed successfully" },
    { timestamp: "2024-06-18 14:28:33", level: "ERROR", message: "Failed to parse PDF: corrupted file format" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings & Debug</h1>
          <p className="text-slate-600">System configuration, API management, and monitoring tools</p>
        </div>

        <Tabs defaultValue="api-keys" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="api-keys">API Keys</TabsTrigger>
            <TabsTrigger value="data-refresh">Data Refresh</TabsTrigger>
            <TabsTrigger value="system-health">System Health</TabsTrigger>
            <TabsTrigger value="logs">Debug Logs</TabsTrigger>
          </TabsList>

          {/* API Keys Management */}
          <TabsContent value="api-keys">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Key className="h-5 w-5" />
                    <span>Market Data APIs</span>
                  </CardTitle>
                  <CardDescription>
                    Configure API keys for stock price and market data enrichment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="tiingo-key">Tiingo API Key</Label>
                    <div className="flex space-x-2 mt-1">
                      <Input
                        id="tiingo-key"
                        type="password"
                        placeholder="Enter Tiingo API key..."
                        value={tiingoKey}
                        onChange={(e) => setTiingoKey(e.target.value)}
                      />
                      <Button variant="outline">Test</Button>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Used for real-time stock prices and historical data
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="alpha-key">Alpha Vantage API Key</Label>
                    <div className="flex space-x-2 mt-1">
                      <Input
                        id="alpha-key"
                        type="password"
                        placeholder="Enter Alpha Vantage API key..."
                        value={alphaVantageKey}
                        onChange={(e) => setAlphaVantageKey(e.target.value)}
                      />
                      <Button variant="outline">Test</Button>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Backup source for market data and company fundamentals
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h4 className="font-medium">API Status</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Tiingo Connection</span>
                        <Badge className="bg-green-100 text-green-800">Connected</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Alpha Vantage Connection</span>
                        <Badge className="bg-yellow-100 text-yellow-800">Rate Limited</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">yFinance (Fallback)</span>
                        <Badge className="bg-green-100 text-green-800">Available</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Configure alerts and data refresh preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="auto-refresh">Auto Data Refresh</Label>
                      <p className="text-sm text-slate-600">Automatically update trade data every hour</p>
                    </div>
                    <Switch
                      id="auto-refresh"
                      checked={autoRefresh}
                      onCheckedChange={setAutoRefresh}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-slate-600">Get notified of new filings and errors</p>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>

                  <Separator />

                  <div>
                    <Label htmlFor="refresh-interval">Refresh Interval</Label>
                    <select 
                      id="refresh-interval"
                      className="w-full mt-1 p-2 border border-slate-300 rounded-md text-sm"
                    >
                      <option value="15">Every 15 minutes</option>
                      <option value="30">Every 30 minutes</option>
                      <option value="60" selected>Every hour</option>
                      <option value="240">Every 4 hours</option>
                      <option value="1440">Daily</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="email">Notification Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your-email@example.com"
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Data Refresh Controls */}
          <TabsContent value="data-refresh">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <RefreshCw className="h-5 w-5" />
                    <span>Manual Data Refresh</span>
                  </CardTitle>
                  <CardDescription>Trigger manual updates for different data sources</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <Database className="h-4 w-4 mr-2" />
                      Refresh All PTR Filings
                      <span className="ml-auto text-xs text-slate-500">Last: 2 hours ago</span>
                    </Button>
                    
                    <Button className="w-full justify-start" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Update Stock Prices
                      <span className="ml-auto text-xs text-slate-500">Last: 5 minutes ago</span>
                    </Button>
                    
                    <Button className="w-full justify-start" variant="outline">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Recalculate ROI Data
                      <span className="ml-auto text-xs text-slate-500">Last: 1 hour ago</span>
                    </Button>
                    
                    <Button className="w-full justify-start" variant="outline">
                      <Database className="h-4 w-4 mr-2" />
                      Full System Refresh
                      <span className="ml-auto text-xs text-slate-500">Last: 6 hours ago</span>
                    </Button>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-2">Refresh Status</h4>
                    <div className="text-sm text-slate-600 space-y-1">
                      <p>• PDF Processing: Idle</p>
                      <p>• Price Updates: Running (3/547 complete)</p>
                      <p>• ROI Calculations: Queued</p>
                      <p>• Database Optimization: Scheduled for tonight</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Statistics</CardTitle>
                  <CardDescription>Current database and processing metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">2,147</div>
                      <div className="text-sm text-slate-600">Total Trades</div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">547</div>
                      <div className="text-sm text-slate-600">Members</div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">1,243</div>
                      <div className="text-sm text-slate-600">Unique Tickers</div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">98.7%</div>
                      <div className="text-sm text-slate-600">Parse Success</div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-2">Processing Queue</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Pending PDF Files</span>
                        <span className="font-mono">23</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Price Updates Needed</span>
                        <span className="font-mono">156</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>ROI Recalculations</span>
                        <span className="font-mono">89</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Failed Processes</span>
                        <span className="font-mono">3</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* System Health */}
          <TabsContent value="system-health">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>System Health Monitor</span>
                </CardTitle>
                <CardDescription>Real-time status of all system components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemStatus.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {service.status === 'healthy' && <CheckCircle className="h-5 w-5 text-green-600" />}
                        {service.status === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-600" />}
                        {service.status === 'error' && <AlertTriangle className="h-5 w-5 text-red-600" />}
                        <div>
                          <div className="font-medium">{service.service}</div>
                          <div className="text-sm text-slate-600 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {service.lastUpdate}
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant={
                          service.status === 'healthy' ? 'default' :
                          service.status === 'warning' ? 'secondary' : 'destructive'
                        }
                        className={
                          service.status === 'healthy' ? 'bg-green-100 text-green-800' :
                          service.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }
                      >
                        {service.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Debug Logs */}
          <TabsContent value="logs">
            <Card>
              <CardHeader>
                <CardTitle>System Debug Logs</CardTitle>
                <CardDescription>Recent system events and error messages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentLogs.map((log, index) => (
                    <div key={index} className="font-mono text-sm p-3 bg-slate-50 rounded border-l-4 border-l-slate-300">
                      <div className="flex items-center space-x-3">
                        <span className="text-slate-500">{log.timestamp}</span>
                        <Badge 
                          variant="outline"
                          className={
                            log.level === 'ERROR' ? 'text-red-600 border-red-600' :
                            log.level === 'WARN' ? 'text-yellow-600 border-yellow-600' :
                            'text-blue-600 border-blue-600'
                          }
                        >
                          {log.level}
                        </Badge>
                        <span className="text-slate-900">{log.message}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-between">
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export Logs
                  </Button>
                  <Button variant="outline">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
