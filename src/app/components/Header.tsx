import { NavBar } from "./NavBar";
import { SearchCars } from "./SearchCars";
import { SearchOther } from "./SearchOther";

export const Header = (props: {}) => {
  const activeClass = "underline underline-offset-4 cursor-pointer";
  const title: string = "Motor";
  return (
    <div className="bg-header-cars h-[50vh] py-2 bg-cover bg-no-repeat bg-center">
      <NavBar title={title} />
      <div className="flex justify-center items-center h-full flex-col">
        <div className="flex text-white gap-10 mb-3">
          <div className="cursor-pointer">Motor</div>
          <div className="cursor-pointer">Marketplace</div>
          <div className="cursor-pointer">Farming</div>
        </div>
        <SearchOther isFarming={false} />
      </div>
    </div>
  );
};
