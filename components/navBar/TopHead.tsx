// import React, { useState } from "react";
import Image from "@/node_modules/next/image";
import home from "../../public/assets/home-outline.svg";
import person from "../../public/assets/person-outline.svg";
import portfolio from "../../public/assets/globe-outline.svg";
import resume from "../../public/assets/folder-open-outline.svg";
import contact from "../../public/assets/chatbubble-outline.svg";
import Link from "@/node_modules/next/link";

const TopHead = () => {
  // const [active, setActive] = useState("");
  return (
    <div className="flex items-center justify-center mx-auto my-auto">
      <div className="flex shadow-xl shadow-gray-900 justify-center mx-auto top-[10px] rounded-3xl bg-amber-500 h-[50px] p-4 fixed w-[300px]">
        <div className="flex items-center justify-between gap-1 mt-[-16px] fixed ">
          <Link
            href="/"
            className="w-[50px] h-[50px] rounded-3xl hover:bg-gray-500 flex justify-center mt-0"
          >
            <Image src={home} className="w-[30px]" alt="" />
          </Link>
          <Link
            href="/about"
            className="w-[50px] h-[50px] rounded-3xl hover:bg-gray-500 flex justify-center mt-0"
          >
            <Image src={person} className="w-[30px]" alt="" />
          </Link>
          <Link
            href="/resume"
            className="w-[50px] h-[50px] rounded-3xl hover:bg-gray-500 flex justify-center mt-0"
          >
            <Image src={portfolio} className="w-[30px]" alt="" />
          </Link>
          <Link
            href="/portfolio"
            className="w-[50px] h-[50px] rounded-3xl hover:bg-gray-500 flex justify-center mt-0"
          >
            <Image src={resume} className="w-[30px]" alt="" />
          </Link>
          <Link
            href="/contact"
            className="w-[50px] h-[50px] rounded-3xl hover:bg-gray-500 flex justify-center mt-0"
          >
            <Image src={contact} className="w-[30px]" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHead;
