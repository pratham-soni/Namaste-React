import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCateory";
import ShimmerRestaurentMenu from "./ShimmerRestaurentMenu";
import { useState } from "react";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurentMenu(resId);
  const [activeIndex, setActiveIndex] = useState(null);

  if (resMenu === null) return <ShimmerRestaurentMenu />;

  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines } =
    resMenu?.cards[2]?.card?.card?.info;
  // console.log(resMenu?.cards[2]?.card?.card?.info);
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
  // console.log(itemCards);

  const resCategoryObj =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(resCategoryObj);

  const { cloudinaryImageId } = resMenu?.cards[2]?.card?.card?.info;

  return (
    <div className="w-7/12 m-auto">
      <div className="border-b border-x border-gray-200 rounded-b-3xl bg-gradient-to-t from-gray-300 to-white">
        <div className="bg-white m-3 rounded-2xl">
          <h1 className="font-bold text-2xl px-1 mt-10 mb-6">{name}</h1>
          <div className="border-2 border-gray-300 p-3 rounded-2xl">
            <span className="font-bold text-sm">
              <span className="text-green-800 text-lg">✪</span> {avgRating}
            </span>
            <span className="font-bold text-sm px-1">
              ({totalRatingsString})
            </span>
            <p className="text-sm">{cuisines.join(", ")}</p>
            <p className="text-sm">{costForTwoMessage}</p>
          </div>
        </div>
      </div>

      <div className="m-4 p-2 font-bold">Deals for you</div>

      <div className="w-2/12 m-auto text-center text-sm text-gray-500">
        {"<-  "} M E N U {"  ->"}
      </div>

      <div className="">
        {resCategoryObj.map((category, index) => {
          return (
            <RestaurentCategory
              key={category?.card?.card?.title}
              resCatagory={category?.card?.card}
              showItems={index === activeIndex ? true : false}
              setActiveIndex={() => setActiveIndex(index)}
              closeItem={() => setActiveIndex(null)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentMenu;
