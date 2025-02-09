
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Abouth1 from "../components/Abouth1";
import { Button } from "@/components/Button";
import Aboutp from "../components/Aboutp";
import { Plus } from "lucide-react";
import { Calendar } from "lucide-react";
import { MessagesSquare } from "lucide-react";
import { Phone } from "lucide-react";

const Appointment = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selected, setSelected] = useState("");
  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="w-[100%] h-full flex flex-col gap-32">
      <div className="w-[100%] h-full">
        <div className="showc w-[100%] bg-[url(/media/shwc.jpg)] bg-cover bg-opacity-0 md:flex justify-between xl:px-32 lg:px-20 sm:px-2 items-center py-32 bg-[50%] bg-no-repeat">
          <div className="flex flex-col gap-10">
            <h3 className="font-bold text-xl opacity-50">
              We are here for your care
            </h3>
            <Abouth1>Appointment
            </Abouth1>
          </div>
          <div className="flex gap-1 font-semibold">
            <Link to={"/"} className="opacity-50 text-gray-900 no-underline">
              Home
            </Link>
            <p>|</p>
            <Link to={"/appointment"} className="text-red-600 no-underline">
              Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="shortstory w-[100%] items-center grid grid-cols-1 md:grid-cols-2 gap-10 sm:px-2 xl:px-32 lg:px-20">
        <div className="relative w-[100%]">
          {!isPlaying ? (
            <div
              className="py-[50%] bg-center bg-cover relative flex justify-center items-center "
              style={{
                backgroundImage: "url('/media/about-img-3.jpg')",
              }}
            >
              <Button variant="destructive" size="play" onClick={handlePlay}>
                ▶️
              </Button>
            </div>
          ) : (
            <div className="ratio ratio-1x1">
              <iframe
                src="https://www.youtube.com/embed/I3u3lFA9GX4?autoplay=1"
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full lg:h-[500px]"
              ></iframe>
            </div>
          )}
          <img
            src="/media/brand12.png"
            className="lg:absolute hidden top-[32%] left-[80%]"
          />
        </div>

        <div className="flex flex-col gap-3 lg:pr-3 sm:pr-2">
          <p className="font-semibold opacity-65 ">About Us</p>
          <Abouth1>Short Story About MediDove Clinic.</Abouth1>
          <Aboutp className="pr-11">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia.
          </Aboutp>
          <div className="flex gap-4 items-start pr-11">
            <img src="/media/ic1.png" alt="Picture" />
            <div>
              <h3 className="text-[24px] text-[#223645] font-sans font-[600]">
                Our Mission
              </h3>
              <Aboutp>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris hoi nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse.
              </Aboutp>
            </div>
          </div>
          <div className="flex gap-4 items-start pr-11">
            <img src="/media/ic2.png" alt="Picture" />
            <div>
              <h3 className="text-[24px] text-[#223645] font-sans font-[600]">
                Our Vission
              </h3>
              <Aboutp>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse.
              </Aboutp>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url(/media/bg-appoint.jpg)] bg-cover bg-top bg-no-repeat py-36">
        <div className="px-10 xl:px-20">
          <div className="flex flex-col gap-3 bg-[#fff] md:w-[70%] lg:w-[65%] xl:w-[60%]">
            <form className="flex flex-col pt-16 gap-5">
              <span className="text-[#e12454] text-[18px] font-[500] font-rubik px-16">
                Appointment
              </span>
              <Abouth1 className="px-16">Book Appointment</Abouth1>
              <div className="px-16 grid grid-cols-1 md:grid-cols-2 gap-5 text-[#647589]">
                <select
                  value={selected}
                  onChange={handleChange}
                  className="w-[100%] border-[2px] border-[#d3e2f0] p-2 h-[70px]"
                >
                  <option value="">Department</option>
                  <option value="apple">Surgery and Radiology</option>
                  <option value="banana">SPediatrics</option>
                </select>
                <select
                  value={selected}
                  onChange={handleChange}
                  className="w-[100%] border-[2px] border-[#d3e2f0] p-2 h-[70px]"
                >
                  <option value="">Doctor</option>
                  <option value="apple">Doctor Name</option>
                  <option value="banana">Doctor Name 2</option>
                </select>
              </div>
              <div className="px-16 grid grid-cols-1 md:grid-cols-2 gap-5 text-[#647589]">
                <input
                  className="w-[100%] border-[2px] border-[#d3e2f0] p-2 h-[70px]"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="w-[100%] border-[2px] border-[#d3e2f0] p-2 h-[70px]"
                  type="number"
                  placeholder="Your Phone number"
                />
              </div>
              <div className="px-16 grid grid-cols-1 md:grid-cols-2 gap-5 text-[#647589]">
                <input
                  className="w-[100%] border-[2px] border-[#d3e2f0] p-2 h-[70px]"
                  type="date"
                  placeholder="Select date"
                />
                <input
                  className="w-[100%] border-[2px] border-[#d3e2f0] p-2 h-[70px]"
                  type="text"
                  placeholder="Add time"
                />
              </div>
              <div className="px-16 text-[#647589]">
                <textarea
                  className="w-[100%] border-[2px] border-[#d3e2f0] p-2 h-[70px]"
                  placeholder="Special request"
                />
              </div>
              <Button variant="outline" size="subm">
                SUBMIT QUERY
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex flex-col items-start gap-20 xl:px-32 lg:px-20 sm:px-2 py-16">
        <div className="w-[100%] flex flex-col md:flex-row md:justify-between items-center">
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
            <Link to="/blog" className="no-underline">
              <Button
                variant="secondary"
                size="btns"
                className="flex items-center justify-start px-2 gap-5 w-64"
              >
                <span className="bg-white p-4 rounded-full">
                  <Plus className="text-black" />
                </span>
                <span className="font-[600] transition-all duration-300 tracking-[1px] text-[14px] font-rubik">
                  OUR BLOG
                </span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-[100%] grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <img
              src="/media/apn1.jpg"
              className="shadow-[4px_-4px_10px_rgba(0,0,0,0.1)]"
            />
            <div className="flex gap-3">
              <Link
                to={"/"}
                className="no-underline text-[#e12454] text-[14px] font-rubik tracking-[2px] font-[500]"
              >
                MEDICAL,
              </Link>
              <Link
                to={"/"}
                className="no-underline text-[#e12454] text-[14px] font-rubik tracking-[2px] font-[500]"
              >
                MEDICINE
              </Link>
            </div>
            <Link to={"/"} className="no-underline">
              <h3 className="text-[#223645] font-poppins font-[600] text-[22px] hover:text-[#e12454]">
                Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.
              </h3>
            </Link>
            <Aboutp>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Aboutp>
          </div>
          <div className="flex flex-col gap-3">
            <img
              src="/media/apn2.jpg"
              className="shadow-[4px_-4px_10px_rgba(0,0,0,0.1)]"
            />
            <div className="flex gap-3">
              <Link
                to={"/"}
                className="no-underline text-[#e12454] text-[14px] font-rubik tracking-[2px] font-[500]"
              >
                MEDICAL,
              </Link>
              <Link
                to={"/"}
                className="no-underline text-[#e12454] text-[14px] font-rubik tracking-[2px] font-[500]"
              >
                MEDICINE
              </Link>
            </div>
            <Link to={"/"} className="no-underline">
              <h3 className="text-[#223645] font-poppins font-[600] text-[22px] hover:text-[#e12454]">
                Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.
              </h3>
            </Link>
            <Aboutp>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Aboutp>
          </div>

          <div className="border-[2px] border-[#eae7ff] flex flex-col gap-5 p-10">
          <div className="flex flex-col gap-3 border-b-[2px] border-[#e3ecf2] pb-4">
            <h3 className="text-[22px] text-[#223645] font-poppins font-[600] hover:text-[#e12454]"><Link to={"/"} className="no-underline">Lorem ipsum dolor sit amet, consectetur adidis.</Link></h3>
            <div className="flex gap-6">
            <span className="flex gap-1 text-[#647589] text-[14px] font-[400] font-rubik items-center"><Calendar /> 23rd Jan 2022</span>
            <span className="flex gap-1 text-[#647589] text-[14px] font-[400] font-rubik items-center"><MessagesSquare /> 33 Comments</span>

            </div>
          </div>
          <div className="flex flex-col gap-3 border-b-[2px] border-[#e3ecf2] pb-4">
            <h3 className="text-[22px] text-[#223645] font-poppins font-[600] hover:text-[#e12454]"><Link to={"/"} className="no-underline">Lorem ipsum dolor sit amet, consectetur adidis.</Link></h3>
            <div className="flex gap-6">
            <span className="flex gap-1 text-[#647589] text-[14px] font-[400] font-rubik items-center"><Calendar /> 23rd Jan 2022</span>
            <span className="flex gap-1 text-[#647589] text-[14px] font-[400] font-rubik items-center"><MessagesSquare /> 33 Comments</span>

            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[22px] text-[#223645] font-poppins font-[600] hover:text-[#e12454]"><Link to={"/"} className="no-underline">Lorem ipsum dolor sit amet, consectetur adidis.</Link></h3>
            <div className="flex gap-6">
            <span className="flex gap-1 text-[#647589] text-[14px] font-[400] font-rubik items-center"><Calendar /> 23rd Jan 2022</span>
            <span className="flex gap-1 text-[#647589] text-[14px] font-[400] font-rubik items-center"><MessagesSquare /> 33 Comments</span>

            </div>
          </div>

          </div>


        </div>

        <div className="w-[100%] flex justify-end">
        <Link to="/contact" className="no-underline">
              <Button
                variant="link"
                size="btns"
                className="flex items-center justify-start px-2 gap-5 w-64"
              >
                <span className="bg-white p-4 rounded-full">
                  <Phone className="text-black" />
                </span>
                <span className="font-[600] transition-all duration-300 tracking-[1px] text-[14px] font-rubik">
                  MAKE CALL
                </span>
              </Button>
            </Link>

        </div>
      </div>
    </div>
  );
};

export default Appointment;
