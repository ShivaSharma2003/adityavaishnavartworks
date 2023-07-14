import React from "react";
import { FaInstagram } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="w-full flex flex-row text-white justify-between items-center text-center border-b-2 border-white/25 pb-4">
      <div className="cursor-pointer font-bold ">AadityaVaishanvArtsWorks</div>
      <a href="http://instagram.com">
        <FaInstagram fontSize={"30px"}></FaInstagram>
      </a>
    </div>
  );
}

export default Navbar;
