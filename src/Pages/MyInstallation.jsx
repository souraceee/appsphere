import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import downloadIcon from "../assets/download-icon.png";
import starIcon from "../assets/star-icon.png";
import { toast } from "react-toastify";

const MyInstallation = () => {
  const [sortByOrder, setSortByOrder] = useState("none");
  const [installedApps, setInstalledApps] = useState([]);

  const handleSorting = (e) => {
    const order = e.target.value;
    setSortByOrder(order);

    let sortedApps = [...installedApps];

    const downloadTextToNumber = (value) => {
      const letter = value[value.length - 1];
      const txtToNum = parseFloat(value);

      if (letter === "K") {
        return txtToNum * 1000;
      } else if (letter === "M") {
        return txtToNum * 1000000;
      } else if (letter === "B") {
        return txtToNum * 1000000000;
      } else {
        return txtToNum;
      }
    };
    if (order === "download-size-high") {
      sortedApps.sort(
        (a, b) =>
          downloadTextToNumber(b.downloads) -
          downloadTextToNumber(a.downloads)
      );
    } else if (order === "download-size-low") {
      sortedApps.sort(
        (a, b) =>
          downloadTextToNumber(a.downloads) -
          downloadTextToNumber(b.downloads)
      );
    }
    setInstalledApps(sortedApps);
  };

  useEffect(() => {
    try {
      const savedAppInLS =
        JSON.parse(localStorage.getItem("installedApps")) || [];
      setInstalledApps(savedAppInLS);
    } catch (error) {
      console.error("Could not read installedApps from localStorage:", error);
      setInstalledApps([]);
    }
  }, []);

  const handleInstallButton = (id, title) => {
    const update = installedApps.filter((app) => app.id !== id);
    setInstalledApps(update);

    localStorage.setItem("installedApps", JSON.stringify(update));
    toast.info(`${title} uninstalled successfully`);
  };

  return (
    <section className="section-padding">
      <Container>
        <div>
          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl">
              Your Installed Apps
            </h2>
            <p className="mt-4 text-center">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>

          {/* App Found & Search Bar */}
          <div className="flex flex-col items-start gap-3 mt-10 mb-4 w-full md:flex-row md:gap-0 md:justify-between md:items-center">
            <h4>({installedApps.length}) Apps Found</h4>

            <select
              value={sortByOrder}
              onChange={handleSorting}
              className="select select-style"
            >
              <option value="none" className="text-base font-medium">
                Sort By Size
              </option>
              <option value="download-size-low" className="text-base font-medium">
                Low to High
              </option>
              <option value="download-size-high" className="text-base font-medium">
                High to Low
              </option>
            </select>
          </div>

          {/* Installed Apps */}
          <div className="flex flex-col gap-4">
            {installedApps.map(
              ({ id, title, image, size, ratingAvg, downloads }) => (
                <div
                  key={id}
                  className="flex items-center justify-between p-4 bg-white rounded-sm"
                >
                  {/* Image, Title, Download, Rating, Size */}
                  <div className="flex items-center gap-4">
                    {/* Contents */}
                    <img
                      src={image}
                      alt="It is the app icon image"
                      className="size-20 rounded-lg"
                    />

                    {/* Contents */}
                    <div>
                      <h3 className="text-xl font-medium">{title}</h3>

                      {/* Download, Rating, Size */}
                      <div className="flex items-center gap-4 mt-4">
                        {/* Download */}
                        <div className="flex items-center gap-1">
                          <img
                            src={downloadIcon}
                            alt="It is download icon image"
                            className="size-4"
                          />
                          <h4 className="text-base font-medium !text-[#00D390]">
                            {downloads}
                          </h4>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1">
                          <img
                            src={starIcon}
                            alt="It is download icon image"
                            className="size-4"
                          />
                          <h4 className="text-base font-medium !text-[#FF8811]">
                            {ratingAvg}
                          </h4>
                        </div>

                        {/* Size */}
                        <div className="flex items-center gap-1">
                          <h4 className="text-base font-medium !text-[#627382]">
                            {size}MB
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Uninstall Button */}
                  <div>
                    <button
                      onClick={() => handleInstallButton(id, title)}
                      className="btn bg-[#00D390] text-white transition-colors duration-200 ease-linear hover:!bg-[#001931] hover:outline-[#00D390]"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyInstallation;
