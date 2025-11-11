import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import BottomPointer from "../assets/icons/bottom-pointer";
import Phone from "../assets/icons/phone";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-5 flex justify-between items-center">
      <div className="flex gap-7">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white flex gap-2 items-center"
              : "text-gray-400 flex gap-2 items-center"
          }
          to="/"
        >
          <h1>Home</h1>
          <BottomPointer />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white flex gap-2 items-center"
              : "text-gray-400 flex gap-2 items-center"
          }
          to="shop"
        >
          <h1>shop</h1>
          <BottomPointer />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white flex gap-2 items-center"
              : "text-gray-400 flex gap-2 items-center"
          }
          to="pages"
        >
          <h1>Pages</h1>
          <BottomPointer />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white flex gap-2 items-center"
              : "text-gray-400 flex gap-2 items-center"
          }
          to="blog"
        >
          <h1>Blog</h1>
          <BottomPointer />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white flex gap-2 items-center"
              : "text-gray-400 flex gap-2 items-center"
          }
          to={"about-us"}
        >
          <h1>About Us</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white flex gap-2 items-center"
              : "text-gray-400 flex gap-2 items-center"
          }
          to={"contact-us"}
        >
          <h1>Contact Us</h1>
        </NavLink>
      </div>

      <div className="text-white flex gap-2 items-center">
        <Phone />
        <a href="tel:+998976006787">(97) 600-6787</a>
      </div>
    </div>
  );
};

export default Header;
