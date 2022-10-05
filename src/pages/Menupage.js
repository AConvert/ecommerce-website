import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Category from "../components/Category";
import Footer from "../components/Footer";
import MenuHeader from "../components/MenuHeader";
import { addCategory, selectCategory } from "../features/categorySlice";
import client from "../sanity";
import DealsPage from "./DealsPage";
import PopularPage from "./PopularPage";

function Menupage() {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category' ]{
      ...,
      image{
      asset->{
      _id,
      url
    }
    }}`
      )
      .then((data) => {
        dispatch(addCategory(data));
      });
  }, [dispatch]);

  return (
    <div className="h-full w-full">
      <MenuHeader />

      <div className="flex w-full">
        <div className="flex-col">
          <div className="w-screen flex items-center space-x-6 overflow-x-scroll py-2 scrollbar-hide hover:shadow-xl shadow-gray-700 transition-shadow duration-300 ease-in-out ">
            {category.map((category) => {
              return (
                <div>
                  <Link
                    key={category._id}
                    id={category._id}
                    to={`/${category.name}`}
                  >
                    <Category
                      key={category._id}
                      id={category._id}
                      title={category.name}
                      image={category.image}
                    />
                  </Link>
                  <Outlet />
                </div>
              );
            })}
          </div>
          <DealsPage />
          <PopularPage />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Menupage;
