import React from "react";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
import useApps from "../Hooks/useApps";
import Loading from "../Components/Loading";
import AppSingleCard from "../Components/AppSingleCard";
import Error from "../Components/Error";

const AllApps = () => {
  const { apps, loading, error } = useApps();

  if (loading) return <Loading cards={20} showTitle={true} />;
  if (error) return <Error message={error.message} />;

  return (
    <section className="section-padding">
      <Container>
        <div className="flex flex-col items-center gap-5 md:gap-10">
          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl">
              Trending Apps
            </h2>
            <p className="mt-2">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {apps.length > 0 ? (
              apps.map((app) => <AppSingleCard key={app.id} app={app} />)
            ) : (
              <Error message="No apps found" />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AllApps;
