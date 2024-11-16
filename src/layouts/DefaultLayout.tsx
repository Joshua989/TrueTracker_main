import { Outlet } from "react-router-dom";
import Navbar from "./Navbar2";

const DefaultLayout = () => {
  return (
    <>
    <Navbar />
      <main>
        <Outlet />
      </main>

      
      
    </>
  );
};

export default DefaultLayout;
