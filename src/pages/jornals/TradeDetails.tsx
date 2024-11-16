// TradeDetails.js

interface Trade {
  time: string;
  symbol: string;
  status: string;
  entryPrice: number;
  exitPrice: number;
}

interface TradeDetailsProps {
  trades: Trade[];
}

function TradeDetails({ trades }: TradeDetailsProps) {
  return (
    <div className="overflow-auto ">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Open Time</th>
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Entry Price</th>
            <th className="px-4 py-2">Exit Price</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, index) => (
            <tr key={index} className="text-center border-t">
              <td className="px-4 py-2">{trade.time}</td>
              <td className="px-4 py-2">{trade.symbol}</td>
              <td className={`px-4 py-2 ${trade.status === 'Win' ? 'text-green-500' : 'text-red-500'}`}>{trade.status}</td>
              <td className="px-4 py-2">${trade.entryPrice.toFixed(2)}</td>
              <td className="px-4 py-2">${trade.exitPrice.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TradeDetails;
