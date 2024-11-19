import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faChevronDown, faFilter, faCalendarAlt, } from '@fortawesome/free-solid-svg-icons';
import TopGraph from './TopGraph';
import AccountBalanceChart from './AccountBalanceChart';
import Calender from './Calender';
import RecentTrade from './RecentTrade';
const HomePage = () => {
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('Dollar');
  const [selectedAccount, setSelectedAccount] = useState('Main Account');
  const updateDate = new Date().toLocaleDateString();

  const currencies = ['USD', 'EUR', 'GBP', 'JPY'];
  const accounts = ['Main Account', 'Savings Account', 'Investment Account'];

  return (
    <div>
    <div className="flex space-x-4 p-4  rounded-lg  justify-end  pr-14  ">
      {/* Currency Selector */}
      <div className="relative">
        <button
          onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
          className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-md shadow hover:bg-gray-200"
        >
          <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
          {selectedCurrency}
          <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
        </button>
        {showCurrencyDropdown && (
          <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            {currencies.map((currency) => (
              <button
                key={currency}
                onClick={() => {
                  setSelectedCurrency(currency);
                  setShowCurrencyDropdown(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {currency}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Filter Button */}
      <button className="flex items-center  justify-between w-24  px-4 py-2  text-gray-700 rounded-md shadow hover:bg-gray-200">
      <FontAwesomeIcon icon={faFilter} />  
            <p>Filter</p>  
      </button>

      {/* Date Display */}
      <div className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-md shadow">
        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
      <p> Last Update: {updateDate}</p> 
      </div>

      {/* Account Selector */}
      <div className="relative">
  <button
    onClick={() => setShowAccountDropdown(!showAccountDropdown)}
    className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-md shadow hover:bg-gray-200"
  >
    <p className="mr-2">{selectedAccount}</p> {/* Text inside <p> */}
    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
  </button>
  {showAccountDropdown && (
    <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
      {accounts.map((account) => (
        <button
          key={account}
          onClick={() => {
            setSelectedAccount(account);
            setShowAccountDropdown(false);
          }}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          {account}
        </button>
      ))}
    </div>
  )}
</div>

    </div>
<TopGraph />
<AccountBalanceChart />
<Calender />
<RecentTrade />
</div>

  );
};

export default HomePage;
