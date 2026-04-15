import React from "react";
import { useLoaderData, useParams } from "react-router";

const FriendDetails = () => {
  const { id } = useParams();
  const friends = useLoaderData();
  console.log(friends);
  const freind = friends.find((f) => String(f.id) === id);
  console.log(freind);

  return (
    <div>
      <h1>Friend Details</h1>
    </div>
  );
};

export default FriendDetails;
