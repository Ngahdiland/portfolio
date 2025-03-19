import React from "react";
import "./style.css";
import one from "../../../public/assets/one-inter.png";
import two from "../../../public/assets/web-assignment.png";
import three from "../../../public/assets/grid.png";
import four from "../../../public/assets/web.png";
import five from "../../../public/assets/forever.png";
import six from "../../../public/assets/ig.png";
import seven from "../../../public/assets/beer.png";
import eight from "../../../public/assets/data.png";
import nine from "../../../public/assets/data-2.png";
import ten from "../../../public/assets/data-3.png";
import eleven from "../../../public/assets/data-4.png";
import twelve from "../../../public/assets/facebook.png";
import Image from "@/node_modules/next/image";

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-9 w-3/4 mt-[80px] mx-[50px]">
      <div className=" about flex h-[160px] border-2 border-gray-900  justify-center items-center ">
        <h1 className="text-9xl font-bold">PORTFOLIO</h1>
      </div>
      <div className=" flex flex-col gap-4">
        <h2 className="  text-2xl font-bold">
          MY <span className="text-amber-500 ">PROJECTS</span>
        </h2>
        <div className="flex gap-4 tosend">
          <div className="w-1/4 tothere">
            <a
              href="https://github.com/Ngahdiland/one-next-inter.git"
              className=""
            >
              <Image src={one} alt="" />
            </a>
          </div>
          <div className="w-1/4 tothere">
            <a
              href="https://github.com/Ngahdiland/second-year-ass.git"
              className=""
            >
              <Image src={two} alt="" />
            </a>
          </div>
          <div className="w-1/4 tothere">
            <a href="https://github.com/Ngahdiland/grid-temp.git" className="">
              <Image src={three} alt="" />
            </a>
          </div>
          <div className="w-1/4 tothere">
            <a
              href="https://github.com/Ngahdiland/school-work.git"
              className=""
            >
              <Image src={four} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-4 tosend">
        <div className="w-1/4 tothere">
          <a href="https://github.com/Ngahdiland/forever-ecom.git" className="">
            <Image src={five} alt="" />
          </a>
        </div>
        <div className="w-1/4 tothere">
          <a
            href="https://github.com/Ngahdiland/instagram-profile.git"
            className=""
          >
            <Image src={six} alt="" />
          </a>
        </div>
        <div className="w-1/4 tothere">
          <a href="https://github.com/Ngahdiland/gui-tkinter.git" className="">
            <Image src={seven} alt="" />
          </a>
        </div>
        <div className="w-1/4 tothere">
          <a
            href="https://github.com/Ngahdiland/data-analysis.git"
            className=""
          >
            <Image src={eight} alt="" />
          </a>
        </div>
      </div>
      <div className="flex gap-4 mb-[30px] tosend">
        <div className="w-1/4 tothere">
          <a
            href="https://github.com/Ngahdiland/data-analysis.git"
            className=""
          >
            <Image src={nine} alt="" />
          </a>
        </div>
        <div className="w-1/4 tothere">
          <a
            href="https://github.com/Ngahdiland/data-analysis.git"
            className=""
          >
            <Image src={ten} alt="" />
          </a>
        </div>
        <div className="w-1/4 tothere">
          <a
            href="https://github.com/Ngahdiland/data-analysis.git"
            className=""
          >
            <Image src={eleven} alt="" />
          </a>
        </div>
        <div className="w-1/4 tothere">
          <a
            href="https://github.com/Ngahdiland/facebook-profile.git"
            className=""
          >
            <Image src={twelve} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
