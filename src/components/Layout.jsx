import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { HeaderTop } from "./header-top";
import { HeaderCenter } from "./header-center";

const Layout = () => {
  return (
      <div className="flex flex-col min-h-screen">
        <div className="border-b border-gray-300">
          <HeaderTop />
        </div>
        <div>
          <HeaderCenter />
        </div>
        <header className="bg-[#333]">
          <Header />
        </header>
        <main className="flex-1">
          <Outlet />
        </main>
        <>
          <Footer />
        </>
      </div>
  );
};

export default Layout;
