"use client";
import Link from "next/link";
import React from "react";
import darkModeIcon from "@/assets/icons/dark-mode.svg";
import Image from "next/image";
import { PageContext } from "@/app/layout";

export const Header = () => {
  const { mode, setMode } = React.useContext(PageContext);

  const handleButton = () => {
    if (!mode) {
      setMode(true);
    } else setMode(false);
  };
  return (
    <div
      className={`bg-white shadow-[0_2px_4px_0_#0000000e] ${
        mode ? "header_dark-mode" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center w-100 sm:px-10 px-4 py-6">
        <Link href="/">
          <h1 className="font-extrabold text-2xl">Where in the world?</h1>
        </Link>
        <div className="flex items-center gap-10">
          <Link href="/countries">Countries</Link>
          <button className="flex items-center gap-2.5" onClick={handleButton}>
            <Image src={darkModeIcon} alt="Dark mode icon" /> Dark Mode
          </button>
        </div>
      </div>
    </div>
  );
};
