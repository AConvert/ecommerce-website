import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodComponent from "../components/FoodComponent";
import { listsalads, selectSalad } from "../features/saladSlice";
import client from "../sanity";

function Salad() {
  const dispatch = useDispatch();
  const salads = useSelector(selectSalad);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category' && name =='Salad'][0]{
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
        dispatch(listsalads(data.dishes));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div>
      <FoodComponent title="Salad" data={salads} />
    </div>
  );
}

export default Salad;
