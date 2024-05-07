"use client";
import React from "react";
import Image from "next/image";
import searchIcon from "@/assets/icons/search.svg";
import { PageContext } from "@/app/layout";

const CountriesHeader = () => {
  const { mode } = React.useContext(PageContext);

  return (
    <div>
      <div className="container mx-auto sm:px-10 px-4 mt-12 flex gap-10 sm:flex-row flex-col justify-between items-center">
        <div
          className={`"search_box flex gap-6 w-full md:max-w-md sm:max-w-xs py-5 px-8 bg-white rounded-lg shadow-[0_2px_9px_0_#0000000E]" ${
            mode ? "header_dark-mode" : ""
          }`}
        >
          <Image src={searchIcon} alt="Search icon" />
          <input
            type="text"
            placeholder="Search for a country…"
            className="outline-none w-full bg-inherit"
          />
        </div>
        <div
          className={`"filter_box w-full sm:w-auto pr-5 bg-white rounded-lg overflow-hidden shadow-[0_2px_9px_0_#0000000E]" ${
            mode ? "header_dark-mode" : ""
          }`}
        >
          <select
            name=""
            id=""
            className="select_filter w-full sm:w-auto py-5 px-6 cursor-pointer outline-none bg-inherit"
          >
            <option value="All">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Africa">America</option>
            <option value="Africa">Asia</option>
            <option value="Africa">Europe</option>
            <option value="Africa">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CountriesHeader;
