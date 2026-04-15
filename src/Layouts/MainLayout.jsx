import React from "react";
import Navbar from "../Components/Layout/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Layout/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="bg-[#F8FAFC]">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
