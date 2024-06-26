import React from "react";
import CountriesHeader from "@/components/countries/searched/CountriesHeader";
import CountriesMain from "@/components/countries/main/CountriesMain";

const Countries = () => {
  return (
    <div id="countries">
      <CountriesHeader />
      <CountriesMain />
    </div>
  );
};

export default Countries;
