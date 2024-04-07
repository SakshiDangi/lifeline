"use client"

import { useState } from "react";
import SignoutButton from "./signoutButton"; 

export default function Navbar() {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="">
    <nav className=" pt-6">
      <div className="z-50 fixed sm:w-full lg:max-w-[84vw] lg:mx-32 px-5">
        <div className=" flex justify-between items-center h-16 lg:border rounded-2xl bg-transparent backdrop-blur-lg bg-opacity-30 ">
           {/* logo */}
          <div className=" lg:px-5 text-3xl font-bold">Life
             <span className="text-red">line</span>
          </div>
          <div className="flex items-center gap-16 my-12">
            {/* primary */}
            <div className="hidden lg:flex gap-8 text-black-300 font-semibold">
              <a href="/" className="">
                Home
              </a>
              <a href="/"></a>
              <a href="/safety">Safety Plan</a>
              <a href="/blog">Blog</a>
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            <div className=" xs:flex items-center gap-10">
              <div className="flex gap-2 lg:pr-5">
                <SignoutButton />
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full bg-transparent backdrop-blur-lg bg-opacity-30 overflow-hidden flex flex-col lg:hidden origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-fit"
        }`}
      >
        <div className="px-8 pt-9 pb-2">
          <div className="flex flex-col pt-7 gap-3 font-bold text-black-300 tracking-wider">
            <a href="/">
              Home
            </a>
            <a href="/safety">Safety Plan</a>
            <a href="/about">About</a>
            <a href="/blog">Blog</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  );
}