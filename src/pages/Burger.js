import React, { useState } from "react";
import { useEffect } from "react";
import FoodComponent from "../components/FoodComponent";
import client from "../sanity";

function Burger() {
  const [burger, setBurger] = useState([]);

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
      }}}
      }`
      )
      .then((data) => {
        setBurger(data.dishes);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <FoodComponent title={burger.name} data={burger} />
    </div>
  );
}

export default Burger;
