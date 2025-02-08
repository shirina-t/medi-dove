import { useState } from "react";
import { Model } from "./Model"; // Ensure the correct path to Model.jsx
import image18 from '../assets/b9.jpg'
import { Play } from "lucide-react";

export const Showcase = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="h-[70vh] w-[100%] max-[790px]:h-[50vh] max-[600px]:h-[45vh] max-[470px]:h-[35vh] max-[390px]:h-[30vh] max-[320px]:h-[25vh] max-[260px]:h-[20vh] max-[210px]:h-[15vh] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${image18})` }}>
      {/* Open Modal Button */}
      <button
        onClick={openModal}
        className="bg-white w-[120px] h-[120px] text-[#E12454] flex items-center justify-center rounded-full transition-all duration-[300ms] ease-out delay-0 hover:bg-[#E12454] hover:text-white max-[790px]:w-[90px] max-[790px]:h-[90px] max-[600px]:w-[70px] max-[600px]:h-[70px] max-[350px]:w-[60px] max-[350px]:h-[60px]"
      >
        <Play size={18} className="fill-current "/>
      </button>

      {/* Render Modal Component */}
      <Model isOpen={isModalOpen} onClose={closeModal} />
    </div>
    
  );
};
