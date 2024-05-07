import React from "react";
import CountryBox from "./CountryBox";

const CountriesMain = () => {
  return (
    <div id="countries_main">
      <div className="container mx-auto sm:px-10 px-4 pt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:gap-16 gap-10 justify-items-center">
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
      </div>
    </div>
  );
};

export default CountriesMain;
