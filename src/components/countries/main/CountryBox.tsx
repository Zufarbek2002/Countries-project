"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageContext } from "@/app/layout";

const CountryBox = ({ data }: { data: any }) => {
  const { mode } = React.useContext(PageContext);
  return (
    <Link
      href={`/countries/${data?.ccn3}`}
      className={`"country_box w-full max-w-64 pb-5 bg-white shadow-[0_0_7px_2px_#00000008] rounded-lg overflow-hidden " ${
        mode ? "header_dark-mode" : ""
      }`}
    >
      <div className="w-full h-40">
        <Image
          src={data?.flags?.png}
          alt="German flag"
          width={264}
          height={160}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="box_text p-6 ">
        <h3 className="font-extrabold text-lg pb-4">{data.name.common}</h3>
        <h4 className="font-semibold text-sm pb-1">
          Population:{" "}
          <span className="font-light text-sm">{data.population}</span>
        </h4>
        <h4 className="font-semibold text-sm pb-1">
          Region: <span className="font-light text-sm">{data.region}</span>
        </h4>
        <h4 className="font-semibold text-sm">
          Capital: <span className="font-light text-sm">{data.capital}</span>
        </h4>
      </div>
    </Link>
  );
};

export default CountryBox;
