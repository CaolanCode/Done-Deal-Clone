import { NavBar } from "./NavBar";
import { SearchCars } from "./SearchCars";

export const Header = (props: {}) => {
  return (
    <div className="bg-header-cars h-[50vh] py-2 bg-cover bg-no-repeat bg-center">
      <NavBar />
      <div className="flex justify-center items-center h-full">
        <SearchCars />
      </div>
    </div>
  );
};
