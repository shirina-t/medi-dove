import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

function Carousel({ images }) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  return (
    <div
      className="relative h-[70vh] max-[790px]:h-[50vh] max-[600px]:h-[45vh] max-[470px]:h-[35vh] max-[390px]:h-[30vh] max-[320px]:h-[25vh] max-[260px]:h-[20vh] max-[210px]:h-[15vh] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${images[curr]})` }}
    >
      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4 max-[400px]:p-2">
        <button onClick={prev} className="p-5 rounded-full shadow bg-white/80 text-gray transition-all duration-[300ms] ease-out delay-0 hover:bg-[#E12454] hover:text-white max-[550px]:p-4 max-[400px]:p-2.5">
          <ArrowLeft size={20} />
        </button>
        <button onClick={next} className="p-5 rounded-full shadow bg-white/80  text-gray transition-all duration-[300ms] ease-out delay-0 hover:bg-[#E12454] hover:text-white max-[550px]:p-4 max-[400px]:p-2.5">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
