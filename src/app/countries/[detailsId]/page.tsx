"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import GermanFlag from "@/assets/flags/german-flag.png";
import { PageContext } from "@/app/layout";

const Details = () => {
  const { mode } = React.useContext(PageContext);

  return (
    <div className="container mx-auto sm:px-10 px-4">
      <div className="mt-20 w-32 text-center rounded-md overflow-hidden">
        <Link href="/countries">
          <div className={`py-2.5 ${mode ? "header_dark-mode" : ""}`}>
            &larr; Back
          </div>
        </Link>
      </div>
      <div className="mt-20 grid lg:grid-cols-2 grid-cols-1 items-center gap-10">
        <div className="w-full max-w-xl bg-black rounded-xl overflow-hidden">
          <Image src={GermanFlag} alt="Country flag" className="w-full" />
        </div>
        <div className="">
          <div className="font-extrabold text-3xl mb-6">Belgium</div>
          <div className="grid sm:grid-cols-2 grid-cols-1 items-start">
            <div className="grid gap-y-2">
              <div className="font-semibold text-base">
                Native Name: <span className="font-normal">België</span>
              </div>
              <div className="font-semibold text-base">
                Population: <span className="font-normal">11,319,511</span>
              </div>
              <div className="font-semibold text-base">
                Region: <span className="font-normal">Europe</span>
              </div>
              <div className="font-semibold text-base">
                Sub Region: <span className="font-normal">Europe</span>
              </div>
              <div className="font-semibold text-base">
                Capital: <span className="font-normal">Brussels</span>
              </div>
            </div>
            <div className="grid gap-y-2">
              <div className="font-semibold text-base">
                Top Level Domain: <span className="font-normal">.be</span>
              </div>
              <div className="font-semibold text-base">
                Currencies: <span className="font-normal">Euro</span>
              </div>
              <div className="font-semibold text-base">
                Languages:{" "}
                <span className="font-normal">Dutch, French, German</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-16 xl:flex-row xl:items-center">
            <div className="font-semibold text-base">Border Countries:</div>
            <div className="font-normal text-base flex gap-2.5 items-center">
              <Link href="/countries/1">
                <div
                  className={`"bg-white shadow-[0_0_4_1px_#0000001B] border-2 px-7 py-1 rounded-md overflow-hidden" ${
                    mode ? "header_dark-mode border-none" : ""
                  }`}
                >
                  France
                </div>
              </Link>
              <Link href="/countries/2">
                <div
                  className={`"bg-white shadow-[0_0_4_1px_#0000001B] border-2 px-7 py-1 rounded-md overflow-hidden" ${
                    mode ? "header_dark-mode border-none" : ""
                  }`}
                >
                  Germany
                </div>
              </Link>
              <Link href="/countries/3">
                <div
                  className={`"bg-white shadow-[0_0_4_1px_#0000001B] border-2 px-7 py-1 rounded-md overflow-hidden" ${
                    mode ? "header_dark-mode border-none" : ""
                  }`}
                >
                  Netherlands
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
