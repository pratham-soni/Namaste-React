import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";

const Body = () => {
  /*
   * once we create restaurentList state variable, react will keep an eye on it.
   * once setRestaurentList is called, that means we are changing something in restairentList,
   * it will trigger the diff algo of react. It will find out the differance between the old and new virtual DOM
   * and later it will update (re-render) the UI.
   */

  let [restaurentList, setRestaurentList] = useState([]);

  // if u have to do something, after randering component, u can write it inside useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // console.log(json?.data?.cards[0]?.card?.card?.imageGridCards.info);
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurentList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurentList.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurentList(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {/*  once you add a loop or map, add key property so that react can uniquely identify the same level components*/}
        {restaurentList.map((res) => {
          return <RestaurentCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
