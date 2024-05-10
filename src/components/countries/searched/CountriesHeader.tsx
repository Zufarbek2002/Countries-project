"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import searchIcon from "@/assets/icons/search.svg";
import { PageContext } from "@/app/layout";
import axios from "axios";

const CountriesHeader = () => {
  const { mode, setFiltered, page, data } = React.useContext(PageContext);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.toLowerCase();
    try {
      const res = await axios.get(
        `https://countries-restapi.vercel.app/name/${text}?page=${page}&limit=8`
      );
      const data = await res.data;
      setFiltered(data.data);
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const text = e.target.value;
    if (text == "All") {
      setFiltered(data as any);
    } else {
      try {
        const res = await axios.get(
          `https://countries-restapi.vercel.app/region/${text}?page=${page}&limit=8`
        );
        const data = await res.data;
        setFiltered(data.data);
      } catch (error) {
        console.log((error as Error).message);
      }
    }
  };

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
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <div
          className={`"filter_box w-full sm:w-auto pr-5 bg-white rounded-lg overflow-hidden shadow-[0_2px_9px_0_#0000000E]" ${
            mode ? "header_dark-mode" : ""
          }`}
        >
          <select
            className="select_filter w-full sm:w-auto py-5 px-6 cursor-pointer outline-none bg-inherit"
            onChange={(e) => handleChange(e)}
          >
            <option value="All">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CountriesHeader;
