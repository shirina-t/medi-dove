"use client"
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/ui/chart";

import {TextComponent} from "@/ui/hover-card"
import { Link } from 'react-router-dom';
import { Check } from "lucide-react"
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
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const config = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
};

function Details() {
  const [selectedTheme, setSelectedTheme] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    console.log("Selected Theme:", selectedTheme)
    alert(`Selected Theme: ${selectedTheme}`)
  }

    return (
<div className="w-[100%]">

<div className="w-[100%] bg-cover bg-no-repeat md:flex justify-between xl:px-32 lg:px-20 sm:px-2 items-center py-[200px] bg-center h-full mb-[30px]"
style={{ backgroundImage: "url('/img/showcase1.png')" }}>
<div className="flex flex-col gap-10">
<h3 className="font-bold text-xl opacity-50">We are here for your care </h3>
<h1 className="text-5xl font-bold">Our Services</h1>
</div>

<div className="flex gap-1 font-semibold">
<Link to="/" className="opacity-50 text-gray-900 no-underline">Home</Link>
<p>|</p>
<Link to="/services" className="text-red-600 no-underline">Details</Link>
</div>
</div>


<div className="flex flex-col sm:flex-row w-[100%] sm:w-[100%]  md:w-[100%] lg:w-[88%] sm:gap-5 md:gap-5 h-[100%] justify-center mx-auto px-10">
  
  {/* Left Section (Image + Heading + Lines) */}
<div className="relative flex flex-col w-[100%] sm:w-[100%]  md:w-[100%] lg:w-[59%]  h-[100%] mx-auto text-start">
    
<div className=" mt-[100px] mb-[50px]">
<img src="../src/assets/img/details.png" alt="Example" className="cursor-pointer object-cover w-full h-full transition-transform duration-300 hover:scale-105" /></div>


<img className="w-28 sm:w-36 lg:w-44 mx-auto ml-[10px] " src="/img/back_icon.png" alt="Back Icon" />
<div className="relative inset-0 flex flex-col justify-center items-start text-white mt-[-150px]">
<p className="text-lg sm:text-xl lg:text-xl font-bold text-[#8fb569]">DENTAL CARE</p>

<TextComponent type="heading" >We are here to help <br /> when you need us.</TextComponent>

{/* Decorative Lines */}
<div className="flex gap-4 mt-6">
<span className="w-5 h-[3px] bg-[#e12454]"></span>
<span className="w-24 h-[3px] bg-[#e12454]"></span>
<span className="w-5 h-[3px] bg-[#e12454]"></span>
</div>

<div className="w-full justify-center mt-[40px] sm:mt-[60px] lg:mt-[70px] flex gap-6 sm:gap-8 lg:gap-10 flex-col">
<TextComponent>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque 
ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
labore et dolore magnam aliquam quaerat voluptatem.
</TextComponent>
<TextComponent>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error 
sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
</TextComponent>
</div>
</div>

   
<div className="flex flex-col mt-10 justify-between text-gray-500 md:mb-[30px] md:flex-row sm:flex-col gap-10 cursor-pointer">
  <div className="flex flex-row gap-5 text-sm">
  <div className="">
  <img className="w-8 sm:w-8 lg:w-12 mx-auto ml-[10px] " src="../img/teeth.png" alt="teeth" /></div>
  <div className="flex flex-col gap-3 ">
    <p className="text-lg font-semibold text-black  hover:underline">PERSONAL CARE</p>
    <p className="flex flex-row gap-1 hover:underline"><Check className="text-green-600"/>Cillum dolore eu fugiat nulla.</p>
    <p className="flex flex-row gap-1 hover:underline"><Check className="text-green-600"/>Lorem ipsum dolor sit amet.</p>
    <p className="flex flex-row gap-1 hover:underline"><Check className="text-green-600"/>Consectetur adipisicing elit,</p>
    <p className="flex flex-row gap-1 hover:underline"><Check className="text-green-600"/>Sed do eiusmod tempor inci.</p>
  </div>
  </div>

  <div className="flex flex-row gap-5 text-sm">
  <div className="">
  <img className="w-8 sm:w-8 lg:w-12 mx-auto ml-[10px]" src="../img/brain.png" alt="Back Icon" /></div>
  <div className="flex flex-col gap-3">
    <p className="text-lg font-semibold text-black hover:underline">LIFESTYLE SUPPORT</p>
    <p className="flex flex-row gap-1 hover:underline"><Check className="text-green-600"/>Didunt ut labore et dolore magna.</p>
    <p className="flex flex-row gap-1 hover:underline"><Check className="text-green-600"/>Aliqua. Ut enim ad minim veniam.</p>
    <p className="flex flex-row gap-1 hover:underline"><Check className="text-green-600"/>Quis nostrud exercitation ullamco.</p>
    <p className="flex flex-row gap-1 hover:underline"><Check className="text-green-600"/>Laboris nisi ut aliquip ex ea.</p>
  </div>
  </div>
</div>
<ChartContainer config={config} className="h-[400px] w-full">
<BarChart data={chartData}>
<CartesianGrid vertical={false} />
<XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0, 3)}/>
<Tooltip content={<ChartTooltipContent />} />
<Bar dataKey="desktop" fill="#b6dfc4" radius={4} /> 
<Bar dataKey="mobile" fill="#ffdd9e" radius={4} />
</BarChart>
</ChartContainer>
<img className="object-cover w-full h-full mb-10 mt-10 transition-transform duration-300 hover:scale-105 cursor-pointer" src="../img/three1.png" alt="three"  />

<div><div className="  flex flex-col justify-center items-start text-white mt-[50px] mb-10 ">
<p className="text-lg sm:text-xl lg:text-xl font-bold text-[#8fb569]">DOWNLOAD</p>

<TextComponent type="heading">FREE DOWNLOAD<br />RESOURCES</TextComponent>

{/* Decorative Lines */}
<div className="flex gap-4 mt-6">
<span className="w-5 h-[3px] bg-[#e12454]"></span>
<span className="w-24 h-[3px] bg-[#e12454]"></span>
<span className="w-5 h-[3px] bg-[#e12454]"></span>
</div></div>
</div>

<div className="flex flex-col gap-8 mb-20">
  <div className="border-2 border-[#e0e9ff] h-20 flex flex-row justify-center items-center gap-2 hover:opacity-105 hover:bg-gray-100">
    <img className="w-6 sm:w-6 lg:w-10 mx-auto ml-[50px]" src="../img/pdf.png" alt="pdf" />
    <a href="/public/img/ddd.pdf" download className="hover:text-[#e12454] cursor-pointer font-semibold mr-auto ">
      The Balanced Care Method Flyer.pdf</a>
    <p className="mr-10">58KB</p>
  </div>

  <div className="border-2 border-[#e0e9ff] h-20 flex flex-row justify-center items-center gap-2 hover:opacity-105 hover:bg-gray-100">
    <img className="w-6 sm:w-6 lg:w-10 mx-auto ml-[50px]" src="../img/doc.png" alt="pdf" />
    <a href="/public/img/ddd.pdf" download className="hover:text-[#e12454] cursor-pointer font-semibold mr-auto ">
      Information sheet 2 2016-17.doc </a>
    <p className="mr-10">112KB</p>
  </div>

  <div className="border-2 border-[#e0e9ff] h-20 flex flex-row justify-center items-center gap-2 hover:opacity-105 hover:bg-gray-100">
    <img className="w-6 sm:w-6 lg:w-10 mx-auto ml-[50px]" src="../img/zip.png" alt="pdf" />
    <a href="/public/img/ddd.pdf" download className="hover:text-[#e12454] cursor-pointer font-semibold mr-auto ">
      What_is_home_care_manual.zip</a>
    <p className="mr-10">87KB</p>
  </div>

</div>

<div className="bg-[#e12454] rounded-full w-[85px] h-[85px] flex flex-col justify-center items-center text-center mx-auto" style={{ boxShadow: '0 4px 8px rgba(255, 20, 147, 0.5), 0 0 15px rgba(30, 144, 255, 0.5)' }}>
  <img className="w-6 sm:w-6 lg:w-8 mx-auto ml-[50px] mr-12" src="../img/quato.png" alt="1uat" />
</div>


<p className="w-full text-3xl text-center text-[#647489] mt-8 tracking-wide sm:mx-auto md:mx-auto lg:mx-auto mx-auto">Excepteur sint occaecat cupidatat non proident,<br></br> sunt in culpa qui officia deserunt mollit anim id est<br></br> laborum. Sed ut perspiciatis unde omnis iste<br></br> natus error sit voluptatem.</p>

<p className="bg-[#e12454] w-[2px] h-[80px] mx-auto my-5"></p>
<p className="mx-auto text-2xl font-semibold sm:mx-auto md:mx-auto lg:mx-auto">ROSALINA D. WILLIAMSON</p>
<p className="mx-auto text-[#8fb569] my-3 sm:mx-auto md:mx-auto lg:mx-auto">FOUNDER. UETHEMES</p>
<img className="w-22 sm:w-22 lg:w-26 mx-auto mb-[100px] cursor-pointer" src="../img/last.png" alt="last" />
</div>

{/* Right Section (More Services) */}
<div className="flex flex-col  w-[100%] sm:w-[100%]  md:w-[100%] lg:w-[450px]  h-full justify-center mx-auto md:mt-[100px] mb-[50px]">

<div className="flex flex-col h-[660px] gap-10 justify-center w-[100%] px-10 shadow-lg border-t-[6px] border-[#8fb569]">
<p className="text-2xl sm:text-4xl lg:text-5xl font-bold  text-[#223545]">More Services</p>
<ul className="flex flex-col gap-6 cursor-pointer font-semibold">

<Link to="/" className="flex flex-row items-center gap-3 hover:text-[#e12454]">
  <img src="/img/service1.png" alt="Body Surgery" />BODY SURGERY</Link>
<span className="w-100 h-[2px] bg-[#f2edff]"></span>


<Link to="/" className="flex flex-row items-center gap-3 hover:text-[#e12454]">
<img src="/img/service2.png" alt="Dental Care" /> DENTAL CARE</Link>
<span className="w-100 h-[2px] bg-[#f2edff]"></span>

<Link to="/" className="flex flex-row items-center gap-3 hover:text-[#e12454]">
<img src="/img/service3.png" alt="Eye Care" /> EYE CARE</Link>
<span className="w-100 h-[2px] bg-[#f2edff]"></span>

<Link to="/" className="flex flex-row items-center gap-3 hover:text-[#e12454]">
<img src="/img/service4.png" alt="Blood Cancer" /> BLOOD CANCER</Link>
<span className="w-100 h-[2px] bg-[#f2edff]"></span>

<Link to="/" className="flex flex-row items-center gap-3 hover:text-[#e12454]">
  <img src="/img/service5.png" alt="Neurology Surgery" /> NEUROLOGY SURGERY</Link>
<span className="w-100 h-[2px] bg-[#f2edff]"></span>

<Link to="/" className="flex flex-row items-center gap-3 ml-1 hover:text-[#e12454]">
<img src="/img/service6.png" alt="Allergic Issue" /> ALLERGIC ISSUE</Link>
</ul>

</div>

<div className="mt-10 flex-col shadow-lg border-t-[6px] border-[#8fb569] flex bg-white text-black w-[100%] max-w-[450px] h-[450px] rounded mx-auto my-auto sm:w-[90%] sm:h-[450px] sm:flex sm:justify-center md:w-[450px] md:h-[450px] md:flex md:justify-center lg:w-[450px] lg:h-[480px] lg:flex lg:justify-center">

<form onSubmit={handleSubmit} className="mt-6 flex flex-col  m-auto w-full sm:w-[auto] sm:m-auto  md:m-auto lg:m-auto ">
<p className="text-2xl sm:text-3xl lg:text-4xl font-bold  text-[#223545] mb-10 mx-auto">Get Some Advice?</p>

<CustomInput type="name" placeholder="Enter your name" className="mb-[20px]" />
<CustomInput type="email" placeholder="Enter your email" className="mb-[20px]" />

<Select onValueChange={(value) => setSelectedTheme(value)}>

<SelectTrigger className="mb-[30px] ">
<SelectValue placeholder="Select type of care" /></SelectTrigger>

<SelectContent >
<SelectItem value="Emergency Care" type="date" >Emergency Care</SelectItem>
<SelectItem value="Emergency Care" type="date" >Outpatient Services</SelectItem>
<SelectItem value="Emergency Care" type="date" >Inpatient Care</SelectItem>
<SelectItem value="Emergency Care" type="date" >Surgical Services</SelectItem>
<SelectItem value="Emergency Care" type="date" >Pediatric Care</SelectItem>
<SelectItem value="Emergency Care" type="date" >Maternity Care</SelectItem>
<SelectItem value="Emergency Care" type="date" >Mental Health Services</SelectItem>

</SelectContent></Select>


<Link to="/" className="pointer-events-auto"> <Button variant="default" size="differentSize" className="ml-[45px]  mx-auto sm:mx-auto md:mx-auto lg:mx-auto item-center sm:item-center md:item-center lg:item-center flex justify-center">REQUEST FOR CALL</Button> </Link>
</form>

</div>

<div className="relative w-full h-auto mb-10 mt-10">
<img  className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105 cursor-pointer" src="../img/lesgo.jpg" alt="contact" />
 
<div className="absolute inset-0 flex justify-center py-[250px] pointer-events-none sm:py-[260px] md:py-[345px] lg:py-[343px]">
  <Link to="/" className="pointer-events-auto">
<Button variant="default" showPlus={false} size="contactCustom" >CONTACT US</Button>
</Link>
</div>

</div>


</div>




</div>
</div>


    )
  }
  
  export default Details;
  

