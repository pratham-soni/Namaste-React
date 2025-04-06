import RestaurentItem from "./RestaurentItem";

const RestaurentCategory = ({
  resCatagory,
  showItems,
  setActiveIndex,
  closeItem,
}) => {
  // const [showItems, setShowItems] = useState(false);
  // console.log(resCatagory);
  const { title, itemCards } = resCatagory;
  const handelClick = () => {
    !showItems ? setActiveIndex() : closeItem();
  };

  return (
    <div>
      <div
        className="w-full m-2 p-4 flex justify-between bg-gray-50 hover:bg-gray-200 rounded-lg cursor-pointer shadow-lg"
        onClick={handelClick}
      >
        <div className="">
          <span className="font-bold">{title}</span>
          <span className="font-bold px-1">({itemCards.length})</span>
        </div>
        {showItems ? (
          <div className="text-gray-600">⬆</div>
        ) : (
          <div className="text-gray-600">⬇</div>
        )}
      </div>
      <div>
        {itemCards.map((item) => {
          return (
            showItems && (
              <RestaurentItem key={item?.card?.info?.id} resItem={item?.card} />
            )
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentCategory;
