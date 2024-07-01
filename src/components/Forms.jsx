import React from "react";
import { Link, Outlet } from "react-router-dom";

const Forms = () => {
  return (
    <>
      <div className="h-screen w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-4">React Router Contacts</h1>
        <div className="mb-4">
          <form role="search" className="mb-4">
            <input
              placeholder="Search"
              type="search"
              name="q"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
        
          </form>
          <form method="post">
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 rounded hover:bg-blue-700"
            >
              New
            </button>
          </form>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to={`/contacts/1`}
                className="block p-2 rounded hover:bg-gray-700"
              >
                Your Name
              </Link>
            </li>
            <li>
              <Link
                to={`/contacts/2`}
                className="block p-2 rounded hover:bg-gray-700"
              >
                Your Friend
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-4"></div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Forms;
