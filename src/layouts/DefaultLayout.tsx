import { Outlet } from "react-router-dom";
import Navbar2 from "./Navbar2";

const DefaultLayout = () => {
  return (
    <>
      <header>
        {/* Header content */}
        <Navbar2 />
      </header>
      <main>
        <Outlet />
      </main>

      
      
    </>
  );
};

export default DefaultLayout;
