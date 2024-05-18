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
import { motion } from "framer-motion";

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

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(220 38 38)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(147 197 253)",
    },
  };
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -100,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

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
          className="flex flex-col w-10 h-8 justify-between z-50 relative"
        >
          <motion.div
            variants={topVariants}
            className="w-10 h-1 bg-red-600 rounded origin-left"
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            className="w-10 h-1 bg-blue-300 rounded"
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            className="w-10 h-1 bg-red-600 rounded origin-left"
            animate={open ? "opened" : "closed"}
          ></motion.div>
        </button>

        {/* Menu */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl font-semibold z-40"
          >
            {links.map((link, index) => (
              <motion.div variants={listItemVariants}>
                <Link key={index} href={link.url}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
