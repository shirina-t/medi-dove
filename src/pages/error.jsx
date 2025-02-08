"use client";

import { Link } from "react-router-dom";
import { Button } from "@/ui/btn";

const Error = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-center bg-red-300">
        <p className="text-[#223545] text-9xl font-bold">404</p>
        <p className="text-[#223545] text-5xl font-semibold ">Page not found</p>
        <p className="my-6 text-[#647489] text-sm">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="pointer-events-auto"
        >
          <Button variant="default" size="errorSize">
            BACK TO HOME
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Error;
