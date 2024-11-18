import Candlestick from "./candlestick/Real";
const JornalPage2 = () => {
    return (
      <div className="flex p-14 pt-4">
        {/* Sidebar */}
        <div className="w-60">
          <ul>
            <li className="p-2 font-medium text-gray-700">Manual</li>
            <li className="p-2 text-gray-500">Broker Sync</li>
            <li className="p-2 text-gray-500">File Upload</li>
          </ul>
        </div>
  
        {/* Main Content */}
        <div className="w-full border flex-col p-3 flex">

          <div className="w-full bg-white  rounded-lg">
            {/* Column Layout for Data */}
            <div className="flex flex-col space-y-6">
                <div className="flex justify-between pr-52">
                    <div >
                        <div className="flex flex-col justify-between" >
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                        <div>
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                        <div>
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                        <div>
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                    </div>

                    <div >
                        <div className="flex flex-col justify-between" >
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                        <div>
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                        <div>
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                        <div>
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                    </div>

                    <div >
                        <div className="flex flex-col justify-between" >
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                        <div>
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                        <div>
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                        <div>
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                    </div>

                    <div >
                        <div className="flex flex-col justify-between" >
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                        <div>
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                        <div>
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                        <div>
                        <p className="text-sm text-gray-500">Net P&L</p>
                        <p className="text-xl font-semibold text-green-500">$212.43</p>
                        </div>
                    </div>
                    
                </div>

             
  
              
  
              {/* Editable Inputs */}
              <div className="flex  border  p-3  space-x-4 mt-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Profit Target</p>
                  <input
                    type="text"
                    value="$129.45"
                    className="mt-1 w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Profit Target</p>
                  <input
                    type="text"
                    value="$129.45"
                    className="mt-1 w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Stop Loss</p>
                  <input
                    type="text"
                    value="$129.45"
                    className="mt-1 w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Mistakes</p>
                  <select className="mt-1 w-full px-3 py-2 border rounded">
                    <option>Select Tag</option>
                    <option>Tag 1</option>
                    <option>Tag 2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <Candlestick />
        </div>
      </div>
    );
  };
  
  export default JornalPage2;
  