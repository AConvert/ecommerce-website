import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PopularCard from "../components/PopularCard";
import { addPopularDish, selectPopular } from "../features/popularDishSlice";
import client from "../sanity";

function PopularPage() {
  const dispatch = useDispatch();
  const popular = useSelector(selectPopular);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'popular']{
        ...,
        image{
          asset->{
            _id,
            url
          }
        }
          }`
      )
      .then((data) => {
        dispatch(addPopularDish(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div>
      <div className="h-full w-screen pb-16">
        <div className="flex flex-col space-y-6 mt-6 w-screen">
          <h1 className="text-white font-bold text-2xl ml-6">Most Popular</h1>
          <div className="grid grid-cols-2 gap-x-3 gap-y-3 px-2 hover:shadow-xl transition-shadow duration-300 ease-in-out md:grid-cols-3 md:px-10 md:gap-x-4 md:gap-y-4 xl:grid xl:grid-cols-4 xl:grid-rows-2 xl:gap-x-4 xl:gap-y-4 ">
            {popular.map((item) => (
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
      </div>
    </div>
  );
}

export default PopularPage;
