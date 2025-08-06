import { Outlet } from "react-router-dom";
import Navbar from './../Components/Navbar';
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="colorful-bg absolute inset-0 -z-10" />
      <div className="container-wrapper relative z-10">
        <Navbar></Navbar>

        <div className="mt-20 "><Outlet />
        </div>
        <br /><br /><br />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
