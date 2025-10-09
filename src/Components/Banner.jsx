import React from "react";
import heroImage from "../assets/hero.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import Container from "./Container";

const Banner = () => {
  return (
    <section className="mt-10 md:mt-14 lg:mt-20">
      <Container>
        <div className="flex flex-col items-center gap-5 md:gap-10">
          {/* Content */}
          <div className="mx-auto text-center 2xl:w-5xl">
            <h1 className="mx-auto text-4xl font-bold md:text-5xl md:w-md 2xl:text-7xl 2xl:w-2xl">
              We Build{" "}
              <span className="text-gradient-color font-black">Productive</span>{" "}
              Apps
            </h1>
            <p className="mt-4 mb-5 md:mb-10">
              At AppSphere, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>

            <div className="flex items-center justify-center gap-4">
              <button className="banner-button">
                <img
                  src={playstore}
                  alt="It is Playstore app icon"
                  className="size-8"
                />
                Google Play
              </button>

              <button className="banner-button">
                <img
                  src={appstore}
                  alt="It is Appstore app icon"
                  className="size-8"
                />
                App Store
              </button>
            </div>
          </div>

          {/* Image */}
          <div>
            <img src={heroImage} alt="It is an hero image of mobile" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
