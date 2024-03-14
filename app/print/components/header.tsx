import React from "react";
import fullLogoIcon from "@/public/OreoLogoFull.svg";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div></div>
        <div>
          <Image
            src={fullLogoIcon}
            alt=""
            className={`transition duration-800 ease-linear max-w-[50%] `}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
