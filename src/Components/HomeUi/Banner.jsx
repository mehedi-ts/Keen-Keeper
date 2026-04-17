import { Plus } from "lucide-react";
import React, { use } from "react";

const Banner = ({}) => {
  return (
    <>
      <div className="flex flex-col gap-10 border-b border-[#E9E9E9]">
        <div className="text-con flex flex-col items-center gap-8 ">
          <div className="text-title text-center flex flex-col gap-4">
            <h1 className="text-5xl font-bold text-[#1F2937]">
              Friends to keep close in your life
            </h1>
            <p className="text-base text-[#64748B]">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the <br /> relationships that matter most.
            </p>
          </div>
          <div className="add-btn">
            <button className="btn bg-[#244D3F] text-white text-base font-semibold flex items-center gap-1">
              <Plus className="h-4 w-4"></Plus>Add a Friend
            </button>
          </div>
        </div>
        <div className="count grid grid-cols-1 px-2 md:px-2 lg:px-0 lg:grid-cols-4 md:grid-cols-2 gap-6 pb-10">
          <div className="box p-8  flex flex-col items-center gap-2 bg-white rounded-lg shadow-lg">
            <h3 className="text-4xl font-semibold text-[#244D3F]">12</h3>
            <p className="text-[18px] text-[#64748B]">Total Friends</p>
          </div>
          <div className="box p-8 flex flex-col items-center gap-2 bg-white rounded-lg shadow-lg">
            <h3 className="text-4xl font-semibold text-[#244D3F]">6</h3>
            <p className="text-[18px] text-[#64748B]">On Track</p>
          </div>
          <div className="box p-8  flex flex-col items-center gap-2 bg-white rounded-lg shadow-lg">
            <h3 className="text-4xl font-semibold text-[#244D3F]">7</h3>
            <p className="text-[18px] text-[#64748B]">Need Attention</p>
          </div>
          <div className="box p-8 flex flex-col items-center gap-2 bg-white rounded-lg shadow-lg">
            <h3 className="text-4xl font-semibold text-[#244D3F]">12</h3>
            <p className="text-[18px] text-[#64748B]">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
