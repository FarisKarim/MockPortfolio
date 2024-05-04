"use client";

import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { useState } from "react";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" h-full flex justify-between items-center border border-blue-500 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden md:flex gap-4 text-black border border-blue-500">
        {links.map((link, index) => (
          <Link key={index} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <Link
          href="/about"
          className="text-sm bg-red-600 rounded-lg p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-2">Faris</span>
          <span className="bg-gray-400 text-white rounded-lg px-1 w-12 h-8 flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      <div className="hidden md:flex">
        <button>
          <a href="https://github.com/FarisKarim" rel="noopener noreferrer" target="_blank" >
          <FaGithub size={28} />
          </a>
        </button>
      </div>
      {/* MENU */}
      <div className="md:hidden">
        {/* Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 z-50 relative"
        >
          <div className="w-10 h-1 bg-red-600 rounded"></div>
          <div className="w-10 h-1 bg-blue-300 rounded"></div>
          <div className="w-10 h-1 bg-red-600 rounded"></div>
        </button>

        {/* Menu */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl">
            {links.map((link, index) => (
              <Link key={index} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
