// import React from 'react';
// import green from '../assets/images/GreenVillelogo.png';
// import K from '../constant';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div className="flex">
//       <div className="size-28">
//         <img src={green} alt="" />
//       </div>

//       <div>
//         {K.NAVLINKS.map((item, index) => {
//           return (
//             <Link key={index} to={item.path}>
//               {item.name}
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import green from '../assets/images/GreenVillelogo.png';
import K from '../constant';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={green} alt="Logo" className="h-8 w-8 mr-2" />
        <span className="font-semibold text-xl text-green-700">GreenVille</span>
      </div>

      {/* Hamburger Menu (for mobile) */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-green-700 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Links */}
      <div
        className={`lg:flex ${
          isOpen ? 'flex' : 'hidden'
        } flex-col items-center justify-center lg:flex-row lg:items-center`}
      >
        {K.NAVLINKS.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block mt-4 lg:mt-0 lg:ml-6 text-green-700 hover:text-green-900"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
