import { ChartLine, Clock8, House } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="  py-4 shadow-md bg-white">
      <div className="nav-main  flex justify-between items-center max-w-400 w-full mx-auto px-2">
        <div className="logo">
          <h1 className="text-2xl font-semibold text-[#244D3F]">
            <span className="font-extrabold text-[#1F2937]">Keen</span>Keeper
          </h1>
        </div>
        <div className="manu">
          <ul className="flex gap-2 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex font-medium gap-0.5 items-center text-base text-[#64748B] px-3 py-2  ${isActive ? "bg-[#244D3F] rounded-sm font-semibold text-white" : ""}`
                }
              >
                {" "}
                <House size={23}></House> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timeline"
                className={({ isActive }) =>
                  `flex font-medium gap-0.5 items-center text-base text-[#64748B] px-3 py-2  ${isActive ? "bg-[#244D3F] rounded-sm font-semibold text-white" : ""}`
                }
              >
                <Clock8 size={23}></Clock8> Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stats"
                className={({ isActive }) =>
                  `flex font-medium gap-0.5 items-center text-base text-[#64748B] px-3 py-2  ${isActive ? "bg-[#244D3F] rounded-sm font-semibold text-white" : ""}`
                }
              >
                {" "}
                <ChartLine size={23}></ChartLine> Stats
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
