import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, TrendingUp, FileText, Calendar, DollarSign } from "lucide-react";

interface TradeDetailModalProps {
  trade: any;
  open: boolean;
  onClose: () => void;
}

const TradeDetailModal = ({ trade, open, onClose }: TradeDetailModalProps) => {
  if (!trade) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <span>Trade Detail: {trade.ticker}</span>
            <Badge variant={trade.action === "Purchase" ? "default" : "secondary"}>
              {trade.action}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            Detailed analysis of {trade.member}'s {trade.ticker} transaction
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Trade Information */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Trade Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-slate-600">Member</div>
                    <div className="font-medium">{trade.member}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-600">Party</div>
                    <Badge variant={trade.party === "D" ? "default" : "secondary"}>
                      {trade.party === "D" ? "Democrat" : "Republican"}
                    </Badge>
                  </div>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-slate-600">Stock Symbol</div>
                    <div className="font-mono font-medium text-lg">{trade.ticker}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-600">Company</div>
                    <div className="font-medium">{trade.company}</div>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-slate-600 flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Trade Date</span>
                    </div>
                    <div className="font-medium">{trade.date}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-600">Filing Date</div>
                    <div className="font-medium">{trade.filingDate}</div>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-slate-600 flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>Amount Range</span>
                    </div>
                    <div className="font-mono font-medium">{trade.amount}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-600 flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>Current ROI</span>
                    </div>
                    <div className={`font-mono font-medium text-lg ${
                      trade.roi.startsWith('+') ? 'text-green-600' : 
                      trade.roi.startsWith('-') ? 'text-red-600' : 'text-slate-600'
                    }`}>
                      {trade.roi}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enrichment Data */}
            <Card>
              <CardHeader>
                <CardTitle>Enrichment Data</CardTitle>
                <CardDescription>Additional market context and analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-600">Price at Trade</div>
                    <div className="font-mono">$892.50</div>
                  </div>
                  <div>
                    <div className="text-slate-600">Current Price</div>
                    <div className="font-mono">$1,002.75</div>
                  </div>
                  <div>
                    <div className="text-slate-600">Market Cap</div>
                    <div className="font-mono">$2.47T</div>
                  </div>
                  <div>
                    <div className="text-slate-600">52-Week High</div>
                    <div className="font-mono">$1,180.50</div>
                  </div>
                  <div>
                    <div className="text-slate-600">Sector</div>
                    <div>Technology</div>
                  </div>
                  <div>
                    <div className="text-slate-600">Data Source</div>
                    <div>Tiingo API</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Price Chart & Analysis */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Price Chart</CardTitle>
                <CardDescription>Stock performance since trade date</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <TrendingUp className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-medium">Price Chart Placeholder</p>
                    <p className="text-sm">Line chart showing {trade.ticker} price movement</p>
                    <p className="text-sm">from {trade.date} to present</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Raw Filing Data */}
            <Card>
              <CardHeader>
                <CardTitle>Raw Filing Data</CardTitle>
                <CardDescription>Original PDF disclosure information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <div>
                    <span className="font-medium text-slate-600">Transaction Type:</span>
                    <span className="ml-2">{trade.action}</span>
                  </div>
                  <div>
                    <span className="font-medium text-slate-600">Asset Type:</span>
                    <span className="ml-2">Common Stock</span>
                  </div>
                  <div>
                    <span className="font-medium text-slate-600">Amount Range:</span>
                    <span className="ml-2">{trade.amount}</span>
                  </div>
                  <div>
                    <span className="font-medium text-slate-600">Owner:</span>
                    <span className="ml-2">Self</span>
                  </div>
                  <div>
                    <span className="font-medium text-slate-600">Status:</span>
                    <Badge variant="outline" className="ml-2">{trade.status}</Badge>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Original PDF
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TradeDetailModal;