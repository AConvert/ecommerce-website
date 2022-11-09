import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodComponent from "../components/FoodComponent";
import { listDessert, selectDessert } from "../features/dessertSlice";
import client from "../sanity";

function Dessert() {
  const dispatch = useDispatch();
  const desserts = useSelector(selectDessert);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category' && name =='Dessert'][0]{
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
        dispatch(listDessert(data.dishes));
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <FoodComponent title={desserts.name} data={desserts} />
    </div>
  );
}

export default Dessert;
