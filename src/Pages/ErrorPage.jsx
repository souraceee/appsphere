import React from "react";
import errorImage404 from "../assets/error-404.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="section-padding">
      <div className="flex flex-col items-center gap-5">
        {/* Image */}
        <div>
          <img src={errorImage404} alt="It is the 404 error image" />
        </div>

        {/* Content */}
        <div className="text-center">
            <h2 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl">
              Trusted by Millions, Built for You
            </h2>
            <p className="mt-1 mb-4">The page you are looking for is not available.</p>
            <Link to={"/"} className="btn py-3 px-4 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none transition-colors duration-200 ease-linear hover:text-[#001931] hover:from-[#9F62F2] hover:to-[#632EE3]">
              Go Back!
            </Link>
          </div>
      </div>
    </section>
  );
};

export default ErrorPage;
