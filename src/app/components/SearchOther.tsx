export const SearchOther = ({ isFarming }: { isFarming: boolean }) => {
  const renderName = (farming: string, marketplace: string) => {
    return isFarming ? farming : marketplace;
  };

  return (
    <div className="flex flex-col gap-2 w-96">
      <div className="bg-white flex justify-between">
        <input
          type="text"
          placeholder={`Search ${renderName("Farming", "DoneDeal")}`}
          className="h-12 w-3/4 px-2 border-r-2"
        ></input>
        <select className="h-12 w-1/4 px-2">
          <option>Ireland</option>
        </select>
      </div>
      <button className="bg-blue-500 text-white w-full h-12 rounded">
        {renderName("Search Farming", "Search Marketplace")}
      </button>
    </div>
  );
};
