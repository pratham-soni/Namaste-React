import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  /*
   * once we create restaurentList state variable, react will keep an eye on it.
   * once setRestaurentList is called, that means we are changing something in restairentList,
   * it will trigger the diff algo of react. It will find out the differance between the old and new virtual DOM
   * and later it will update (re-render) the UI.
   */

  let [restaurentList, setRestaurentList] = useState([]);
  let [searchedRestaurentList, setSearchedRestaurentList] = useState([]);

  let [searchText, setSearchText] = useState("");
  // whenever state variable updates, react triggeres the recounciliation cycle, (rerenders the component)
  console.log("Body Randered");

  // if u have to do something, after randering component, u can write it inside useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurentList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setSearchedRestaurentList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you have lost internet connectivity. Please Reconnect !!
      </h1>
    );

  return restaurentList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-0.5 bg-green-100 m-4 rounded-md"
            onClick={() => {
              // filter the restaurent and update the UI
              // search text
              console.log(searchText);

              const searchedRestaurentList = restaurentList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setSearchedRestaurentList(searchedRestaurentList);
            }}
          >
            Search Restaurent
          </button>
          <button
            className="px-4 py-0.5 bg-green-100 m-4 rounded-md"
            onClick={() => {
              setSearchedRestaurentList(restaurentList);
            }}
          >
            Reset Search
          </button>
        </div>

        <div className="search m-4 flex items-center">
          <button
            className="px-4 py-0.5 bg-[#f0f0f0] m-4 rounded-md"
            onClick={() => {
              const filteredList = searchedRestaurentList.filter(
                (res) => res.info.avgRating >= 4.4
              );
              setSearchedRestaurentList(filteredList);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-between m-4 p-4">
        {/* test */}
        {/*  once you add a loop or map, add key property so that react can uniquely identify the same level components*/}
        {searchedRestaurentList.map((res) => {
          return (
            <Link key={res.info.id} to={"/restaurents/" + res.info.id}>
              <RestaurentCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
