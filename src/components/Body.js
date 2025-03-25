import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
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

  return restaurentList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="input-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
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
            className="reset-btn"
            onClick={() => {
              setSearchedRestaurentList(restaurentList);
            }}
          >
            Reset Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = searchedRestaurentList.filter(
              (res) => res.info.avgRating > 4
            );
            setSearchedRestaurentList(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {/*  once you add a loop or map, add key property so that react can uniquely identify the same level components*/}
        {searchedRestaurentList.map((res) => {
          return <RestaurentCard key={res.info.id} resData={res} />;
        })}
      </div>
      {/* changin */}
    </div>
  );
};

export default Body;
