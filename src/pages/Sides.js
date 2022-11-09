import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodComponent from "../components/FoodComponent";
import { listSides, selectSides } from "../features/sideSlice";
import client from "../sanity";

function Sides() {
  const dispatch = useDispatch();
  const sides = useSelector(selectSides);

  console.log(sides);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category' && name =='Side'][0]{
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
        dispatch(listSides(data.dishes));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div>
      <FoodComponent title={sides.name} data={sides} />
    </div>
  );
}

export default Sides;
