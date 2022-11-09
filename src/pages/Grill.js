import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodComponent from "../components/FoodComponent";
import { listGrill, selectGrill } from "../features/grillSlice";
import client from "../sanity";

function Grill() {
  const dispatch = useDispatch();
  const grill = useSelector(selectGrill);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category' && name =='Grill'][0]{
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
        dispatch(listGrill(data.dishes));
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <FoodComponent title={grill.name} data={grill} />
    </div>
  );
}

export default Grill;
