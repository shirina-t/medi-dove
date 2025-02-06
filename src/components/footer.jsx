import React from 'react'
import mediDoveFooter from '../assets/footer_logo.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <div className="bg-footer-blue text-white h-[600px] py-[100px] px-[50px] flex">
          <div className="leftcol flex-1">
            <Link to="/">
              <img src={mediDoveFooter} alt="logo" />
            </Link>
            <p className='text-gray-400 py-[30px]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              suscipit beatae quia provident veritatis, aliquid tempore
              adipisci, commodi facilis atque corrupti porro error excepturi
              fugit distinctio. 
            </p>
            <div>
              <p>email</p>
              <p>email</p>
              <p>email</p>
            </div>
          </div>
          <div className="midcol flex-1">mid</div>
          <div className="rightcol flex-1">right</div>
        </div>
        <div className="bg-copyright-blue text-gray-400 h-[60px] text-[14px] flex justify-center items-center">@Copyright by Albison IT girls</div>
      </footer>
    </>
  );
}

export default Footer

{/*
   Small logos
   Everything is a link
   Departments link to services details
   News photos
   Bgimg and bgc
   Fixed position below
   Copyright
   Responsive
*/}