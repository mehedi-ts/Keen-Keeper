import React from "react";
import msgIcon from "../../assets/text.png";
import callIcon from "../../assets/call.png";
import videoIcon from "../../assets/video.png";

const TimelinCard = ({ ti }) => {
  const { friendName, type, date } = ti;
  return (
    <div className="w-full shadow-sm flex items-center gap-4 p-4 bg-white rounded-lg mt-6">
      <div className="h-10 w-10 ">
        <img
          className="w-full"
          src={
            type === "call" ? callIcon : type === "video" ? videoIcon : msgIcon
          }
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-xl text-[#244D3F] font-medium">{type}</span>{" "}
          <p className="text-[18px] text-[#64748B]">
            with <span>{friendName}</span>
          </p>
        </div>
        <div>
          <p className="text-[#64748B] text-base">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelinCard;
