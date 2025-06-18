import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpDown, ExternalLink, Eye } from "lucide-react";

interface Trade {
  id: string;
  member: string;
  party: string;
  ticker: string;
  company: string;
  action: "Purchase" | "Sale";
  amount: string;
  date: string;
  filingDate: string;
  roi: string;
  status: "verified" | "processing" | "pending";
  pdfUrl: string;
}

interface TradesTableProps {
  onTradeSelect: (trade: Trade) => void;
}

const TradesTable = ({ onTradeSelect }: TradesTableProps) => {
  const [sortField, setSortField] = useState<keyof Trade>("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const trades: Trade[] = [
    {
      id: "1",
      member: "Nancy Pelosi",
      party: "D",
      ticker: "NVDA",
      company: "NVIDIA Corporation",
      action: "Purchase",
      amount: "$1M-$5M",
      date: "2024-06-15",
      filingDate: "2024-06-17",
      roi: "+12.3%",
      status: "verified",
      pdfUrl: "#"
    },
    {
      id: "2", 
      member: "Dan Crenshaw",
      party: "R",
      ticker: "XOM",
      company: "Exxon Mobil Corporation",
      action: "Sale",
      amount: "$100K-$250K",
      date: "2024-06-14",
      filingDate: "2024-06-16",
      roi: "+8.7%",
      status: "processing",
      pdfUrl: "#"
    },
    {
      id: "3",
      member: "Josh Gottheimer", 
      party: "D",
      ticker: "MSFT",
      company: "Microsoft Corporation",
      action: "Purchase",
      amount: "$15K-$50K",
      date: "2024-06-13",
      filingDate: "2024-06-15",
      roi: "+5.2%",
      status: "verified",
      pdfUrl: "#"
    },
    {
      id: "4",
      member: "Sylvia Garcia",
      party: "D", 
      ticker: "AAPL",
      company: "Apple Inc.",
      action: "Sale",
      amount: "$50K-$100K",
      date: "2024-06-12",
      filingDate: "2024-06-14",
      roi: "-2.1%",
      status: "verified",
      pdfUrl: "#"
    },
    {
      id: "5",
      member: "Pat Fallon",
      party: "R",
      ticker: "TSLA", 
      company: "Tesla, Inc.",
      action: "Purchase",
      amount: "$250K-$500K",
      date: "2024-06-11",
      filingDate: "2024-06-13",
      roi: "+15.8%",
      status: "pending",
      pdfUrl: "#"
    }
  ];

  const handleSort = (field: keyof Trade) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Congressional Stock Trades</CardTitle>
        <CardDescription>
          Detailed view of all disclosed stock transactions with enrichment data
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("member")}
                    className="h-auto p-0 font-semibold"
                  >
                    Member
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("ticker")}
                    className="h-auto p-0 font-semibold"
                  >
                    Stock
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("date")}
                    className="h-auto p-0 font-semibold"
                  >
                    Trade Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("roi")}
                    className="h-auto p-0 font-semibold"
                  >
                    ROI
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trades.map((trade) => (
                <TableRow key={trade.id} className="hover:bg-slate-50">
                  <TableCell>
                    <div>
                      <div className="font-medium">{trade.member}</div>
                      <div className="text-sm text-slate-600">
                        <Badge variant={trade.party === "D" ? "default" : "secondary"} className="text-xs">
                          {trade.party}
                        </Badge>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-mono font-medium">{trade.ticker}</div>
                      <div className="text-sm text-slate-600">{trade.company}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={trade.action === "Purchase" ? "default" : "secondary"}
                      className={trade.action === "Purchase" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                    >
                      {trade.action}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono">{trade.amount}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{trade.date}</div>
                      <div className="text-sm text-slate-600">Filed: {trade.filingDate}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`font-mono font-medium ${
                      trade.roi.startsWith('+') ? 'text-green-600' : 
                      trade.roi.startsWith('-') ? 'text-red-600' : 'text-slate-600'
                    }`}>
                      {trade.roi}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        trade.status === "verified" ? "default" :
                        trade.status === "processing" ? "secondary" : "outline"
                      }
                    >
                      {trade.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onTradeSelect(trade)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(trade.pdfUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TradesTable;
