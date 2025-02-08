import image1 from '../assets/b1.jpg'
import image2 from '../assets/me.jpg'
import image3 from '../assets/img1.jpg'
import image4 from '../assets/img2.jpg'
import image5 from '../assets/img3.jpg'
import image6 from '../assets/ins1.jpg'
import image7 from '../assets/ins2.jpg'
import image8 from '../assets/ins3.jpg'
import image9 from '../assets/ins4.jpg'
import image10 from '../assets/ins5.jpg'
import image11 from '../assets/ins6.jpg'
import image12 from '../assets/ins7.jpg'
import image13 from '../assets/ins8.jpg'
import image14 from '../assets/ins9.jpg'
import image15 from '../assets/banner.png'
import image16 from '../assets/b7.jpg'
import image17 from '../assets/b8.jpg'
import image18 from '../assets/b9.jpg'
import { CalendarCheck,User,MessagesSquare,ChevronsLeft,ChevronsRight,Search,Facebook,Twitter,Linkedin,Youtube,Chrome } from 'lucide-react';
import Carousel from '../components/Carousel'
import { Showcase } from '../components/Showcase'
import { Button } from "@/ui/btn";
import lesgo from "/src/img/lesgo.jpg";
import { Link } from 'react-router-dom'
import showcase1 from "/src/img/showcase1.png";



function News() {
  const images=[
    image16,image17,image18
  ]
  return (
    <>
    <div className="w-[100%] bg-cover bg-no-repeat md:flex justify-between xl:px-32 lg:px-20 sm:px-2 items-center py-[200px] bg-center h-full mb-[30px]"
style={{ backgroundImage: `url(${showcase1})` }}>
<div className="flex flex-col gap-10 sm:ml-10 md:ml-0 ml-10 ">
<h3 className="font-bold text-xl opacity-50">We are here for your care </h3>
<h1 className="text-6xl font-bold text-[#223545]">News</h1>
</div>

<div className="flex gap-1 font-semibold sm:ml-10 md:ml-0 ml-10 sm:mt-10 md:mt-0 mt-10 ">
<Link to="/" className="opacity-50 text-gray-900 no-underline">Home</Link>
<p>|</p>
<Link to="/services" className="text-red-600 no-underline">News</Link>
</div>
</div>
      <div className="max-[1000px]:block py-[100px] px-[50px] flex gap-[20px] max-[1000px]:px-0">
        <div className="w-[70%] flex flex-col gap-[30px] max-[1000px]:w-[700px]  max-[1000px]:my-0 max-[1000px]:mx-auto max-[790px]:w-[560px] max-[600px]:w-[100%] max-[600px]:px-[15px] ">
          <div>
            <div
              className="w-[100%] h-[70vh] max-[790px]:h-[50vh] max-[600px]:h-[45vh] max-[470px]:h-[35vh] max-[390px]:h-[30vh] max-[320px]:h-[25vh] max-[260px]:h-[20vh] max-[210px]:h-[15vh] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image1})` }}
            ></div>
            <div className="bg-[#faf9ff] p-[45px] max-[790px]:p-[35px] flex flex-col gap-[20px]">
              <div className="flex gap-[35px] max-[790px]:flex-col max-[790px]:gap-[12px] text-[#6f7172] max-[320px]:text-[10px]">
                <div className="flex gap-[10px] items-center transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                  <CalendarCheck size={18} color="rgb(225, 36, 84) " />
                  <p className="tracking-[1.5px] text-[12px] font-bold ">
                    SEPTEMBER 15, 2021
                  </p>
                </div>
                <div className="flex gap-[10px] items-center transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                  <User size={18} color="rgb(225, 36, 84)" />
                  <p className="tracking-[1.5px] text-[12px] font-bold">
                    DIBOLI B. JOLY
                  </p>
                </div>
                <div className="flex gap-[10px] items-center transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                  <MessagesSquare size={18} color="rgb(225, 36, 84)" />
                  <p className="tracking-[1.5px] text-[12px] font-bold">
                    23 COMMENTS
                  </p>
                </div>
              </div>
              <h3 className="text-[#223645] text-[28px] font-bold leading-[37px] max-[320px]:text-[25px] max-[320px]:leading-[34px]">
                <span className="transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                  But there is a downside. Simply running a search for medical
                  blogs.
                </span>
              </h3>
              <p className="text-[#647589] text-[15px] leading-[25px] max-[320px]:text-[14px] max-[320px]:leading-[20px]">
                There’s a good chance Everyday Health is the most appropriately
                named blog on this list because it focuses on the health topics
                that consistently affect a wide range of people. They also get
                kudos for addressing the emotional challenges folks face when
                managing conditions.
              </p>
              <div>
                <button className="bg-[#e12454] py-[20px] px-[30px] text-[14px] tracking-[1px] text-white font-semibold transition-all duration-[250ms] ease-linear delay-0 hover:bg-[#8fb569]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div>
            <Showcase />
            <div className="bg-[#faf9ff] p-[45px] max-[790px]:p-[35px] flex flex-col gap-[20px]">
              <div className="flex gap-[35px] max-[790px]:flex-col max-[790px]:gap-[12px] text-[#6f7172] max-[320px]:text-[10px]">
                <div className="flex gap-[10px] items-center transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                  <CalendarCheck size={18} color="rgb(225, 36, 84) " />
                  <p className="tracking-[1.5px] text-[12px] font-bold ">
                    SEPTEMBER 15, 2021
                  </p>
                </div>
                <div className="flex gap-[10px] items-center transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                  <User size={18} color="rgb(225, 36, 84)" />
                  <p className="tracking-[1.5px] text-[12px] font-bold">
                    DIBOLI B. JOLY
                  </p>
                </div>
                <div className="flex gap-[10px] items-center transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                  <MessagesSquare size={18} color="rgb(225, 36, 84)" />
                  <p className="tracking-[1.5px] text-[12px] font-bold">
                    23 COMMENTS
                  </p>
                </div>
              </div>
              <h3 className="text-[#223645] text-[28px] font-bold leading-[37px] max-[320px]:text-[25px] max-[320px]:leading-[34px]">
                <span className="transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                  But there is a downside. Simply running a search for medical
                  blogs.
                </span>
              </h3>
              <p className="text-[#647589] text-[15px] leading-[25px] max-[320px]:text-[14px] max-[320px]:leading-[20px]">
                There’s a good chance Everyday Health is the most appropriately
                named blog on this list because it focuses on the health topics
                that consistently affect a wide range of people. They also get
                kudos for addressing the emotional challenges folks face when
                managing conditions.
              </p>
              <div>
                <button className="bg-[#e12454] py-[20px] px-[30px] text-[14px] tracking-[1px] text-white font-semibold transition-all duration-[250ms] ease-linear delay-0 hover:bg-[#8fb569]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[100%] max-[790px]:h-[50vh] max-[600px]:h-[45vh] max-[470px]:h-[35vh] max-[390px]:h-[30vh] max-[320px]:h-[25vh] max-[260px]:h-[20vh] max-[210px]:h-[15vh] overflow-hidden">
              <Carousel images={images} />
            </div>
            <div className="bg-[#faf9ff] p-[45px] max-[790px]:p-[35px] flex flex-col gap-[20px]">
              <div className="flex gap-[35px] max-[790px]:flex-col max-[790px]:gap-[12px] text-[#6f7172] max-[320px]:text-[10px]">
                <div className="flex gap-[10px] items-center transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                  <CalendarCheck size={18} color="rgb(225, 36, 84) " />
                  <p className="tracking-[1.5px] text-[12px] font-bold ">
                    SEPTEMBER 15, 2021
                  </p>
                </div>
                <div className="flex gap-[10px] items-center transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                  <User size={18} color="rgb(225, 36, 84)" />
                  <p className="tracking-[1.5px] text-[12px] font-bold">
                    DIBOLI B. JOLY
                  </p>
                </div>
                <div className="flex gap-[10px] items-center transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                  <MessagesSquare size={18} color="rgb(225, 36, 84)" />
                  <p className="tracking-[1.5px] text-[12px] font-bold">
                    23 COMMENTS
                  </p>
                </div>
              </div>
              <h3 className="text-[#223645] text-[28px] font-bold leading-[37px] max-[320px]:text-[25px] max-[320px]:leading-[34px]">
                <span className="transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                  But there is a downside. Simply running a search for medical
                  blogs.
                </span>
              </h3>
              <p className="text-[#647589] text-[15px] leading-[25px] max-[320px]:text-[14px] max-[320px]:leading-[20px]">
                There’s a good chance Everyday Health is the most appropriately
                named blog on this list because it focuses on the health topics
                that consistently affect a wide range of people. They also get
                kudos for addressing the emotional challenges folks face when
                managing conditions.
              </p>
              <div>
                <button className="bg-[#e12454] py-[20px] px-[30px] text-[14px] tracking-[1px] text-white font-semibold transition-all duration-[250ms] ease-linear delay-0 hover:bg-[#8fb569]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#062a4d] text-white py-[35px] px-[50px] flex flex-col gap-[22px] max-[450px]:py-[25px] max-[450px]:px-[40px]">
            <h3 className="text-[25px] leading-[32px] font-bold max-[450px]:text-[21px] max-[450px]:leading-[29px]">
              This health blog from NPR takes a fairly broad look at the medical
              world.
            </h3>
            <h4 className="uppercase text-[15px] tracking-[1px] font-semibold max-[450px]:text-[12px]">
              - Rosalina Pong
            </h4>
          </div>
          <div className="text-[#9990b8] font-bold flex  gap-[10px] pb-[20px]">
            <button className="w-[60px] h-[60px] max-[450px]:w-[45px] max-[450px]:h-[45px] border-[2px] border-solid border-[#eaebec] rounded-full flex items-center justify-center transition-all duration-[250ms] ease-linear delay-0 hover:bg-[#e12454] hover:text-white hover:shadow-[0_8px_16px_0px_rgba(254,69,54,.3)]">
              <ChevronsLeft />
            </button>
            <button className="w-[60px] h-[60px] max-[450px]:w-[45px] max-[450px]:h-[45px] border-[2px] border-solid border-[#eaebec] rounded-full flex items-center justify-center transition-all duration-[250ms] ease-linear delay-0 hover:bg-[#e12454] hover:text-white hover:shadow-[0_8px_16px_0px_rgba(254,69,54,.3)]">
              01
            </button>
            <button className="w-[60px] h-[60px] max-[450px]:w-[45px] max-[450px]:h-[45px] border-[2px] border-solid border-[#eaebec] rounded-full flex items-center justify-center transition-all duration-[250ms] ease-linear delay-0 hover:bg-[#e12454] hover:text-white hover:shadow-[0_8px_16px_0px_rgba(254,69,54,.3)]">
              02
            </button>
            <button className="w-[60px] h-[60px] max-[450px]:w-[45px] max-[450px]:h-[45px] border-[2px] border-solid border-[#eaebec] rounded-full flex items-center justify-center transition-all duration-[250ms] ease-linear delay-0 hover:bg-[#e12454] hover:text-white hover:shadow-[0_8px_16px_0px_rgba(254,69,54,.3)]">
              03
            </button>
            <button className="w-[60px] h-[60px] max-[450px]:w-[45px] max-[450px]:h-[45px] border-[2px] border-solid border-[#eaebec] rounded-full flex items-center justify-center transition-all duration-[250ms] ease-linear delay-0 hover:bg-[#e12454] hover:text-white hover:shadow-[0_8px_16px_0px_rgba(254,69,54,.3)]">
              ...
            </button>
            <button className="w-[60px] h-[60px] max-[450px]:w-[45px] max-[450px]:h-[45px] border-[2px] border-solid border-[#eaebec] rounded-full flex items-center justify-center transition-all duration-[250ms] ease-linear delay-0 hover:bg-[#e12454] hover:text-white hover:shadow-[0_8px_16px_0px_rgba(254,69,54,.3)]">
              <ChevronsRight />
            </button>
          </div>
        </div>
        <div className="w-[30%] flex flex-col gap-[30px] max-[1000px]:w-[700px]  max-[1000px]:my-0 max-[1000px]:mx-auto max-[790px]:w-[560px] max-[600px]:w-[100%] max-[600px]:px-[15px] ">
          <div className="py-[30px] px-[25px] flex flex-col gap-[25px] border-t-[4px] border-[#8fb569] shadow-[0_8px_16px_0_rgba(200,183,255,.2)]">
            <h3 className="text-[#223645] text-[22px] leading-[22px] font-bold">
              Search Objects
            </h3>
            <form className="flex items-center">
              <input
                type="text"
                placeholder="Search your keyword..."
                className="bg-[#f5f5f5] p-[20px] outline-none self-stretch text-[14px] w-[75%]"
              />
              <button className="flex items-center self-stretch justify-center p-[20px] text-white font-bold bg-[#062a4d] transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454]">
                <Search size={18} />
              </button>
            </form>
          </div>
          <div className="py-[30px] px-[25px] border-t-[4px] border-[#8fb569] shadow-[0_8px_16px_0_rgba(200,183,255,.2)] flex flex-col gap-[25px]">
            <h3 className="text-[#223645] text-[22px] font-semibold">
              About Me
            </h3>
            <div className="flex flex-col items-center gap-[15px]">
              <div
                className="w-[140px] h-[140px] rounded-full"
                style={{ backgroundImage: `url(${image2})` }}
              ></div>
              <h4 className="text-[#223645] text-[19px] font-semibold">
                Zulia Maron Duo
              </h4>
              <p className="text-center text-[#647589] text-[14px] leading-[25px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <div className="flex gap-[15px] items-center">
                <a href="#">
                  <Facebook size={18} color="#8fb569" />
                </a>
                <a href="#">
                  <Twitter size={18} color="#8fb569" />
                </a>
                <a href="#">
                  <Linkedin size={18} color="#8fb569" />
                </a>
                <a href="#">
                  <Youtube size={18} color="#8fb569" />
                </a>
              </div>
            </div>
          </div>
          <div className="py-[30px] px-[25px] border-t-[4px] border-[#8fb569] shadow-[0_8px_16px_0_rgba(200,183,255,.2)]">
            <h3 className="text-[#223645] text-[22px] font-semibold mb-[20px]">
              Popular Feeds
            </h3>
            <div className="box">
              <div className="flex gap-[15px] items-center border-b-[1px] border-[#eaedff] pb-[15px]">
                <div
                  className="w-[80px] h-[80px] bg-cover rounded-full bg-no-repeat"
                  style={{ backgroundImage: `url(${image3})` }}
                ></div>
                <div className="w-[70%] flex flex-col gap-[10px]">
                  <h4 className="text-[#223645] font-semibold text-[17px] leading-[20px] transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                    Lorem ipsum dolor sit cing elit, sed do.
                  </h4>
                  <p className="text-[#647589] text-[12px]">
                    December 18, 2021
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-center border-b-[1px] border-[#eaedff] py-[15px]">
                <div
                  className="w-[80px] h-[80px] bg-cover rounded-full bg-no-repeat"
                  style={{ backgroundImage: `url(${image4})` }}
                ></div>
                <div className="w-[70%] flex flex-col gap-[10px]">
                  <h4 className="text-[#223645] font-semibold text-[17px] leading-[20px] transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                    Lorem ipsum dolor sit cing elit, sed do.
                  </h4>
                  <p className="text-[#647589] text-[12px]">
                    December 18, 2021
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-center pt-[15px]">
                <div
                  className="w-[80px] h-[80px] bg-cover rounded-full bg-no-repeat"
                  style={{ backgroundImage: `url(${image5})` }}
                ></div>
                <div className="w-[70%] flex flex-col gap-[10px]">
                  <h4 className="text-[#223645] font-semibold text-[17px] leading-[20px] transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                    Lorem ipsum dolor sit cing elit, sed do.
                  </h4>
                  <p className="text-[#647589] text-[12px]">
                    December 18, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[30px] px-[25px] border-t-[4px] border-[#8fb569] shadow-[0_8px_16px_0_rgba(200,183,255,.2)]">
            <h3 className="text-[#223645] text-[22px] font-semibold mb-[20px]">
              Categories
            </h3>
            <div>
              <div className="flex justify-between text-[#647589] text-[15px] pb-[15px] border-b-[1px] border-[#eaedff] transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                <p>Lifestyle</p>
                <p>78</p>
              </div>
              <div className="flex justify-between text-[#647589] text-[15px] py-[15px] border-b-[1px] border-[#eaedff] transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                <p>Travel</p>
                <p>42</p>
              </div>
              <div className="flex justify-between text-[#647589] text-[15px] py-[15px] border-b-[1px] border-[#eaedff] transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                <p>Fashion</p>
                <p>32</p>
              </div>
              <div className="flex justify-between text-[#647589] text-[15px] py-[15px] border-b-[1px] border-[#eaedff] transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                <p>Music</p>
                <p>85</p>
              </div>
              <div className="flex justify-between text-[#647589] text-[15px] pt-[15px] transition-all duration-[250ms] ease-out delay-0 hover:text-[#e12454] cursor-pointer">
                <p>Branding</p>
                <p>05</p>
              </div>
            </div>
          </div>
          <div className="py-[30px] px-[25px] border-t-[4px] border-[#8fb569] shadow-[0_8px_16px_0_rgba(200,183,255,.2)]">
            <h3 className="text-[#223645] text-[22px] font-semibold mb-[20px]">
              Social Profile
            </h3>
            <div className="flex gap-[3px]">
              <a
                href="#"
                className="w-[50px] h-[50px] bg-[#062a4d] flex items-center justify-center transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454]"
              >
                <Facebook size={18} color="white" />
              </a>
              <a
                href="#"
                className="w-[50px] h-[50px] bg-[#062a4d] flex items-center justify-center transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454]"
              >
                <Twitter size={18} color="white" />
              </a>
              <a
                href="#"
                className="w-[50px] h-[50px] bg-[#062a4d] flex items-center justify-center transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454]"
              >
                <Linkedin size={18} color="white" />
              </a>
              <a
                href="#"
                className="w-[50px] h-[50px] bg-[#062a4d] flex items-center justify-center transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454]"
              >
                <Youtube size={18} color="white" />
              </a>
              <a
                href="#"
                className="w-[50px] h-[50px] bg-[#062a4d] flex items-center justify-center transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454]"
              >
                <Chrome size={18} color="white" />
              </a>
            </div>
          </div>
          <div className="py-[30px] px-[25px] border-t-[4px] border-[#8fb569] shadow-[0_8px_16px_0_rgba(200,183,255,.2)]">
            <h3 className="text-[#223645] text-[22px] font-semibold mb-[20px]">
              Instagram Feeds
            </h3>
            <div className="grid gap-[10px] grid-cols-3 grid-rows-3">
              <a href="#" className="w-[auto] h-[auto]">
                <img src={image6} />
              </a>
              <a href="#" className="w-[auto] h-[auto]">
                <img src={image7} />
              </a>
              <a href="#" className="w-[auto] h-[auto]">
                <img src={image8} />
              </a>
              <a href="#" className="w-[auto] h-[auto]">
                <img src={image9} />
              </a>
              <a href="#" className="w-[auto] h-[auto]">
                <img src={image10} />
              </a>
              <a href="#" className="w-[auto] h-[auto]">
                <img src={image11} />
              </a>
              <a href="#" className="w-[auto] h-[auto]">
                <img src={image12} />
              </a>
              <a href="#" className="w-[auto] h-[auto]">
                <img src={image13} />
              </a>
              <a href="#" className="w-[auto] h-[auto]">
                <img src={image14} />
              </a>
            </div>
          </div>
          <div className="py-[30px] px-[25px] border-t-[4px] border-[#8fb569] shadow-[0_8px_16px_0_rgba(200,183,255,.2)]">
            <h3 className="text-[#223645] text-[22px] font-semibold mb-[20px]">
              Instagram Feeds
            </h3>
            <div className="flex flex-wrap gap-[6px]">
              <a
                href="#"
                className="uppercase bg-[#f5f5f5] rounded-[2px] text-[#5f5b5b] text-[12px] font-semibold py-[10px] px-[18px] transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454] hover:text-white"
              >
                Popular
              </a>
              <a
                href="#"
                className="uppercase bg-[#f5f5f5] rounded-[2px] text-[#5f5b5b] text-[13px] font-semibold py-[10px] px-[18px] transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454] hover:text-white"
              >
                Design
              </a>
              <a
                href="#"
                className="uppercase bg-[#f5f5f5] rounded-[2px] text-[#5f5b5b] text-[13px] font-semibold py-[10px] px-[18px] transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454] hover:text-white"
              >
                usability
              </a>
              <a
                href="#"
                className="uppercase bg-[#f5f5f5] rounded-[2px] text-[#5f5b5b] text-[13px] font-semibold py-[10px] px-[18px] transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454] hover:text-white"
              >
                develop
              </a>
              <a
                href="#"
                className="uppercase bg-[#f5f5f5] rounded-[2px] text-[#5f5b5b] text-[13px] font-semibold py-[10px] px-[18px] transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454] hover:text-white"
              >
                consult
              </a>
              <a
                href="#"
                className="uppercase bg-[#f5f5f5] rounded-[2px] text-[#5f5b5b] text-[13px] font-semibold py-[10px] px-[18px] transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454] hover:text-white"
              >
                icon
              </a>
              <a
                href="#"
                className="uppercase bg-[#f5f5f5] rounded-[2px] text-[#5f5b5b] text-[13px] font-semibold py-[10px] px-[18px] transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454] hover:text-white"
              >
                HTML
              </a>
              <a
                href="#"
                className="uppercase bg-[#f5f5f5] rounded-[2px] text-[#5f5b5b] text-[13px] font-semibold py-[10px] px-[18px] transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454] hover:text-white"
              >
                ux
              </a>
              <a
                href="#"
                className="uppercase bg-[#f5f5f5] rounded-[2px] text-[#5f5b5b] text-[13px] font-semibold py-[10px] px-[18px] transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454] hover:text-white"
              >
                kit
              </a>
              <a
                href="#"
                className="uppercase bg-[#f5f5f5] rounded-[2px] text-[#5f5b5b] text-[13px] font-semibold py-[10px] px-[18px] transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454] hover:text-white"
              >
                keyboard
              </a>
              <a
                href="#"
                className="uppercase bg-[#f5f5f5] rounded-[2px] text-[#5f5b5b] text-[13px] font-semibold py-[10px] px-[18px] transition-all duration-[250ms] ease-out delay-0 hover:bg-[#e12454] hover:text-white"
              >
                tech
              </a>
            </div>
          </div>
          {/* <div  className="w-[100%] h-[65vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image15})` }}>
          </div> */}
          <div className="relative w-full h-auto mb-10 mt-10">
            <img
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105 cursor-pointer"
              src={lesgo}
              alt="contact"
            />

            <div className="absolute inset-0 flex justify-center py-[450px] pointer-events-none sm:py-[260px] md:py-[345px] lg:py-[350px]">
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="pointer-events-auto"
              >
                <Button variant="default" showPlus={false} size="contactCustom">
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News
