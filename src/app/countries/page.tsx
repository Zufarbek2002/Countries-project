import React from "react";
import CountriesHeader from "@/components/countries/searched/CountriesHeader";
import CountriesMain from "@/components/countries/main/CountriesMain";

const Countries = () => {
  return (
    <div id="countries" className="mb-10">
      <CountriesHeader />
      <CountriesMain />
    </div>
  );
};

export default Countries;
