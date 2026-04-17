import React, { useContext, useState } from "react";
import { FriendTimelineContext } from "../Context/FriendTimelineContext";
import TimelinCard from "../Components/Reusable/TimelinCard";
import NoData from "../Components/Reusable/NoData";

const Timeline = () => {
  const [filter, setFilter] = useState("all");
  const { timeline } = useContext(FriendTimelineContext);

  const filterTimeline = timeline.filter((item) => {
    if (filter === "all") {
      return true;
    }
    return item.type === filter;
  });

  if (timeline.length === 0) {
    return <NoData></NoData>;
  }
  return (
    <div className="main-timeline max-w-277.5 mx-auto py-8 md:py-20 px-2 md:px-2 lg:px-0 ">
      <div className="title-sec flex flex-col items-center md:items-start ">
        <h1 className="text-5xl font-bold text-[#1F2937] mb-3 md:mb-6">
          Timeline
        </h1>
        <div className=" w-74 md:w-86.75 text-[18px] text-[#64748B] ">
          <fieldset className="fieldset w-full ">
            <select
              onChange={(e) => setFilter(e.target.value)}
              defaultValue="Pick a browser"
              className="select outline-none w-full bg-[#F8FAFC]"
            >
              <option value="all">All</option>
              <option value="call">Call</option>
              <option value="video">Video</option>
              <option value="text">Text</option>
            </select>
          </fieldset>
        </div>
      </div>
      <div className="timeline-card">
        {filterTimeline.length === 0 ? (
          <NoData></NoData>
        ) : (
          filterTimeline.map((ti, index) => (
            <TimelinCard ti={ti} key={index}></TimelinCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;
