import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const RestaurentItem = ({ resItem }) => {
  // console.log(resItem);
  const { info } = resItem;

  const dispatch = useDispatch();
  const handleAddItem = () => {
    // dispatch an action
    dispatch(addItem(resItem));
  };

  return (
    <div className="m-2 p-1 flex justify-between rounded-lg shadow-xl bg-gradient-to-t from-gray-200 to-white  h-[150px]">
      <div className="w-9/12 m-2 px-1">
        <h1 className="font-bold text-sm pb-2">{info.name}</h1>
        <h2 className="text-sm ">
          <span className="text-sm">&#8377;</span>
          {info?.price / 100 || info?.defaultPrice / 100}
        </h2>
        <p className="text-xs text-gray-500 p-2">{info?.description}</p>
      </div>
      <div className=" w-[150px] h-full my-auto">
        <button
          className="bg-gray-200 cursor-pointer text-green-600 absolute rounded-sm m-0.5 px-2 ml-[40px] mb-2 text-sm border border-gray-200 shadow-gray-40 shadow-sm hover:border-gray-300"
          onClick={handleAddItem}
        >
          ADD +
        </button>
        <img
          src={CDN_URL + info.imageId}
          className="w-full bg-white rounded-lg h-[140px]"
        ></img>
      </div>
    </div>
  );
};

export default RestaurentItem;
