import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-600 p-4 text-white">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
        </ul>
      </nav>
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
