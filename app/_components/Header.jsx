import Image from "next/image";
import React from "react";
import logo from "/public/header_logo.png";

const Header = () => {
  return (
    <div>
      <Image
        width={205}
        height={205}
        src={logo}
        alt="Logo"
        className="mt-4 ml-4"
      />
    </div>
  );
};

export default Header;
