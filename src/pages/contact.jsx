import React from 'react'
import { Link } from "react-router-dom";
import showcase1 from "/src/img/showcase1.png";

const Contact = () => {
  return (
    <>
      <div
        className="w-[100%] bg-cover bg-no-repeat md:flex justify-between xl:px-32 lg:px-20 sm:px-2 items-center py-[200px] bg-center h-full"
        style={{ backgroundImage: `url(${showcase1})` }}
      >
        <div className="flex flex-col gap-10 sm:ml-10 md:ml-0 ml-10 ">
          <h3 className="font-bold text-xl opacity-50">
            We are here for your care
          </h3>
          <h1 className="text-6xl font-bold text-[#223545]">Contact page</h1>
        </div>

        <div className="flex gap-1 font-semibold sm:ml-10 md:ml-0 ml-10 sm:mt-10 md:mt-0 mt-10 ">
          <Link to="/" className="opacity-50 text-gray-900 no-underline">
            Home
          </Link>
          <p>|</p>
          <Link to="/contact" className="text-red-600 no-underline">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact