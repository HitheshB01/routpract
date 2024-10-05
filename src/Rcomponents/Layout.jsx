import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-600 p-4 text-white">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold" : "text-white"
              }

              // className={( {isActive }) =>
              //     isActive ? "p-2 bg-cyan-500  text-amber-400 rounded-md" : " text-white"
              //  }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "font-bold" : "text-white"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "font-bold" : "text-white"
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
