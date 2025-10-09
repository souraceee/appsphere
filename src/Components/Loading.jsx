import React from "react";
import Container from "./Container";

const LoadingSkeleton = ({ cards = 4, showTitle = true }) => {
  return (
    <Container>
      <div className="section-padding">
        {/* Title Skeleton */}
        {showTitle && (
          <div>
            <div className="animate-pulse mx-auto w-[432px] h-6 bg-gray-300 rounded"></div>
            <div className="animate-pulse mx-auto mt-3 w-[432px] h-6 bg-gray-300 rounded"></div>
          </div>
        )}

        {/* Cards Skeleton */}
        <div
          className={`grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4`}
        >
          {Array.from({ length: cards }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 p-4 bg-white rounded-xl animate-pulse"
            >
              <div className="h-[310px] bg-gray-300 rounded-lg"></div>
              <div className="h-[30px] w-3/4 bg-gray-300 rounded"></div>
              <div className="h-[30px] w-full bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LoadingSkeleton;
