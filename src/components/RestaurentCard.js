import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  // optional chaining "?."
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="res-name">{name}</h3>
      <h5 className="res-cuisine">{cuisines.join(", ")}</h5>
      <h5 className="res-rating"> {avgRating} ⭐️</h5>
      <h5 className="res-ETA">{sla?.deliveryTime}</h5>
      <h5 className="res-ETA">{costForTwo}</h5>
    </div>
  );
};

export default RestaurentCard;
