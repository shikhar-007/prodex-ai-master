import React from "react";
import { IoIosAdd } from "react-icons/io";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import ShowHistory from "../ShowHistory";
import SettingIcon from "../../../public/svg/SettingIcon";
import LogoutIcon from "../../../public/svg/LogoutIcon";

function SideBar() {
  const history = [
    {
      history: "How do I start investing",
    },
    {
      history: "How do I start investing",
    },
    {
      history: "How do I start investing",
    },
  ];
  return (
    <div className="w-full h-full bg-sidebarBg flex flex-col justify-between">
      <div className="space-y-4 p-4">
        <img src="/images/logo.png" />
        <button className="w-full flex items-center justify-center gap-2 py-1 text-white/60 bg-buttonBg rounded-md font-parsi">
          <IoIosAdd />
          New chat
        </button>
        <div className="flex items-center justify-between">
          <h1 className="text-white font-[700] font-parsi">Chat History</h1>
          <HiAdjustmentsHorizontal className="text-[#2B87F6] text-xl cursor-pointer" />
        </div>
        <div className="flex items-center justify-between px-5 rounded-lg py-1 my-5 bg-inputBg input-border">
          <div className="flex items-center gap-2 w-full">
            <IoSearchOutline className="text-white" />
            <input
              type="text"
              placeholder="Search History"
              className="w-full h-full py-1 outline-none text-white/70 bg-transparent text-xs"
            />
          </div>
        </div>
        <div>
          <h1 className="text-white text-xs font-[700]">Today</h1>
          <div className="py-3 flex flex-col gap-3">
            {history.map((val) => (
              <ShowHistory val={val} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[url('/images/sidebarFooterBg.png')] font-parsi h-60 bg-cover bg-blend-darken flex flex-col justify-end items-center p-4 space-y-3 opacity-50">
        <div className="text-white flex gap-2 cursor-pointer w-fit">
          <SettingIcon /> Settings
        </div>
        <button className="flex items-center justify-center w-full border border-[#3D3D3D] gap-2 rounded-md py-1 bg-[#072657] text-white opacity-90">
          <LogoutIcon /> logout
        </button>
      </div>
    </div>
  );
}

export default SideBar;
