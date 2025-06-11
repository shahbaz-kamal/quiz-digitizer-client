import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <header className="w-full bg-base-100 shadow-sm">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;
