import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <NavLink to="/">MyApp</NavLink>
        </div>
        <div className="space-x-4">
          <NavLink to="/"   className={( {isActive }) =>
               isActive ? "p-2 bg-cyan-500  text-amber-400 rounded-md" : " text-white"
            }>Home</NavLink>
          <NavLink
            to="/about"
            
            className={( {isActive }) =>
               isActive ? "p-2 bg-cyan-500 text-amber-400 rounded-md" : " text-white"
            }
          >
            about
          </NavLink>
          <NavLink to="/contacts"   className={( {isActive }) =>
               isActive ? "p-2 bg-cyan-500 text-amber-400 rounded-md" : " text-white"
            }>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
