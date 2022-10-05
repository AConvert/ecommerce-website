import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import FoodComponent from "../components/FoodComponent";
import MenuHeader from "../components/MenuHeader";
import PopularCard from "../components/PopularCard";
import { addBurgers, selectBurger } from "../features/burgerSlice";
import client from "../sanity";

function Pizza() {
  const dispatch = useDispatch();
  const burgers = useSelector(selectBurger);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category' && name =='Burger'][0]{
      'dishes': *[_type == 'dishes' && ^._id in category[]._ref]{
      ...,
      image{
      asset->{
      _id,
      url
    }
    }
    }
      }`
      )
      .then((data) => {
        dispatch(addBurgers(data.dishes));
      });
  }, [dispatch]);

  return (
    <main className="h-full w-full">
      <MenuHeader />
      <section className="">
        <div className="flex flex-col space-y-6 mt-6 w-screen">
          <h1 className="text-white font-bold text-2xl ml-6">
            {burgers.title}
          </h1>
          <div className=" grid grid-cols-2 gap-x-3 gap-y-3 px-2 pb-12 hover:shadow-xl transition-shadow duration-300 ease-in-out md:grid-cols-3 md:px-10 md:gap-x-4 md:gap-y-4 xl:grid xl:grid-cols-4 xl:grid-rows-2 xl:gap-x-4 xl:gap-y-4 ">
            {burgers.map((item) => (
              <PopularCard
                id={item._id}
                key={item._id}
                price={item.price}
                description={item.description}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pizza;
