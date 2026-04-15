import React, { Suspense } from "react";
import Banner from "../Components/HomeUi/Banner";
import Friends from "../Components/HomeUi/Friends";
const createFriendspromis = () =>
  fetch("/FriendsData.json").then((res) => res.json());
const friendspromis = createFriendspromis();
const Home = () => {
  return (
    <div className="max-w-277.5 mx-auto  py-20">
      <Banner></Banner>
      <Suspense fallback={<p>loading.....</p>}>
        <Friends friendspromis={friendspromis}></Friends>
      </Suspense>
    </div>
  );
};

export default Home;
