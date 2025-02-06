import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-light-blue h-[60px] pl-[150px]">
        <div className="flex gap-5">
          <p>
            <i>icon</i> +1 800 833 9780
          </p>
          <p>
            <i>icon</i> info@example.com
          </p>
        </div>
        <button className="bg-dark-pink text-white h-full w-[250px] mr-[30px]">
          MAKE APPOINTMENT
        </button>
      </div>
      <nav className="w-full h-[120px] bg-white flex items-center">
        <div
          id="circle"
          className="w-[150px] h-[150px] rounded-full bg-inherit flex items-center justify-center p-6"
        >
          <Link to="/">
            <img src="./assets/medi_dove_logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="text-sm flex gap-5 ml-[300px]">
          <p>Home +</p>
          <p>About +</p>
          <p>Surgery types +</p> {/*Services, Details */}
          <p>Blog +</p>
          <p>News +</p>
          <p>Become a member +</p> {/*Appointment, Contact */}
          <p>f</p>
          <p>yt</p>
          <p>ln</p>
          <p>p</p>
          <p>User avatar</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

{
  /*
 Main logo isn't appearing
 Import logos for social media
 Circle shape around logo
 Hover
 Drop down menu
 Sticky position
 Contact number above
 Everything is a link
 User avatar import
 User avatar -> drop down menu-> change lang
 Animated navbar 
 Responsive
*/
}
