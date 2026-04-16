import { Inbox } from "lucide-react";
import React from "react";

const NoData = () => {
  return (
    <div className="max-w-277.5 mx-auto py-10 rounded-lg bg-white shadow-md my-20 flex flex-col items-center gap-4">
      <Inbox size={70} color="#64748B"></Inbox>
      <h1 className="text-5xl font-bold text-[#64748B]">No Data Found</h1>
      <p className="text-base text-[#64748B]">
        There is nothing to show here right now.
      </p>
    </div>
  );
};

export default NoData;
