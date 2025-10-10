import React, { useState, useEffect } from "react";
import Container from "../Components/Container";
import useApps from "../Hooks/useApps";
import Loading from "../Components/Loading";
import AppSingleCard from "../Components/AppSingleCard";
import { IoSearchOutline } from "react-icons/io5";

const AllApps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  //* Search
  useEffect(() => {
    if (!apps.length) return;

    setSearchLoading(true);

    const timer = setTimeout(() => {
      const strSearch = search.trim().toLowerCase();

      const filtered = strSearch
        ? apps.filter(
            (app) =>
              app.title.toLowerCase().includes(strSearch) ||
              app.companyName.toLowerCase().includes(strSearch)
          )
        : apps;

      setFilteredApps(filtered);
      setSearchLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [search, apps]);

  return (
    <section className="section-padding">
      <Container>
        <div className="flex flex-col items-center gap-5 md:gap-10">
          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl">
              Trending Apps
            </h2>
            <p className="mt-2 text-center">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col items-start gap-3 w-full md:flex-row md:gap-0 md:justify-between md:items-center">
            <h4>({filteredApps.length}) Apps Found</h4>

            <form className="relative">
              <IoSearchOutline className="absolute top-4 left-4" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                name="search"
                placeholder="Search App"
                className="px-10 py-3 rounded-lg shadow-sm focus:outline-[#632EE3]"
              />
            </form>
          </div>

          {/* Apps Grid */}
          {searchLoading ? (
            <Loading cards={20} showTitle={false} />
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {filteredApps.length > 0 ? (
                filteredApps.map((app) => (
                  <AppSingleCard key={app.id} app={app} />
                ))
              ) : (
                <p className="col-span-12 text-3xl text-center">
                  No apps found
                </p>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default AllApps;
