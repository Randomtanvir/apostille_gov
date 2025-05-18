import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Image
        width={205}
        height={205}
        src={process.env.NEXT_PUBLIC_IMAGE_URL + "/header_logo.png"}
        alt="Logo"
        className="mt-4 ml-4"
      />
    </div>
  );
};

export default Header;
