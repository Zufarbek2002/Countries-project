"use client";
import React from "react";
import CountryBox from "./CountryBox";
import { PageContext } from "@/app/layout";

const CountriesMain = () => {
  const { data, page, setPage, filtered } = React.useContext(PageContext);
  return (
    <div id="countries_main">
      <div className="container mx-auto sm:px-10 px-4 pt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:gap-16 gap-10 justify-items-center">
        {filtered?.map((data, i) => (
          <CountryBox key={i} data={data} />
        ))}
      </div>

      <div className="flex">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          prev
        </button>
        <span>{page}</span>
        <button
          disabled={page >= Math.round(250 / 8)}
          onClick={() => setPage(page + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default CountriesMain;
