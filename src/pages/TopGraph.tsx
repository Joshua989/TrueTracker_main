import { AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';



const data = [
  { value: 100 },
  { value: 200 },
  { value: 150 },
  { value: 300 },
  { value: 250 },
  { value: 400 },
  { value: 350 },



];
const data1 = [
  { name: "Wins", value: 60 },
  { name: "Loss", value: 40 },
];

const COLORS = ['#16a34a', '#dc2626']; // Green for Wins, Red for Loss

const TopGraph = () => {
  return (
    <div className='flex justify-between max-w-8xl mx-auto w-full pr-14 pl-14 pt-7'>
       
       <div className="bg-white shadow-md p-8 w-80 h-52" style={{ borderRadius: "15px" }}>
       <h2 className="text-gray-700 font-semibold text-sm  ">Profit Factor</h2>
  <p className="text-base font-bold text-gray-900 mt-3">1.55</p>
  <div className="flex items-center  mt-3 w-56 h-24 mb-auto">
  {/* Your content here */}
    <ResponsiveContainer width={100} height={200}>
      <PieChart>
        <Pie
          data={data1}
          startAngle={180} // Adjusting the start angle to create overlap
          endAngle={0} // Keeping end angle at 0
          innerRadius="70%" // Creating more space for the curve
          outerRadius="90%" // Slightly smaller to create more overlap
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    <div className="ml-7 mb-16">
      <div className="flex items-center">
        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
        <span className="text-gray-600 text-sm">Wins</span>
      </div>
      <div className="flex items-center mt-1">
        <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2"></span>
        <span className="text-gray-600 text-sm">Loss</span>
      </div>
    </div>
  </div>
</div>


    <div className="bg-white rounded-lg shadow-md p-4 w-80">
      <h2 className="text-gray-700 font-semibold text-sm ">Accumulative Profit & Loss</h2>
      <p className="text-base font-bold text-gray-900 mt-3">$350,925.08</p>
      <ResponsiveContainer width="100%" height={80}>
        <AreaChart data={data}>
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#10b981" floodOpacity="0.5"/>
            </filter>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="value" stroke="none" fill="url(#colorValue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4 w-80">
      <h2 className="text-gray-700 font-semibold text-sm ">Average Profit & Loss</h2>
      <p className="text-base font-bold text-gray-900 mt-3">$$200.75</p>
      <ResponsiveContainer width="100%" height={80}>
        <AreaChart data={data}>
          <defs>
            <filter id="shadow-red" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#dc2626" floodOpacity="0.5"/>
            </filter>
            <linearGradient id="colorValueRed" x1="0" y1="0" x2="0" y2="1" filter="url(#shadow-red)">
              <stop offset="5%" stopColor="#dc2626" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#dc2626" stopOpacity={0}/>
              
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="value" stroke="none" fill="url(#colorValueRed)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4 w-80">
      <h2 className="text-gray-700 font-semibold text-sm ">Win%</h2>
      <p className="text-base font-bold text-gray-900 mt-3">$65.25%</p>
      <ResponsiveContainer width="100%" height={80}>
        <AreaChart data={data}>
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#10b981" floodOpacity="0.5"/>
            </filter>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1" filter="url(#shadow)">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="value" stroke="none" fill="url(#colorValue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
 
  </div>
  );
};

export default TopGraph;
