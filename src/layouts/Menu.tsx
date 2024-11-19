import { FiSettings, FiBell } from 'react-icons/fi';
import tunder from "../assets/image/tunder.svg"
import person from "../assets/image/person.svg"
const Menu = () => {
  return<div className="px-2 md:px-0 py-3 w-96  space-y-2 md:space-y-0 font-medium flex  items-center md:space-x-2 justify-between">
  {/* Upgrade Button on Top */}
  <a
    href="#"
    className="block w-full px-3 py-2 rounded-md text-white focus:outline-none focus:text-white focus:bg-gray-700"
  >
 <button className="flex items-center justify-between bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 w-full">
  <img src={tunder} alt="icon" className="w-6 h-6" />
  <span className="text-center w-full">Upgrade now</span>
</button>


  </a>

  {/* Items Side by Side */}
  <div className="w-full flex flex-wrap justify-between space-x-4 mt-4">
    <a
      href="#"
      className="block w-1/4 sm:w-1/4 text-center"
    >
      <FiSettings className="text-gray-400 w-6 h-6 mx-auto" />
    </a>

    <a
      href="#"
      className="block w-1/4 sm:w-1/4 text-center"
    >
      <FiBell className="text-gray-400 w-6 h-6 mx-auto" />
    </a>

    <a
      href="#"
      className="block w-1/4 sm:w-1/4 text-center"
    >
      <div className="w-8 h-8 rounded-full overflow-hidden mx-auto">
        <img src={person} alt="Profile" className="w-full h-full object-cover" />
      </div>
    </a>
  </div>
</div>



  
}

export default Menu;