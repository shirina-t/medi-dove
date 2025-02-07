"use client";

import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/ui/btn";
import showcase1 from "/src/img/showcase1.png";

const Error = () => {
  return (
<div>
<div className="w-[100%] bg-cover bg-no-repeat md:flex justify-between xl:px-32 lg:px-20 sm:px-2 items-center py-[200px] bg-center h-full mb-[30px]"
style={{ backgroundImage: `url(${showcase1})` }}>
<div className="flex flex-col gap-10 sm:ml-10 md:ml-0 ml-10 ">
<h3 className="font-bold text-xl opacity-50">We are here for your care </h3>
<h1 className="text-6xl font-bold text-[#223545]">Page not Found</h1>
</div>

<div className="flex gap-1 font-semibold sm:ml-10 md:ml-0 ml-10 sm:mt-10 md:mt-0 mt-10 ">
<Link to="/" className="opacity-50 text-gray-900 no-underline">Home</Link>
<p>|</p>
<Link to="/services" className="text-red-600 no-underline">404 Not Found</Link>
</div>
</div>

<div className="flex flex-col max-auto justify-center text-center mb-[80px] mt-[80px]  ">
    <p className="text-[#223545] text-9xl font-bold">404</p>
<p className="text-[#223545] text-5xl font-semibold ">Page not found</p>
<p className="my-6 text-[#647489] text-sm">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
<Link to="/" onClick={() => window.scrollTo(0, 0)} className="pointer-events-auto"> <Button variant="default" size="errorSize" >
    BACK TO HOME</Button> </Link>
</div>

</div>
  );
};

export default Error;
