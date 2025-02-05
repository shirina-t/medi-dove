import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-slate-400 text-gray-700 text-sm flex gap-3 items-center justify-center">
      <p>
        <Link to="/">
          <img src="./assets/medi_dove_logo.png" alt="Logo" />
        </Link>
      </p>
      <p>Home +</p>
      <p>About +</p>
      <p>Surgery types +</p> {/*Services, Details */}
      <p>Blog +</p>
      <p>News +</p>
      <p>Become a member +</p> {/*Appointment, Contact */}
      <p>facebook</p>
      <p>youtube</p>
      <p>linkedin</p>
      <p>pinterest</p>
      <p>User avatar</p>
    </nav>
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
