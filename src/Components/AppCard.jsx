import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import useApps from "../Hooks/useApps";
import Loading from "./Loading";
import AppSingleCard from "./AppSingleCard";
import Error from "./Error";

const AppCard = () => {

  const {apps, loading, error} = useApps();
  const featuredApps = Array.isArray(apps) ? apps.slice(0, 8) : [];

  if (loading) return <Loading cards={8} showTitle={true} />;
  if (error) return <Error></Error>;

  return (
    <section className="section-padding">
      <Container>
        <div className="flex flex-col items-center gap-5 md:gap-10">
          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl">
              Trending Apps
            </h2>
            <p className="mt-2">Explore All Trending Apps on the Market developed by us</p>
          </div>

          {/* Apps Card */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* {featuredApps.map((app) => (
            <AppSingleCard key={app.id} app={app}></AppSingleCard>
          ))} */}

          {featuredApps.length > 0 ? (
  featuredApps.map((app) => <AppSingleCard key={app.id} app={app} />)
) : (
  <Error message={error ? error.message : "No apps found"} />
)}

        </div>

          {/* Button */}
          {!error && featuredApps.length > 0 && (
  <div>
    <Link
      to={"/apps"}
      className="btn py-3 px-4 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none transition-colors duration-200 ease-linear hover:text-[#001931] hover:from-[#9F62F2] hover:to-[#632EE3]"
    >
      Show All
    </Link>
  </div>
)}
        </div>
      </Container>
    </section>
  );
};

export default AppCard;
