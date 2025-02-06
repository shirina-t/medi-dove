import React, { useState } from "react";
import mediDoveLogo from "../assets/medi_dove_logo.png";
import langImg from "../assets/lang.png";
import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Youtube, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isSurgeryDropdownOpen, setIsSurgeryDropdownOpen] = useState(false);
  const [isMemberDropdownOpen, setIsMemberDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between bg-light-blue h-[60px] pl-[150px]">
        <div className="flex gap-5 text-gray-600 text-[15px]">
          <p className="flex items-center gap-1">
            <Phone className="w-[18px] h-[18px]" /> +1 800 833 9780
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-[18px] h-[18px]" /> info@example.com
          </p>
        </div>
        <Link
          to="/"
          className="bg-dark-pink text-white text-[15px] font-semibold h-full w-[250px] mr-[30px] hover:bg-dirty-green flex items-center justify-center"
        >
          MAKE APPOINTMENT
        </Link>
      </div>
      <nav className="sticky left-0 top-0">
        <div
          id="wrapper"
          className="relative w-full h-[120px] bg-white flex items-center z-4"
        >
          <Link to="/" className="absolute left-[30px] top--1/2 z-5">
            <img src={mediDoveLogo} alt="Logo" />
          </Link>
          <div
            id="circle"
            className="w-[150px] h-[150px] rounded-full bg-inherit flex items-center justify-center p-6"
          ></div>
          <div className="text-[14px] text-gray-500 font-semibold flex gap-5 items-center ml-[300px]">
            <Link to="/" className="hover:text-gray-800">
              <p>Home +</p>
            </Link>
            <Link to="/" className="hover:text-gray-800">
              <p>About +</p>
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsSurgeryDropdownOpen(true)}
              onMouseLeave={() => setIsSurgeryDropdownOpen(false)}
            >
              <Link to="/" className="hover:text-gray-800">
                <p>Surgery types +</p>
              </Link>
              {/*Dropdown*/}
              {isSurgeryDropdownOpen && (
                <div className="absolute left-0 top-full w-[250px] h-[150px] bg-white p-[30px] border-t-[5px] border-dark-pink shadow-md z-10 flex flex-col justify-around">
                  <Link to="/" className="hover:text-dark-pink">
                    Services
                  </Link>
                  <Link to="/" className="hover:text-dark-pink">
                    Details
                  </Link>
                </div>
              )}
            </div>
            <Link to="/" className="hover:text-gray-800">
              <p>Blog +</p>
            </Link>
            <Link to="/" className="hover:text-gray-800">
              <p>News +</p>
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsMemberDropdownOpen(true)}
              onMouseLeave={() => setIsMemberDropdownOpen(false)}
            >
              <Link to="/" className="hover:text-gray-800">
                <p>Become a member +</p>
              </Link>
              {isMemberDropdownOpen && (
                <div className="absolute left-0 top-full w-[250px] h-[150px] bg-white p-[30px] border-t-[5px] border-dark-pink shadow-md z-10 flex flex-col justify-around">
                  {/* Dropdown */}
                  <Link to="/" className="block hover:text-dark-pink py-1">
                    Appointment
                  </Link>
                  <Link to="/" className="block hover:text-dark-pink py-1">
                    Contact
                  </Link>
                </div>
              )}
            </div>
            <p className="flex gap-3">
              <Link to="/" className="hover:text-gray-800">
                <Facebook /> {/*redirect to contact page*/}
              </Link>
              <Link to="/" className="hover:text-gray-800">
                <Youtube />
              </Link>
              <Link to="/" className="hover:text-gray-800">
                <Linkedin />
              </Link>
            </p>
            <div
              className="relative"
              onMouseEnter={() => setIsLangDropdownOpen(true)}
              onMouseLeave={() => setIsLangDropdownOpen(false)}
            >
              <Link to="/" className="w-[60px] h-[60px]">
                <img
                  src={langImg}
                  alt="lang"
                  className="border-[3px] border-white rounded-full shadow-[0_0_15px_pink]"
                />
              </Link>
              {/*Dropdown*/}
              {isLangDropdownOpen && (
                <div className="absolute left-0 top-full w-[65px] h-[150px] bg-white p-[15px] border-t-[5px] border-gray-600 shadow-md z-10 flex flex-col justify-around text-[13px]">
                  <Link to="/" className="hover:text-dark-pink">
                    USA
                  </Link>
                  <Link to="/" className="hover:text-dark-pink">
                    UK
                  </Link>
                  <Link to="/" className="hover:text-dark-pink">
                    CA
                  </Link>
                  <Link to="/" className="hover:text-dark-pink">
                    AU
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

{
  /*
 Space in dropmenu
 Lang img -> drop down menu-> change lang
 Responsive
*/
}

{
  /*Links to pages!*/
}
