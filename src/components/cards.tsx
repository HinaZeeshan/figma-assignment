import React from "react";
import { Montserrat } from "next/font/google";
const montseerat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const Cards = () => {
  return (
    <div className="flex sm:flex-wrap w-[1322px] h-auto gap-6 justify-center items-center text-center ml-44 absolute bottom-2 left-2">
      <div className="p-6 w-[328px] sm:w-[280px] md:w-[328px] h-auto bg-[#ffffff] flex flex-col justify-between">
        <div className=" w-[70px] h-[76px] rounded-[10px] pt-[22px] pr-[19px] pb-[22px] pl-[19px] gap-[10px] bg-[#FFDCD1] "></div>
        <h3
          className={`mt-4 text-left ${montseerat.className} text-[#252B42] w-[135px] h-[24px] font-bold text-[16px] leading-4 `}>
          training Courses
        </h3>
        <div className="mt-10 w-[50px] h-[2px] bg-[#E74040]"></div>
        <p
          className={`${montseerat.className}  mt-4 justify-center w-[222px] h-[60px] font-normal text-[14px] leading-5 tracking-[0.2px] text-[#737373] `}
        >
          The gradual accumulation of information about atomic and small-scale
          behaviour...
        </p>
      </div>

      {/* ....2nd div.... */}
      <div className="p-6 w-[328px] sm:w-[280px] md:w-[328px] h-auto bg-[#ffffff] flex flex-col justify-between">
        <div className="w-[70px] h-[76px] rounded-[10px] pt-[22px] pr-[19px] pb-[22px] pl-[19px] gap-[10px] bg-[#B9EAA8] "></div>
        <h3
          className={`mt-4 text-left ${montseerat.className} text-[#252B42] w-[135px] h-[24px] font-bold text-[16px] leading-6    `}
        >
          2,769 online courses
        </h3>
        <div className="mt-10 w-[50px] h-[2px] bg-[#E74040]"></div>
        <p
          className={`${montseerat.className} mt-4 w-[222px] h-[60px] font-normal text-[14px] leading-5 tracking-[0.2px] text-[#737373] `}
        >
          The gradual accumulation of information about atomic and small-scale
          behaviour...
        </p>
      </div>
      {/* ///// 3rd div ..... */}
      <div className="p-6 w-[328px] bg-[#23A6F0] sm:w-[280px] md:w-[328px] h-auto flex flex-col">
        <div className="w-[70px] h-[76px] rounded-[10px] pt-[22px] pr-[19px] pb-[22px] pl-[19px] gap-[10px] bg-[#FFFFFF] "></div>
        <h3
          className={`mt-4  text-left ${montseerat.className} text-[#FFFFFF] w-[135px] h-[24px] font-bold text-[16px] leading-6    `}
        >
          training courses
        </h3>
        <div className="mt-10 w-[50px] h-[2px] bg-[#FFFFFF]"></div>
        <p
          className={`${montseerat.className} mt-4 w-[222px] h-[60px] font-normal text-[14px] leading-5 tracking-[0.2px] text-[#FFFFFF] `}
        >
          The gradual accumulation of information about atomic and small-scale
          behaviour...
        </p>
      </div>
    </div>
  );
};

export default Cards;


