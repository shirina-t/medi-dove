
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Abouth1 from "../components/Abouth1";


const AboutShowcase = () => {
  return (
    <div className="w-[100%] h-full">
      <div className="showc w-full bg-[url(/media/shwc.jpg)] bg-cover bg-opacity-0 md:flex justify-between xl:px-32 lg:px-20 sm:px-2 items-center py-32 bg-[50%] bg-no-repeat">
        <div className="flex flex-col gap-10">
          <h3 className="font-bold text-xl opacity-50">
            We are here for your care
          </h3>
          <Abouth1>About Us</Abouth1>
        </div>
        <div className="flex gap-1 font-semibold">
          <Link to={"/"} className="opacity-50 text-gray-900 no-underline">
            Home
          </Link>
          <p>|</p>
          <Link to={"/about"} className="text-red-600 no-underline">
            About
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default AboutShowcase
