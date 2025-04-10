import RestaurentCard, { withLastMileTravel } from "./RestaurentCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Restaurent_List, Proxy_Fix } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  let [restaurentList, setRestaurentList] = useState([]);
  let [searchedRestaurentList, setSearchedRestaurentList] = useState([]);
  let [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  const ResCardWithLastMileTravelled = withLastMileTravel(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Proxy_Fix + Restaurent_List);
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
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
    <div className="body bg-gray-50">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-sm px-2 py-0.5 bg-white"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-md hover:bg-green-200 cursor-pointer"
            onClick={() => {
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
            className="px-4 py-1 bg-green-100 m-4 rounded-md hover:bg-green-200 cursor-pointer"
            onClick={() => {
              setSearchedRestaurentList(restaurentList);
            }}
          >
            Reset Search
          </button>
          <label>User Name: </label>
          <input
            type="text"
            className="border border-solid border-black mx-2 rounded-sm px-2 py-0.5 bg-white"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>

        <div className="search m-4 flex items-center">
          <button
            className="px-4 py-1 bg-[#f0f0f0] m-4 rounded-md hover:bg-gray-200 cursor-pointer"
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
        {searchedRestaurentList.map((res) => {
          return (
            <Link key={res.info.id} to={"/restaurents/" + res.info.id}>
              {res.info.sla.lastMileTravel >= 1 ? (
                <ResCardWithLastMileTravelled resData={res} />
              ) : (
                <RestaurentCard resData={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
