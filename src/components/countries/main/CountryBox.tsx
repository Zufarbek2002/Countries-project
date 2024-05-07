"use client";
import React from "react";
import Image from "next/image";
import GermanFlag from "@/assets/flags/german-flag.png";
import { PageContext } from "@/app/layout";
import Link from "next/link";

const CountryBox = () => {
  const { mode } = React.useContext(PageContext);

  return (
    <Link
      href="/countries/1"
      className={`"country_box w-full max-w-64 pb-5 bg-white shadow-[0_0_7px_2px_#00000008] rounded-lg overflow-hidden " ${
        mode ? "header_dark-mode" : ""
      }`}
    >
      <Image src={GermanFlag} alt="German flag" />
      <div className="box_text p-6 ">
        <h3 className="font-extrabold text-lg pb-4">Germany</h3>
        <h4 className="font-semibold text-sm pb-1">
          Population: <span className="font-light text-sm">81,770,900</span>
        </h4>
        <h4 className="font-semibold text-sm pb-1">
          Region: <span className="font-light text-sm">Europe</span>
        </h4>
        <h4 className="font-semibold text-sm">
          Capital: <span className="font-light text-sm">Berlin</span>
        </h4>
      </div>
    </Link>
  );
};

export default CountryBox;
