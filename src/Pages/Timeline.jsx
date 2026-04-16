import React, { useContext, useState } from "react";
import { FriendTimelineContext } from "../Context/FriendTimelineContext";
import TimelinCard from "../Components/Reusable/TimelinCard";

const Timeline = () => {
  const [filter, setFilter] = useState("all");
  const { timeline } = useContext(FriendTimelineContext);

  const filterTimeline = timeline.filter((item) => {
    if (filter === "all") {
      return true;
    }
    return item.type === filter;
  });
  return (
    <div className="main-timeline max-w-277.5 mx-auto  py-20 ">
      <div className="title-sec ">
        <h1 className="text-5xl font-bold text-[#1F2937] mb-6">Timeline</h1>
        <div>
          <fieldset className="fieldset">
            <select
              onChange={(e) => setFilter(e.target.value)}
              defaultValue="Pick a browser"
              className="select outline-none"
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
        {filterTimeline.map((ti, index) => (
          <TimelinCard ti={ti} key={index}></TimelinCard>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
