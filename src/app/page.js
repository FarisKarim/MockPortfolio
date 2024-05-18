"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const HomePage = () => {
  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-full flex flex-col lg:flex-row gap-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 mt-5 ">
          {/* image container */}
          <div className="h-1/2 lg:h-full lg:w-1/2 xl:max-w-lg relative">
            <Image src="/finald.png" className="object-contain" alt="" fill />
          </div>
          {/* text container */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold">
              Crafting Digital Experiences, Designing Tomorrow.
            </h1>
            {/* DESC */}
            <p className="md:text-xl">
              Welcome to my digital canvas, where innovation and creativity
              converge. With a keen eye for design and a mastery of code, my
              portfolio showcases a collection of projects that reflect my
              creativity and development skills.
            </p>
            {/* BUTTONS */}
            <div className="w-full flex gap-4">
              <button className="p-4 rounded-lg ring-1 ring-black bg-red-600 text-white">
                View My Work
              </button>
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HomePage;
