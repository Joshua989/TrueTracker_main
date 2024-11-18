import 'react-datepicker/dist/react-datepicker.css';

const UploadCsvFile = () => {


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
      <h2 className="text-xl font-semibold mb-6  mt-8 ">Upload  a Csv File</h2>
      <hr className=" border-t-2 border-gray-300 my-6 mx-auto" />

      
      <div className="flex w-full mt-11   space-x-8">
      
        {/* Form Section */}
        <div className="flex flex-col">
          <div className=" flex flex-col space-y-4">
          <div>
            <label className="block text-gray-700">Symbol</label>
            <select className="border rounded p-2 w-full">
                <option value="" disabled selected>
                Select symbol
                </option>
                <option value="AAPL">AAPL (Apple Inc.)</option>
                <option value="GOOGL">GOOGL (Alphabet Inc.)</option>
                <option value="MSFT">MSFT (Microsoft Corp.)</option>
                <option value="TSLA">TSLA (Tesla Inc.)</option>
                {/* Add more options as needed */}
            </select>
            </div>
           
            
           
            
             
            <div>
            <label className="block text-gray-700">Symbol</label>
            <select className="border rounded p-2 w-full">
                <option value="" disabled selected>
                Select symbol
                </option>
                <option value="AAPL">AAPL (Apple Inc.)</option>
                <option value="GOOGL">GOOGL (Alphabet Inc.)</option>
                <option value="MSFT">MSFT (Microsoft Corp.)</option>
                <option value="TSLA">TSLA (Tesla Inc.)</option>
                {/* Add more options as needed */}
            </select>
            </div>



            <div>
            <label className="block text-gray-700">Symbol</label>
            <select className="border rounded p-2 w-full">
                <option value="" disabled selected>
                Select symbol
                </option>
                <option value="AAPL">AAPL (Apple Inc.)</option>
                <option value="GOOGL">GOOGL (Alphabet Inc.)</option>
                <option value="MSFT">MSFT (Microsoft Corp.)</option>
                <option value="TSLA">TSLA (Tesla Inc.)</option>
                {/* Add more options as needed */}
            </select>
            </div>




            <div>
              <label className="block text-gray-700">Stop Loss</label>
              <input
                type="number"
                placeholder="Enter stop loss"
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center border rounded p-4 text-center text-gray-500">
            <label className="cursor-pointer">
              Click to upload or drag and drop
              <br />
              SVG, PNG, JPG or GIF (max. 800x400px)
              <input type="file" className="hidden" />
            </label>
          </div>
          <button>
            confirm
          </button>
          </div>
        </div>

        
      </div>
    </div>
    </div>
  );
};

export default UploadCsvFile;
