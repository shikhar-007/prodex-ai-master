import AppLayout from "@/layouts/AppLayout";
import React, { useRef } from "react";
import Attachment from "../../../public/svg/Attachment";
import PlaneSend from "../../../public/svg/PlaneSend";
import { MdOutlineAttachFile } from "react-icons/md";
import { HiPaperAirplane } from "react-icons/hi2";

function Home() {
  const fileInputRef = useRef(null);

  const handleAttachmentClick = () => {
    fileInputRef.current.click();
  };

  const suggestions = [
    {
      suggest: "What’s the latest Bitcoin price?",
    },
    {
      suggest: "Show me the top 10 cryptocurrencies today.",
    },
    {
      suggest: "Show me the top 10 cryptocurrencies today.",
    },
    {
      suggest: "Show me the top 10 cryptocurrencies today.",
    },
  ];
  return (
    <AppLayout>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center w-full md:w-[650px] space-y-5">
          <h1 className="text-2xl md:text-5xl text-white font-parsi font-[700]">
            Good morning <span className="text-[#25B1F2]">Alexa</span> !!
          </h1>
          <p className="text-white/60 text-sm md:text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Nam ac consectetur mauris
            non. Odio accumsan egestas pellentesque aliquam proin. Facilisis
            semper ante massa facilisis vel. Cras lorem leo tempus sagittis
            tellus fermentum feugiat orci.
          </p>
        </div>
        <div className="flex items-center justify-between w-full md:w-[745px] px-5 gap-5 rounded py-1 my-5 bg-inputBg input-border">
          <div className="flex items-center gap-2 w-full">
            <MdOutlineAttachFile
              onClick={handleAttachmentClick}
              className="text-white text-2xl rotate-45 cursor-pointer"
            />
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={(e) => {
                // Handle the file selection here
                const file = e.target.files[0];
                console.log(file);
              }}
            />
            <textarea
              type="text"
              placeholder="Message OLYMPUS AI"
              className="w-full h-[20px] outline-none text-white/70 bg-transparent text-sm resize-none"
            />
          </div>
          <HiPaperAirplane className="text-2xl cursor-pointer text-[#25B1F2]" />
        </div>
        <div className="w-full md:w-[745px] space-y-5 text-center md:text-start">
          <h1 className="text-xl md:text-[32px] text-white font-[700] font-parsi">
            Suggestions
          </h1>
          <p className="text-white/60 text-xs md:text-sm w-full md:w-[655px]">
            Lorem ipsum dolor sit amet consectetur. Nam ac consectetur mauris
            non. Odio accumsan egestas pellentesque aliquam proin. Facilisis
            semper ante massa facilisis vel. Cras lorem leo tempus sagittis
            tellus fermentum feugiat orci.
          </p>
          <div className="flex flex-wrap md:justify-start justify-center gap-4 w-full">
            {suggestions.map((val, i) => (
              <div
                key={i}
                className="border border-white/10 px-4 py-2 rounded-full bg-[#0f1b2d] w-fit text-xs md:text-sm text-white"
              >
                <span>{val?.suggest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Home;
