"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import NavLink from "./NavLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const socialLinks = [
  { url: "https://github.com/FarisKarim", Icon: FaGithub },
  { url: "https://linkedin.com/in/faristkarim", Icon: FaLinkedin },
  { url: "https://instagram.com", Icon: FaInstagramSquare },
  { url: "https://facebook.com", Icon: FaFacebook },
  { url: "https://pinterest.com", Icon: FaPinterest },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link, index) => (
          <NavLink key={index} link={link} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-red-600 rounded-lg p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-2">Faris</span>
          <span className="bg-gray-400 text-white rounded-lg px-1 w-12 h-8 flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-3 w-1/3 justify-center">
        {/* SOCIAL */}
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <link.Icon size={28} />
          </a>
        ))}
        {/* </button> */}
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
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl font-semibold">
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
