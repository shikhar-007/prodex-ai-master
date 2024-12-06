import Footer from "@/components/LayoutComponents/Footer";
import Header from "@/components/LayoutComponents/Header";
import React from "react";

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-authBackground">
      <div className="flex flex-col max-w-[1440px] xl:ml-auto xl:mr-auto min-h-screen">
        <div className="flex-grow p-5 font-noto">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default AuthLayout;
