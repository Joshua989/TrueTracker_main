import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const ImportTrade = () => {
  
  const [closeTime, setCloseTime] = useState('');

  return (
    <div className="flex p-14 pt-4 ">
      {/* Sidebar */}
      <div className="w-60 ">
        <ul>
          <li className="p-2 font-medium text-gray-700">Manual</li>
          <li className="p-2 text-gray-500">Broker Sync</li>
          <li className="p-2 text-gray-500">File Upload</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className=' w-full border pl-10 pr-10'>
      <h2 className="text-xl font-semibold mb-6  mt-8 ">Import Trade</h2>
      <hr className=" border-t-2 border-gray-300 my-6 mx-auto" />

      
      <div className="flex w-full mt-11   space-x-8">
      
        {/* Form Section */}
        <div className="flex flex-col">
          <div className=" flex flex-col space-y-4">
            <div>
              <label className="block text-gray-700">Symbol</label>
              <input
                type="text"
                placeholder="Enter symbol"
                className="border rounded p-2 w-full"
              />
            </div>
           
            
           
            
             
            <div>
              <label className="block text-gray-700">Close Time</label>
              <input
                type="time"
                value={closeTime}
                onChange={(e) => setCloseTime(e.target.value)}
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Entry Price</label>
              <input
                type="number"
                placeholder="$0"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Stop Loss</label>
              <input
                type="number"
                placeholder="Enter stop loss"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Take Profit</label>
              <input
                type="number"
                placeholder="Enter take profit"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Exit Price</label>
              <input
                type="number"
                placeholder="$0"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Fees</label>
              <input
                type="number"
                placeholder="$0"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Profit / Loss</label>
              <input
                type="number"
                placeholder="$0"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Net Profit</label>
              <input
                type="number"
                placeholder="$0"
                className="border rounded p-2 w-full"
              />
            </div>

            <button>connect</button>
          </div>
        </div>

        
      </div>
    </div>
    </div>
  );
};

export default ImportTrade;
