import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Image
        width={205}
        height={205}
        src="/header_logo.png"
        alt="Logo"
        className="mt-4 ml-4"
      />
      <h1 className="text-xl ml-2 text-gray-950 font-semibold mt-16">
        অ্যাপোস্টিল
      </h1>
    </div>
  );
};

export default Header;
