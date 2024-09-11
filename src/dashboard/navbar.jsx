import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-teal-600 text-white px-12 py-6 shadow-lg">
      {/* Main Navbar Container */}
      <div className="flex items-center justify-between font-semibold">
        {/* Logo */}
        {/* <div className="flex items-center justify-between space-x-2"> */}
          {/* <img
            src="/path-to-logo.png" // Replace with your logo path
            alt="ChatApp Logo"
            className="h-8 w-8"
          /> */}
          <h1 className="text-xl font-bold">ChatApp</h1>
        {/* </div> */}

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <div className="flex gap-10 justify-between items-center">
          <Link to="/chats" className="hover:text-gray-200">
              Chats
            </Link>
            <Link to="/status" className="hover:text-gray-200">
              Status
            </Link>
          <Link to="/groups" className="hover:text-gray-200">
              Groups
            </Link>
          <Link to="/calls" className="hover:text-gray-200">
              Calls
            </Link>
          </div>
          <div>
          <Link to="/logout" className="hover:text-gray-200">
              Log out
            </Link>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden flex flex-col items-center mt-3 space-y-3 bg-teal-600 p-4 rounded-md">
          <li>
            <a href="#status" className="hover:text-gray-200" onClick={() => setNavOpen(false)}>
              Status
            </a>
          </li>
          <li>
            <a href="#calls" className="hover:text-gray-200" onClick={() => setNavOpen(false)}>
              Call Log
            </a>
          </li>
          <li>
            <a href="#groups" className="hover:text-gray-200" onClick={() => setNavOpen(false)}>
              Groups
            </a>
          </li>
          <li>
            <a href="#logout" className="hover:text-gray-200" onClick={() => setNavOpen(false)}>
              Logout
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-white p-4 shadow-black">
//       <div className="container mx-auto flex justify-between items-center">
        
//         {/* Logo or brand name */}
//         <div className="text-black font-bold text-lg">
//           <h1 className='text-xl font-bold'>ChatApp</h1>
//         </div>

//         {/* Menu items */}
//         <div className="hidden md:flex items-center space-x-6 text-gray-900 font-semibold">
//           <a href="/profile" >
//             Profile
//           </a>
//           <a href="/about">
//             About
//           </a>
//           <a href="/marketplace" >
//             Marketplace
//           </a>
//           <a href="/contacts" >
//             Contacts
//           </a>
//           <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
//             Log Out
//           </button>
//         </div>

//         {/* Mobile menu button */}
//         <div className="md:hidden flex items-center">
//           <button className="text-gray-900 focus:outline-none ">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className="md:hidden mt-4 space-y-2">
//         <a href="/profile" className="block text-gray-300 hover:text-white">
//           Profile
//         </a>
//         <a href="/about" className="block text-gray-300 hover:text-white">
//           About
//         </a>
//         <a href="/marketplace" className="block text-gray-300 hover:text-white">
//           Marketplace
//         </a>
//         <a href="/contacts" className="block text-gray-300 hover:text-white">
//           Contacts
//         </a>
//         <button className="block w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
//           Log Out
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
