import {TextComponent} from "@/ui/hover-card"
import { Link } from 'react-router-dom';

import one from "/src/img/1.png";
import two from "/src/img/2.png";
import three from "/src/img/3.png";
import four from "/src/img/4.png";
import five from "/src/img/5.png";
import six from "/src/img/6.png";
// import contact from "/src/img/contact.png";
import doc1 from "/src/img/doc1.png";
import doc2 from "/src/img/doc2.jpg";
import showcase1 from "/src/img/showcase1.png";
import showcase2 from "/src/img/showcase2.png";

import { useState } from "react"
import { Button } from "@/ui/btn"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  CustomInput,
} from "@/ui/select"
import { Phone } from "lucide-react"; 



function Surgery() {
  const [selectedTheme, setSelectedTheme] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    console.log("Selected Theme:", selectedTheme)
    alert(`Selected Theme: ${selectedTheme}`)
  }

    return (
<div className="w-[100%]">

<div className="w-[100%] bg-cover bg-no-repeat md:flex justify-between xl:px-32 lg:px-20 sm:px-2 items-center py-[200px] bg-center h-full mb-[30px]"
  style={{ backgroundImage: `url(${showcase1})` }}

  >
<div className="flex flex-col gap-10 sm:ml-10 md:ml-0 ml-10 ">
<h3 className="font-bold text-xl opacity-50">We are here for your care </h3>
  <h1 className="text-6xl font-bold text-[#223545]">Our Services</h1>
  </div>
<div className="flex gap-1 font-semibold sm:ml-10 md:ml-0 ml-10 sm:mt-10 md:mt-0 mt-10 ">
  <Link to="/" onClick={() => window.scrollTo(0, 0)} className="opacity-50 text-gray-900 no-underline">Home</Link>
<p>|</p>
 <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-red-600 no-underline"> Services </Link>
  </div>
</div>



<div className="flex flex-col sm:flex-row gap-7 w-11/12 mx-auto justify-center mb-[100px] ">
    
<div className="relative flex flex-col w-[100%] sm:w-1/2 lg:w-2./5 text-end justify-center">
  
<div className="flex justify-end">
<img className="w-32 sm:w-40 lg:w-48" src="../src/assets/img/back_icon.png" alt="back" />
</div>

<div className="absolute inset-0">
<p className="text-lg sm:text-xl mt-16 sm:mt-18 font-bold text-[#e12454] ">Health care facility</p>
<TextComponent type="heading">
Would you rather stay <br></br> at home than go into a health care facility?
</TextComponent>
</div>
</div>

<div className="w-[100%] sm:w-1/2 lg:w-2/5 mt-[80px] justify-center sm:mt-[70px] md:mt-[80px]">
<TextComponent >
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.  
</TextComponent>
</div>
</div>

<div className="flex flex-row flex-wrap mx-auto w-[88%] mb-24">

<div className="flex flex-col mx-auto text-center w-[390px] h-[450px] justify-center cursor-pointer transition-shadow duration-500 hover:shadow-2xl">
<img className="w-22 sm:w-22 lg:w-28 mx-auto" src={one} alt="1" />
<p className="text-2xl font-bold mt-8 cursor-pointer text-[#223545] hover:text-[#8fb569] transition-colors duration-500">Body Surgery</p>
<p className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-500 my-4">Ut enim ad minim veniam, quis nostrud <br></br>exercitation ullamco laboris nisi ut <br></br>aliquip ex ea commodo.</p>
<Link to="/services" onClick={() => window.scrollTo(0, 0)}> <p className="text-gray-500 mb-10 hover:text-[#8fb569] font-bold cursor-pointer transition-colors duration-500">Read More</p> </Link>
</div> 

<div className="flex flex-col mx-auto text-center w-[390px] h-[450px] justify-center cursor-pointer transition-shadow duration-500 hover:shadow-2xl">
<img className="w-22 sm:w-22 lg:w-28 mx-auto" src={two} alt="1" />
<p className="text-2xl font-bold mt-8 cursor-pointer text-[#223545] hover:text-[#8fb569] transition-colors duration-500">Dental Care</p>
<p className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-500 my-4">Ut enim ad minim veniam, quis nostrud <br></br>exercitation ullamco laboris nisi ut <br></br>aliquip ex ea commodo.</p>
<Link to="/services" onClick={() => window.scrollTo(0, 0)}> <p className="text-gray-500 mb-10 hover:text-[#8fb569] font-bold cursor-pointer transition-colors duration-500">Read More</p> </Link>
</div> 

<div className="flex flex-col mx-auto text-center w-[390px] h-[450px] justify-center cursor-pointer transition-shadow duration-500 hover:shadow-2xl">
<img className="w-22 sm:w-22 lg:w-28 mx-auto" src={three} alt="1" />
<p className="text-2xl font-bold mt-8 cursor-pointer text-[#223545] hover:text-[#8fb569] transition-colors duration-500">Service-Content</p>
<p className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-500 my-4">Ut enim ad minim veniam, quis nostrud <br></br>exercitation ullamco laboris nisi ut <br></br>aliquip ex ea commodo.</p>
<Link to="/services" onClick={() => window.scrollTo(0, 0)}> <p className="text-gray-500 mb-10 hover:text-[#8fb569] font-bold cursor-pointer transition-colors duration-500">Read More</p> </Link>
</div> 


<div className="flex flex-col mx-auto text-center w-[390px] h-[450px] justify-center cursor-pointer transition-shadow duration-500 hover:shadow-2xl">
<img className="w-22 sm:w-22 lg:w-28 mx-auto" src={four} alt="1" />
<p className="text-2xl font-bold mt-8 cursor-pointer text-[#223545] hover:text-[#8fb569] transition-colors duration-500">Blood Cancer</p>
<p className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-500 my-4">Ut enim ad minim veniam, quis nostrud <br></br>exercitation ullamco laboris nisi ut <br></br>aliquip ex ea commodo.</p>
<Link to="/services" onClick={() => window.scrollTo(0, 0)}> <p className="text-gray-500 mb-10 hover:text-[#8fb569] font-bold cursor-pointer transition-colors duration-500">Read More</p> </Link>
</div> 

<div className="flex flex-col mx-auto text-center w-[390px] h-[450px] justify-center cursor-pointer transition-shadow duration-500 hover:shadow-2xl">
<img className="w-22 sm:w-22 lg:w-28 mx-auto" src={five} alt="1" />
<p className="text-2xl font-bold mt-8 cursor-pointer text-[#223545] hover:text-[#8fb569] transition-colors duration-500">Neurology Surgery</p>
<p className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-500 my-4">Ut enim ad minim veniam, quis nostrud <br></br>exercitation ullamco laboris nisi ut <br></br>aliquip ex ea commodo.</p>
<Link to="/services" onClick={() => window.scrollTo(0, 0)}> <p className="text-gray-500 mb-10 hover:text-[#8fb569] font-bold cursor-pointer transition-colors duration-500">Read More</p> </Link>
</div> 

<div className="flex flex-col mx-auto text-center w-[390px] h-[450px] justify-center  cursor-pointer transition-shadow duration-500 hover:shadow-2xl">
<img className="w-22 sm:w-22 lg:w-28 mx-auto" src={six} alt="1" />
<p className="text-2xl font-bold mt-8 cursor-pointer text-[#223545] hover:text-[#8fb569] transition-colors duration-500">Allergic Issue</p>
<p className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-500 my-4">Ut enim ad minim veniam, quis nostrud <br></br>exercitation ullamco laboris nisi ut <br></br>aliquip ex ea commodo.</p>
<Link to="/services" onClick={() => window.scrollTo(0, 0)}> <p className="text-gray-500 mb-10 hover:text-[#8fb569] font-bold cursor-pointer transition-colors duration-500">Read More</p> </Link>
</div> 
</div>



<div className="relative inset-0 w-[100%] bg-cover bg-no-repeat md:flex justify-between xl:px-32 lg:px-20 sm:px-2 items-center py-[120px] bg-center h-full mb-[30px] "
  style={{ backgroundImage: `url(${showcase2})` }}>
  <div className="absolute inset-0 bg-[#344755] opacity-90"></div>
{/* <div className="relative inset-0 bg-[#344755] opacity-90"> */}

{/* Showcase */}
<div className="relative inset-0 flex flex-col lg:flex-row justify-center text-start text-white md:justify-evenly sm:justify-center mx-auto gap-[150px] ">

<div className="flex justify-center flex-col " >
<p className="text-lg font-semibold text-[#b4c7d6]">MAKE A CALL</p>
<p className="text-4xl sm:text-5xl lg:text-7xl font-semibold mt-2 ">Quote Calculator</p>

<p className="text-base sm:text-2xl lg:text-3xl mt-4 text-[#b4c7d6] mb-10">
If you require services on a public holiday, <br />
overnight services or live-in services, please <br />
call (+00)888.666.88 so we can discuss <br />
prices with you.</p> 

<Link  to="/appointment" onClick={() => window.scrollTo(0, 0)}><Button variant="default" size="custom">MAKE APPOINTMENT</Button> </Link>
</div>

<div className="flex bg-white text-black w-[90%] max-w-[450px] h-[500px] rounded mx-auto my-auto sm:w-[90%] sm:h-[480px] sm:flex sm:justify-center md:w-[450px] md:h-[575px] md:flex md:justify-center lg:w-[450px] lg:h-[575px] lg:flex lg:justify-center">
  <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5 justify-end mx-auto w-full sm:w-[auto]">
    {/* Form content goes here */}



<Select onValueChange={(value) => setSelectedTheme(value)}>
<SelectTrigger className="">
<SelectValue placeholder="When would you like support?" /></SelectTrigger>
<SelectContent>
<SelectItem value="When would you like us arrive?" type="date" >When would you like us arrive?</SelectItem>
</SelectContent></Select>

<Select onValueChange={(value) => setSelectedTheme(value)}>
<SelectTrigger className="">
<SelectValue placeholder="When would you like us arrive?" /></SelectTrigger>
<SelectContent>
<SelectItem value="When would you like us arrive?" type="date" >When would you like us arrive?</SelectItem>
</SelectContent></Select>

<Select onValueChange={(value) => setSelectedTheme(value)}>
<SelectTrigger className="">
<SelectValue placeholder="How long should we stay?" /></SelectTrigger>
<SelectContent>
<SelectItem value="When would you like us arrive?" type="date" >When would you like us arrive?</SelectItem>
</SelectContent></Select>

<Select onValueChange={(value) => setSelectedTheme(value)}>
<SelectTrigger className="">
<SelectValue placeholder="Where are you located?" /></SelectTrigger>
<SelectContent>
<SelectItem value="When would you like us arrive?" type="date" >When would you like us arrive?</SelectItem>
</SelectContent></Select>

<CustomInput type="tel" placeholder="Your Phone number" className="mb-[45px]" icon={Phone}/>

<Button variant="default" size="submitCustom" type="submit" showPlus={false}>SUBMIT QUERY</Button>
</form>

</div>

</div>
</div>


<div className="flex flex-col lg:flex-row justify-between gap-10 bg-white w-[80%] mx-auto shadow-lg mt-20"> 
<div className="flex justify-center">
<img src={doc1} className="w-[600px]  sm:w-[600px] md:w-[600px] lg:w-[600px] sm:h-[500px] md:h-[500px] lg:h-[500px]" />
</div>

<div className="w-[100%] px-4 sm:px-6 md:px-8 lg:w-[530px] my-auto flex flex-col  lg:mr-10">
<TextComponent type="heading">For Employers</TextComponent>

<TextComponent className="my-7">Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
occaecat cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum.</TextComponent>

<Link  to="/contact" onClick={() => window.scrollTo(0, 0)}> <Button variant="default" size="contactCustom" className="mb-10">CONTACT US</Button> </Link>
</div>
  
</div>


<div className="flex flex-col lg:flex-row justify-between bg-white w-[80%] mx-auto shadow-lg mb-[120px]">
<div className="w-[100%] px-4 sm:px-6 md:px-8 lg:w-[530px] my-auto flex flex-col  lg:ml-10 ">
<TextComponent type="heading" className="mt-10 sm:mt-10 md:mt-10">For Employers</TextComponent>
<TextComponent className="my-7">Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
occaecat cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum.</TextComponent>
<Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
  <Button variant="default" size="colorpink" className="mb-10">APPLY TODAY</Button>
</Link>
</div>

<div className="flex justify-center ">
<img src={doc2} className="" />
</div>
</div>



</div>






    )
  }
  
  export default Surgery;
  