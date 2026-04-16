import React, { useContext } from "react";
import { Legend, Pie, PieChart } from "recharts";
import { FriendTimelineContext } from "../Context/FriendTimelineContext";

const Stats = () => {
  const { timeline } = useContext(FriendTimelineContext);
  const count = {
    text: 0,
    call: 0,
    video: 0,
  };
  timeline.forEach((element) => {
    if (element.type === "text") {
      count.text++;
    }
    if (element.type === "call") {
      count.call++;
    }
    if (element.type === "video") {
      count.video++;
    }
  });
  const data = [
    { name: "Text", value: count.text, fill: "#7F37F5" },
    { name: "Call", value: count.call, fill: "#244D3F" },
    { name: "Video", value: count.video, fill: "#37A163" },
  ];
  return (
    <div className="max-w-277.5 mx-auto flex flex-col gap-6 py-20">
      <h1 className="text-5xl font-bold text-[#1F2937]">
        Friendship Analytics
      </h1>
      <div className="bg-white rounded-lg shadow-sm p-8 ">
        <h4 className="text-xl font-medium text-[#244D3F] mb-6">
          By Interaction Type
        </h4>
        <div className=" flex items-center justify-center  w-full">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "300px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
              // isAnimationActive={isAnimationActive}
            />
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;
