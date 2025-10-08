import React from "react";
import Header from "../Components/Header";
import Container from "../Components/Container";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>

      <div className="flex-1">
        <Container>
          <Outlet></Outlet>
        </Container>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
