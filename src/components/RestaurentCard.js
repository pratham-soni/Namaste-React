const RestaurentCard = (props) => {
  const { resData } = props;
  // optional chaining "?."
  const { name, cuisines, avgRating, deliveryTime, costForTwo, img } =
    resData?.data;
  return (
    <div className="res-card">
      <img alt="res-logo" className="res-logo" src={img}></img>
      <h3 className="res-name">{name}</h3>
      <h5 className="res-cuisine">{cuisines.join(", ")}</h5>
      <h5 className="res-rating"> {avgRating} ⭐️</h5>
      <h5 className="res-ETA">{deliveryTime} minutes</h5>
      <h5 className="res-ETA">{costForTwo / 100}</h5>
    </div>
  );
};

export default RestaurentCard;
