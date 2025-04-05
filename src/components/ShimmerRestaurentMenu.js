const ShimmerRestaurentMenu = () => {
  return (
    <div className="w-7/12 m-auto">
      <div className="border-b border-x border-gray-100 rounded-b-3xl bg-gradient-to-t from-gray-100 to-white">
        <div className="bg-white m-3 rounded-2xl">
          <h1 className="font-bold text-2xl px-1 mt-10 mb-6 text-gray-200">
            Restaurent Name Loading
          </h1>
          <div className="border-2 border-gray-100 p-3 rounded-2xl">
            <span className="font-bold text-sm text-gray-200">
              <span className="text-lg text-gray-200">✪</span> Loading
            </span>
            <span className="font-bold text-sm px-1 text-gray-200">(...)</span>
            <p className="text-sm text-gray-200">rating</p>
            <p className="text-sm text-gray-200">cost for two</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerRestaurentMenu;
