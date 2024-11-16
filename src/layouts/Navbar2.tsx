import { useState } from 'react';
import Menu from './Menu';
import Logo from '../assets/image/logo.svg';
import { AiOutlinePlus } from 'react-icons/ai';

function Navbar2() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav>
      <div className="w-full max-w-8xl mx-auto flex items-center justify-between h-16 pl-10 pr-10 m-2">
        <div className="flex-shrink-0 font-bold tracking-wider">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="hidden md:block">
          <Menu />
        </div>
        <button
          type="button"
          className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu section */}
      {showMobileMenu && (
        <div className="md:hidden">
          <Menu />
          <div className="nav-2 flex flex-col items-center border-b-2 max-w-8xl mx-auto">
            <div className="w-full flex flex-col items-center space-y-2 px-4 py-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm w-full text-center">Dashboard</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm w-full text-center">Journal</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm w-full text-center">Trades</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm w-full text-center">Notes</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm w-full text-center">Strategy Developer</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm w-full text-center">Analytics</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm w-full text-center">Insights</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm w-full text-center">Backtesting</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm w-full text-center">Trade Replay</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm w-full text-center">Resources</a>
            </div>
            <div className="mt-4">
              <button className="flex items-center text-white font-inter text-base px-6 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#FF9966] hover:to-[#C048A1] transition duration-300" style={{ background: 'linear-gradient(90deg, #FF9966 0%, #C048A1 100%)' }}>
                <AiOutlinePlus className="mr-2" />
                Add Trade
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Horizontal line for desktop view */}
      <hr style={{ border: 'none', borderTop: '2px solid #ddd', margin: '9px 0' }} />
      
      {/* Desktop navigation links */}
      <div className="nav-2 w-full max-w-8xl mx-auto flex justify-between hidden md:flex">
        <div className="w-full flex justify-between pr-14 pl-14">
          <div className="major-link flex space-x-5">
            <a href="#" className="text-gray-600 hover:text-gray-900 whitespace-nowrap tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 whitespace-nowrap tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm">Journal</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 whitespace-nowrap tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm">Trades</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 whitespace-nowrap tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm">Notes</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 whitespace-nowrap tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm">Strategy Developer</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 whitespace-nowrap tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm">Analytics</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 whitespace-nowrap tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm">Insights</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 whitespace-nowrap tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm">Backtesting</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 whitespace-nowrap tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm">Trade Replay</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 whitespace-nowrap tracking-wide font-semibold hover:bg-gray-100 hover:border-b-2 p-2 rounded text-sm">Resources</a>
          </div>
          <div>
            <button className="flex items-center text-white font-inter text-base px-6 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#FF9966] hover:to-[#C048A1] transition duration-300" style={{ background: 'linear-gradient(90deg, #FF9966 0%, #C048A1 100%)' }}>
              <AiOutlinePlus className="mr-2" />
              Add Trade
            </button>
          </div>
        </div>

      </div>
      <hr style={{ border: 'none', borderTop: '2px solid #ddd', margin: '9px 0' }} />

    </nav>
  );
}

export default Navbar2;
