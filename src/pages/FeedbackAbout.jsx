import React, { useState } from "react";

import { Button } from "@/components/Button";
import AboutShowcase from "./AboutShowcase";
import Abouth1 from "../components/Abouth1";
import Aboutp from "../components/Aboutp";
import { Plus } from "lucide-react";
import { UserRound } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const FeedbackAbout = () => {
  return (
    <div className="w-[100%] h-full flex flex-col gap-0">
      <AboutShowcase />

      <div className="w-full bg-[#13232f] sm:px-2 xl:px-32 lg:px-20 py-20 mb-32">
        <div className="w-full font-rubik text-[#647589]">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="partleft flex flex-col gap-5">
              <h5 className="text-[#899dab;]">We are available 24/7</h5>
              <Abouth1 className="text-white">
                We Always Ready For A Challenge.
              </Abouth1>
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

            <div className="flex flex-col gap-5 xl:px-10">
              <div className="flex gap-5 items-center">
                <h1 className="text-[#8fb569] text-6xl font-poppins font-[600]">
                  1M+
                </h1>
                <div className="flex flex-col gap-3">
                  <h5 className="flex items-center gap-2 text-white font-[500]">
                    <UserRound />
                    Satisfied Patients
                  </h5>
                  <Aboutp>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Aboutp>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <h1 className="text-[#8fb569] text-6xl font-poppins font-[600]">
                  100+
                </h1>
                <div className="flex flex-col gap-3">
                  <h5 className="flex items-center gap-2 text-white font-[500]">
                  <ThumbsUp />
                    World Awards
                  </h5>
                  <Aboutp>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Aboutp>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackAbout;
