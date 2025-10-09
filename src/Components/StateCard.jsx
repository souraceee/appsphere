import React from "react";
import Container from "./Container";
import CountUp from "react-countup";

const StateCard = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
      <Container>
        <div className="flex flex-col items-center gap-10">
          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold !text-white text-center md:text-4xl lg:text-5xl">
              Trusted by Millions, Built for You
            </h2>
          </div>

          {/* Counters/States */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-32 2xl:gap-36">
            {/* Counter 1 */}
            <div className="flex flex-col items-center">
              <p className="font-[200] !text-white">Total Downloads</p>
              <h3 className="my-4 text-5xl font-extrabold !text-white lg:text-6xl">
                <CountUp end={29.6} decimals={1} duration={10} />M
              </h3>
              <p className="font-[200] !text-white">21% more than last month</p>
            </div>

            {/* Counter 2 */}
            <div className="flex flex-col items-center">
              <p className="font-[200] !text-white">Total Reviews</p>
              <h3 className="my-4 text-5xl font-extrabold !text-white lg:text-6xl">
                <CountUp end={906} duration={10} />K
              </h3>
              <p className="font-[200] !text-white">46% more than last month</p>
            </div>

            {/* Counter 1 */}
            <div className="flex flex-col items-center">
              <p className="font-[200] !text-white">Active Apps</p>
              <h3 className="my-4 text-5xl font-extrabold !text-white lg:text-6xl">
                <CountUp end={132} duration={10} />+
              </h3>
              <p className="font-[200] !text-white">31 more will Launch</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StateCard;
