import React, { useEffect, useState } from "react";
import Category from "../components/Category";
import DealsCard from "../components/DealsCard";
import MenuHeader from "../components/MenuHeader";
import client from "../sanity";

function Menupage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category' ]{
      ...,
      image{
      asset->{
      _id,
      url
    }
    }}`
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="h-screen w-screen">
      <MenuHeader />

      <div className="flex ">
        <div className="flex-col">
          <div className="flex items-center space-x-6 overflow-x-scroll scrollbar-hide hover:shadow-xl shadow-gray-700 transition-shadow duration-300 ease-in-out">
            {categories.map((category) => (
              <Category
                key={category._id}
                id={category._id}
                title={category.name}
                image={category.image}
              />
            ))}
          </div>
          <div>
            <h1 className="text-white font-bold text-2xl">Top Deals</h1>
            <DealsCard />
          </div>
        </div>

        {/* basket column */}

        {/* <section className=" w-2/6 h-screen text-white border-l-2 border-l-gray-300">
          <div>Your Basket</div>
        </section> */}
      </div>
    </div>
  );
}

export default Menupage;
