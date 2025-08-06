import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Firebase/Provider';

const navItems = [
  { name: "Home", path: "/" },
  { name: "All Jobs", path: "/all-jobs" },
  { name: "Add Jobs", path: "/add-Jobs" },
];

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full z-50 fixed top-0 left-0 transition-all duration-300 ${isScrolled ? "bg-white bg-opacity-90 shadow-md backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto navbar px-4 lg:px-0">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 z-50 text-gray-700">
              {navItems.map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "text-green-600 font-semibold" : "text-gray-700"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <NavLink to="/" className="text-[22  px] lg:text-4xl font-bold text-green-600 petrona tracking-tight">
            Career Port
          </NavLink>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 text-lg">
            {navItems.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition-all duration-300 hover:text-green-600 ${isActive ? "text-green-600 font-semibold border-b-2 border-green-500" : "text-gray-700"}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end space-x-2">
          {
            user ? <div className="dropdown dropdown-end">
              <label tabIndex={0} className="tooltip tooltip-bottom btn btn-ghost btn-circle avatar" data-tip={user?.email || 'User'}>
                <div className="w-10 rounded-full border border-green-500">
                  <img
                    src={user?.photoURL}
                    alt={user?.displayName || 'User'}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 z-50 text-gray-700">
                <li><span className="text-sm px-2">Hi, {user?.displayName || 'User'}</span></li>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><button className="text-red-500 btn" onClick={logOutUser}>Logout</button></li>
              </ul>
            </div> : <div>




              <NavLink
                className={({ isActive }) =>
                  ` ${isActive ? "btn btn-success" : "btn btn-outline btn-success"
                  }`
                } to="login">
                <button>Login</button>
              </NavLink>
            </div>
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;

