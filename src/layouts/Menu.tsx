import { FiSettings, FiBell } from 'react-icons/fi';
import tunder from "../assets/image/tunder.svg"
import person from "../assets/image/person.svg"
const Menu = () => {
  return <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium flex items-center space-x-9">
    
    <a
      href="#"
      className="block md:inline-block px-3 py-2 rounded-md text-white  focus:outline-none focus:text-white focus:bg-gray-700"
    >
      <button className="flex items-center justify-between bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
          <img  src={tunder} alt="icon" className='w-auto h-auto mr-3' />
          Upgrade now
        </button>

    </a>
    <a
      href="#"
      className="block md:inline-block "
    >
         <FiSettings className="text-gray-400 w-6 h-6" />
    </a>
    <a
      href="#"
      className="block md:inline-block px-3 py-2 "
    >
    <FiBell className="text-gray-400 w-6 h-6" />
 </a>
    <a
      href="#"
    
    >
    <div className="w-8 h-8 rounded-full overflow-hidden">
          <img src={person} alt="Profile" className="w-full h-full object-cover" /> {/* Replace with profile image path */}
        </div>

    </a>

  </div>
  
}

export default Menu;