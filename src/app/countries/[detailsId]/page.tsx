/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import axios from "axios";
import { PageContext } from "@/app/layout";

const Details = () => {
  const { mode } = React.useContext(PageContext);
  const [data, setData] = useState([]);
  const { detailsId } = useParams();

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/alpha/${detailsId}`
      );
      const data = await res.data;
      setData(data);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto sm:px-10 px-4 pb-10">
      <div className="mt-20 w-32 text-center rounded-md overflow-hidden">
        <Link href="/countries">
          <div className={`py-2.5 ${mode ? "header_dark-mode" : ""}`}>
            &larr; Back
          </div>
        </Link>
      </div>
      {data?.map((data: any, i: number) => (
        <div
          key={i}
          className="mt-20 grid lg:grid-cols-2 grid-cols-1 items-center gap-10"
        >
          <div className="w-full max-w-xl bg-black rounded-xl overflow-hidden">
            <Image
              src={data?.flags?.png}
              alt="Country flag"
              className="w-full"
              width={560}
              height={401}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="">
            <div className="font-extrabold text-3xl mb-6">
              {data.name.common}
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 items-start gap-2">
              <div className="grid gap-y-2">
                <div className="font-semibold text-base">
                  Native Name:{" "}
                  <span className="font-normal">{data.altSpellings[2]}</span>
                </div>
                <div className="font-semibold text-base">
                  Population:{" "}
                  <span className="font-normal">{data.population}</span>
                </div>
                <div className="font-semibold text-base">
                  Region: <span className="font-normal">{data.region}</span>
                </div>
                <div className="font-semibold text-base">
                  Sub Region:{" "}
                  <span className="font-normal">{data.subregion}</span>
                </div>
                <div className="font-semibold text-base">
                  Capital: <span className="font-normal">{data.capital}</span>
                </div>
              </div>
              <div className="grid gap-y-2">
                <div className="font-semibold text-base">
                  Top Level Domain:{" "}
                  <span className="font-normal">{data.tld}</span>
                </div>
                <div className="font-semibold text-base">
                  Currencies:{" "}
                  <span className="font-normal">
                    {Object.values(data.currencies)[0]?.name}
                  </span>
                </div>
                <div className="font-semibold text-base">
                  Languages:{" "}
                  <span className="font-normal">
                    {`${Object.values(data.languages)}`}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-16 xl:flex-row xl:items-center">
              <div className="font-semibold text-base">Border Countries:</div>
              <div className="font-normal text-base flex gap-2.5 items-center">
                {data?.borders?.map((border: string, i: number) => (
                  <Link href="/countries/1" key={i}>
                    <div
                      className={`"bg-white shadow-[0_0_4_1px_#0000001B] border-2 px-7 py-1 rounded-md overflow-hidden" ${
                        mode ? "header_dark-mode border-none" : ""
                      }`}
                    >
                      {border}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
