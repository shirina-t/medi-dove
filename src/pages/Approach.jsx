
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import AboutShowcase from "./AboutShowcase";
import Abouth1 from "../components/Abouth1";
import Aboutp from "../components/Aboutp";

const Approach = () => {
  return (
    <div className="w-screen h-full flex flex-col gap-32">
      <AboutShowcase />

      <div className="bg-[url(/media/bg2.jpg)] bg-cover bg-top bg-no-repeat py-36">
        <div className="container1 px-10 xl:px-20">
          <div className="flex flex-col gap-3 bg-[#fff] md:w-[70%] lg:w-[65%] xl:w-[60%]">
            <div className="flex flex-col p-16 gap-5">
            <span className="text-[#e12454] text-[18px] font-[500] font-rubik">
              Our Approach
            </span>
            <Abouth1>If you are a patient seeking quality.</Abouth1>
            <Aboutp>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat.</Aboutp>
            <ul className="flex flex-col gap-1 p-0">
              <li className="flex gap-3 group items-start">
                <CircleCheck className="text-[#8fb569] rounded-full transition-all duration-300 group-hover:bg-[#8fb569] group-hover:text-white w-8 h-8" />
                <Aboutp className="transition-all duration-300">
                  Ut enim ad minim veniam, quis nostrud exercit.
                </Aboutp>
              </li>
              <li className="flex gap-3 group items-start">
                <CircleCheck className="text-[#8fb569] rounded-full transition-all duration-300 group-hover:bg-[#8fb569] group-hover:text-white w-8 h-8" />
                <Aboutp className="transition-all duration-300">
                  Ut enim ad minim veniam, quis nostrud exercit.
                </Aboutp>
              </li>
              <li className="flex gap-3 group items-start">
                <CircleCheck className="text-[#8fb569] rounded-full transition-all duration-300 group-hover:bg-[#8fb569] group-hover:text-white w-8 h-8" />
                <Aboutp className="transition-all duration-300">
                  Ut enim ad minim veniam, quis nostrud exercit.
                </Aboutp>
              </li>
              <li className="flex gap-3 group">
                <CircleCheck className="text-[#8fb569] rounded-full transition-all duration-300 group-hover:bg-[#8fb569] group-hover:text-white w-8 h-8" />
                <Aboutp className="transition-all duration-300 self-center">
                  Ut enim ad minim veniam, quis nostrud exercit.
                </Aboutp>
              </li>
            </ul></div>
            <Link to={"/appointment"} className="no-underline text-white bg-[#e12454] text-center py-6 text-[14px] font-[500] font-rubik tracking-wide transition-all duration-300 hover:bg-[#8fb569]">MAKE APPOINTMENT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
