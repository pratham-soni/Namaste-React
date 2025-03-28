import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL, CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResMenu(json?.data);
  };

  if (resMenu === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, cuisines } =
    resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
  console.log(itemCards);

  return (
    <div className="resMenuContainer">
      <div className="resDetailsContainer">
        <h1>{name}</h1>
        <h4>Cuisines: {cuisines.join(", ")}</h4>
        <h4>Rating: {avgRating}</h4>
        <h4>Cost for Two: {costForTwoMessage}</h4>
      </div>
      <div>
        <h2>Menu</h2>
        <ul className="menuItems">
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              <div className="menuitem">
                <h3>
                  {item.card.info.name}
                  {"    @  "}
                  {item.card.info.price / 100}
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
