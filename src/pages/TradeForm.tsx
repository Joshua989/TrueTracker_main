import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TradeForm = () => {
  const [openDate, setOpenDate] = useState<Date | null>(null);
  const [closeDate, setCloseDate] = useState<Date | null>(null);
  const [openTime, setOpenTime] = useState('');
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
      <h2 className="text-xl font-semibold mb-6  mt-8 ">Add Trade Details</h2>
      <hr className=" border-t-2 border-gray-300 my-6 mx-auto" />

      
      <div className="flex w-full mt-11   space-x-8">
      
        {/* Form Section */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Symbol</label>
              <input
                type="text"
                placeholder="Enter symbol"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Trade Type</label>
              <select className="border rounded p-2 w-full">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Volume</label>
              <input
                type="text"
                placeholder="Enter volume"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Open Date</label>
              <DatePicker
                selected={openDate}
                onChange={(date) => setOpenDate(date)}
                placeholderText="DD/MM/YYYY"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Close Date</label>
              <DatePicker
                selected={closeDate}
                onChange={(date) => setCloseDate(date)}
                placeholderText="DD/MM/YYYY"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Open Time</label>
              <input
                type="time"
                value={openTime}
                onChange={(e) => setOpenTime(e.target.value)}
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
          </div>
        </div>

        {/* Side Section */}
        <div className="w-1/3 space-y-4">
          <div>
            <label className="block text-gray-700">Notes</label>
            <textarea
              placeholder="Enter text here"
              className="border rounded p-2 w-full"
              rows={8}
            ></textarea>
          </div>
          <div className="flex flex-col items-center justify-center border rounded p-4 text-center text-gray-500">
            <label className="cursor-pointer">
              Click to upload or drag and drop
              <br />
              SVG, PNG, JPG or GIF (max. 800x400px)
              <input type="file" className="hidden" />
            </label>
          </div>
          <div >
            <button className='ml-40'>cancle</button>
            <button className='ml-11'>save trade</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TradeForm;
