import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import bag from "../assets/bag.svg";

const Header = () => {
  return (
    <div className="container mx-auto h-full w-full flex items-center justify-between px-4">
      <Link to="/" className="flex gap-x-1 text-lg font-semibold tracking-wide">
        <img src={logo} alt="" className="w-7 h-7" />
        <span>Store</span>
      </Link>
      <Link to="cart" className="relative">
        <img src={bag} alt="" className="w-7 h-7" />
        <div className="bg-black text-white grid place-items-center rounded-full absolute -top-2 -right-2 w-5 h-5 text-[10px]">
          0
        </div>
      </Link>
    </div>
  );
};

export default Header;
