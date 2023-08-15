"use client";

import { NavBar } from "./NavBar";
import { SearchCars } from "./SearchCars";
import { SearchOther } from "./SearchOther";
import { useState } from "react";

export const Header = () => {
  const activeClass = "underline underline-offset-4 cursor-pointer";
  const [selectedSection, setSelectedSection] = useState("Motor");

  const handleClick = (section: string) => {
    setSelectedSection(section);
  };

  let selectedComponent;
  if (selectedSection === "Motor") {
    selectedComponent = <SearchCars />;
  } else if (selectedSection === "Farming") {
    selectedComponent = <SearchOther isFarming={true} />;
  } else {
    selectedComponent = <SearchOther isFarming={false} />;
  }

  return (
    <div className="bg-header-cars h-[50vh] py-2 bg-cover bg-no-repeat bg-center">
      <NavBar title={selectedSection} />
      <div className="flex items-center p-16 flex-col">
        <div className="flex text-white gap-10 mb-3">
          <div
            className={`cursor-pointer ${
              selectedSection === "Motor" ? activeClass : ""
            }`}
            onClick={() => handleClick("Motor")}
          >
            Motor
          </div>
          <div
            className={`cursor-pointer ${
              selectedSection === "Marketplace" ? activeClass : ""
            }`}
            onClick={() => handleClick("Marketplace")}
          >
            Marketplace
          </div>
          <div
            className={`cursor-pointer ${
              selectedSection === "Farming" ? activeClass : ""
            }`}
            onClick={() => handleClick("Farming")}
          >
            Farming
          </div>
        </div>
        {selectedComponent}
      </div>
    </div>
  );
};
