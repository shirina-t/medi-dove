import React from 'react'
import { Link } from "react-router-dom";
import showcase1 from "/src/img/showcase1.png";
import showcase from "../assets/images/showcase.jpg";




export const Showcase = () => {
    return(
        <div>
<div className="w-[100%] bg-cover bg-no-repeat md:flex justify-between xl:px-32 lg:px-20 sm:px-2 items-center py-[200px] bg-center h-full mb-[30px]"
style={{ backgroundImage: `url(${showcase})` }}>
<div className="flex flex-col gap-10 ml-10">
<h3 className="font-bold text-xl opacity-50">We are here for your care </h3>
<h1 className="sm:text-6xl text-5xl font-bold text-[#223545]">Our Blog</h1>
</div>

<div className="flex gap-1 font-semibold sm:ml-10 md:ml-0 md:-mt-10 mt-10 mx-10">
<Link to="/" className="opacity-50 text-gray-900 no-underline">Home</Link>
<p>|</p>
<Link to="/" className="text-red-600 no-underline">Blog</Link>
</div>
</div>
</div>
    )
}

import { UserRound,MessageCircle,ArrowRight } from "lucide-react"
import { ChevronsLeft,ChevronsRight } from "lucide-react"
import b1 from "../assets/images/b1.jpg"
import b2 from "../assets/images/b2.jpg"
import b3 from "../assets/images/b3.jpg"
import b4 from "../assets/images/b4.jpg"
import b5 from "../assets/images/b5.jpg"
import b6 from "../assets/images/b6.jpg"




export const BlogPage_Cards = () => {



    const ScrollToTop = () => {
        window.scrollTo(0, 0);
      };

    return(
        <div className="flex flex-col">
        <div className="BlogPage_Cards flex items-center justify-center xl:gap-20 gap-10 flex-wrap mt-32 mb-10">
            <div className="BlogPage_Card xl:w-96 md:w-80 w-9/12 h-auto flex flex-col gap-2 bg-gray-100">
                <img src={b1} alt="" />
                <div className="flex gap-3 px-3">
                    <Link to="/">
                    <h3 className="flex gap-1 hover:text-rose-600 text-slate-600 duration-700 cursor-pointer font-semibold"><UserRound color="crimson"/>Diboli</h3></Link>
                    <Link to="/">
                    <h3 className="flex gap-1 hover:text-rose-600 text-slate-600 duration-700 cursor-pointer font-semibold"><MessageCircle color="crimson" />23 Comments</h3></Link>
                </div>
                <div className="px-4 pb-3 flex flex-col gap-2">
                <Link to="/">
                <h2 className="text-lg text-slate-800 font-bold hover:text-rose-600 duration-700">Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incididunt .</h2></Link>
                <p className="text-slate-600">There's a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the health topics that consistently affect a wide range of people. They also get kudos.</p>
                <div className="flex items-center hover:text-green-700 text-rose-600 font-semibold duration-700">
                <Link to="/" className="flex items-center">
                <h2>Read More</h2>
                <h2><ArrowRight size="18" /></h2>
                </Link>
                </div>
                </div>
            </div>
            <div className="BlogPage_Card xl:w-96 md:w-80 w-9/12 h-auto flex flex-col gap-2 bg-gray-100">
                <img src={b2} alt="" />
                <div className="flex gap-3 px-3">
                    <Link to="/">
                    <h3 className="flex gap-1 hover:text-rose-600 text-slate-600 duration-700 cursor-pointer font-semibold"><UserRound color="crimson"/>Diboli</h3></Link>
                    <Link to="/">
                    <h3 className="flex gap-1 hover:text-rose-600 text-slate-600 duration-700 cursor-pointer font-semibold"><MessageCircle color="crimson" />23 Comments</h3></Link>
                </div>
                <div className="px-4 pb-3 flex flex-col gap-2">
                <Link to="/">
                <h2 className="text-lg text-slate-800 font-bold hover:text-rose-600 duration-700">Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incididunt .</h2></Link>
                <p className="text-slate-600">There's a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the health topics that consistently affect a wide range of people. They also get kudos.</p>
                <div className="flex items-center hover:text-green-700 text-rose-600 font-semibold duration-700">
                <Link to="/" className="flex items-center">
                <h2>Read More</h2>
                <h2><ArrowRight size="18" /></h2>
                </Link>
                </div>
                </div>
            </div>
            <div className="BlogPage_Card xl:w-96 md:w-80 w-9/12 h-auto flex flex-col gap-2 bg-gray-100">
                <img src={b3} alt="" />
                <div className="flex gap-3 px-3">
                    <Link to="/">
                    <h3 className="flex gap-1 hover:text-rose-600 text-slate-600 duration-700 cursor-pointer font-semibold"><UserRound color="crimson"/>Diboli</h3></Link>
                    <Link to="/">
                    <h3 className="flex gap-1 hover:text-rose-600 text-slate-600 duration-700 cursor-pointer font-semibold"><MessageCircle color="crimson" />23 Comments</h3></Link>
                </div>
                <div className="px-4 pb-3 flex flex-col gap-2">
                <Link to="/">
                <h2 className="text-lg text-slate-800 font-bold hover:text-rose-600 duration-700">Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incididunt .</h2></Link>
                <p className="text-slate-600">There's a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the health topics that consistently affect a wide range of people. They also get kudos.</p>
                <div className="flex items-center hover:text-green-700 text-rose-600 font-semibold duration-700">
                <Link to="/" className="flex items-center">
                <h2>Read More</h2>
                <h2><ArrowRight size="18" /></h2>
                </Link>
                </div>
                </div>
            </div>
            <div className="BlogPage_Card xl:w-96 md:w-80 w-9/12 h-auto flex flex-col gap-2 bg-gray-100">
                <img src={b4} alt="" />
                <div className="flex gap-3 px-3">
                    <Link to="/">
                    <h3 className="flex gap-1 hover:text-rose-600 text-slate-600 duration-700 cursor-pointer font-semibold"><UserRound color="crimson"/>Diboli</h3></Link>
                    <Link to="/">
                    <h3 className="flex gap-1 hover:text-rose-600 text-slate-600 duration-700 cursor-pointer font-semibold"><MessageCircle color="crimson" />23 Comments</h3></Link>
                </div>
                <div className="px-4 pb-3 flex flex-col gap-2">
                <Link to="/">
                <h2 className="text-lg text-slate-800 font-bold hover:text-rose-600 duration-700">Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incididunt .</h2></Link>
                <p className="text-slate-600">There's a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the health topics that consistently affect a wide range of people. They also get kudos.</p>
                <div className="flex items-center hover:text-green-700 text-rose-600 font-semibold duration-700">
                <Link to="/" className="flex items-center">
                <h2>Read More</h2>
                <h2><ArrowRight size="18" /></h2>
                </Link>
                </div>
                </div>
            </div>
            <div className="BlogPage_Card xl:w-96 md:w-80 w-9/12 h-auto flex flex-col gap-2 bg-gray-100">
                <img src={b5} alt="" />
                <div className="flex gap-3 px-3">
                    <Link to="/">
                    <h3 className="flex gap-1 hover:text-rose-600 text-slate-600 duration-700 cursor-pointer font-semibold"><UserRound color="crimson"/>Diboli</h3></Link>
                    <Link to="/">
                    <h3 className="flex gap-1 hover:text-rose-600 text-slate-600 duration-700 cursor-pointer font-semibold"><MessageCircle color="crimson" />23 Comments</h3></Link>
                </div>
                <div className="px-4 pb-3 flex flex-col gap-2">
                <Link to="/">
                <h2 className="text-lg text-slate-800 font-bold hover:text-rose-600 duration-700">Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incididunt .</h2></Link>
                <p className="text-slate-600">There's a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the health topics that consistently affect a wide range of people. They also get kudos.</p>
                <div className="flex items-center hover:text-green-700 text-rose-600 font-semibold duration-700">
                <Link to="/" className="flex items-center">
                <h2>Read More</h2>
                <h2><ArrowRight size="18" /></h2>
                </Link>
                </div>
                </div>
            </div>
            <div className="BlogPage_Card xl:w-96 md:w-80 w-9/12 h-auto flex flex-col gap-2 bg-gray-100">
                <img src={b6} alt="" />
                <div className="flex gap-3 px-3">
                <Link to="/">
                    <h3 className="flex gap-1 hover:text-rose-600 text-slate-600 duration-700 cursor-pointer font-semibold"><UserRound color="crimson"/>Diboli</h3></Link>
                    <Link to="/">
                    <h3 className="flex gap-1 hover:text-rose-600 text-slate-600 duration-700 cursor-pointer font-semibold"><MessageCircle color="crimson" />23 Comments</h3></Link>
                </div>
                <div className="px-4 pb-3 flex flex-col gap-2">
                <Link to="/">
                <h2 className="text-lg text-slate-800 font-bold hover:text-rose-600 duration-700">Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incididunt .</h2></Link>
                <p className="text-slate-600">There's a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the health topics that consistently affect a wide range of people. They also get kudos.</p>
                <div className="flex items-center hover:text-green-700 text-rose-600 font-semibold duration-700">
                <Link to="/" className="flex items-center">
                <h2>Read More</h2>
                <h2><ArrowRight size="18" /></h2>
                </Link>
                </div>
                </div>
            </div>
        </div>
        <div className="BlogPage_Cards_Page flex items-center justify-center gap-3 mb-16">
            <Link to="/" className="w-auto h-auto bg-white rounded-full border-2 border-slate-300 px-3 py-3 hover:bg-rose-500 text-gray-600 hover:text-white cursor-pointer hover:border-rose-500 duration-700" onClick={() => window.scrollTo(0, 0)}>
            <span><ChevronsLeft size="25"/></span></Link>

            <Link to="/" className="w-auto h-auto bg-white rounded-full border-2 border-slate-300 px-4 py-3 hover:bg-rose-500 text-gray-600 hover:text-white cursor-pointer hover:border-rose-500 duration-700" onClick={() => window.scrollTo(0, 0)}>
            <span>01</span></Link>

            <Link to="/" className="w-auto h-auto bg-white rounded-full border-2 border-slate-300 px-4 py-3 hover:bg-rose-500 text-gray-600 hover:text-white cursor-pointer hover:border-rose-500 duration-700" onClick={() => window.scrollTo(0, 0)}>
            <span>02</span></Link>

            <Link to="/" className="w-auto h-auto bg-white rounded-full border-2 border-slate-300 px-4 py-3 hover:bg-rose-500 text-gray-600 hover:text-white cursor-pointer hover:border-rose-500 duration-700" onClick={() => window.scrollTo(0, 0)}>
            <span>03</span></Link>

            <Link to="/" className="w-auto h-auto bg-white rounded-full border-2 border-slate-300 px-4 py-2 text-2xl hover:bg-rose-500 text-gray-600 hover:text-white cursor-pointer hover:border-rose-500 duration-700" onClick={() => window.scrollTo(0, 0)}>
            <span>...</span></Link>

            <Link to="/" className="w-auto h-auto bg-white rounded-full border-2 border-slate-300 px-3 py-3 hover:bg-rose-500 text-gray-600 hover:text-white cursor-pointer hover:border-rose-500 duration-700" onClick={() => window.scrollTo(0, 0)}>
            <span><ChevronsRight size="25"/></span></Link>
        </div>
        </div>
    )
}




 const Blog = ( ) => {
    return(
        <div>
            <Showcase/>
            <BlogPage_Cards/>
        </div>
    )
}


export default Blog

