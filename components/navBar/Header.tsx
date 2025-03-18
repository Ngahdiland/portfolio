import Link from "@/node_modules/next/link";
import React from "react";
import Image from "@/node_modules/next/image";
import Profile from "../../public/assets/pro.png";
import "./style.css"

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-[40px]">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#000] flex flex-col w-[90%] ml-[5%]">
          <div className="toUP flex items-center gap-2 ">
            <p className="w-8 md:w-11 h-[2px] bg-[#000]"></p>
            <p className=" font-medium text-[40px] ">Hi There!</p>
          </div>
          <h1 className="prata-regular text-[70px] sm:py-3 leading-relaxed font-bold">
            I'M <span className="text-amber-500 ">NGAH DILAND</span>
          </h1>
          <p className="divOne prata-regular text-[30px] flex justify-center mb-5 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eaque qui, doloremque sint nemo sequireiciendis assumenda minima? Quam, corrupti?</p>
          <div className="flex items-center gap-2">
            <Link href="/about">
              <p className="font-semibold text-[30px] underline italic">
                MORE ABOUT ME.
              </p>
            </Link>
            <p className="w-8 md:w-11 h-[2px] bg-[#000000]"></p>
          </div>
        </div>
      </div>
      <Image src={Profile} className="w-full sm:w-1/2" alt="" />
    </div>
  );
};

export default Header;
