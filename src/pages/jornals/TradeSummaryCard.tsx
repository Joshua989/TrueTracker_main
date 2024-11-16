
interface Trade {
  date: string;
  amount: number;
  trades: number;
  win: number;
  commission: number;
  grossPnl: number;
  volume: number;
  winPercent: number;
  profitFactor: number;
}

function TradeSummaryCard({ trade }: { trade: Trade }) {
  return (
    <div className={`p-4 w-full rounded-lg shadow-lg ${trade.amount < 0 ? 'border-red-500' : 'border-green-500'} border`}>
      <div className="text-gray-500">{trade.date}</div>
      <div className={`text-2xl font-bold ${trade.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
        {trade.amount < 0 ? `-$${Math.abs(trade.amount).toLocaleString()}` : `$${trade.amount.toLocaleString()}`}
      </div>
      <div className="text-sm text-gray-600">Trades: {trade.trades}</div>
      <div className="text-sm text-gray-600">Win: {trade.win}</div>
      <div className="text-sm text-gray-600">Commission: ${trade.commission.toFixed(2)}</div>
      <div className="text-sm text-gray-600">Gross P&L: ${trade.grossPnl.toFixed(2)}</div>
      <div className="text-sm text-gray-600">Volume: {trade.volume}</div>
      <div className="text-sm text-gray-600">Win%: {trade.winPercent}%</div>
      <div className="text-sm text-gray-600">Profit Factor: {trade.profitFactor}</div>
    </div>
  );
}

export default TradeSummaryCard;
