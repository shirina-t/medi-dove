import { useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import { Button } from "../ui/button.jsx";
import { Link } from "react-router-dom";

export const Model = ({ isOpen, onClose }) => {
  if (!isOpen) return null; 

  return (
    <div className="Showcase_model fixed z-40 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="Showcase_model relative z-50">
        <button onClick={onClose} className="text-4xl font-semibold absolute -top-10 -right-10 text-white"> X </button>
        <iframe
          className="xl:w-[560px] xl:h-[315px] lg:w-[445px] lg:h-[250px]"
          src="https://www.youtube.com/embed/oU_GUAWz52w?si=wiJ6NLF4jDtL9Ygq"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      <div className="Model_background w-full h-screen bg-black absolute opacity-65"
        onClick={onClose}
      ></div>
    </div>
  );
};

export const Showcase = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [Arrows, setArrows] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === 1 ? 2 : 1));
  };

  return (
    <div
      className="homePage_showcase relative flex items-center overflow-hidden"
      onMouseEnter={() => setArrows(true)}
      onMouseLeave={() => setArrows(false)}
    >
      <div
        className="absolute w-full lg:flex hidden justify-between xl:px-18 lg:px-6 top-1/2 -translate-y-1/2 transition-opacity duration-500"
        style={{ opacity: Arrows ? 1 : 0 }}
      >
        <button
          onClick={nextSlide}
          className="showcase_arrowLeft bg-white shadow-xl p-6 rounded-full hover:bg-rose-500 hover:text-white duration-500"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="showcase_arrowRight bg-white shadow-xl p-6 rounded-full hover:bg-rose-500 hover:text-white duration-500"
        >
          <ArrowRight />
        </button>
      </div>

      <div
        className={`homePage_showcase_slider1 w-full h-screen flex items-center bg-cover bg-center bg-no-repeat ${
          activeSlide === 1 ? "opacity-100" : "opacity-0 hidden"
        }`}
        style={{ backgroundImage: `url(${slider1})` }}
      >
        <div className="slider_text xl:w-2/6 lg:w-2/4 md:w-9/12 absolute sm:top-[20%] sm:left-[10%] flex gap-2 flex-col sm:items-start items-center sm:justify-start px-1">
          <h4 className="text-gray-600 font-semibold text-xl">
            We are here for your care.
          </h4>
          <h2 className="2xl:text-[80px] xl:text-[60px] lg:text-[50px] text-[35px] font-semibold text-gray-800 flex md:text-start text-center">
            Best Care & Better Doctor.
          </h2>
          <p className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
            praesentium necessitatibus? Illum atque minima suscipit ipsum
            impedit vero voluptate?
          </p>
          <br />
          <div className="showcase_buttons flex items-center gap-4 flex-wrap sm:justify-start justify-center">
            <Link to="/appointment">
              <Button
                className="slider1_buttons"
                variant="destructive"
                size="lg"
              >
                <span className="bg-white text-gray-800 rounded-full px-3 pb-0 lg:pb-2 text-4xl">
                  +
                </span>
                <h2>Make Appointment</h2>
              </Button>
            </Link>
            <Button
              variant="outline"
              className="w-auto h-auto py-6 px-6"
              onClick={() => setModalOpen(true)}
            >
              <Play fill="white" />
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`homePage_showcase_slider2 w-full h-screen flex items-center bg-cover bg-center bg-no-repeat  ${
          activeSlide === 2 ? "opacity-100" : "opacity-0 hidden"
        }`}
        style={{ backgroundImage: `url(${slider2})` }}
      >
        <div className="slider_text xl:w-2/6 lg:w-2/4 md:w-9/12 absolute sm:top-[20%] sm:left-[10%] flex gap-2 flex-col sm:items-start items-center sm:justify-start px-1">
          <h4 className="text-gray-600 font-semibold text-xl">
            We are here for your care.
          </h4>
          <h2 className="2xl:text-[80px] xl:text-[60px] lg:text-[50px] text-[35px] font-semibold text-gray-800 flex md:text-start text-center">
            Best Care & Better Doctor.
          </h2>
          <p className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
            praesentium necessitatibus? Illum atque minima suscipit ipsum
            impedit vero voluptate?
          </p>
          <br />
          <div className="showcase_buttons flex items-center gap-4 flex-wrap sm:justify-start justify-center">
            <Button className="slider2_buttons" variant="destructive" size="lg">
              <span className="bg-white text-gray-800 rounded-full px-3 pb-0 lg:pb-2 text-4xl">
                +
              </span>
              <h2>Make Appointment</h2>
            </Button>
            <Button
              variant="outline"
              className="w-auto h-auto py-6 px-6"
              onClick={() => setModalOpen(true)}
            >
              <Play fill="white" />
            </Button>
          </div>
        </div>
      </div>

      <Model isOpen={ModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};







import AboutImg from "../assets/images/AboutImg.jpg";
import ImgShape from "../assets/images/ImgShape.png";
import ImgSign from "../assets/images/ImgSign.png";
import ProfileImg from "../assets/images/ProfileImg.png";

export const Homepage_Section1 = () => {
  return (
    <div className="HomePage_section1 lg:w-auto flex flex-col lg:flex-row relative gap-15 items-center justify-center mt-40 px-5">
      <div className="Section1_Img1 relative w-full lg:w-1/2 flex justify-center">
        <div className="relative md:max-w-full">
          <img src={ImgShape} className="absolute -bottom-10 -left-10 z-0" alt=""/>
          <img  src={AboutImg}  alt="About_Img"  className="relative z-10 w-full"/>
          <img src={ImgSign} className="absolute lg:flex hidden -right-5 md:-right-28 top-[40%] z-20" alt="Img_Sign"/>
        </div>
      </div>

      <div className="Section1_text w-9/12 lg:w-1/2 text-center md:text-left flex flex-col gap-2">
        <h4 className="text-lg font-semibold text-gray-700">About Us</h4>
        <h2 className="text-4xl xl:text-6xl lg:text-5xl md:text-6xl text-slate-800 font-bold mt-2">
          Short Story About MediDove Clinic.
        </h2>
        <p className="mt-4 text-gray-600 px-2 md:px-0">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
        </p>
        <p className="mt-2 text-gray-600 px-2 md:px-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>


        <div className="Section1_profile flex flex-col md:flex-row items-center mt-6 gap-4 md:gap-6">
          <img src={ProfileImg} alt="Profile" className="w-16 h-16 rounded-full" />
          <div className="Section1_Img text-center md:text-left">
            <h3 className="text-lg text-slate-900 font-semibold">Rosalina D. Williamson</h3>
            <h4 className="text-rose-700 text-base font-semibold">Founder</h4>
          </div>
        </div>
      </div>
    </div>
  );
};




import Line from "../assets/images/Line.png"
import Imgbackground from "../assets/images/Imgbackground.png"
import service1 from "../assets/images/service1.png"
import service2 from "../assets/images/service2.png"
import service3 from "../assets/images/service3.png"
import service4 from "../assets/images/service4.png"
import service5 from "../assets/images/service5.png"
import service6 from "../assets/images/service6.png"



export const HomePage_Cards = () => {
  return (
    <div className="HomePage_Cards bg-[#f4f9fc] w-full h-full">
      <div
        className="mt-32 pt-20 bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${Imgbackground})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h4 className="text-xl text-slate-500 font-bold">Departments</h4>
        <h2 className="text-center font-semibold text-gray-700 xl:text-[55px] lg:text-[45px] md:text-[40px] text-[35px] mb-2">
          Managed Your <br /> Healthcare Services
        </h2>
        <img src={Line} alt="" />
      </div>

      <div className="flex flex-row flex-wrap xl:gap-28 lg:gap-18 md:gap-16 gap-10 bg-[#f4f9fc] items-center justify-center w-auto h-auto  pb-20">
        <div className="HomePage_Card sm:w-80 w-9/12 sm:h-96 h-full bg-white flex flex-col items-center justify-center mt-20 sm:p-12 p-6 gap-2 rounded-xl hover:shadow-2xl shadow-gray-700">
          <img src={service1} alt="" />
          <h3 className="text-2xl font-bold text-slate-700 hover:text-lime-600 duration-700">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Body Surgery</Link>
          </h3>
          <p className="text-center text-slate-700">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo.
          </p>
          <Link
            to="/services" onClick={() => window.scrollTo(0, 0)}
            className="font-semibold text-slate-700 hover:text-lime-600 duration-700"
          >
            Read More
          </Link>
        </div>

        <div className="HomePage_Card sm:w-80 w-9/12 h-96 bg-white flex flex-col items-center justify-center mt-20 p-12 gap-2  rounded-xl hover:shadow-2xl ">
          <img src={service2} alt="" />
          <h3 className="text-2xl font-bold text-slate-700 hover:text-lime-600 duration-700">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Dental Care</Link>
          </h3>
          <p className="text-center text-slate-700">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo.
          </p>
          <Link
            to="/services" onClick={() => window.scrollTo(0, 0)}
            className="font-semibold text-slate-700 hover:text-lime-600 duration-700"
          >
            Read More
          </Link>
        </div>
        <div className="HomePage_Card sm:w-80 w-9/12 h-96 bg-white flex flex-col items-center justify-center mt-20 p-12 gap-2  rounded-xl hover:shadow-2xl ">
          <img src={service3} alt="" />
          <h3 className="text-2xl font-bold text-slate-700 hover:text-lime-600 duration-700">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Service-content</Link>
          </h3>
          <p className="text-center text-slate-700">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo.
          </p>
          <Link
            to="/services" onClick={() => window.scrollTo(0, 0)}
            className="font-semibold text-slate-700 hover:text-lime-600 duration-700"
          >
            Read More
          </Link>
        </div>

        <div className="HomePage_Card sm:w-80 w-9/12 h-96 bg-white flex flex-col items-center justify-center mt-20 p-12 gap-2  rounded-xl hover:shadow-2xl ">
          <img src={service4} alt="" />
          <h3 className="text-2xl font-bold text-slate-700 hover:text-lime-600 duration-700">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Blood-Cancer</Link>
          </h3>
          <p className="text-center text-slate-700">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo.
          </p>
          <Link
            to="/services" onClick={() => window.scrollTo(0, 0)}
            className="font-semibold text-slate-700 hover:text-lime-600 duration-700"
          >
            Read More
          </Link>
        </div>

        <div className="HomePage_Card sm:w-80 w-9/12 h-96 bg-white flex flex-col items-center justify-center mt-20 p-12 gap-2  rounded-xl hover:shadow-2xl ">
          <img src={service5} alt="" />
          <h3 className="text-2xl font-bold text-slate-700 hover:text-lime-600 duration-700">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Neurology Sargery</Link>
          </h3>
          <p className="text-center text-slate-700">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo.
          </p>
          <Link
            to="/services" onClick={() => window.scrollTo(0, 0)}
            className="font-semibold text-slate-700 hover:text-lime-600 duration-700"
          >
            Read More
          </Link>
        </div>

        <div className="HomePage_Card sm:w-80 w-9/12 h-96 bg-white flex flex-col items-center justify-center mt-20 p-12 gap-2  rounded-xl hover:shadow-2xl ">
          <img src={service6} alt="" />
          <h3 className="text-2xl font-bold text-slate-700 hover:text-lime-600 duration-700">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Allergic Issue</Link>
          </h3>
          <p className="text-center text-slate-700">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo.
          </p>
          <Link
            to="/services" onClick={() => window.scrollTo(0, 0)}
            className="font-semibold text-slate-700 hover:text-lime-600 duration-700"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}







import member1 from "../assets/images/member1.png"
import member2 from "../assets/images/member2.png"
import member3 from "../assets/images/member3.png"
import member4 from "../assets/images/member4.png"
import member5 from "../assets/images/member5.png"
import member6 from "../assets/images/member6.png"






export const HomePage_Profiles = () => {
  return (
    <div className="w-full h-full mt-40">
      <div className="flex items-center lg:justify-between justify-center w-full h-full xl:px-32 lg:px-20 px-10 flex-wrap md:flex-nowrap">
        <div
          className="profile_title flex flex-col lg:items-start  items-center lg:justify-start justify-center lg:bg-left bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Imgbackground})` }}
        >
          <h4 className="text-slate-700 font-bold">Our Team</h4>
          <h2 className="xl:text-[50px] md:text-[40px] text-[30px] font-semibold text-slate-800 w-[70%] lg:text-start text-center">
            A Professional & Care Provider
          </h2>
          <img src={Line} className="my-3" alt="" />
        </div>
        <div className="lg:flex hidden">
          <Link to="/appointment" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="destructive" size="lg">
              <span className="bg-white text-gray-800 rounded-full px-3 pb-0 lg:pb-2 text-4xl">
                +
              </span>
              <h2>Make Appointment</h2>
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap xl:gap-30 lg:gap-20 gap-10 items-center justify-center xl:px-40 lg:px-30 px-15 mt-24 mb-24">
        <div className="relative">
          <img src={member1} alt="" className="relative" />
          <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
            <span className="bg-green-600 text-white rounded-full text-4xl px-4 pt-1 pb-2 lg:pb-3 absolute bottom-16 right-5 hover:bg-rose-600 duration-700">
              +
            </span>
          </Link>
          <h3 className="text-2xl font-semibold text-slate-800 text-center">
            Rosalina D. Williamson
          </h3>
          <h4 className="text-center text-rose-600 font-semibold text-base uppercase">
            Founder
          </h4>
        </div>
        <div className="relative">
          <img src={member2} alt="" />
          <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
            <span className="bg-green-600 text-white rounded-full text-4xl px-4 pt-1 pb-2 lg:pb-3 absolute bottom-16 right-5 hover:bg-rose-600 duration-700">
              +
            </span>
          </Link>
          <h3 className="text-2xl font-semibold text-slate-800 text-center">
            Diconda PIran Will
          </h3>
          <h4 className="text-center text-rose-600 font-semibold text-base uppercase">
            dentist
          </h4>
        </div>
        <div className="relative">
          <img src={member3} alt="" />
          <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
            <span className="bg-green-600 text-white rounded-full text-4xl px-4 pt-1 pb-2 lg:pb-3 absolute bottom-16 right-5 hover:bg-rose-600 duration-700">
              +
            </span>
          </Link>
          <h3 className="text-2xl font-semibold text-slate-800 text-center">
            Hulk M. Kenbon
          </h3>
          <h4 className="text-center text-rose-600 font-semibold text-base uppercase">
            neurologist
          </h4>
        </div>
        <div className="relative">
          <img src={member4} alt="" />
          <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
            <span className="bg-green-600 text-white rounded-full text-4xl px-4 pt-1 pb-2 lg:pb-3 absolute bottom-16 right-5 hover:bg-rose-600 duration-700">
              +
            </span>
          </Link>
          <h3 className="text-2xl font-semibold text-slate-800 text-center">
            Haliam Z. Dicolaz
          </h3>
          <h4 className="text-center text-rose-600 font-semibold text-base uppercase">
            Consultant
          </h4>
        </div>
        <div className="relative">
          <img src={member5} alt="" />
          <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
            <span className="bg-green-600 text-white rounded-full text-4xl px-4 pt-1 pb-2 lg:pb-3 absolute bottom-16 right-5 hover:bg-rose-600 duration-700">
              +
            </span>
          </Link>
          <h3 className="text-2xl font-semibold text-slate-800 text-center">
            Nicolas D. Case
          </h3>
          <h4 className="text-center text-rose-600 font-semibold text-base uppercase">
            dentist
          </h4>
        </div>
        <div className="relative">
          <img src={member6} alt="" />
          <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
            <span className="bg-yellow-400 text-white rounded-full text-4xl px-4 pt-1 pb-2 lg:pb-3 absolute bottom-16 right-5 hover:bg-rose-600 duration-700">
              +
            </span>
          </Link>
          <h3 className="text-2xl font-semibold text-slate-800 text-center">
            Phumdon H. Norman
          </h3>
          <h4 className="text-center text-rose-600 font-semibold text-base uppercase">
            neurologist
          </h4>
        </div>
      </div>
    </div>
  );
}



import { UserRound, ThumbsUp } from "lucide-react"
import background from "../assets/images/background.png"


export const Accessible = () => {
  return (
    <div
      className="bg-slate-900 text-white w-full h-full py-20  xl:px-12 px-5 mb-12 flex justify-between items-center lg:flex-nowrap flex-wrap xl:gap-15 gap-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col gap-5 lg:w-[80%] md:w-[50%] w-full">
        <h4 className="text-gray-600 text-xl font-bold">
          We are available 24/7
        </h4>
        <h2 className="xl:text-6xl sm:text-5xl text-3xl">
          We Always Ready <br /> For A Challenge.
        </h2>
        <Link to="/appointment" onClick={() => window.scrollTo(0, 0)}>
          <Button
            className="sm:w-72 w-auto border-none"
            variant="destructive"
            size="lg"
          >
            <span className="bg-white text-gray-800 rounded-full px-3 pb-0 lg:pb-2 text-4xl">
              +
            </span>
            <h2>Make Appointment</h2>
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex gap-5 sm:flex-nowrap flex-wrap">
          <h3 className="lg:text-7xl text-6xl text-green-600">1M+</h3>
          <div className="xl:w-1/2 w-auto">
            <h3 className="flex gap-2 items-center text-xl font-semibold">
              <UserRound />
              Satisfied Patients
            </h3>
            <p className="text-gray-600 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sed,
              officia aut similique saepe laboriosam dolore minima amet alias?
            </p>
          </div>
        </div>

        <div className="flex gap-5 sm:flex-nowrap flex-wrap">
          <h3 className="lg:text-7xl text-6xl text-green-600">100+</h3>
          <div className="xl:w-1/2 w-auto flex flex-col gap-2">
            <h3 className="flex gap-2 items-center text-xl font-semibold">
              <ThumbsUp />
              Wolrd Awards
            </h3>
            <p className="text-gray-600 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus
              facilis voluptatibus totam harum voluptates ipsa dicta quam autem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}




export const Consultant = () => {
  return (
    <div className="bg-slate-900 w-full h-full mb-20 flex flex-col items-center justify-center py-20 gap-8">
      <h4 className="text-gray-600 font-bold">
        Stay healthy & strong to enjoy life
      </h4>
      <p className="text-white xl:text-6xl lg:text-5xl text-4xl w-4/6 text-center">
        Trust Us To Be There To Help All & Make Things Well Again.
      </p>
      <Link to="/appointment" onClick={() => window.scrollTo(0, 0)}>
        <Button variant="outline" size="lg">
          <span className="bg-white text-gray-800 rounded-full px-3 pb-0 lg:pb-2 text-4xl">
            +
          </span>
          <h2>Get a Consultant</h2>
        </Button>
      </Link>
    </div>
  );
}
  



export const HomePage_Blog = () => {
  return (
    <div className="HomePage_Blog flex items-center lg:justify-between justify-center px-20 mb-20">
      <div
        className="lg:bg-left bg-center flex flex-col lg:items-start items-center justify-center"
        style={{
          backgroundImage: `url(${Imgbackground})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h4 className="text-xl text-slate-500 font-bold">News</h4>
        <h2 className="lg:text-start text-center font-semibold text-gray-700 xl:text-[55px] lg:text-[45px] md:text-[40px] text-[35px] mb-2">
          Get Every Single <br /> Updates Here.
        </h2>
        <img src={Line} alt="" className="mt-5" />
      </div>
      <Link to="/appointment" onClick={() => window.scrollTo(0, 0)}>
        <Button variant="destructive" size="lg" className="lg:flex hidden">
          <span className="bg-white text-gray-800 rounded-full px-3 pb-0 lg:pb-2 text-4xl">
            +
          </span>
          <h2>Make Appointment</h2>
        </Button>
      </Link>
    </div>
  );
}


import News1 from "../assets/images/News1.jpg"
import News2 from "../assets/images/News2.jpg"
import { Calendar,MessageCircle } from "lucide-react"



export const HomePage_News = () => {
  return(
    <div className="HomePage_News flex items-center justify-center gap-10 mb-20 flex-wrap">
      <div className="NewsCard1 xl:w-1/4 md:w-[40%] w-9/12">
        <img src={News1} alt="" className="w-full h-full" />
        <Link to="/blog" className="flex gap-5 text-rose-600 font-semibold py-1 uppercase"><h4>Medical,</h4><h4>Medicine</h4></Link>
        <Link to="/blog"><h2 className="text-2xl font-bold text-slate-800 hover:text-rose-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2></Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident itaque perspiciatis magni hic cumque  illum quibusdam blanditiis nesciunt.</p>
      </div>

      <div className="NewsCard2 xl:w-1/4 md:w-[40%] w-9/12">
      <img src={News2} alt="" className="w-full h-full" />
      <Link to="/blog" className="flex gap-5 text-rose-600 font-semibold py-1 uppercase"><h4>Medical,</h4><h4>Medicine</h4></Link>
        <Link to="/blog"><h2 className="text-2xl font-bold text-slate-800 hover:text-rose-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2></Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tenetur totam ad recusandae ipsa amet, officiis voluptatum. Fuga, a neque?</p>
      </div>

      <div className="NewsCard3 xl:w-1/4 w-9/12 border-2 flex flex-col gap-4 border-violet-200">
        <div className="flex flex-col gap-2 px-8 pt-7">
          <Link to="/blog"><p className="text-2xl font-semibold text-slate-800 hover:text-rose-600 hover:cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing.</p></Link>
          <div className="flex gap-4 border-b-2 border-violet-200 pb-5 sm:flex-nowrap flex-wrap">
            <h3 className="flex font-semibold gap-2"><Calendar />23rd Jan 2022</h3>
            <Link to="/blog"><h3 className="flex font-semibold"><MessageCircle />33 Comments</h3></Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-8">
          <Link to="/blog"><p className="text-2xl font-semibold text-slate-800 hover:text-rose-600 hover:cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing.</p></Link>
          <div className="flex gap-4 border-b-2 border-violet-200 pb-5 sm:flex-nowrap flex-wrap">
          <h3 className="flex font-semibold gap-2"><Calendar />23rd Jan 2022</h3>
          <Link to="/blog"><h3 className="flex font-semibold"><MessageCircle />33 Comments</h3></Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-8 pb-7">
          <Link to="/blog"><p className="text-2xl font-semibold text-slate-800 hover:text-rose-600 hover:cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing.</p></Link>
          <div className="flex gap-4 sm:flex-nowrap flex-wrap">
          <h3 className="flex font-semibold gap-2"><Calendar />23rd Jan 2022</h3>
          <Link to="/blog"><h3 className="flex font-semibold"><MessageCircle />33 Comments</h3></Link>
          </div>
        </div>
      </div>
    </div>
  )
}


import { Phone } from "lucide-react";


export const Last_Button = () => {
  return(
    <div className="mb-48">
    <div className="md:absolute flex items-center justify-center md:right-[15%]">
      <Link to="/contact" onClick={() => window.scrollTo(0, 0)}> 
      <Button variant="outline" size="lg" className="py-7">
        <span className="bg-white text-gray-800 rounded-full px-3 py-3 text-4xl"><Phone fill="black"/></span>
        <h2>Make Call</h2>
      </Button>
      </Link>
    </div>
    </div>
  )
}







export const Home = () => {
  return(
    <>
    <Showcase/>
    <Homepage_Section1/>
    <HomePage_Cards/>
    <HomePage_Profiles/>
    <Accessible/>
    <Consultant/>
    < HomePage_Blog />
    <HomePage_News/>
    <Last_Button/>
    </>
  )
}














