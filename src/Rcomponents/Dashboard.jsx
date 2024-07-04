import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <ul className="flex space-x-4 mt-4">
        <li><Link to="settings" className="text-blue-600 font-semibold hover:underline">Settings</Link></li>
        <li><Link to="profile" className="text-blue-600 font-semibold hover:underline">Profile</Link></li>
      </ul>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
