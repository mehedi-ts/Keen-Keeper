import React from "react";
import facebookIcon from "../../assets/facebook.png";
import instaIcon from "../../assets/instagram.png";
import xIcon from "../../assets/twitter.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-full bg-[#244D3F] pt-20 pb-8">
      <div className="foot-con max-w-277.5 mx-auto flex flex-col gap-11 ">
        <div className="footer1 flex flex-col items-center gap-6 text-center ">
          <div className="text-foot flex flex-col gap-4 justify-center">
            <h1 className="text-5xl font-bold text-white">KeenKeeper</h1>
            <p className="text-base text-white">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
          </div>
          <div className="icon-foot flex flex-col gap-4">
            <p className=" text-xl font-medium text-center text-white">
              Social Links
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 ">
                {" "}
                <img className="w-full" src={facebookIcon} alt="" />
              </div>
              <div className="w-10 h-10 ">
                <img className="w-full" src={instaIcon} alt="" />
              </div>
              <div className="w-10 h-10 ">
                {" "}
                <img className="w-full" src={xIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer2 border-t border-[#b7b7b722] flex justify-between items-center pt-7.5">
          <p className="text-[#dddcdc8c] text-base">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <ul className="text-base text-[#dddcdc8c] flex items-center gap-6">
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms of Service</Link>
            </li>
            <li>
              <Link to="/"> Cookies</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
