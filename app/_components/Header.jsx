import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Image
        width={205}
        height={205}
        src="https://res.cloudinary.com/dlz30x9zm/image/upload/v1747560716/QRcode/qku1qrnkbnuzfbgaip3u.png"
        alt="Logo"
        className="mt-4 ml-4"
      />
    </div>
  );
};

export default Header;
