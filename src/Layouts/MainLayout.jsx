import React from "react";
import Navbar from "../Components/Layout/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Layout/Footer";
import { ToastContainer } from "react-toastify";
import Scroll from "../Components/Scroll";

const MainLayout = () => {
  return (
    <>
      <div className="bg-[#F8FAFC]">
        <Scroll></Scroll>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer />
      </div>
    </>
  );
};

export default MainLayout;
