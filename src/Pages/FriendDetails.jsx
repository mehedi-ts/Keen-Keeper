import {
  Archive,
  BellRing,
  Delete,
  MessageSquareMore,
  PhoneCall,
  Trash2,
  Video,
} from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const FriendDetails = () => {
  const { id } = useParams();
  const friends = useLoaderData();
  console.log(friends);
  const friend = friends.find((f) => String(f.id) === id);
  const {
    picture,
    name,
    days_since_contact,
    status,
    tags,
    bio,
    email,
    goal,
    next_due_date,
  } = friend;

  return (
    <div className="w-full py-20">
      <div className="max-w-277.5 mx-auto  py grid grid-cols-5 gap-6">
        <div className="person col-span-2 flex flex-col gap-4">
          <div className="mainbox ">
            <div className="p-6 bg-white rounded-lg flex flex-col items-center gap-3 shadow-lg">
              <div className="img h-20 w-20 flex items-center justify-center  rounded-full overflow-hidden ">
                <img className="w-full" src={picture} alt="" />
              </div>
              <div className="info text-center flex flex-col items-center gap-2">
                <h2 className="text-[#1F2937] text-[20px] font-semibold">
                  {name}
                </h2>

                <p
                  className={`py-2 px-3.5  text-white flex items-center justify-center text-[12px] font-medium rounded-full w-fit ${status === "on-track" ? "bg-[#244D3F]" : status === "overdue" ? "bg-[#EF4444]" : "bg-[#EFAD44]"}`}
                >
                  {status}
                </p>
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {tags.map((tag) => (
                    <span className=" text-[#244D3F] text-[12px] font-medium bg-[#CBFADB] rounded-full py-1 px-2 flex items-center justify-center">
                      {tag}
                    </span>
                  ))}
                  <p className=" italic text-base text-[#64748B] font-medium text-center">
                    "{bio}"
                  </p>
                  <p className="text-sm text-[#64748B]">Preferred: {email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="btns flex  flex-col gap-2 ">
            <div className="btn bg-white text-base text-[#1F2937] font-medium shadow-sm flex items-center gap-2 ">
              <BellRing size={18}></BellRing> Snooze 2 weeks
            </div>
            <div className="btn bg-white text-base text-[#1F2937] font-medium shadow-sm flex items-center gap-2">
              <Archive size={18}></Archive> Archive
            </div>
            <div className="btn bg-white text-base text-[#1F2937] font-medium shadow-sm flex items-center gap-2">
              <Trash2 size={18}></Trash2> Delete
            </div>
          </div>
        </div>
        <div className="stat  col-span-3 flex flex-col gap-6 p-0">
          <div className="grid grid-cols-3 gap-6 ">
            <div className=" flex flex-col shadow-md rounded-lg items-center py-8 px-4 bg-white">
              <h1 className="text-3xl font-semibold text-[#244D3F]">
                {days_since_contact}
              </h1>
              <p className="text-[18px] text-[#64748B]">Days Since Contact</p>
            </div>
            <div className=" flex flex-col shadow-md rounded-lg items-center py-8 px-4 bg-white">
              <h1 className="text-3xl font-semibold text-[#244D3F]">{goal}</h1>
              <p className="text-[18px] text-[#64748B]">Goal (Days)</p>
            </div>
            <div className=" flex flex-col shadow-md rounded-lg items-center py-8  bg-white">
              <h1 className="text-3xl font-semibold text-[#244D3F]">
                {next_due_date}
              </h1>
              <p className="text-[18px] text-[#64748B]">Next Due</p>
            </div>
          </div>
          <div className=" bg-white shadow-md p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-[#244D3F] text-xl font-medium">
                Relationship Goal
              </p>
              <button className="btn text-sm font-medium text-[#1F2937] py-1 px-3">
                Edit
              </button>
            </div>
            <div>
              <p className="text-[18px] text-[#64748B]">
                Connect every{" "}
                <span className="text-[#1F2937] font-bold">{goal} days</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 flex flex-col gap-4">
            <h2 className="text-[#244D3F] text-xl font-medium">
              Quick Check-In
            </h2>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-4 rounded-lg bg-[#F8FAFC] flex flex-col items-center gap-2 cursor-pointer ">
                <PhoneCall size={28}></PhoneCall>
                <p className="text-[18px] text-[#1F2937]">Call</p>
              </div>
              <div className="p-4 rounded-lg bg-[#F8FAFC] flex flex-col items-center gap-2 cursor-pointer ">
                <MessageSquareMore size={28}></MessageSquareMore>
                <p className="text-[18px] text-[#1F2937]">Text</p>
              </div>
              <div className="p-4 rounded-lg bg-[#F8FAFC] flex flex-col items-center gap-2 cursor-pointer ">
                <Video size={28}></Video>
                <p className="text-[18px] text-[#1F2937]">Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
