import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  // optional chaining "?."
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card m-4 p-2 w-[280px] bg-gray-100 shadow-lg hover:bg-gray-200 rounded-md h-[410px] text-sm">
      <img
        alt="res-logo"
        className="res-logo p-0.5 w-[260px] h-[230px] rounded-md pb-1"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="res-name font-bold text-lg py-2">{name}</h3>
      <h5 className="res-cuisine">{cuisines.join(", ")}</h5>
      <h5 className="res-rating"> {avgRating} ⭐️</h5>
      <h5 className="res-ETA">{sla?.deliveryTime} minutes</h5>
      <h5 className="res-ETA">{costForTwo}</h5>
    </div>
  );
};

export const withLastMileTravel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white mx-3 rounded-lg p-2 bg-opacity-5">
          Travelled More than {props.resData.info.sla.lastMileTravel}km
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
