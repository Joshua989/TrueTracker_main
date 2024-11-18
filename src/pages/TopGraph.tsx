import { AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';



const data = [
  { value: 100 },
  { value: 200 },
  { value: 150 },
  { value: 300 },
  { value: 250 },
  { value: 400 },
  { value: 350 },
  { name: 'Wins', value: 70 },
  { name: 'Loss', value: 30 },
];
const COLORS = ['#16a34a', '#dc2626']; // Green for Wins, Red for Loss

const TopGraph = () => {
  return (
    <div className='flex justify-between max-w-8xl mx-auto w-full pr-14 pl-14 pt-7'>
       

    <div className="bg-white rounded-lg shadow-md p-4 w-80">
      <h2 className="text-gray-700 font-semibold">Accumulative Profit & Loss</h2>
      <p className="text-2xl font-bold text-gray-900 mt-2">$350,925.08</p>
      <ResponsiveContainer width="100%" height={80}>
        <AreaChart data={data}>
          <Area type="monotone" dataKey="value" stroke="none" fill="rgba(16, 185, 129, 0.3)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4 w-80">
    <h2 className="text-gray-700 font-semibold">Accumulative Profit & Loss</h2>
    <p className="text-2xl font-bold text-gray-900 mt-2">$350,925.08</p>
    <ResponsiveContainer width="100%" height={80}>
      <AreaChart data={data}>
        <Area type="monotone" dataKey="value" stroke="none" fill="rgba(16, 185, 129, 0.3)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
  <div className="bg-white rounded-lg shadow-md p-4 w-80">
    <h2 className="text-gray-700 font-semibold">Accumulative Profit & Loss</h2>
    <p className="text-2xl font-bold text-gray-900 mt-2">$350,925.08</p>
    <ResponsiveContainer width="100%" height={80}>
      <AreaChart data={data}>
        <Area type="monotone" dataKey="value" stroke="none" fill="rgba(16, 185, 129, 0.3)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
  <div className="bg-white rounded-lg shadow-md p-4 w-80">
      <h2 className="text-gray-700 font-semibold">Profit Factor</h2>
      <p className="text-2xl font-bold text-gray-900 mt-2">1.55</p>
      <div className="flex items-center mt-4">
        <ResponsiveContainer width="50%" height={80}>
          <PieChart>
            <Pie
              data={data}
              startAngle={180}
              endAngle={0}
              innerRadius="70%"
              outerRadius="100%"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="ml-4">
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
            <span className="text-gray-600 text-sm">Wins</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2"></span>
            <span className="text-gray-600 text-sm">Loss</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TopGraph;
