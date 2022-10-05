import React from "react";
import Banner from "../components/Banner";
import Feed from "../components/Feed";
import Header from "../components/Header";

function Homepage() {
  return (
    <div className="pb-24 h-full w-screen">
      <Header />
      <Banner />
      <div className="flex py-20 items-center justify-center space-x-8 md:space-x-12 xl:space-x-14">
        <Feed
          title="Pizza Portobello"
          imgUrl="../image/salad_1.png"
          rating={4.5}
          price={20.12}
        />
        <Feed
          title="Pizza Margherita"
          imgUrl="../image/salad_1.png"
          rating={4.5}
          price={9.75}
        />
        <div className="hidden md:block">
          <Feed
            title="Pizza Friarelli"
            imgUrl="../image/salad_1.png"
            rating={4.5}
            price={12}
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
