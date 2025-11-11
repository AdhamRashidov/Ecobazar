import React from "react";
import logo from "../assets/images/logo.svg";
import search from "../assets/icons/search.svg";
import heart from "../assets/icons/heart.svg";
import bag from "../assets/icons/bag.svg";
import Phone from "../assets/icons/phone";


export const HeaderCenter = () => {
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
      <div className="container mx-auto p-5 flex justify-between items-center">
        <div onClick={handleLogoClick}>
          <img src={logo} alt="logo" />
        </div>

        <div className="border border-gray-300 rounded-[5px]">
          <form className="flex items-center">
            <div className="flex relative">
              <img
                className="absolute top-[50%] -translate-y-1/2 left-3"
                src={search}
                alt="search"
              />
              <input
                className="w-[430px] h-11 outline-none px-[45px]"
                type="text"
                placeholder="Search"
              />
            </div>
            <div>
              <button
                className="text-white bg-[#009900] w-[98px] h-[45px] rounded-r-[5px]"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-between items-center gap-5">
          <img src={heart} alt="heart" />
          <span className="text-gray-300">|</span>
          <div className="relative ">
            <img src={bag} alt="bag" />
            <span
              className="absolute w-[18px] h-[18px] bg-green-700 rounded-full
					   text-white flex  justify-center items-center text-[13px]
					   top-0 right-0"
            >
              2
            </span>
          </div>
          <div>
            <p className="text-gray-500 text-[13px]">Shopping cart:</p>
            <h3 className="text-[18px]">$57.00</h3>
          </div>
        </div>
		  </div>
  );
};
