// App.js
import TradeSummaryCard from './TradeSummaryCard';
import TradeDetails from './TradeDetails';
import Note  from './Note';

function JornalPage() {
  const trades = [
    { date: 'Sept 12, 2024', trades: 2, win: 1, commission: 2.21, grossPnl: 200.21, volume: 12, profitFactor: 12.09, winPercent: 50, amount: -50925.08 },
    { date: 'Sept 12, 2024', trades: 2, win: 1, commission: 2.21, grossPnl: 200.21, volume: 12, profitFactor: 12.09, winPercent: 50, amount: 5925.08 },
    { date: 'Sept 12, 2024', trades: 2, win: 1, commission: 2.21, grossPnl: 200.21, volume: 12, profitFactor: 12.09, winPercent: 50, amount: -50925.08 },
    { date: 'Sept 12, 2024', trades: 2, win: 1, commission: 2.21, grossPnl: 200.21, volume: 12, profitFactor: 12.09, winPercent: 50, amount: -50925.08 },
    { date: 'Sept 12, 2024', trades: 2, win: 1, commission: 2.21, grossPnl: 200.21, volume: 12, profitFactor: 12.09, winPercent: 50, amount: -50925.08 },
    { date: 'Sept 12, 2024', trades: 2, win: 1, commission: 2.21, grossPnl: 200.21, volume: 12, profitFactor: 12.09, winPercent: 50, amount: -50925.08 },
    { date: 'Sept 12, 2024', trades: 2, win: 1, commission: 2.21, grossPnl: 200.21, volume: 12, profitFactor: 12.09, winPercent: 50, amount: -50925.08 },

    // Repeat as needed
  ];

  const tradeDetails = [
    { time: '12:35:11', symbol: 'AAPL', status: 'Win', entryPrice: 2467.05, exitPrice: 2467.05 },
    { time: '12:35:11', symbol: 'NFLX', status: 'Loss', entryPrice: 2467.05, exitPrice: 2467.05 },
    { time: '12:35:11', symbol: 'AAPL', status: 'Win', entryPrice: 2467.05, exitPrice: 2467.05 },
    { time: '12:35:11', symbol: 'AAPL', status: 'Win', entryPrice: 2467.05, exitPrice: 2467.05 },
    { time: '12:35:11', symbol: 'NFLX', status: 'Loss', entryPrice: 2467.05, exitPrice: 2467.05 },
    { time: '12:35:11', symbol: 'NFLX', status: 'Loss', entryPrice: 2467.05, exitPrice: 2467.05 },


    // Repeat as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex">
      <div className="col-span-2 p-6  space-y-4 w-6/12 overflow-y-auto" style={{ height: '1000px' }}>
      {trades.map((trade, index) => (
            <TradeSummaryCard key={index} trade={trade} />
          ))}
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg w-10/12">
        <Note />
          <h2 className="text-lg font-semibold">Trades</h2>
          <TradeDetails trades={tradeDetails} />
        </div>
      </div>
    </div>
  );
}

export default JornalPage;
