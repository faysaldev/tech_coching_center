import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" px-2 py-2 bg-white shadow border-b backdrop-blur-lg">
      {/* header wrapper */}
      <div className="flex items-center justify-between max-w-[95%] md:w-[90%] mx-auto">
        {/* header left logo */}
        <div className="cursor-pointer w-fit">
          {/* image  */}
          <Image
            src={
              "https://i.ibb.co/mNcnm3X/Whats-App-Image-2022-06-16-at-4-59-19-PM.jpg"
            }
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* right porsion */}
        <div className="flex items-center space-x-6">
          {/* single menu item */}
          <Link href={"/"}>
            <a className="text-lg font-light text-gray-700">Home</a>
          </Link>
          {/* coching rules */}
          <Link href={"/rules"}>
            <a className="text-lg font-light text-gray-700">Rules</a>
          </Link>
          {/* contact with us */}
          <Link href={"/contact-us"}>
            <a className="text-lg font-light text-gray-700">Contact Us</a>
          </Link>

          {/* login postion button */}
          <div>
            {/* login button */}
            <button className="px-5 py-3 bg-red-500 font-semibold hover:bg-red-700 text-white rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
