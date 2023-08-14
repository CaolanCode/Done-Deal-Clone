export const SearchCars = (props: {}) => {
  const topQuartarClass = "w-56 h-12";
  const bottomQuartarClass = topQuartarClass + " flex";

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-2">
        <select className={topQuartarClass}>
          <option value="allMakes">All Makes</option>
        </select>
        <select className={topQuartarClass}>
          <option value="allModels">All Models</option>
        </select>
        <div className={bottomQuartarClass}>
          <select className="flex-1">
            <option value="minYear">Min Year</option>
          </select>
          <select className="flex-1">
            <option value="maxYear">Max Year</option>
          </select>
        </div>
        <div className={bottomQuartarClass}>
          <select className="flex-1">
            <option value="minPrice">Min Price</option>
          </select>
          <select className="flex-1">
            <option value="maxPrice">Max Price</option>
          </select>
        </div>
      </div>
      <button className="bg-blue-500 text-white w-full mt-2 rounded h-12">
        Search (number) Cars
      </button>
    </div>
  );
};
