import React from 'react';
import appErrorImage from "../assets/App-Error.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
     <section className="col-span-12">
      <div className="flex flex-col items-center gap-5">
        {/* Image */}
        <div>
          <img src={appErrorImage} alt="It is the app error image" />
        </div>

        {/* Content */}
        <div className="text-center">
            <h2 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl">
              OPPS!! APP NOT FOUND
            </h2>
            <p className="mt-1 mb-4">The App you are requesting is not found on our system.  please try another apps</p>
      {/* <p className="mt-2 text-red-500">{message}</p> */}
            {/* <Link to={"/"} className="btn py-3 px-4 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none transition-colors duration-200 ease-linear hover:text-[#001931] hover:from-[#9F62F2] hover:to-[#632EE3]">
              Go Back!
            </Link> */}
          </div>
      </div>
    </section>
  );
};

export default Error;