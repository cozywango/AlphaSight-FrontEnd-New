import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Users, DollarSign, Download, Settings, Search, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">AlphaSight Style Guide</h1>
          <p className="text-slate-600">Design system and component library for congressional stock disclosure analytics</p>
        </div>

        {/* Typography */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Typography</CardTitle>
            <CardDescription>Text hierarchy and font scales for data-focused interfaces</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Heading 1 - Page Titles</h1>
              <p className="text-slate-600 text-sm">font-size: 2.25rem (36px), font-weight: 700</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Heading 2 - Section Titles</h2>
              <p className="text-slate-600 text-sm">font-size: 1.875rem (30px), font-weight: 700</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Heading 3 - Card Titles</h3>
              <p className="text-slate-600 text-sm">font-size: 1.25rem (20px), font-weight: 600</p>
            </div>
            <div>
              <p className="text-base text-slate-900 mb-1">Body Text - Main content</p>
              <p className="text-slate-600 text-sm">font-size: 1rem (16px), font-weight: 400</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Small Text - Descriptions and metadata</p>
              <p className="text-slate-600 text-xs">font-size: 0.875rem (14px), font-weight: 400</p>
            </div>
            <div>
              <span className="font-mono text-base text-slate-900">$1,234,567.89</span>
              <p className="text-slate-600 text-sm">Monospace - Financial data and tickers</p>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Color Palette</CardTitle>
            <CardDescription>Primary colors for the financial analytics theme</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="w-full h-20 bg-slate-900 rounded-lg mb-2"></div>
                <div className="text-sm font-medium">Slate 900</div>
                <div className="text-xs text-slate-600">Primary</div>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-slate-600 rounded-lg mb-2"></div>
                <div className="text-sm font-medium">Slate 600</div>
                <div className="text-xs text-slate-600">Secondary</div>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-blue-600 rounded-lg mb-2"></div>
                <div className="text-sm font-medium">Blue 600</div>
                <div className="text-xs text-slate-600">Accent</div>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-green-600 rounded-lg mb-2"></div>
                <div className="text-sm font-medium">Green 600</div>
                <div className="text-xs text-slate-600">Positive</div>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-red-600 rounded-lg mb-2"></div>
                <div className="text-sm font-medium">Red 600</div>
                <div className="text-xs text-slate-600">Negative</div>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-slate-100 rounded-lg mb-2 border border-slate-200"></div>
                <div className="text-sm font-medium">Slate 100</div>
                <div className="text-xs text-slate-600">Background</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Buttons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Interactive elements for user actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">Primary Buttons</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Button className="bg-slate-900 hover:bg-slate-800">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Export Data
                  </Button>
                  <Button size="sm" className="bg-slate-900 hover:bg-slate-800">Small</Button>
                  <Button size="lg" className="bg-slate-900 hover:bg-slate-800">Large</Button>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Secondary Buttons</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="link">Link Button</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cards and Layouts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cards & Layout Patterns</CardTitle>
            <CardDescription>Container components for organizing content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Stats Cards */}
            <div>
              <h4 className="font-medium mb-3">Statistics Cards</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Users className="h-5 w-5 text-slate-600" />
                      <div className="flex items-center text-sm text-green-600">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +12%
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">547</div>
                    <div className="text-xs text-slate-600">Total Members</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <DollarSign className="h-5 w-5 text-slate-600" />
                      <div className="text-sm text-slate-600">YTD</div>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">$847M</div>
                    <div className="text-xs text-slate-600">Total Volume</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <div className="text-sm text-green-600">Avg</div>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">+8.3%</div>
                    <div className="text-xs text-slate-600">Portfolio ROI</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Data Tables */}
            <div>
              <h4 className="font-medium mb-3">Data Table Row</h4>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-medium text-sm">Nancy Pelosi</div>
                        <Badge className="text-xs">D</Badge>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-mono text-sm font-medium">NVDA</div>
                      <div className="text-xs text-slate-600">Purchase</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">+12.3%</div>
                      <Badge variant="default" className="text-xs">verified</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Form Elements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Form Elements</CardTitle>
            <CardDescription>Input components for filters and search</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-medium mb-3">Input Fields</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <Input placeholder="Search member or ticker..." className="pl-10" />
                </div>
                <Input placeholder="Date range filter" />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Badges & Status</h4>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge className="bg-green-100 text-green-800">Purchase</Badge>
                <Badge className="bg-red-100 text-red-800">Sale</Badge>
                <Badge className="bg-blue-100 text-blue-800">Processing</Badge>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Progress Indicators</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Data Processing</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>File Upload</span>
                    <span>100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chart Placeholders */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Chart Components</CardTitle>
            <CardDescription>Visualization patterns for financial data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Line Chart - Price Trends</h4>
                <div className="h-48 bg-slate-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Line chart for stock price movements</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Bar Chart - Trade Volumes</h4>
                <div className="h-48 bg-slate-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Bar chart for volume analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Responsive Guidelines */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Responsive Design</CardTitle>
            <CardDescription>Adaptive layouts for mobile and desktop</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Breakpoints</h4>
              <div className="text-sm text-slate-600 space-y-1">
                <p>• Mobile: 0-767px (1 column layouts, collapsible navigation)</p>
                <p>• Tablet: 768-1023px (2 column layouts, sidebar filters)</p>
                <p>• Desktop: 1024px+ (3+ column layouts, full navigation)</p>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-2">Mobile Considerations</h4>
              <div className="text-sm text-slate-600 space-y-1">
                <p>• Collapsible sidebar for filters</p>
                <p>• Horizontal scroll for data tables</p>
                <p>• Touch-friendly button sizes (44px minimum)</p>
                <p>• Stacked card layouts for statistics</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StyleGuide;
