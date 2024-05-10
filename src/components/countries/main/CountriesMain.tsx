"use client";
import React from "react";
import CountryBox from "./CountryBox";
import { PageContext } from "@/app/layout";
import Pagination from "./Pagination";
import loader from "@/assets/loader.svg";
import Image from "next/image";

const CountriesMain = () => {
  const { filtered, loading } =
    React.useContext(PageContext);
  return (
    <div id="countries_main">
      {loading && (
        <div className=" flex justify-center">
          <Image src={loader} alt="loader" />
        </div>
      )}
      <div className="container mx-auto sm:px-10 px-4 pt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:gap-16 gap-10 justify-items-center">
        {filtered?.map((data, i) => (
          <CountryBox key={i} data={data} />
        ))}
      </div>

      <Pagination />
    </div>
  );
};

export default CountriesMain;
