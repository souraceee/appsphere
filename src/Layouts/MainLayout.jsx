import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
// import Container from "../Components/Container";
import Footer from "../Components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";

const MainLayout = () => {
 const location = useLocation();
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setShowSpinner(true);

    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [location]);


  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>

      <div className="flex-1">
        {/* <Container> */}
        {showSpinner && <LoadingSpinner></LoadingSpinner>}
          <Outlet></Outlet>
        {/* </Container> */}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
