import React, { useState } from "react";
import mediDoveLogo from "../assets/medi_dove_logo.png";
import langImg from "../assets/lang.png";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Facebook,
  Youtube,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isSurgeryDropdownOpen, setIsSurgeryDropdownOpen] = useState(false);
  const [isMemberDropdownOpen, setIsMemberDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between bg-light-blue md:pl-[50px] lg:pl-[150px] flex-col md:flex-row">
        <div className="flex gap-5 text-gray-600 text-[15px] md:mt-0 mt-[20px]">
          <p className="flex items-center gap-1 tracking-tighter">
            <Phone className="w-[18px] h-[18px]" /> +1 800 833 9780
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-[18px] h-[18px]" /> info@example.com
          </p>
        </div>
        <Link
          to="/contact"
          className="bg-dark-pink text-white text-[15px] font-semibold h-[60px] w-full md:w-[250px] mt-[20px] md:mt-[0px] mr-[0px] md:mr-[30px]  hover:bg-dirty-green flex items-center justify-center"
        >
          MAKE APPOINTMENT
        </Link>
      </div>
      <nav className="sticky left-0 top-0 z-50 ">
        <div
          id="wrapper"
          className="relative w-full h-[120px] bg-white flex items-center z-4  "
        >
          <Link
            to="/"
            className="absolute left-[0px] md:left-[35px] top-1/2 transform -translate-y-1/2 z-5 "
          >
            <img src={mediDoveLogo} alt="Logo" className="h-full" />
          </Link>
          <div
            id="circle"
            className="w-[150px] h-[150px] rounded-full bg-inherit items-center justify-center p-6 hidden md:hidden lg:flex"
          ></div>
          <div className="hidden lg:flex text-[14px] text-gray-500 font-semibold gap-5 items-center pl-0 lg:pl-[400px]">
            <Link to="/" className="hover:text-gray-800">
              <p>Home +</p>
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <Link to="/about" className="hover:text-gray-800">
                <p>About +</p>
              </Link>
              {/* Dropdown with Transition */}
              <div
                className={`absolute left-0 top-full w-[250px] h-[250px] bg-white p-[30px] border-t-[5px] border-dark-pink shadow-md z-10 flex flex-col justify-around
                    ${
                      isAboutDropdownOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-[1/2]"
                    }
                    transition-all duration-300 ease-in-out`}
                style={{
                  pointerEvents: isAboutDropdownOpen ? "auto" : "none",
                }}
              >
                <Link to="/about" className="block hover:text-dark-pink py-1">
                  Story
                </Link>
                <Link to="/approach" className="block hover:text-dark-pink py-1">
                  Approach
                </Link>
                <Link to="/team" className="block hover:text-dark-pink py-1">
                  Team
                </Link>
                <Link to="/feedback" className="block hover:text-dark-pink py-1">
                  Feedback
                </Link>
              </div>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsSurgeryDropdownOpen(true)}
              onMouseLeave={() => setIsSurgeryDropdownOpen(false)}
            >
              <Link to="/surgery" className="hover:text-gray-800">
                <p>Surgery types +</p>
              </Link>
              {/* Dropdown with Transition */}
              <div
                className={`absolute left-0 top-full w-[250px] h-[150px] bg-white p-[30px] border-t-[5px] border-dark-pink shadow-md z-10 flex flex-col justify-around 
                    ${
                      isSurgeryDropdownOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-[1/2]"
                    }
                    transition-all duration-300 ease-in-out`}
                style={{
                  pointerEvents: isSurgeryDropdownOpen ? "auto" : "none",
                }}
              >
                <Link
                  to="/surgery"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-dark-pink"
                >
                  Our Services
                </Link>
                <Link
                  to="/services"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-dark-pink"
                >
                  Services Details
                </Link>
              </div>
            </div>
            <Link to="/blog" className="hover:text-gray-800">
              <p>Blog +</p>
            </Link>
            <Link to="/news" className="hover:text-gray-800">
              <p>News +</p>
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsMemberDropdownOpen(true)}
              onMouseLeave={() => setIsMemberDropdownOpen(false)}
            >
              <Link to="/contact" className="hover:text-gray-800">
                <p>Become a member +</p>
              </Link>
              {/* Dropdown with Transition */}
              <div
                className={`absolute left-0 top-full w-[250px] h-[150px] bg-white p-[30px] border-t-[5px] border-dark-pink shadow-md z-10 flex flex-col justify-around
                    ${
                      isMemberDropdownOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-[1/2]"
                    }
                    transition-all duration-300 ease-in-out`}
                style={{
                  pointerEvents: isMemberDropdownOpen ? "auto" : "none",
                }}
              >
                <Link to="/appointment" className="block hover:text-dark-pink py-1">
                  Appointment
                </Link>
                <Link to="/contact" className="block hover:text-dark-pink py-1">
                  Contact
                </Link>
              </div>
            </div>
            <p className="gap-3 hidden md:flex">
              <Link to="/" className="hover:text-gray-800">
                <Facebook /> {/*contact page link*/}
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
          {/* Mobile Menu Button */}
          <div className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 z-50">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-800"
            >
              {isSidebarOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-white z-50 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="p-6">
          <Link to="/" className="block text-2xl font-bold mb-4">
            <img src={mediDoveLogo} alt="Logo" className="w-24" />
          </Link>

          <Link
            to="/"
            className="block py-2 text-gray-700 hover:text-dark-pink"
          >
            Home
          </Link>
          <Link
            to="/"
            className="block py-2 text-gray-700 hover:text-dark-pink"
          >
            About
          </Link>
          <Link
            to="/surgery"
            onClick={() => window.scrollTo(0, 0)}
            className="block py-1 text-gray-800 bg-gray-200 text-[14px] pl-3 hover:text-dark-pink"
          >
            Story
          </Link>
          <Link
            to="/surgery"
            onClick={() => window.scrollTo(0, 0)}
            className="block py-1 text-gray-800 bg-gray-200 text-[14px] pl-3 hover:text-dark-pink"
          >
            Approach
          </Link>
          <Link
            to="/surgery"
            onClick={() => window.scrollTo(0, 0)}
            className="block py-1 text-gray-800 bg-gray-200 text-[14px] pl-3 hover:text-dark-pink"
          >
            Team
          </Link>
          <Link
            to="/surgery"
            onClick={() => window.scrollTo(0, 0)}
            className="block py-1 text-gray-800 bg-gray-200 text-[14px] pl-3 hover:text-dark-pink"
          >
            Feedback
          </Link>
          <Link
            to="/surgery"
            onClick={() => window.scrollTo(0, 0)}
            className="block py-1 text-gray-800 bg-gray-200 text-[14px] pl-3 hover:text-dark-pink"
          >
            Our Services
          </Link>
          <Link
            to="/services"
            onClick={() => window.scrollTo(0, 0)}
            className="block py-1 text-gray-800 text-[14px] pl-3 bg-gray-200 hover:text-dark-pink"
          >
            Services Details
          </Link>
          <Link
            to="/"
            className="block py-2 text-gray-700 hover:text-dark-pink"
          >
            Blog
          </Link>
          <Link
            to="/news"
            className="block py-2 text-gray-700 hover:text-dark-pink"
          >
            News
          </Link>
          <Link
            to="/"
            className="block py-2 text-gray-700 hover:text-dark-pink"
          >
            Become a member
          </Link>
          <Link
            to="/"
            className="block py-1 text-gray-800 bg-gray-200 text-[14px] pl-3 hover:text-dark-pink"
          >
            Appointment
          </Link>
          <Link
            to="/"
            className="block py-1 text-gray-800 text-[14px] pl-3 bg-gray-200 hover:text-dark-pink"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /*
 Links to pages!
 Space in dropmenu
 Lang img -> drop down menu-> change lang
*/
}
