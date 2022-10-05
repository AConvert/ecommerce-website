import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodComponent from "../components/FoodComponent";
import { addPizzas, selectPizza } from "../features/pizzaSlice";
import client from "../sanity";

function Pizza() {
  const dispatch = useDispatch();
  const Pizzas = useSelector(selectPizza);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category' && name =='Pizza'][0]{
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
        dispatch(addPizzas(data.dishes));
      });
  }, [dispatch]);

  return (
    <div>
      <FoodComponent title={Pizzas.title} data={Pizzas} />
    </div>
  );
}

export default Pizza;
