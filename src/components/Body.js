import resList from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("clicked..");
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {/*  once you add a loop or map, add key property so that react can uniquely identify the same level components*/}
        {resList.map((res) => {
          return <RestaurentCard key={res.data.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
