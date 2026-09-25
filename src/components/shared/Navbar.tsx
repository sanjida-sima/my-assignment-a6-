

'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();

    // const {plan,  Saved} =useFitlog();
    

//     

    return (
        <div className="navbar bg-[#0d0f12] border-b border-[#202329] px-4 md:px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-[#15181d] rounded-box z-50 mt-3 w-52 p-2 shadow">
        
        <li>
        <Link href="/workout">Workouts</Link>
    </li>
    <li>
        <Link href="/my-plan">My Plan</Link>
    </li>
      </ul>
    </div>
    <div>
     <Link href='/' className="flex items-center grap-3">
     <img src='/logo.png'alt="Fitlogo"className="w-5 h-5"  />
     <span className="text-xl font-bold text-white">FITLOG</span>
     </Link>
    </div>
    
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
    <li>
        
        <Link href='/workout' className={pathname ==="/"|| pathname.startsWith('/workout') ? "bg-[#c6ff00] text-black rounded-full " : 'text-gray-400'}> Workouts</Link>

        </li>

    <li>
        
        <Link href='/my-plan' className={pathname ==="/" || pathname.startsWith('/my-plan') ? "bg-[#c6ff00] text-black rounded-full " : 'text-gray-400'}> My Plan</Link>

        </li>


    </ul>
  </div>


  <div className="navbar-end gap-3">
    <Link href="/my-plan" className="text-gray-300 text-sm">Plan  <span className="ml-2 bg-  [#c6ff00] text-balck rounded-full px-2 py-1 text-xs font-bold"> {0} </span>   
    </Link>

    <Link href="/my-plan"  className="text-gray-300 text-sm">Saved   <span className="ml-2  border border-gray-600 rounded-full px-2 py-1 text-xs">{0}</span>
    </Link>
  </div>
</div>
    );
};

export default Navbar;