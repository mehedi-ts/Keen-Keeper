import React, { use } from "react";
import FriendCard from "../Reusable/FriendCard";

const Friends = ({ friendspromis }) => {
  const friendsData = use(friendspromis);
  console.log(friendsData);
  return (
    <div className="mt-10">
      <h1 className="font-semibold text-2xl text-[#1F2937] mb-4">
        Your Friends
      </h1>
      <div className="friends-con grid grid-cols-4 gap-6">
        {friendsData.map((friend) => (
          <FriendCard friend={friend} key={friend.id}></FriendCard>
        ))}
      </div>
    </div>
  );
};

export default Friends;
