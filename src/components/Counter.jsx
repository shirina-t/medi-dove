import React, { useState, useEffect } from "react";

const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const speed = 50; 
        const increment = Math.ceil(target / 100);
        const counter = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount + increment >= target) {
                  clearInterval(counter); 
                  return target;
                }
                return prevCount + increment;
              });
        }, speed);
        return () => clearInterval(counter);
    }, [target]);

  return (
    <h1 className="text-[#e12454] font-[200] text-7xl">{count}+</h1>
  )
}

export default Counter
