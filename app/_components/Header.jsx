"use client";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Image
        width={205}
        height={205}
        src={`https://apostille.mygov.bd/build/assets/myGov-Apostille-Logo-version-5.0-01-lBppngK5.png`}
        alt="Logo"
        className="mt-4 ml-4"
      />
    </div>
  );
};

export default Header;
