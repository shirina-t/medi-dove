import { ArrowLeft, ArrowRight, Play,X } from "lucide-react";

export const Model = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Modal Content */}
      <div className="relative  p-4 rounded-xl z-50">
        <button
          onClick={onClose}
          className="absolute top-[-10px] right-[-10px] text-white max-[400px]:top-[0px] max-[400px]:right-[0px]"
        >
          <X />
        </button>
        <iframe
        className="w-[60vw] h-[80vh] max-[900px]:h-[50vh] max-[600px]:h-[35vh] max-[600px]:w-[82vw] rounded-md"
        src="https://www.youtube.com/embed/oU_GUAWz52w?si=wiJ6NLF4jDtL9Ygq&autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>

      </div>

      {/* Modal Background */}
      <div
        className="fixed inset-0 bg-black opacity-70 z-40"
        onClick={onClose}
      ></div>
    </div>
  );
};
