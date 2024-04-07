"use client"

import React from "react";
import Navbar from "./Navbar";
import FooterOne from "./footer";
// import {NewsLetterOne} from "./newsletter"

export default function HomeHere() {
  return (
    <div>
      <Navbar />
      <div
        className="w-full h-[100vh] my-[12vh]  flex justify-center items-center bg-center bg-no-repeat bg-cover bg-relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2228554/pexels-photo-2228554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <h1 className="text-4xl font-bold text-white bg-[]">Lifeline</h1>
      </div>
      {/* <NewsLetterOne /> */}
      <FooterOne />
    </div>
  );
}