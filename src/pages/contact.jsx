import React from 'react'
import showcase1 from "/src/img/showcase1.png";
import { Link } from "react-router-dom";
import { Locate, Mail, Map, Phone } from 'lucide-react';
import { Button } from "../ui/button.jsx";

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
      <div className="flex flex-col lg:flex-row justify-around gap-10 w-[100%] px-[80px] my-[150px]">
        <div className="mailbox w-[350px] border-2 p-[70px] flex flex-col gap-5 justify-center items-center">
          <div className="w-[150px] h-[150px] rounded-full bg-dirty-green text-white flex justify-center items-center">
            <Mail className="w-10 h-10" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[30px] font-semibold">Mail Here</p>
            <p className="text-gray-600 text-center">
              Admin@BasicTheme.com Info@Themepur.com
            </p>
          </div>
        </div>
        <div className="locationbox w-[350px] border-2 p-[70px] flex flex-col gap-5 justify-center items-center">
          <div className="w-[150px] h-[150px] rounded-full bg-dirty-green text-white flex justify-center items-center">
            <Map className="w-10 h-10" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[30px] font-semibold">Visit Here</p>
            <p className="text-gray-600 text-center">
              27 Division St, New York, NY 10002, Jaklina, United Kingpung
            </p>
          </div>
        </div>
        <div className="callbox w-[350px] border-2 p-[70px] flex flex-col gap-5 justify-center items-center">
          <div className="w-[150px] h-[150px] rounded-full bg-dirty-green text-white flex justify-center items-center">
            <Phone className="w-10 h-10" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[30px] font-semibold">Call Here</p>
            <p className="text-gray-600 text-center">
              +8 (123) 985 789 <br /> +787 878897 87
            </p>
          </div>
        </div>
      </div>
      <div className="formblue w-[100%] bg-[#F4F9FC] py-[100px]">
        <div className="flex flex-col lg:flex-row items-center justify-between pb-10 px-[80px]">
          <div>
            <p className="text-gray-600">Anything On your Mind</p>
            <p className="text-[60px] font-semibold">Estimate Your Idea</p>
          </div>
          <div className="flex items-center">
            <Link to="/appointment">
              <Button variant="destructive" size="lg" className="">
                <span className="bg-white text-gray-800 rounded-full px-3 pb-0 lg:pb-2 text-4xl">
                  +
                </span>
                <h2>Make Appointment</h2>
              </Button>
            </Link>
          </div>
        </div>
        <form
          action="#"
          className="flex flex-col gap-5 px-[80px] w-[100%] items-center"
        >
          <span className="flex flex-col md:flex-row gap-5 w-[100%]">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="tracking-wider p-8 w-[100%] md:w-[50%] placeholder-gray-600 placeholder:text-[14px] placeholder:font-semibold outline-none"
            />
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="tracking-wider p-8 w-[100%] md:w-[50%] placeholder-gray-600 placeholder:text-[14px] placeholder:font-semibold outline-none"
            />
          </span>
          <span className="flex flex-col md:flex-row gap-5 w-[100%]">
            <input
              type="tel"
              placeholder="YOUR PHONE"
              className="tracking-wider p-8 w-[100%] md:w-[50%] placeholder-gray-600 placeholder:text-[14px] placeholder:font-semibold outline-none"
            />
            <input
              type="text"
              placeholder="YOUR SUBJECT"
              className="tracking-wider p-8 w-[100%] md:w-[50%] placeholder-gray-600 placeholder:text-[14px] placeholder:font-semibold outline-none"
            />
          </span>
          <textarea
            name="message"
            id="usermessage"
            placeholder="YOUR MESSAGE"
            className="tracking-wider p-8 h-[300px] w-[100%] placeholder-gray-600 placeholder:text-[14px] placeholder:font-semibold outline-none"
          ></textarea>
          <Button variant="destructive" size="lg" className="w-[200px]">
            <span className="bg-white text-gray-800 rounded-full px-3 pb-0 lg:pb-2 text-4xl">
              +
            </span>
            <h2>Get Action</h2>
          </Button>
        </form>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.913356184063!2d69.2645283!3d41.3324974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6cbd7e49a1%3A0xf23c3817c486d743!2sAmity%20University%20Tashkent!5e0!3m2!1sen!2s!4v1739032228062!5m2!1sen!2s"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-[100%] h-[600px]"
      ></iframe>
    </>
  );
}

export default Contact