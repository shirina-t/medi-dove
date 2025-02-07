import React from "react";
import mediDoveFooter from "../assets/footer_logo.png";
import feedThumb1 from "../assets/feeds-thumb-1.jpg";
import feedThumb2 from "../assets/feeds-thumb-2.jpg";
import feedThumb3 from "../assets/feeds-thumb-3.jpg";
import { Link } from "react-router-dom";
import { Copy, Flag, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-footer-blue text-white py-12 px-6 md:py-[100px] md:px-[50px] flex flex-col md:flex-row gap-8 md:gap-[40px]">
        <div className="leftcol flex-1">
          <Link to="/">
            <img
              src={mediDoveFooter}
              alt="logo"
              className="w-auto h-auto md:w-auto md:h-auto"
            />
          </Link>
          <p className="text-gray-400 py-6 md:py-[30px] tracking-tighter text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            suscipit beatae quia provident veritatis, aliquid tempore adipisci,
            commodi facilis atque corrupti porro error excepturi fugit
            distinctio.
          </p>
          <div className="flex flex-col gap-3 text-sm md:text-[18px] text-gray-400">
            <p className="flex gap-2 items-center">
              <Mail className="w-5 h-5 md:w-auto md:h-auto" />
              info@examplemedical.com
            </p>
            <p className="flex gap-2 items-center">
              <Copy className="w-5 h-5 md:w-auto md:h-auto" />
              examplemedical.com
            </p>
            <p className="flex gap-2 items-center">
              <Flag className="w-5 h-5 md:w-auto md:h-auto" />
              227 Marion Street, Columbia
            </p>
          </div>
        </div>
        <div className="midcol flex-1">
          <p className="text-xl md:text-[27px] font-bold">Departments</p>
          <div className="flex mt-6 md:mt-[30px] text-gray-400 text-xs md:text-[15px] font-semibold">
            <ul className="flex-1 flex flex-col gap-4 pr-4 md:pr-[20px]">
              <li>
                <Link to="/" className="hover:text-dirty-green hover:underline">
                  Surgery and Radiology
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-dirty-green hover:underline">
                  Family Medicine
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-dirty-green hover:underline">
                  Women’s Health
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-dirty-green hover:underline">
                  Optician
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-dirty-green hover:underline">
                  Pediatrics
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-dirty-green hover:underline">
                  Dermatology
                </Link>
              </li>
            </ul>
            <ul className="flex-1 flex flex-col gap-4">
              <li>
                <Link to="/" className="hover:text-dirty-green hover:underline">
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-dirty-green hover:underline">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-dirty-green hover:underline">
                  News
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-dirty-green hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-dirty-green hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-dirty-green hover:underline">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightcol flex-1">
          <p className="text-xl md:text-[27px] font-bold">News Feeds</p>
          <div className="flex flex-col gap-5 mt-6 md:mt-[30px]">
            <div className="top">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={feedThumb1}
                  alt="News 1"
                  className="w-16 h-16 md:w-auto md:h-auto"
                />
                <div>
                  <p className="text-base md:text-[18px] text-gray-300 font-semibold leading-tight hover:text-dirty-green">
                    Lorem ipsum dolor sit am et, consectetur.
                  </p>
                  <p className="text-xs md:text-[14px] text-gray-400">
                    5 Feb 2025
                  </p>
                </div>
              </Link>
            </div>
            <div className="mid">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={feedThumb2}
                  alt="News 2"
                  className="w-16 h-16 md:w-auto md:h-auto"
                />
                <div>
                  <p className="text-base md:text-[18px] text-gray-300 font-semibold leading-tight hover:text-dirty-green">
                    Lorem ipsum dolor sit am et, consectetur.
                  </p>
                  <p className="text-xs md:text-[14px] text-gray-400">
                    5 Feb 2025
                  </p>
                </div>
              </Link>
            </div>
            <div className="bot">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={feedThumb3}
                  alt="News 3"
                  className="w-16 h-16 md:w-auto md:h-auto"
                />
                <div>
                  <p className="text-base md:text-[18px] text-gray-300 font-semibold leading-tight hover:text-dirty-green">
                    Lorem ipsum dolor sit am et, consectetur.
                  </p>
                  <p className="text-xs md:text-[14px] text-gray-400">
                    5 Feb 2025
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-copyright-blue text-gray-400 h-12 md:h-[60px] text-xs md:text-[14px] flex justify-center items-center">
        @Copyright by Albison IT girls
      </div>
    </footer>
  );
};

export default Footer;

{/*Links to pages!*/}