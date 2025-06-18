import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Trade {
  id: string;
  ticker: string;
  action: 'Purchase' | 'Sale' | 'Exchange';
  amount_range: string;
  trade_date: string;
  disclosure_date: string;
  roi_percentage: number;
  status: 'verified' | 'processing' | 'pending';
  pdf_url: string | null;
  member: {
    id: string;
    name: string;
    party: string;
    state: string;
    chamber: string;
  };
}

export const useTrades = () => {
  return useQuery({
    queryKey: ['trades'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('trades')
        .select(`
          *,
          member:members(*)
        `)
        .order('trade_date', { ascending: false });

      if (error) {
        console.error('Error fetching trades:', error);
        throw error;
      }

      return data as Trade[];
    },
  });
};

export const useTradeStats = () => {
  return useQuery({
    queryKey: ['trade-stats'],
    queryFn: async () => {
      // Get total members
      const { count: membersCount } = await supabase
        .from('members')
        .select('*', { count: 'exact', head: true });

      // Get total trades this year
      const currentYear = new Date().getFullYear();
      const { count: tradesCount } = await supabase
        .from('trades')
        .select('*', { count: 'exact', head: true })
        .gte('trade_date', `${currentYear}-01-01`);

      // Get average ROI
      const { data: roiData } = await supabase
        .from('trades')
        .select('roi_percentage')
        .not('roi_percentage', 'is', null);

      const avgROI = roiData && roiData.length > 0
        ? roiData.reduce((sum, trade) => sum + (trade.roi_percentage || 0), 0) / roiData.length
        : 0;

      // Get total volume (estimate based on mid-range values)
      const { data: volumeData } = await supabase
        .from('trades')
        .select('amount_range');

      let totalVolume = 0;
      volumeData?.forEach(trade => {
        const range = trade.amount_range;
        if (range.includes('$1M-$5M')) totalVolume += 3000000;
        else if (range.includes('$500K-$1M')) totalVolume += 750000;
        else if (range.includes('$250K-$500K')) totalVolume += 375000;
        else if (range.includes('$100K-$250K')) totalVolume += 175000;
        else if (range.includes('$50K-$100K')) totalVolume += 75000;
        else if (range.includes('$15K-$50K')) totalVolume += 32500;
        else if (range.includes('$1K-$15K')) totalVolume += 8000;
      });

      // Get unique tickers
      const { data: tickerData } = await supabase
        .from('trades')
        .select('ticker');

      const uniqueTickers = new Set(tickerData?.map(t => t.ticker)).size;

      return {
        totalMembers: membersCount || 0,
        tradesYTD: tradesCount || 0,
        avgROI: avgROI,
        totalVolume: totalVolume,
        activeTickers: uniqueTickers,
        lastUpdate: new Date().toISOString()
      };
    },
  });
};