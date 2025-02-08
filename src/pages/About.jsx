import React, {useState} from "react";

import { Button } from "@/components/Button";
import AboutShowcase from "./AboutShowcase";
import Abouth1 from "../components/Abouth1";
import Aboutp from "../components/Aboutp";
import Counter from "../components/Counter";


const About = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlay = () => {
        setIsPlaying(true); 
    };

  return (
    <div className="w-[100%] h-full flex flex-col gap-32 overflow-y-auto">
      <AboutShowcase />

      <div className="shortstory w-full grid grid-cols-1 md:grid-cols-2 gap-10 sm:px-2 xl:px-32 lg:px-20">
        <div className="w-full relative">
          {!isPlaying ? (
            <div
              className="w-full py-[50%] bg-center bg-cover relative flex justify-center items-center "
              style={{
                backgroundImage: "url('/media/about-img.jpg')",
              }}
            >
              <Button variant="destructive" size="play" onClick={handlePlay}>
                ▶️
              </Button>
            </div>
          ) : (
            <div className="ratio ratio-1x1">
              <iframe
                src="https://www.youtube.com/embed/I3u3lFA9GX4?autoplay=1"
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 lg:pr-3 sm:pr-2">
          <p className="font-semibold opacity-65 ">About Us</p>
          <Abouth1>Short Story About MediDove Clinic.</Abouth1>
          <Aboutp className="pr-11">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia.
          </Aboutp>
          <div className="flex gap-4 items-start pr-11">
            <img src="/media/ic1.png" alt="Picture" />
            <div>
              <h3 className="text-[24px] text-[#223645] font-sans font-[600]">
                Our Mission
              </h3>
              <Aboutp>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris hoi nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse.
              </Aboutp>
            </div>
          </div>
          <div className="flex gap-4 items-start pr-11">
            <img src="/media/ic2.png" alt="Picture" />
            <div>
              <h3 className="text-[24px] text-[#223645] font-sans font-[600]">
                Our Vission
              </h3>
              <Aboutp>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse.
              </Aboutp>
            </div>
          </div>
        </div>
      </div>

      <div className="nums grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:px-32 lg:px-20 sm:px-2 bg-[#f4f9fc] py-20 gap-6">
        <div className="flex flex-col gap-2 items-start">
          <img src="/media/ic3.png" alt="Picture" />
          <Counter target={358} />
          <h3 className="text-2xl text-[#223645] font-[600]">
            Worldwide Branches
          </h3>
          <Aboutp>
            Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Aboutp>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <img src="/media/ic4.png" alt="Picture" />
          <Counter target={358} />
          <h3 className="text-2xl text-[#223645] font-[600]">
            Hospital Formed
          </h3>
          <Aboutp>
            Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Aboutp>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <img src="/media/ic5.png" alt="Picture" />
          <Counter target={238} />
          <h3 className="text-2xl text-[#223645] font-[600]">Local Partners</h3>
          <Aboutp>
            Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Aboutp>
        </div>
      </div>
    </div>
  );
};

export default About;

