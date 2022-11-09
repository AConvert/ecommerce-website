import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DealsCard from "../components/DealsCard";
import { addDeals, selectDeals } from "../features/dealSlice";
import client from "../sanity";

function DealsPage() {
  const dispatch = useDispatch();
  const deals = useSelector(selectDeals);
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'deals']{
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
        dispatch(addDeals(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  // const lowestToBiggestPrice = () => {
  //   let dataPrices = deals.map((deals) => {
  //     return deals.price;
  //   });
  //   const sorting = dataPrices.sort((a, b) => a - b);
  //   console.log(sorting);
  // };

  // lowestToBiggestPrice();

  return (
    <div className="h-fit w-full pb-10 md:pt-0 relative">
      <div className="flex flex-col space-y-6 mt-6 w-screen">
        <h1 className="text-white ml-6 font-bold text-2xl">Top Deals</h1>
        <div className="grid grid-cols-2 grid.auto-rows-max gap-x-3 gap-y-3 px-2 hover:shadow-xl transition-shadow duration-300 ease-in-out md:grid-cols-3 md:px-10 md:gap-x-4 md:gap-y-4 xl:grid xl:grid-cols-4 xl:grid-rows-2 xl:gap-x-4 xl:gap-y-4 ">
          {deals.map((deal) => (
            <DealsCard
              key={deal._id}
              id={deal._id}
              title={deal.deal}
              description={deal.description}
              price={deal.price}
              image={deal.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DealsPage;
