import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 relative">
      <span className="text-xl font-bold tracking-wide">
        Portfolio
      </span>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } mx-0 py-2 mt-4 font-semibold md:mt-0 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0">About</li>
        </a>
        <a href="#Experience">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Experience</li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Projects</li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Contact</li>
        </a>
      </ul>

      <div className="md:hidden absolute right-10 top-6 transition-all duration-300">
        {menuOpen ? (
          <RiCloseLine size={30} onClick={() => setMenuOpen(false)} />
        ) : (
          <RiMenu2Line size={30} onClick={() => setMenuOpen(true)} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
