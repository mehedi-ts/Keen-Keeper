import React from "react";
import Navbar from "../Components/Layout/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <div className="bg-[#F8FAFC]">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MainLayout;
