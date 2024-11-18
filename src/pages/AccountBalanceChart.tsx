import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  CartesianGrid,
} from 'recharts';

const data = [
  { date: '1/9/24', balance: 500 },
  { date: '5/9/24', balance: 3000 },
  { date: '10/9/24', balance: 2000 },
  { date: '15/9/24', balance: 8000 },
  { date: '20/9/24', balance: 4000 },
  { date: '25/9/24', balance: 12000 },
  { date: '30/9/24', balance: 7000 },
  { date: '5/10/24', balance: 15000 },
  { date: '10/10/24', balance: 10000 },
  { date: '15/10/24', balance: 20000 },
  { date: '20/10/24', balance: 15000 },
  { date: '25/10/24', balance: 25000 },
];

const AccountBalanceChart = () => {
  return (
<div className='flex-col justify-between'>
    <div className='flex justify-between max-w-8xl mx-auto w-full pr-14 pl-14 pt-7 space-x-7'>
    <div className="p-4 bg-white rounded-lg shadow-md w-full h-96">
      <h2 className="text-lg font-semibold mb-4">Account Balance</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="date" />
          <YAxis
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            domain={[0, 'dataMax + 5000']}
          />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="linear"
            dataKey="balance"
            stroke="#000"
            fill="url(#colorBalance)"
          />
          <Line
            type="linear"  // Ensures sharp turns instead of smooth curves
            dataKey="balance"
            stroke="#000"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-md w-full h-96">
      <h2 className="text-lg font-semibold mb-4">Account Balance</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="date" />
          <YAxis
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            domain={[0, 'dataMax + 5000']}
          />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="linear"
            dataKey="balance"
            stroke="#000"
            fill="url(#colorBalance)"
          />
          <Line
            type="linear"  // Ensures sharp turns instead of smooth curves
            dataKey="balance"
            stroke="#000"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
</div>
<div className='mt-9 space-x-7 flex justify-between max-w-8xl mx-auto w-full pr-14 pl-14 pt-7'>
    <div className="p-4 bg-white rounded-lg shadow-md w-full h-96">
      <h2 className="text-lg font-semibold mb-4">Account Balance</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="date" />
          <YAxis
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            domain={[0, 'dataMax + 5000']}
          />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="linear"
            dataKey="balance"
            stroke="#000"
            fill="url(#colorBalance)"
          />
          <Line
            type="linear"  // Ensures sharp turns instead of smooth curves
            dataKey="balance"
            stroke="#000"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-md w-full h-96">
      <h2 className="text-lg font-semibold mb-4">Account Balance</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="date" />
          <YAxis
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            domain={[0, 'dataMax + 5000']}
          />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="linear"
            dataKey="balance"
            stroke="#000"
            fill="url(#colorBalance)"
          />
          <Line
            type="linear"  // Ensures sharp turns instead of smooth curves
            dataKey="balance"
            stroke="#000"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
</div>
</div>
  );
};

export default AccountBalanceChart;
