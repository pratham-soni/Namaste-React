import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurentMenu(resId);

  if (resMenu === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, cuisines } =
    resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
  // console.log(itemCards);

  console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const { cloudinaryImageId } = resMenu?.cards[2]?.card?.card?.info;

  return (
    <div className="resMenuContainer">
      <div className="resDetailsContainer m-4 p-4 flex justify-between bg-green-100">
        <div className="resDetails m-4 p-2">
          <h1 className="font-bold text-xl py-2">{name}</h1>
          <h4 className="py-0.5">Cuisines: {cuisines.join(", ")}</h4>
          <h4 className="py-0.5">Rating: {avgRating} ⭐️</h4>
          <h4 className="py-0.5">Cost for Two: {costForTwoMessage}</h4>
        </div>
        <div className="resImgDetails w-[200px] ">
          <img
            className="resImg rounded-lg"
            src={CDN_URL + cloudinaryImageId}
          ></img>
        </div>
      </div>
      <div className="menuItemContainer flex flex-wrap justify-center items-center flex-col">
        <h2 className="m-4 p-2 font-bold text-xl text-orange-400">Menu</h2>
        <ul className="menuItems m-2 p-2 w-[70%]">
          {itemCards.map((item) => (
            <li
              key={item.card.info.id}
              className="m-2 p-2 bg-blue-100 hover:bg-blue-200 rounded-lg"
            >
              <div className="menuitem flex justify-between">
                <h3 className="m-2 p-2">
                  {item.card.info.name}
                  {"    @  "}
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </h3>
                <img
                  src={CDN_URL + item.card.info.imageId}
                  alt="menuItem.jpg"
                  className="menuItemImg w-20 rounded-lg"
                ></img>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
