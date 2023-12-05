'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [navCollapse, setNavCollapse] = useState(true);

  const handleNavCollapse = () => setNavCollapse(!navCollapse);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M41,2 H13 C11.9,2 11,2.9 11,4 V50 c0,1.1 0.9,2 2,2 h28 c1.1,0 2-0.9 2-2 V4 C43,2.9 42.1,2 41,2 z M39,48 H15 V6 h18 v8 h6 V48 z" />
          <path d="M33,6 V14 h8" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          My Result Hub
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={handleNavCollapse}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          navCollapse ? 'hidden' : 'block'
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Blood Tests
          </Link>
          <Link
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </Link>
        </div>
        <div className="inline-block mt-4 lg:mt-0">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
