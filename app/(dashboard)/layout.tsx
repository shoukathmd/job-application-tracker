import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { PropsWithChildren } from "react";

import React from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="grid lg:grid-cols-5">
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen col-span-1">
        <Sidebar />
      </div>
      <div className="lg:col-span-4">
        <Navbar></Navbar>
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </div>
    </main>
  );
};

export default layout;
