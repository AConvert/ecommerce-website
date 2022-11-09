import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodComponent from "../components/FoodComponent";
import { listDrink, selectDrink } from "../features/drinkSlice";
import client from "../sanity";

function Drinks() {
  const dispatch = useDispatch();
  const drinks = useSelector(selectDrink);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category' && name =='Drinks'][0]{
          'dishes': *[_type == 'dishes' && ^._id in category[]._ref]{
          ...,
          image{
          asset->{
          _id,
          url
          }}}
          }`
      )
      .then((data) => {
        dispatch(listDrink(data.dishes));
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <FoodComponent title={drinks.name} data={drinks} />
    </div>
  );
}

export default Drinks;
