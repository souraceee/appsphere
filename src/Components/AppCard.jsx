import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import useApps from "../Hooks/useApps";
import Loading from "./Loading";

const AppCard = () => {

  const {apps, loading, error} = useApps();
  if (loading) return <Loading></Loading>;
  if (error) return <Error message={error.message} />;

  return (
    <section className="section-padding">
      <Container>
        <div className="flex flex-col items-center gap-5 md:gap-10">
          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl">
              Trusted by Millions, Built for You
            </h2>
          </div>

          {/* Apps Card */}
          <div></div>

          {/* Button */}
          <div>
            <Link
              to={"/apps"}
              className="btn py-3 px-4 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none transition-colors duration-200 ease-linear hover:text-[#001931] hover:from-[#9F62F2] hover:to-[#632EE3]"
            >
              Show All
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppCard;
