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
  { date: '10/5/25', balance: 115000 },
  { date: '30/7/25', balance: 155000 },
  { date: '5/8/25', balance: 165000 },
  { date: '10/8/25', balance: 160000 },
  { date: '15/8/25', balance: 170000 },
  { date: '20/8/25', balance: 165000 },
  { date: '25/8/25', balance: 175000 },
];

const AccountBalanceChart = () => {
  return (
    <div className="flex-col justify-between">
      <div className="flex justify-between max-w-8xl mx-auto w-full pr-14 pl-14 pt-7 space-x-7">
      <div className="p-11 bg-white rounded-lg border w-full h-[500px]">
          <h2 className="text-lg font-semibold mb-4">Account Balance</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid
                stroke="#ccc"
                strokeWidth={1.5}
                vertical={false} // Remove vertical grid lines
              />
              <XAxis dataKey="date" axisLine={false} />
              <YAxis
                tickFormatter={(value) => `$${value.toLocaleString()}`}
                domain={['dataMin - 50', 'dataMax + 50']}
                ticks={Array.from(
                  { length: 6 },
                  (_, i) =>
                    Math.floor(
                      (Math.max(...data.map((item) => item.balance)) -
                        Math.min(...data.map((item) => item.balance))) /
                        5 *
                        i +
                        Math.min(...data.map((item) => item.balance))
                    )
                )}
                axisLine={false}
              />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#000" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#000" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#000"
                fill="url(#colorBalance)"
              />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#000"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="p-11 bg-white rounded-lg border w-full h-[500px]">
          <h2 className="text-lg font-semibold mb-4">Account Balance</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid
                stroke="#ccc"
                strokeWidth={1.5}
                vertical={false} // Remove vertical grid lines
              />
              <XAxis dataKey="date" axisLine={false} />
              <YAxis
                tickFormatter={(value) => `$${value.toLocaleString()}`}
                domain={['dataMin - 50', 'dataMax + 50']}
                ticks={Array.from(
                  { length: 6 },
                  (_, i) =>
                    Math.floor(
                      (Math.max(...data.map((item) => item.balance)) -
                        Math.min(...data.map((item) => item.balance))) /
                        5 *
                        i +
                        Math.min(...data.map((item) => item.balance))
                    )
                )}
                axisLine={false}
              />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#000" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#000" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#000"
                fill="url(#colorBalance)"
              />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#000"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex justify-between max-w-8xl mx-auto w-full pr-14 pl-14 pt-7 space-x-7">
      <div className="p-11 bg-white rounded-lg border w-full h-[500px]">
          <h2 className="text-lg font-semibold mb-4">Account Balance</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid
                stroke="#ccc"
                strokeWidth={1.5}
                vertical={false} // Remove vertical grid lines
              />
              <XAxis dataKey="date" axisLine={false} />
              <YAxis
                tickFormatter={(value) => `$${value.toLocaleString()}`}
                domain={['dataMin - 50', 'dataMax + 50']}
                ticks={Array.from(
                  { length: 6 },
                  (_, i) =>
                    Math.floor(
                      (Math.max(...data.map((item) => item.balance)) -
                        Math.min(...data.map((item) => item.balance))) /
                        5 *
                        i +
                        Math.min(...data.map((item) => item.balance))
                    )
                )}
                axisLine={false}
              />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#000" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#000" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#000"
                fill="url(#colorBalance)"
              />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#000"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="p-11 bg-white rounded-lg border w-full h-[500px]">
          <h2 className="text-lg font-semibold mb-4">Account Balance</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid
                stroke="#ccc"
                strokeWidth={1.5}
                vertical={false} // Remove vertical grid lines
              />
              <XAxis dataKey="date" axisLine={false} />
              <YAxis
                tickFormatter={(value) => `$${value.toLocaleString()}`}
                domain={['dataMin - 50', 'dataMax + 50']}
                ticks={Array.from(
                  { length: 6 },
                  (_, i) =>
                    Math.floor(
                      (Math.max(...data.map((item) => item.balance)) -
                        Math.min(...data.map((item) => item.balance))) /
                        5 *
                        i +
                        Math.min(...data.map((item) => item.balance))
                    )
                )}
                axisLine={false}
              />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#000" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#000" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#000"
                fill="url(#colorBalance)"
              />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#000"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AccountBalanceChart;
