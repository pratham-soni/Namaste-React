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
  console.log(itemCards);

  const { cloudinaryImageId } = resMenu?.cards[2]?.card?.card?.info;
  console.log(cloudinaryImageId);

  return (
    <div className="resMenuContainer">
      <div className="resDetailsContainer">
        <div className="resDetails">
          <h1>{name}</h1>
          <h4>Cuisines: {cuisines.join(", ")}</h4>
          <h4>Rating: {avgRating}</h4>
          <h4>Cost for Two: {costForTwoMessage}</h4>
        </div>
        <div className="resImgDetails">
          <img className="resImg" src={CDN_URL + cloudinaryImageId}></img>
        </div>
      </div>
      <div className="menuItemContainer">
        <h2>Menu</h2>
        <ul className="menuItems">
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              <div className="menuitem">
                <h3>
                  {item.card.info.name}
                  {"    @  "}
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </h3>
                <img
                  src={CDN_URL + item.card.info.imageId}
                  alt="menuItem.jpg"
                  className="menuItemImg"
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
