import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useApps from "../Hooks/useApps";
import LoadingSkeleton from "../Components/Loading";
import Container from "../Components/Container";
import downloadIcon from "../assets/download-icon.png";
import reviewIcon from "../assets/review-icon.png";
import starIcon from "../assets/star-icon.png";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const [buttonClicked, setButtonClicked] = useState(false);
  
  if (loading) return <LoadingSkeleton cards={1} showTitle={true} />;
  
  const app = apps.find((a) => a.id === Number(id));
  if (!app) return <Error message="App not found!" />;
  
  if (error) return <Error message={error.message} />;

  const {
    title,
    companyName,
    image,
    moredescription,
    downloads,
    ratingAvg,
    reviews,
    size,
  } = app;


  const handleButtonClick = () => {
    setButtonClicked(true);
    toast.success(`${title} installed successfully!`);
  }
  
  return (
    <Container>
      <ToastContainer/>
      <div className="section-padding">
        {/* DETAILS */}
        <div className="card rounded-none lg:card-side">
          {/* Image */}
          <figure>
            <img src={image} alt="Album" className="!size-[350px]" />
          </figure>

          {/* Contents */}
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold">{title}</h2>
            <p className="flex-0 !pb-7 text-xl border-b">
              Developed by{" "}
              <span className="!bg-gradient-to-b text-gradient-color font-semibold">
                {companyName}
              </span>
            </p>

            {/* Info */}
            <div className="flex gap-6 my-7 md:gap-[100px]">
              {/* Downloads */}
              <div>
                <img
                  src={downloadIcon}
                  alt="It is download icon image"
                  className="size-10"
                />
                <h3 className="my-2">Downloads</h3>
                <h4 className="text-[40px] font-extrabold leading-7">
                  {downloads}
                </h4>
              </div>

              {/* Rating */}
              <div>
                <img
                  src={starIcon}
                  alt="It is download icon image"
                  className="size-10"
                />
                <h3 className="my-2">Average Ratings</h3>
                <h4 className="text-[40px] font-extrabold leading-7">
                  {ratingAvg}
                </h4>
              </div>

              {/* Review */}
              <div>
                <img
                  src={reviewIcon}
                  alt="It is download icon image"
                  className="size-10"
                />
                <h3 className="my-2">Total Reviews</h3>
                <h4 className="text-[40px] font-extrabold leading-7">
                  {reviews}K
                </h4>
              </div>
            </div>

            {/* Button */}
            <div className="card-actions">
              <button disabled={buttonClicked} onClick={handleButtonClick} className="btn bg-[#00D390] text-white transition-colors duration-200 ease-linear hover:!bg-[#001931] hover:outline-[#00D390]">
                {buttonClicked ? "Installed" : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>

        <hr className="my-10 text-[#001931]" />

        {/* RATING CHART */}
        <div>
          <h4 className="text-2xl font-semibold">Rating</h4>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={app.ratings} layout="vertical">
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="count" fill="#FF8811" barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <hr className="my-10 text-[#001931]" />

        {/* DESCRIPTION */}
        <div>
          <h4 className="text-2xl font-semibold">Description</h4>
          <p className="mt-6">{moredescription}</p>
        </div>
      </div>
    </Container>
  );
};

export default AppDetails;
