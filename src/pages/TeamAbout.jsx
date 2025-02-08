import React from "react";
import AboutShowcase from "./AboutShowcase";
import { Button } from "@/components/Button";

import Abouth1 from "../components/Abouth1";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const TeamAbout = () => {
  return (
    <div className="w-screen h-full flex flex-col gap-32 px-2">
      <AboutShowcase />

      <div className="w-full flex flex-col items-start gap-16 xl:px-32 lg:px-20 sm:px-2 py-10">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center">
          <div className="relative w-[50%]">
            <img src="/media/ic6.png" className="-z-10 absolute" />
            <div className="relative py-5 flex flex-col gap-3 items-start">
              <h5 className="font-medium text-[#647589] font-rubik">
                Our Team
              </h5>
              <Abouth1>A Professional & Care Provider</Abouth1>
              <img src="/media/line.png" />
            </div>
          </div>
          <div className="hidden md:block">
            <Link to="/appointment" className="no-underline">
              <Button
                variant="secondary"
                size="btns"
                className="flex items-center justify-start px-2 gap-5"
              >
                <span className="bg-white p-3 rounded-full">
                  <Plus className="text-black" />
                </span>
                <span className="font-[500] transition-all duration-300 tracking-[1px] text-[14px] font-rubik">
                  MAKE APPOINTMENT
                </span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="members w-full grid grid-cols-1 md:justify-start justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="maingrid w-full flex flex-col gap-5 md:items-start items-center">
            <div className="w-full relative flex justify-center">
              <img src="/media/member1.png" />
              <Link
                to={"/"}
                className="absolute right-28 sm:right-44 md:right-16 lg:right-4 xl:right-12 bottom-10 bg-[#8fb569] text-white p-3 rounded-full hover:bg-[#e12454] font-bold font-rubik transition-all duration-300"
              >
                {" "}
                <Plus />{" "}
              </Link>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="text-[26px] text-[#223645] font-poppins font-semibold">
                Rosalina D. Williamson
              </h3>
              <h6 className="text-[#e12454] font-poppins font-semibold tracking-[1px] text-[14px]">
                FOUNDER
              </h6>
            </div>
          </div>
          <div className="maingrid w-full flex flex-col gap-5 md:items-start items-center">
            <div className="w-full relative flex justify-center">
              <img src="/media/member2.png" />
              <Link
                to={"/"}
                className="absolute right-28 sm:right-44 md:right-16 lg:right-4 xl:right-12 bottom-10 bg-[#8fb569] text-white p-3 rounded-full hover:bg-[#e12454] font-bold font-rubik transition-all duration-300"
              >
                {" "}
                <Plus />{" "}
              </Link>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="text-[26px] text-[#223645] font-poppins font-semibold">
                Diconda PIran Will
              </h3>
              <h6 className="text-[#e12454] font-poppins font-semibold tracking-[1px] text-[14px]">
                DENTIST
              </h6>
            </div>
          </div>
          <div className="maingrid w-full flex flex-col gap-5 md:items-start items-center">
            <div className="w-full relative flex justify-center">
              <img src="/media/member3.png" />
              <Link
                to={"/"}
                className="absolute right-28 sm:right-44 md:right-16 lg:right-4 xl:right-12 bottom-10 bg-[#8fb569] text-white p-3 rounded-full hover:bg-[#e12454] font-bold font-rubik transition-all duration-300"
              >
                {" "}
                <Plus />{" "}
              </Link>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="text-[26px] text-[#223645] font-poppins font-semibold">
                Hulk M. Kenbon
              </h3>
              <h6 className="text-[#e12454] font-poppins font-semibold tracking-[1px] text-[14px]">
                NEUROLOGIST
              </h6>
            </div>
          </div>
          <div className="maingrid w-full flex flex-col gap-5 md:items-start items-center">
            <div className="w-full relative flex justify-center">
              <img src="/media/member4.png" />
              <Link
                to={"/"}
                className="absolute right-28 sm:right-44 md:right-16 lg:right-4 xl:right-12 bottom-10 bg-[#8fb569] text-white p-3 rounded-full hover:bg-[#e12454] font-bold font-rubik transition-all duration-300"
              >
                {" "}
                <Plus />{" "}
              </Link>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="text-[26px] text-[#223645] font-poppins font-semibold">
                Haliam Z. Dicolaz
              </h3>
              <h6 className="text-[#e12454] font-poppins font-semibold tracking-[1px] text-[14px]">
                CONSULTANT
              </h6>
            </div>
          </div>
          <div className="maingrid w-full flex flex-col gap-5 md:items-start items-center">
            <div className="w-full relative flex justify-center">
              <img src="/media/member5.png" />
              <Link
                to={"/"}
                className="absolute right-28 sm:right-44 md:right-16 lg:right-4 xl:right-12 bottom-10 bg-[#8fb569] text-white p-3 rounded-full hover:bg-[#e12454] font-bold font-rubik transition-all duration-300"
              >
                {" "}
                <Plus />{" "}
              </Link>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="text-[26px] text-[#223645] font-poppins font-semibold">
                Nicolas D. Case
              </h3>
              <h6 className="text-[#e12454] font-poppins font-semibold tracking-[1px] text-[14px]">
                DENTIST
              </h6>
            </div>
          </div>
          <div className="maingrid w-full flex flex-col gap-5 md:items-start items-center">
            <div className="w-full relative flex justify-center">
              <img src="/media/member6.png" />
              <Link
                to={"/"}
                className="absolute right-28 sm:right-44 md:right-16 lg:right-4 xl:right-12 bottom-10 bg-[#8fb569] text-white p-3 rounded-full hover:bg-[#e12454] font-bold font-rubik transition-all duration-300"
              >
                {" "}
                <Plus />{" "}
              </Link>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="text-[26px] text-[#223645] font-poppins font-semibold">
                Phumdon H. Norman
              </h3>
              <h6 className="text-[#e12454] font-poppins font-semibold tracking-[1px] text-[14px]">
                NEUROLOGIST
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAbout;
